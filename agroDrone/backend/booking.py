"""
AgroDrone Backend - Booking, Farm & Mission Dispatch Management
"""

from typing import List, Optional
from fastapi import APIRouter, HTTPException, Query
from database import get_db
from models import (
    BookingCreate, BookingOut, BookingStatusUpdate, BookingAssign,
    PriceEstimateRequest, PriceEstimateResponse, FarmCreate, FarmOut
)

router = APIRouter(prefix="/api/bookings", tags=["Bookings & Dispatch"])
farm_router = APIRouter(prefix="/api/farms", tags=["Farms"])

RATES_PER_ACRE = {
    "pesticide_spraying": 300.0,
    "liquid_fertilizer": 300.0,
    "ai_crop_scouting": 200.0,
    "thermal_imaging": 250.0,
    "seeding": 350.0
}

# ----------------- Price Calculator -----------------
@router.post("/estimate", response_model=PriceEstimateResponse)
def estimate_cost(req: PriceEstimateRequest):
    rate = RATES_PER_ACRE.get(req.service_type, 300.0)
    total = round(rate * req.area_acres, 2)
    minutes = int(req.area_acres * 9) # average 9 mins per acre
    liters = round(req.area_acres * 10, 1) # ~10 liters chemical solution / acre
    return PriceEstimateResponse(
        service_type=req.service_type,
        area_acres=req.area_acres,
        base_rate_per_acre=rate,
        total_cost=total,
        estimated_duration_minutes=minutes,
        spray_volume_liters=liters
    )

# ----------------- Bookings Endpoints -----------------
@router.get("", response_model=List[BookingOut])
def list_bookings(
    farmer_id: Optional[int] = None,
    operator_id: Optional[int] = None,
    status: Optional[str] = None
):
    with get_db() as conn:
        query = """
            SELECT b.*, 
                   u.full_name AS farmer_name, u.phone AS farmer_phone,
                   f.farm_name AS farm_name,
                   d.drone_model AS drone_model,
                   p.full_name AS operator_name
            FROM bookings b
            JOIN users u ON b.farmer_id = u.id
            JOIN farms f ON b.farm_id = f.id
            LEFT JOIN drones d ON b.drone_id = d.id
            LEFT JOIN users p ON b.operator_id = p.id
            WHERE 1=1
        """
        params = []
        if farmer_id:
            query += " AND b.farmer_id = ?"
            params.append(farmer_id)
        if operator_id:
            query += " AND b.operator_id = ?"
            params.append(operator_id)
        if status:
            query += " AND b.mission_status = ?"
            params.append(status)
            
        query += " ORDER BY b.id DESC"
        rows = conn.execute(query, params).fetchall()
        return [BookingOut(**dict(r)) for r in rows]

@router.get("/{booking_id}", response_model=BookingOut)
def get_booking(booking_id: int):
    with get_db() as conn:
        row = conn.execute("""
            SELECT b.*, 
                   u.full_name AS farmer_name, u.phone AS farmer_phone,
                   f.farm_name AS farm_name,
                   d.drone_model AS drone_model,
                   p.full_name AS operator_name
            FROM bookings b
            JOIN users u ON b.farmer_id = u.id
            JOIN farms f ON b.farm_id = f.id
            LEFT JOIN drones d ON b.drone_id = d.id
            LEFT JOIN users p ON b.operator_id = p.id
            WHERE b.id = ?
        """, (booking_id,)).fetchone()
        if not row:
            raise HTTPException(status_code=404, detail="Booking not found")
        return BookingOut(**dict(row))

