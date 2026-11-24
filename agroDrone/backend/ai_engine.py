"""
AgroDrone Backend - AI Crop Intelligence & Multispectral Engine
Simulates and executes drone multispectral image analysis, NDVI mapping,
pest/weed computer vision detection, and precision spray prescription.
"""

import random
from typing import Dict, Any, List
from fastapi import APIRouter, HTTPException
from database import get_db
from models import AIAnalyzeRequest, AIAnalysisOut

router = APIRouter(prefix="/api/ai", tags=["AI Crop Intelligence"])

PEST_DATABASE = {
    "Cotton": [
        {"name": "Pink Bollworm (Pectinophora gossypiella)", "chemical": "Chlorantraniliprole 18.5% SC", "dosage": "60 ml/acre"},
        {"name": "Whitefly (Bemisia tabaci)", "chemical": "Diafenthiuron 50% WP", "dosage": "240 g/acre"}
    ],
    "Wheat": [
        {"name": "Yellow Rust (Puccinia striiformis)", "chemical": "Propiconazole 25% EC", "dosage": "200 ml/acre"},
        {"name": "Aphid Infestation", "chemical": "Thiamethoxam 25% WG", "dosage": "40 g/acre"}
    ],
    "Basmati Rice": [
        {"name": "Bacterial Leaf Blight", "chemical": "Streptocycline + Copper Oxychloride", "dosage": "6g + 500g/acre"},
        {"name": "Stem Borer (Scirpophaga incertulas)", "chemical": "Cartap Hydrochloride 50% SP", "dosage": "400 g/acre"}
    ]
}

@router.post("/analyze-crop", response_model=AIAnalysisOut)
def analyze_crop_health(req: AIAnalyzeRequest):
    """
    Simulates high-resolution aerial multispectral vision pipeline:
    1. Orthomosaic generation
    2. NDVI (Normalized Difference Vegetation Index) calculation
    3. Deep learning pest / weed pattern recognition
    4. Prescription Variable Rate Application (VRA) map generation
    """
    crop = req.crop_type or "Cotton"
    
    # Calculate simulated NDVI between 0.58 and 0.88
    ndvi = round(0.68 + random.uniform(-0.12, 0.16), 3)
    
    if ndvi >= 0.75:
        health_classification = "Excellent Crop Vigor"
        chlorophyll = "High (Optimal Photosynthesis)"
        weed_pct = round(random.uniform(2.0, 5.5), 1)
        pest_detected = False
        pest_info = None
    elif ndvi >= 0.65:
        health_classification = "Moderate Health (Targeted Treatment Required)"
        chlorophyll = "Normal"
        weed_pct = round(random.uniform(5.0, 9.5), 1)
        pest_detected = True
        pest_candidates = PEST_DATABASE.get(crop, PEST_DATABASE["Cotton"])
        pest_info = pest_candidates[0]
    else:
        health_classification = "Vegetation Stress / Nutrient Deficit"
        chlorophyll = "Low (Chlorosis Detected)"
        weed_pct = round(random.uniform(10.0, 16.0), 1)
        pest_detected = True
        pest_candidates = PEST_DATABASE.get(crop, PEST_DATABASE["Cotton"])
        pest_info = pest_candidates[1] if len(pest_candidates) > 1 else pest_candidates[0]

    pest_name = pest_info["name"] if pest_info else None
    
    # Generate agronomic prescription
    if pest_detected and pest_info:
        recommendation = (
            f"Active outbreak detected: {pest_name}. "
            f"Prescription: Targeted variable-rate application of {pest_info['chemical']} "
            f"at {pest_info['dosage']}. Prioritize northern and eastern field perimeter."
        )
    else:
        recommendation = (
            "Canopy density is optimal. No active pest clustering detected. "
            "Recommend maintenance micronutrient booster (Nano Zinc / Urea) at low 1.8 L/min spray flow."
        )

    # 4-quadrant Variable Rate Application (VRA) spray map
    vra_prescription = {
        "zone_A_north": {"ndvi": round(ndvi + 0.05, 3), "spray_flow_lpm": 2.2, "status": "Normal"},
        "zone_B_east":  {"ndvi": round(ndvi - 0.08, 3), "spray_flow_lpm": 3.8, "status": "High Dosage Needed" if pest_detected else "Normal"},
        "zone_C_south": {"ndvi": round(ndvi + 0.02, 3), "spray_flow_lpm": 2.5, "status": "Normal"},
        "zone_D_west":  {"ndvi": round(ndvi - 0.04, 3), "spray_flow_lpm": 3.1, "status": "Medium Dosage"}
    }

    heatmap_url = f"https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=600&q=80"

    with get_db() as conn:
        cursor = conn.execute("""
            INSERT INTO ai_analyses (
                farm_id, booking_id, image_url, ndvi_score, chlorophyll_level,
                pest_detected, pest_type, weed_infestation_pct, canopy_coverage_pct,
                recommendation, heat_map_overlay_url
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        """, (
            req.farm_id, req.booking_id, req.image_url or heatmap_url, ndvi, chlorophyll,
            1 if pest_detected else 0, pest_name, weed_pct, round(ndvi * 100, 1),
            recommendation, heatmap_url
        ))
        analysis_id = cursor.lastrowid

    return AIAnalysisOut(
        id=analysis_id,
        farm_id=req.farm_id,
        crop_type=crop,
        ndvi_score=ndvi,
        health_classification=health_classification,
        chlorophyll_level=chlorophyll,
        pest_detected=pest_detected,
        pest_type=pest_name,
        weed_infestation_pct=weed_pct,
        canopy_coverage_pct=round(ndvi * 100, 1),
        recommendation=recommendation,
        spray_prescription=vra_prescription,
        heat_map_overlay_url=heatmap_url
    )

@router.get("/reports/{farm_id}", response_model=List[AIAnalysisOut])
def get_farm_ai_history(farm_id: int):
    with get_db() as conn:
        rows = conn.execute("""
            SELECT a.*, f.crop_type 
            FROM ai_analyses a
            JOIN farms f ON a.farm_id = f.id
            WHERE a.farm_id = ?
            ORDER BY a.id DESC
        """, (farm_id,)).fetchall()
        
        result = []
        for r in rows:
            ndvi = r["ndvi_score"]
            result.append(AIAnalysisOut(
                id=r["id"],
                farm_id=r["farm_id"],
                crop_type=r["crop_type"],
                ndvi_score=ndvi,
                health_classification="Optimal" if ndvi > 0.7 else "Needs Treatment",
                chlorophyll_level=r["chlorophyll_level"] or "Normal",
                pest_detected=bool(r["pest_detected"]),
                pest_type=r["pest_type"],
                weed_infestation_pct=r["weed_infestation_pct"],
                canopy_coverage_pct=r["canopy_coverage_pct"],
                recommendation=r["recommendation"],
                spray_prescription={},
                heat_map_overlay_url=r["heat_map_overlay_url"] or ""
            ))
        return result
