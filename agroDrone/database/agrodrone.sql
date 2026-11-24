-- ============================================================
-- AgroDrone: Autonomous Drone Agriculture & Crop Intelligence
-- Database Schema (PostgreSQL & SQLite Compatible)
-- ============================================================

-- 1. Users Table (Farmers, Operators/Pilots, Admins)
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    role VARCHAR(20) NOT NULL CHECK(role IN ('admin', 'operator', 'farmer')),
    license_number VARCHAR(50), -- Required for drone operators
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. Farms Table (Farmer Land Holdings)
CREATE TABLE IF NOT EXISTS farms (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    farmer_id INTEGER NOT NULL,
    farm_name VARCHAR(120) NOT NULL,
    crop_type VARCHAR(60) NOT NULL,
    acreage DECIMAL(8, 2) NOT NULL,
    soil_type VARCHAR(50),
    latitude DECIMAL(10, 6) NOT NULL,
    longitude DECIMAL(10, 6) NOT NULL,
    polygon_boundary TEXT, -- GeoJSON representation of farm boundary
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (farmer_id) REFERENCES users(id) ON DELETE CASCADE
);

-- 3. Drones Table (Fleet Management)
CREATE TABLE IF NOT EXISTS drones (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    drone_model VARCHAR(80) NOT NULL,
    serial_number VARCHAR(60) UNIQUE NOT NULL,
    payload_capacity_liters DECIMAL(5, 2) NOT NULL,
    battery_level INTEGER DEFAULT 100, -- Percentage 0-100
    status VARCHAR(30) DEFAULT 'idle' CHECK(status IN ('idle', 'in_mission', 'charging', 'maintenance', 'offline')),
    current_latitude DECIMAL(10, 6),
    current_longitude DECIMAL(10, 6),
    altitude_meters DECIMAL(6, 2) DEFAULT 0.0,
    speed_kmh DECIMAL(5, 2) DEFAULT 0.0,
    spray_tank_liters DECIMAL(5, 2) DEFAULT 0.0,
    total_flight_hours DECIMAL(8, 2) DEFAULT 0.0,
    operator_id INTEGER,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (operator_id) REFERENCES users(id) ON DELETE SET NULL
);

-- 4. Bookings Table (Mission Requests & Orders)
CREATE TABLE IF NOT EXISTS bookings (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    farmer_id INTEGER NOT NULL,
    farm_id INTEGER NOT NULL,
    drone_id INTEGER,
    operator_id INTEGER,
    service_type VARCHAR(50) NOT NULL CHECK(service_type IN ('pesticide_spraying', 'liquid_fertilizer', 'ai_crop_scouting', 'thermal_imaging', 'seeding')),
    target_crop VARCHAR(60) NOT NULL,
    chemical_formula VARCHAR(100),
    dosage_rate VARCHAR(50),
    area_acres DECIMAL(8, 2) NOT NULL,
    scheduled_date DATE NOT NULL,
    scheduled_slot VARCHAR(20) NOT NULL, -- e.g. '06:00 - 09:00'
    total_cost DECIMAL(10, 2) NOT NULL,
    payment_status VARCHAR(20) DEFAULT 'unpaid' CHECK(payment_status IN ('unpaid', 'paid', 'refunded')),
    mission_status VARCHAR(25) DEFAULT 'pending' CHECK(mission_status IN ('pending', 'approved', 'assigned', 'in_progress', 'completed', 'cancelled')),
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (farmer_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (farm_id) REFERENCES farms(id) ON DELETE CASCADE,
    FOREIGN KEY (drone_id) REFERENCES drones(id) ON DELETE SET NULL,
    FOREIGN KEY (operator_id) REFERENCES users(id) ON DELETE SET NULL
);

-- 5. Telemetry Logs Table (Real-time Flight Logs & Sensor Data)
CREATE TABLE IF NOT EXISTS telemetry_logs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    booking_id INTEGER NOT NULL,
    drone_id INTEGER NOT NULL,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    latitude DECIMAL(10, 6) NOT NULL,
    longitude DECIMAL(10, 6) NOT NULL,
    altitude_m DECIMAL(6, 2) NOT NULL,
    speed_kmh DECIMAL(5, 2) NOT NULL,
    battery_pct INTEGER NOT NULL,
    tank_remaining_pct INTEGER NOT NULL,
    spray_rate_lpm DECIMAL(5, 2) NOT NULL,
    wind_speed_kph DECIMAL(5, 2) DEFAULT 0.0,
    gps_signal_strength INTEGER DEFAULT 98,
    FOREIGN KEY (booking_id) REFERENCES bookings(id) ON DELETE CASCADE,
    FOREIGN KEY (drone_id) REFERENCES drones(id) ON DELETE CASCADE
);