@router.post("", response_model=BookingOut)
def create_booking(data: BookingCreate):
    rate = RATES_PER_ACRE.get(data.service_type, 300.0)
    total_cost = round(rate * data.area_acres, 2)
    
    with get_db() as conn:
        cursor = conn.execute("""
            INSERT INTO bookings (
                farmer_id, farm_id, service_type, target_crop, chemical_formula,
                dosage_rate, area_acres, scheduled_date, scheduled_slot,
                total_cost, payment_status, mission_status, notes
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'unpaid', 'pending', ?)
        """, (
            data.farmer_id, data.farm_id, data.service_type, data.target_crop,
            data.chemical_formula, data.dosage_rate, data.area_acres,
            data.scheduled_date, data.scheduled_slot, total_cost, data.notes
        ))
        new_id = cursor.lastrowid
        
        # Fetch newly created with joined data
        row = conn.execute("""
            SELECT b.*, 
                   u.full_name AS farmer_name, u.phone AS farmer_phone,
                   f.farm_name AS farm_name,
                   NULL AS drone_model, NULL AS operator_name
            FROM bookings b
            JOIN users u ON b.farmer_id = u.id
            JOIN farms f ON b.farm_id = f.id
            WHERE b.id = ?
        """, (new_id,)).fetchone()
        return BookingOut(**dict(row))

@router.patch("/{booking_id}/assign")
def assign_mission(booking_id: int, assign_data: BookingAssign):
    with get_db() as conn:
        conn.execute("""
            UPDATE bookings 
            SET drone_id = ?, operator_id = ?, mission_status = 'assigned'
            WHERE id = ?
        """, (assign_data.drone_id, assign_data.operator_id, booking_id))
        
        # Also assign drone to that operator and change status
        conn.execute("""
            UPDATE drones 
            SET operator_id = ?, status = 'idle'
            WHERE id = ?
        """, (assign_data.operator_id, assign_data.drone_id))
        
        return {"status": "success", "message": f"Mission #{booking_id} assigned to Pilot #{assign_data.operator_id} with Drone #{assign_data.drone_id}."}

@router.patch("/{booking_id}/status")
def update_booking_status(booking_id: int, update: BookingStatusUpdate):
    with get_db() as conn:
        conn.execute("UPDATE bookings SET mission_status = ? WHERE id = ?", (update.mission_status, booking_id))
        
        # If in_progress, update assigned drone to in_mission
        if update.mission_status == "in_progress":
            b = conn.execute("SELECT drone_id FROM bookings WHERE id = ?", (booking_id,)).fetchone()
            if b and b["drone_id"]:
                conn.execute("UPDATE drones SET status = 'in_mission' WHERE id = ?", (b["drone_id"],))
        elif update.mission_status == "completed":
            b = conn.execute("SELECT drone_id FROM bookings WHERE id = ?", (booking_id,)).fetchone()
            if b and b["drone_id"]:
                conn.execute("UPDATE drones SET status = 'idle', spray_tank_liters = 0 WHERE id = ?", (b["drone_id"],))

        return {"status": "success", "booking_id": booking_id, "new_status": update.mission_status}

@router.delete("/{booking_id}")
def cancel_booking(booking_id: int):
    with get_db() as conn:
        conn.execute("UPDATE bookings SET mission_status = 'cancelled' WHERE id = ?", (booking_id,))
        return {"status": "cancelled", "booking_id": booking_id}

# ----------------- Farms Endpoints -----------------
@farm_router.get("", response_model=List[FarmOut])
def list_farms(farmer_id: Optional[int] = None):
    with get_db() as conn:
        if farmer_id:
            rows = conn.execute("SELECT * FROM farms WHERE farmer_id = ? ORDER BY id DESC", (farmer_id,)).fetchall()
        else:
            rows = conn.execute("SELECT * FROM farms ORDER BY id DESC").fetchall()
        return [FarmOut(**dict(r)) for r in rows]

@farm_router.post("", response_model=FarmOut)
def add_farm(farmer_id: int, farm: FarmCreate):
    with get_db() as conn:
        cursor = conn.execute("""
            INSERT INTO farms (farmer_id, farm_name, crop_type, acreage, soil_type, latitude, longitude, polygon_boundary)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        """, (farmer_id, farm.farm_name, farm.crop_type, farm.acreage, farm.soil_type, farm.latitude, farm.longitude, farm.polygon_boundary))
        new_id = cursor.lastrowid
        row = conn.execute("SELECT * FROM farms WHERE id = ?", (new_id,)).fetchone()
        return FarmOut(**dict(row))
