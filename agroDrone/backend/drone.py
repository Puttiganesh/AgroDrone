"""
AgroDrone Backend - Drone Fleet & Telemetry Management
"""

import math
import time
from typing import List, Optional
from fastapi import APIRouter, HTTPException, Query
from database import get_db
from models import DroneCreate, DroneOut, TelemetryPayload

router = APIRouter(prefix="/api/drones", tags=["Drone Fleet"])

RATE_PER_LITER = 2.5 # standard spray flow liters per minute

@router.get("", response_model=List[DroneOut])
def list_drones(status: Optional[str] = None):
    with get_db() as conn:
        if status:
            rows = conn.execute("SELECT * FROM drones WHERE status = ?", (status,)).fetchall()
        else:
            rows = conn.execute("SELECT * FROM drones ORDER BY id ASC").fetchall()
        return [DroneOut(**dict(r)) for r in rows]

@router.get("/{drone_id}", response_model=DroneOut)
def get_drone(drone_id: int):
    with get_db() as conn:
        row = conn.execute("SELECT * FROM drones WHERE id = ?", (drone_id,)).fetchone()
        if not row:
            raise HTTPException(status_code=404, detail="Drone not found")
        return DroneOut(**dict(row))

@router.post("", response_model=DroneOut)
def register_drone(drone: DroneCreate):
    with get_db() as conn:
        cursor = conn.execute(
            """INSERT INTO drones 
               (drone_model, serial_number, payload_capacity_liters, battery_level, status, current_latitude, current_longitude, operator_id, spray_tank_liters)
               VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)""",
            (drone.drone_model, drone.serial_number, drone.payload_capacity_liters, drone.battery_level, 
             drone.status, drone.current_latitude, drone.current_longitude, drone.operator_id, drone.payload_capacity_liters)
        )
        new_id = cursor.lastrowid
        row = conn.execute("SELECT * FROM drones WHERE id = ?", (new_id,)).fetchone()
        return DroneOut(**dict(row))

@router.patch("/{drone_id}/status")
def update_status(drone_id: int, status: str = Query(..., pattern="^(idle|in_mission|charging|maintenance|offline)$")):
    with get_db() as conn:
        conn.execute("UPDATE drones SET status = ? WHERE id = ?", (status, drone_id))
        return {"status": "success", "drone_id": drone_id, "new_status": status}

@router.post("/{drone_id}/telemetry")
def log_telemetry(drone_id: int, payload: TelemetryPayload):
    with get_db() as conn:
        # 1. Update live drone coordinates and telemetry state
        conn.execute(
            """UPDATE drones 
               SET current_latitude = ?, current_longitude = ?, altitude_meters = ?, speed_kmh = ?, 
                   battery_level = ?, spray_tank_liters = ?
               WHERE id = ?""",
            (payload.latitude, payload.longitude, payload.altitude_m, payload.speed_kmh,
             payload.battery_pct, payload.tank_remaining_pct * 0.4, drone_id)
        )
        
        # 2. Append to telemetry_logs
        conn.execute(
            """INSERT INTO telemetry_logs 
               (booking_id, drone_id, latitude, longitude, altitude_m, speed_kmh, battery_pct, tank_remaining_pct, spray_rate_lpm, wind_speed_kph, gps_signal_strength)
               VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)""",
            (payload.booking_id, drone_id, payload.latitude, payload.longitude, payload.altitude_m,
             payload.speed_kmh, payload.battery_pct, payload.tank_remaining_pct, payload.spray_rate_lpm,
             payload.wind_speed_kph, payload.gps_signal_strength)
        )
        return {"status": "logged", "timestamp": time.time()}

@router.get("/{drone_id}/simulation-step")
def simulate_flight_telemetry(drone_id: int, step: int = 0):
    """
    Returns calculated next waypoint in a simulated autonomous agricultural grid sweep.
    Generates realistic sensor numbers (GPS jitter, battery burn, fluid consumption).
    """
    with get_db() as conn:
        drone = conn.execute("SELECT * FROM drones WHERE id = ?", (drone_id,)).fetchone()
        if not drone:
            raise HTTPException(status_code=404, detail="Drone not found")
        
        base_lat = drone["current_latitude"] or 21.1458
        base_lng = drone["current_longitude"] or 79.0882
        
        # Grid lawnmower path algorithm
        col = (step // 6)
        row = (step % 6)
        direction = 1 if (col % 2 == 0) else -1
        
        delta_lat = (col * 0.00035)
        delta_lng = (row * 0.00045 * direction)
        
        sim_lat = round(base_lat + delta_lat, 6)
        sim_lng = round(base_lng + delta_lng, 6)
        
        battery_pct = max(15, int(100 - (step * 0.75)))
        tank_pct = max(5, int(100 - (step * 1.5)))
        speed_kmh = 16.5 + round(math.sin(step) * 1.5, 1)
        altitude = 3.2 + round(math.cos(step) * 0.3, 1)
        spray_flow = 3.2 if tank_pct > 5 else 0.0
        
        # Update drone state
        conn.execute(
            """UPDATE drones 
               SET current_latitude = ?, current_longitude = ?, altitude_meters = ?, speed_kmh = ?, 
                   battery_level = ?, spray_tank_liters = ?
               WHERE id = ?""",
            (sim_lat, sim_lng, altitude, speed_kmh, battery_pct, round(tank_pct * 0.4, 1), drone_id)
        )
        
        return {
            "drone_id": drone_id,
            "drone_model": drone["drone_model"],
            "serial_number": drone["serial_number"],
            "step": step,
            "latitude": sim_lat,
            "longitude": sim_lng,
            "altitude_m": altitude,
            "speed_kmh": speed_kmh,
            "battery_pct": battery_pct,
            "tank_remaining_pct": tank_pct,
            "spray_rate_lpm": spray_flow,
            "wind_speed_kph": 6.4,
            "gps_satellites": 18,
            "signal_rssi_dbm": -42,
            "is_spraying": tank_pct > 5 and altitude > 1.0,
            "status": "in_mission" if tank_pct > 5 else "returning_to_home"
        }