-- 6. AI Crop Intelligence Table (NDVI, Pest, & Health Analysis)
CREATE TABLE IF NOT EXISTS ai_analyses (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    booking_id INTEGER,
    farm_id INTEGER NOT NULL,
    image_url TEXT,
    ndvi_score DECIMAL(4, 3) NOT NULL, -- Normalized Difference Veg Index (0.000 to 1.000)
    chlorophyll_level VARCHAR(30) DEFAULT 'Optimum',
    pest_detected BOOLEAN DEFAULT 0,
    pest_type VARCHAR(100),
    weed_infestation_pct DECIMAL(5, 2) DEFAULT 0.0,
    canopy_coverage_pct DECIMAL(5, 2) NOT NULL,
    recommendation TEXT NOT NULL,
    heat_map_overlay_url TEXT,
    analyzed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (booking_id) REFERENCES bookings(id) ON DELETE SET NULL,
    FOREIGN KEY (farm_id) REFERENCES farms(id) ON DELETE CASCADE
);

-- 7. Weather Checks Table (Aviation Weather Conditions)
CREATE TABLE IF NOT EXISTS weather_checks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    latitude DECIMAL(10, 6) NOT NULL,
    longitude DECIMAL(10, 6) NOT NULL,
    temperature_c DECIMAL(4, 1) NOT NULL,
    humidity_pct INTEGER NOT NULL,
    wind_speed_kph DECIMAL(5, 2) NOT NULL,
    wind_direction VARCHAR(10) NOT NULL,
    rain_probability_pct INTEGER NOT NULL,
    flyable_status VARCHAR(15) NOT NULL CHECK(flyable_status IN ('SAFE', 'CAUTION', 'UNSAFE')),
    checked_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 8. Payments Table
CREATE TABLE IF NOT EXISTS payments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    booking_id INTEGER NOT NULL,
    farmer_id INTEGER NOT NULL,
    transaction_id VARCHAR(100) UNIQUE NOT NULL,
    amount DECIMAL(10, 2) NOT NULL,
    payment_method VARCHAR(40) NOT NULL, -- UPI, NetBanking, Card, Wallet
    status VARCHAR(20) DEFAULT 'success',
    paid_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (booking_id) REFERENCES bookings(id) ON DELETE CASCADE,
    FOREIGN KEY (farmer_id) REFERENCES users(id) ON DELETE CASCADE
);

-- ============================================================
-- SEED DATA
-- ============================================================

-- Insert Users (Admins, Pilots/Operators, Farmers)
INSERT INTO users (id, full_name, email, password_hash, phone, role, license_number) VALUES
(1, 'Admin Controller', 'admin@agrodrone.io', 'pbkdf2:sha256:600000$admin123_hash', '+91 9876543210', 'admin', NULL),
(2, 'Captain Vikram Rathore', 'vikram.pilot@agrodrone.io', 'pbkdf2:sha256:600000$pilot123_hash', '+91 9811223344', 'operator', 'DGCA-RPA-99482-B'),
(3, 'Anita Sharma (Drone Pilot)', 'anita.pilot@agrodrone.io', 'pbkdf2:sha256:600000$pilot123_hash', '+91 9822334455', 'operator', 'DGCA-RPA-44219-A'),
(4, 'Ramesh Patel (Cotton Farmer)', 'ramesh.farmer@gmail.com', 'pbkdf2:sha256:600000$farmer123_hash', '+91 9412345678', 'farmer', NULL),
(5, 'Sukhwinder Singh (Wheat Farmer)', 'sukhwinder.farm@yahoo.com', 'pbkdf2:sha256:600000$farmer123_hash', '+91 9423456789', 'farmer', NULL);

-- Insert Farms
INSERT INTO farms (id, farmer_id, farm_name, crop_type, acreage, soil_type, latitude, longitude, polygon_boundary) VALUES
(1, 4, 'Green Valley Cotton Estate', 'Cotton', 15.5, 'Black Cotton Soil', 21.145800, 79.088200, '[[21.1450, 79.0875], [21.1465, 79.0875], [21.1465, 79.0895], [21.1450, 79.0895]]'),
(2, 5, 'Golden Harvest Fields', 'Wheat & Mustard', 28.0, 'Alluvial Loam', 30.901000, 75.857300, '[[30.9000, 75.8560], [30.9025, 75.8560], [30.9025, 75.8590], [30.9000, 75.8590]]'),
(3, 4, 'Narmada Basin Paddy Plot', 'Basmati Rice', 12.0, 'Clay Loam', 21.160000, 79.100000, '[[21.1590, 79.0980], [21.1610, 79.0980], [21.1610, 79.1020], [21.1590, 79.1020]]');

