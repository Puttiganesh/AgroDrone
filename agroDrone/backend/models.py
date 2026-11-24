"""
AgroDrone Backend - Data Models and Validation Schemas
"""

from typing import Optional, List, Dict, Any
from pydantic import BaseModel, Field

# ----------------- Auth Models -----------------
class UserLogin(BaseModel):
    email: str
    password: str

class UserRegister(BaseModel):
    full_name: str
    email: str
    password: str
    phone: str
    role: str = Field(default="farmer", pattern="^(admin|operator|farmer)$")
    license_number: Optional[str] = None

class UserOut(BaseModel):
    id: int
    full_name: str
    email: str
    phone: str
    role: str
    license_number: Optional[str] = None

class TokenResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"
    user: UserOut

# ----------------- Farm Models -----------------
class FarmCreate(BaseModel):
    farm_name: str
    crop_type: str
    acreage: float
    soil_type: Optional[str] = "Alluvial Loam"
    latitude: float
    longitude: float
    polygon_boundary: Optional[str] = None

class FarmOut(BaseModel):
    id: int
    farmer_id: int
    farm_name: str
    crop_type: str
    acreage: float
    soil_type: Optional[str]
    latitude: float
    longitude: float
    polygon_boundary: Optional[str] = None
    created_at: Optional[str] = None

# ----------------- Drone Models -----------------
class DroneCreate(BaseModel):
    drone_model: str
    serial_number: str
    payload_capacity_liters: float
    battery_level: int = 100
    status: str = "idle"
    current_latitude: Optional[float] = 21.1458
    current_longitude: Optional[float] = 79.0882
    operator_id: Optional[int] = None

class DroneOut(BaseModel):
    id: int
    drone_model: str
    serial_number: str
    payload_capacity_liters: float
    battery_level: int
    status: str
    current_latitude: Optional[float]
    current_longitude: Optional[float]
    altitude_meters: Optional[float] = 0.0
    speed_kmh: Optional[float] = 0.0
    spray_tank_liters: Optional[float] = 0.0
    total_flight_hours: Optional[float] = 0.0
    operator_id: Optional[int] = None

class TelemetryPayload(BaseModel):
    booking_id: int
    drone_id: int
    latitude: float
    longitude: float
    altitude_m: float
    speed_kmh: float
    battery_pct: int
    tank_remaining_pct: int
    spray_rate_lpm: float
    wind_speed_kph: float = 5.0
    gps_signal_strength: int = 99

# ----------------- Booking Models -----------------
class BookingCreate(BaseModel):
    farmer_id: int
    farm_id: int
    service_type: str = Field(..., pattern="^(pesticide_spraying|liquid_fertilizer|ai_crop_scouting|thermal_imaging|seeding)$")
    target_crop: str
    chemical_formula: Optional[str] = None
    dosage_rate: Optional[str] = "150 ml/acre"
    area_acres: float
    scheduled_date: str # YYYY-MM-DD
    scheduled_slot: str # e.g. "06:30 - 08:30 AM"
    notes: Optional[str] = None

class BookingStatusUpdate(BaseModel):
    mission_status: str = Field(..., pattern="^(pending|approved|assigned|in_progress|completed|cancelled)$")

class BookingAssign(BaseModel):
    drone_id: int
    operator_id: int

class PriceEstimateRequest(BaseModel):
    service_type: str
    area_acres: float

class PriceEstimateResponse(BaseModel):
    service_type: str
    area_acres: float
    base_rate_per_acre: float
    total_cost: float
    estimated_duration_minutes: int
    spray_volume_liters: float

class BookingOut(BaseModel):
    id: int
    farmer_id: int
    farmer_name: Optional[str] = None
    farmer_phone: Optional[str] = None
    farm_id: int
    farm_name: Optional[str] = None
    drone_id: Optional[int] = None
    drone_model: Optional[str] = None
    operator_id: Optional[int] = None
    operator_name: Optional[str] = None
    service_type: str
    target_crop: str
    chemical_formula: Optional[str] = None
    dosage_rate: Optional[str] = None
    area_acres: float
    scheduled_date: str
    scheduled_slot: str
    total_cost: float
    payment_status: str
    mission_status: str
    notes: Optional[str] = None
    created_at: Optional[str] = None

# ----------------- Weather Models -----------------
class WeatherResponse(BaseModel):
    latitude: float
    longitude: float
    temperature_c: float
    humidity_pct: int
    wind_speed_kph: float
    wind_direction: str
    rain_probability_pct: int
    flyable_status: str  # SAFE, CAUTION, UNSAFE
    reason: str
    recommendation: str

# ----------------- AI Crop Models -----------------
class AIAnalyzeRequest(BaseModel):
    farm_id: int
    booking_id: Optional[int] = None
    image_url: Optional[str] = None
    crop_type: Optional[str] = "Cotton"

class AIAnalysisOut(BaseModel):
    id: Optional[int] = None
    farm_id: int
    crop_type: str
    ndvi_score: float
    health_classification: str
    chlorophyll_level: str
    pest_detected: bool
    pest_type: Optional[str] = None
    weed_infestation_pct: float
    canopy_coverage_pct: float
    recommendation: str
    spray_prescription: Dict[str, Any]
    heat_map_overlay_url: str
    analyzed_at: Optional[str] = None

# ----------------- Payment Models -----------------
class PaymentCreate(BaseModel):
    booking_id: int
    payment_method: str = "UPI"

class PaymentResponse(BaseModel):
    transaction_id: str
    booking_id: int
    amount: float
    currency: str = "INR"
    status: str
    payment_method: str
    receipt_url: str
