"""
AgroDrone Backend - Payment Processing & Billing
Simulates instant digital farmer payments (UPI, Cards, Agricultural Subsidies).
"""

import time
import random
from fastapi import APIRouter, HTTPException
from database import get_db
from models import PaymentCreate, PaymentResponse

router = APIRouter(prefix="/api/payments", tags=["Payments & Invoicing"])

@router.post("/process", response_model=PaymentResponse)
def process_payment(req: PaymentCreate):
    """Processes payment for a booking and auto-approves mission dispatch."""
    with get_db() as conn:
        booking = conn.execute("SELECT * FROM bookings WHERE id = ?", (req.booking_id,)).fetchone()
        if not booking:
            raise HTTPException(status_code=404, detail="Booking not found")
        
        amount = booking["total_cost"]
        farmer_id = booking["farmer_id"]
        txn_id = f"TXN_AGRO_{int(time.time())}_{random.randint(1000, 9999)}"
        
        # 1. Record payment
        conn.execute("""
            INSERT INTO payments (booking_id, farmer_id, transaction_id, amount, payment_method, status)
            VALUES (?, ?, ?, ?, ?, 'success')
        """, (req.booking_id, farmer_id, txn_id, amount, req.payment_method))
        
        # 2. Update booking status
        conn.execute("""
            UPDATE bookings 
            SET payment_status = 'paid', mission_status = 'approved'
            WHERE id = ?
        """, (req.booking_id,))
        
        receipt_url = f"/api/payments/{req.booking_id}/receipt"

        return PaymentResponse(
            transaction_id=txn_id,
            booking_id=req.booking_id,
            amount=amount,
            currency="INR",
            status="success",
            payment_method=req.payment_method,
            receipt_url=receipt_url
        )

@router.get("/{booking_id}/invoice")
def get_invoice(booking_id: int):
    with get_db() as conn:
        row = conn.execute("""
            SELECT b.*, u.full_name as farmer_name, u.phone as farmer_phone,
                   p.transaction_id, p.payment_method, p.paid_at
            FROM bookings b
            JOIN users u ON b.farmer_id = u.id
            LEFT JOIN payments p ON b.id = p.booking_id
            WHERE b.id = ?
        """, (booking_id,)).fetchone()
        
        if not row:
            raise HTTPException(status_code=404, detail="Invoice not found")
            
        data = dict(row)
        gst = round(data["total_cost"] * 0.05, 2) # 5% agricultural service tax
        subtotal = round(data["total_cost"] - gst, 2)
        
        return {
            "invoice_number": f"INV-AGRO-2026-{booking_id:05d}",
            "booking_id": booking_id,
            "farmer": {
                "name": data["farmer_name"],
                "phone": data["farmer_phone"]
            },
            "service_description": f"Autonomous Drone Spraying - {data['target_crop']} ({data['area_acres']} Acres)",
            "scheduled_date": data["scheduled_date"],
            "subtotal": subtotal,
            "agricultural_gst_5pct": gst,
            "total_paid": data["total_cost"],
            "transaction_id": data["transaction_id"] or "PENDING",
            "payment_status": data["payment_status"],
            "payment_method": data["payment_method"] or "UPI",
            "issuer": "AgroDrone Agritech Solutions Ltd.",
            "dgca_clearance_code": "AGRO-DGCA-CLEAR-2026"
        }
