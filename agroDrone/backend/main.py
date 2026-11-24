"""
AgroDrone Backend - Central Application Server
FastAPI server connecting Farmers, Drone Pilots/Operators, and Admin Dispatchers.
"""

import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse, RedirectResponse

from database import init_db
from auth import router as auth_router
from drone import router as drone_router
from booking import router as booking_router, farm_router
from weather import router as weather_router
from ai_engine import router as ai_router
from payment import router as payment_router

app = FastAPI(
    title="AgroDrone API - Precision Agriculture Drone Fleet Management",
    description="Full-stack API powering Farmer Drone Bookings, Operator Mission Control, and Fleet Telemetry.",
    version="2.0.0"
)

# Enable CORS for web portals and mobile clients
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register API Routers
app.include_router(auth_router)
app.include_router(drone_router)
app.include_router(booking_router)
app.include_router(farm_router)
app.include_router(weather_router)
app.include_router(ai_router)
app.include_router(payment_router)

# Mount Admin Website Static Assets
ADMIN_WEB_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "admin_website"))

if os.path.exists(ADMIN_WEB_DIR):
    app.mount("/admin", StaticFiles(directory=ADMIN_WEB_DIR, html=True), name="admin_website")

@app.on_event("startup")
def on_startup():
    init_db()
    print("🚀 [AgroDrone] Backend Server is ready!")
    print("🌾 Admin Dashboard available at: http://localhost:8000/admin")
    print("📡 Swagger API Docs available at: http://localhost:8000/docs")

@app.get("/")
def root():
    return RedirectResponse(url="/admin")

@app.get("/api/health")
def health_check():
    return {
        "status": "healthy",
        "service": "AgroDrone Agritech Core",
        "version": "2.0.0",
        "features": [
            "Autonomous Grid Mission Dispatch",
            "Real-time Telemetry Simulation",
            "NDVI AI Crop Intelligence",
            "Aviation Weather Clearance",
            "Razorpay/UPI Payment Gateway"
        ]
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
