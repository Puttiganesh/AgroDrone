# 🛸 AgroDrone - Autonomous Agricultural Drone-as-a-Service & Crop Intelligence

AgroDrone is an end-to-end precision agriculture platform connecting **Farmers**, certified **Drone Pilots/Operators**, and **Agricultural Dispatchers**. The system orchestrates autonomous drone spraying missions (pesticides, nano-fertilizers, seeds), multispectral AI crop health diagnostics (NDVI), and real-time telemetry streaming.

---

## 📁 Project Architecture & Directory Structure

```text
AgroDrone/
│
├── farmer_app/              # Flutter Mobile App for Farmers
│   ├── pubspec.yaml
│   └── lib/
│       ├── screens/         # Booking, Live GPS Tracking, AI Crop Doctor, Home
│       ├── widgets/         # Weather Advisory, Drone Specs Card, Price Breakdown
│       ├── services/        # REST Client, Pricing & Subsidy State Management
│       └── main.dart
│
├── operator_app/            # Flutter Pilot Cockpit & HUD Controller
│   ├── pubspec.yaml
│   └── lib/
│       ├── screens/         # Cockpit HUD, Pilot Dashboard, DGCA Flight Logbook
│       ├── widgets/         # Telemetry Gauges, Spray Nozzle Slider, Safety Checklist
│       ├── services/        # WebSockets/Telemetry Logger, Flight State Machine
│       └── main.dart
│
├── admin_website/           # Ground Command & Dispatch Control Web Dashboard
│   ├── index.html           # Real-time Telemetry Map, Dispatch Board, AI Center
│   ├── style.css            # Dark tactical agricultural aesthetic & telemetry styling
│   └── script.js            # HTML5 Canvas flight simulator & interactive data layer
│
├── backend/                 # High-Performance FastAPI Application
│   ├── main.py              # Server entrypoint, CORS, static mounts
│   ├── database.py          # SQLite / PostgreSQL connection manager & auto-init
│   ├── models.py            # Pydantic schemas and ORM entities
│   ├── auth.py              # User authentication, RBAC (Farmer, Operator, Admin)
│   ├── booking.py           # Mission booking, scheduling & acreage pricing
│   ├── drone.py             # Drone fleet registry, live telemetry ingestion & simulation
│   ├── weather.py           # Agricultural aviation weather & drift safety clearance
│   ├── ai_engine.py         # Multispectral NDVI calculation & variable-rate spray (VRA)
│   ├── payment.py           # Digital payment gateway (UPI/Cards) & GST invoices
│   └── requirements.txt     # Python dependencies
│
└── database/
    └── agrodrone.sql        # Relational schema DDL and realistic seed records
```

---

## ⚡ Quick Start Guide

### 1. Launching Admin Web Dashboard
Simply open `AgroDrone/admin_website/index.html` in Google Chrome or any modern browser.
- **Interactive Telemetry Map:** Features live canvas simulation of a drone executing an autonomous lawnmower grid spray pattern over agricultural plots.
- **Mission Dispatch:** Filter, assign drones/pilots, view GST tax invoices.
- **AI NDVI Center:** Multispectral canopy health analysis with Variable-Rate Application (VRA) recommendations.
- **Embedded Simulators:** Interactive previews for both the Farmer App and Operator Cockpit.

### 2. Running Python FastAPI Backend
Ensure Python 3.9+ is installed:
```bash
cd AgroDrone/backend
pip install -r requirements.txt
python main.py
```
- **Admin Dashboard URL:** [http://localhost:8000/admin](http://localhost:8000/admin)
- **Interactive Swagger Docs:** [http://localhost:8000/docs](http://localhost:8000/docs)
- **Health Check:** `GET http://localhost:8000/api/health`

### 3. Running Flutter Mobile Apps
For **Farmer App**:
```bash
cd AgroDrone/farmer_app
flutter pub get
flutter run
```

For **Operator App**:
```bash
cd AgroDrone/operator_app
flutter pub get
flutter run
```

---

## 🌟 Key Platform Features

1. **Autonomous Waypoint Spraying:** Pre-programmed grid sweeps ensure 100% field coverage with zero overlapping and up to 40% reduction in chemical consumption.
2. **AI Multispectral Crop Doctor:** Computes NDVI (Normalized Difference Vegetation Index), spots pest outbreaks (Pink Bollworm, Yellow Rust), and prescribes Variable-Rate Application (VRA).
3. **Aviation Weather Clearance:** Real-time drift safety check evaluating wind speed (<15 km/h), rain probability, and temperature to protect adjacent fields.
4. **Transparent Farmer Billing:** Automated price calculator factoring in 25% government drone subsidies (SMAM scheme) and generating official GST invoices.
5. **DGCA Compliance:** Operator license tracking, pre-flight checklists, and automated digital flight logbooks.