-- Insert Drones Fleet
INSERT INTO drones (id, drone_model, serial_number, payload_capacity_liters, battery_level, status, current_latitude, current_longitude, altitude_meters, speed_kmh, spray_tank_liters, total_flight_hours, operator_id) VALUES
(1, 'AgroDrone Titan T-40', 'AGRO-T40-901', 40.0, 88, 'in_mission', 21.145920, 79.088350, 3.8, 18.5, 24.5, 142.5, 2),
(2, 'AgroDrone Precision P-20', 'AGRO-P20-412', 20.0, 95, 'idle', 21.140000, 79.080000, 0.0, 0.0, 20.0, 89.2, 3),
(3, 'Garuda Multispectral Scout X5', 'AGRO-SCX-108', 5.0, 62, 'charging', 21.135000, 79.075000, 0.0, 0.0, 0.0, 210.0, NULL),
(4, 'AgroDrone HeavyLifter H-50', 'AGRO-H50-003', 50.0, 100, 'idle', 30.901500, 75.858000, 0.0, 0.0, 50.0, 45.8, NULL);

-- Insert Bookings
INSERT INTO bookings (id, farmer_id, farm_id, drone_id, operator_id, service_type, target_crop, chemical_formula, dosage_rate, area_acres, scheduled_date, scheduled_slot, total_cost, payment_status, mission_status, notes) VALUES
(1, 4, 1, 1, 2, 'pesticide_spraying', 'Cotton', 'Neem Bio-Extract & Chlorantraniliprole', '150 ml / acre', 15.5, '2026-11-24', '06:30 - 08:30 AM', 4650.00, 'paid', 'in_progress', 'Pink bollworm threat reported in northern sector. Early morning wind speed ideal.'),
(2, 5, 2, 4, 3, 'liquid_fertilizer', 'Wheat', 'Nano Urea & Micronutrient Zinc Zinc-EDTA', '250 ml / acre', 28.0, '2026-11-25', '07:00 - 10:30 AM', 8400.00, 'paid', 'assigned', 'Autonomous grid-line spray pattern with 4m flight altitude.'),
(3, 4, 3, 3, 2, 'ai_crop_scouting', 'Basmati Rice', 'N/A (Optical + Thermal Multispectral)', 'NDVI Mapping', 12.0, '2026-11-26', '08:00 - 09:30 AM', 2400.00, 'unpaid', 'pending', 'Generate 3D elevation map and bacterial leaf blight detection report.');

-- Insert Telemetry Logs (Active flight simulation)
INSERT INTO telemetry_logs (booking_id, drone_id, latitude, longitude, altitude_m, speed_kmh, battery_pct, tank_remaining_pct, spray_rate_lpm, wind_speed_kph, gps_signal_strength) VALUES
(1, 1, 21.145850, 79.088250, 3.5, 17.8, 92, 85, 3.2, 6.2, 99),
(1, 1, 21.145920, 79.088350, 3.8, 18.5, 88, 61, 3.4, 7.0, 98);

-- Insert AI Analysis Records
INSERT INTO ai_analyses (booking_id, farm_id, image_url, ndvi_score, chlorophyll_level, pest_detected, pest_type, weed_infestation_pct, canopy_coverage_pct, recommendation, heat_map_overlay_url) VALUES
(1, 1, 'assets/scans/cotton_zone_a.jpg', 0.785, 'Optimal', 1, 'Early Pink Bollworm Larvae (Sector NE)', 4.2, 86.5, 'Recommend spot-spraying Neem extract in Quadrant 3. Crop vigor high in remaining sectors.', 'assets/scans/ndvi_overlay_cotton.png'),
(2, 2, 'assets/scans/wheat_field_b.jpg', 0.620, 'Moderate Deficient', 0, NULL, 8.5, 72.0, 'Mild nitrogen deficiency detected in south edge. Nano urea application recommended within 48 hours.', 'assets/scans/ndvi_overlay_wheat.png');

-- Insert Weather Record
INSERT INTO weather_checks (latitude, longitude, temperature_c, humidity_pct, wind_speed_kph, wind_direction, rain_probability_pct, flyable_status) VALUES
(21.145800, 79.088200, 24.5, 52, 6.8, 'NE', 5, 'SAFE'),
(30.901000, 75.857300, 19.2, 60, 11.2, 'NW', 15, 'SAFE');

-- Insert Payment Record
INSERT INTO payments (booking_id, farmer_id, transaction_id, amount, payment_method, status) VALUES
(1, 4, 'TXN_AGRO_88392109', 4650.00, 'UPI (GooglePay)', 'success'),
(2, 5, 'TXN_AGRO_99182044', 8400.00, 'NetBanking (HDFC)', 'success');
