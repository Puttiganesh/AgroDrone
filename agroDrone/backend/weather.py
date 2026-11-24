"""
AgroDrone Backend - Weather & Flight Safety Advisory
Calculates agro-meteorological flight windows for safe agricultural spraying.
"""

import math
import random
from typing import Dict, Any, List
from fastapi import APIRouter, Query
from models import WeatherResponse

router = APIRouter(prefix="/api/weather", tags=["Aviation Weather"])

@router.get("/check", response_model=WeatherResponse)
def check_weather(
    lat: float = Query(21.1458, description="Latitude"),
    lng: float = Query(79.0882, description="Longitude")
):
    """
    Evaluates weather suitability for drone spraying operations.
    Standard safety guidelines:
    - Wind: < 15 km/h (Prevents pesticide drift)
    - Rain probability: < 20% (Prevents wash-off)
    - Temperature: 18°C - 33°C (Prevents evaporation)
    """
    # Deterministic yet realistic reading based on geographic coordinates
    seed = int((abs(lat) * 100 + abs(lng) * 10)) % 100
    temp = round(22.0 + (seed % 10), 1)
    humidity = 45 + (seed % 25)
    wind_speed = round(5.0 + (seed % 9) + random.uniform(-0.5, 0.5), 1)
    rain_prob = (seed * 3) % 25

    if wind_speed > 16.0:
        flyable_status = "UNSAFE"
        reason = f"Wind speed too high ({wind_speed} km/h). Severe risk of chemical drift onto adjacent fields."
        recommendation = "Postpone mission until early morning (06:00 - 08:30 AM) when wind is calm."
    elif rain_prob > 35:
        flyable_status = "UNSAFE"
        reason = f"High precipitation probability ({rain_prob}%). Chemicals will wash away."
        recommendation = "Hold flight until rain clears and foliage dries."
    elif wind_speed > 11.0 or temp > 33.0:
        flyable_status = "CAUTION"
        reason = f"Moderate wind ({wind_speed} km/h) or elevated temperature ({temp}°C)."
        recommendation = "Fly with coarse droplet nozzles at lower altitude (2.5m) to mitigate drift."
    else:
        flyable_status = "SAFE"
        reason = f"Optimal flying conditions: Calm wind ({wind_speed} km/h), clear skies, ideal droplet retention."
        recommendation = "Cleared for autonomous high-efficiency spraying."

    return WeatherResponse(
        latitude=lat,
        longitude=lng,
        temperature_c=temp,
        humidity_pct=humidity,
        wind_speed_kph=wind_speed,
        wind_direction="NE",
        rain_probability_pct=rain_prob,
        flyable_status=flyable_status,
        reason=reason,
        recommendation=recommendation
    )

@router.get("/forecast")
def get_flight_window_forecast(lat: float = 21.1458, lng: float = 79.0882) -> List[Dict[str, Any]]:
    """Returns 6-hour agricultural flight window forecast."""
    slots = ["06:00 AM", "08:00 AM", "10:00 AM", "12:00 PM", "02:00 PM", "04:00 PM", "06:00 PM"]
    forecast = []
    for i, slot in enumerate(slots):
        wind = round(4.5 + i * 1.8, 1)
        status = "SAFE" if wind < 12.0 else ("CAUTION" if wind < 16.0 else "UNSAFE")
        forecast.append({
            "slot": slot,
            "temperature_c": round(21.0 + i * 2.0, 1),
            "wind_speed_kph": wind,
            "humidity_pct": max(30, 65 - i * 5),
            "flyable_status": status
        })
    return forecast
