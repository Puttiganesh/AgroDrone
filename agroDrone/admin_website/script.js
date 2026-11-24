/**
 * AgroDrone Web App - Central Control & Mission Intelligence
 * Real-time Flight Simulation, Mission Dispatch & AI NDVI Engine
 */

// Application State
const STATE = {
  backendUrl: "/api",
  activeTab: "telemetry",
  simRunning: true,
  simStep: 0,
  sprayActive: true,
  currentDrone: {
    id: 1,
    model: "AgroDrone Titan T-40",
    serial: "AGRO-T40-901",
    lat: 21.145920,
    lng: 79.088350,
    altitude: 3.8,
    speed: 18.5,
    battery: 88,
    tankLiters: 24.5,
    maxTank: 40.0,
    flowRate: 3.4,
    status: "in_mission"
  },
  bookings: [
    {
      id: 1,
      farmer_id: 4,
      farmer_name: "Ramesh Patel",
      farmer_phone: "+91 9412345678",
      farm_name: "Green Valley Cotton Estate",
      service_type: "pesticide_spraying",
      target_crop: "Cotton",
      area_acres: 15.5,
      scheduled_date: "2026-11-24",
      scheduled_slot: "06:30 - 08:30 AM",
      total_cost: 4650.00,
      payment_status: "paid",
      mission_status: "in_progress",
      drone_model: "AgroDrone Titan T-40",
      operator_name: "Capt. Vikram Rathore"
    },
    {
      id: 2,
      farmer_id: 5,
      farmer_name: "Sukhwinder Singh",
      farmer_phone: "+91 9423456789",
      farm_name: "Golden Harvest Fields",
      service_type: "liquid_fertilizer",
      target_crop: "Wheat & Mustard",
      area_acres: 28.0,
      scheduled_date: "2026-11-25",
      scheduled_slot: "07:00 - 10:30 AM",
      total_cost: 8400.00,
      payment_status: "paid",
      mission_status: "assigned",
      drone_model: "AgroDrone HeavyLifter H-50",
      operator_name: "Anita Sharma"
    },
    {
      id: 3,
      farmer_id: 4,
      farmer_name: "Ramesh Patel",
      farmer_phone: "+91 9412345678",
      farm_name: "Narmada Basin Paddy Plot",
      service_type: "ai_crop_scouting",
      target_crop: "Basmati Rice",
      area_acres: 12.0,
      scheduled_date: "2026-11-26",
      scheduled_slot: "08:00 - 09:30 AM",
      total_cost: 2400.00,
      payment_status: "unpaid",
      mission_status: "pending",
      drone_model: null,
      operator_name: null
    }
  ],
  flightLogs: [
    { time: "06:32:10", msg: "Telemetry link locked: RTK Fixed 18 satellites.", type: "info" },
    { time: "06:33:00", msg: "Motors armed. Commencing autonomous grid waypoint flight.", type: "success" },
    { time: "06:34:15", msg: "Spray nozzles activated. Flow rate calibrated at 3.4 L/min.", type: "spray" },
    { time: "06:37:42", msg: "Zone B (East) waypoint reached. AI VRA boost applied (3.8 L/min).", type: "ai" }
  ],
  particles: []
};

// Initialize Application on DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  initCanvas();
  renderBookingsTable();
  renderFlightLogs();
  initControls();
  initFarmerForm();
  initModals();
  startSimulationTicker();
  checkBackendHealth();
});

// Check if backend API is reachable
async function checkBackendHealth() {
  try {
    const res = await fetch(`${STATE.backendUrl}/health`);
    if (res.ok) {
      document.getElementById("connStatus").textContent = "API & TELEMETRY LIVE";
      console.log("Connected to AgroDrone Python backend.");
    }
  } catch (err) {
    console.log("Backend offline or running local mode. Using internal telemetry engine.");
  }
}

// Tab Navigation
function initNavigation() {
  const tabs = document.querySelectorAll(".nav-tab");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      const targetTab = tab.getAttribute("data-tab");
      STATE.activeTab = targetTab;

      document.querySelectorAll(".tab-pane").forEach(pane => {
        pane.classList.remove("active");
      });
      const activePane = document.getElementById(`tab-${targetTab}`);
      if (activePane) activePane.classList.add("active");

      if (targetTab === "telemetry") {
        resizeCanvas();
      }
    });
  });
}

// ----------------- Canvas Simulation & Map Renderer -----------------
let canvas, ctx, animFrameId;
const farmWaypoints = [];
const sprayedPath = [];

function initCanvas() {
  canvas = document.getElementById("flightCanvas");
  if (!canvas) return;
  ctx = canvas.getContext("2d");
  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  // Generate autonomous lawnmower grid waypoints
  generateFarmWaypoints();
  renderCanvas();
}

function resizeCanvas() {
  if (!canvas) return;
  const parent = canvas.parentElement;
  canvas.width = parent.clientWidth;
  canvas.height = parent.clientHeight;
  generateFarmWaypoints();
}

function generateFarmWaypoints() {
  farmWaypoints.length = 0;
  const w = canvas.width || 800;
  const h = canvas.height || 500;
  const margin = 80;

  const cols = 7;
  const colStep = (w - margin * 2) / cols;

  for (let c = 0; c <= cols; c++) {
    const x = margin + c * colStep;
    if (c % 2 === 0) {
      farmWaypoints.push({ x, y: margin });
      farmWaypoints.push({ x, y: h - margin });
    } else {
      farmWaypoints.push({ x, y: h - margin });
      farmWaypoints.push({ x, y: margin });
    }
  }
}

let rotorAngle = 0;
let droneScreenPos = { x: 120, y: 120 };

function renderCanvas() {
  if (!ctx || !canvas) return;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const w = canvas.width;
  const h = canvas.height;
  const margin = 70;

  // 1. Draw Farm Plot Boundary (Field Polygon)
  ctx.save();
  ctx.fillStyle = "rgba(6, 78, 59, 0.4)";
  ctx.strokeStyle = "#10b981";
  ctx.lineWidth = 2;
  ctx.setLineDash([6, 6]);

  ctx.beginPath();
  ctx.rect(margin - 20, margin - 20, w - margin * 2 + 40, h - margin * 2 + 40);
  ctx.fill();
  ctx.stroke();
  ctx.restore();

  // 2. Crop Furrow Rows
  ctx.save();
  ctx.strokeStyle = "rgba(16, 185, 129, 0.08)";
  ctx.lineWidth = 1;
  for (let y = margin - 10; y <= h - margin + 10; y += 18) {
    ctx.beginPath();
    ctx.moveTo(margin - 15, y);
    ctx.lineTo(w - margin + 15, y);
    ctx.stroke();
  }
  ctx.restore();

  // 3. Draw Planned Waypoint Grid Track
  ctx.save();
  ctx.strokeStyle = "rgba(56, 189, 248, 0.25)";
  ctx.lineWidth = 1.5;
  ctx.setLineDash([4, 4]);
  ctx.beginPath();
  if (farmWaypoints.length > 0) {
    ctx.moveTo(farmWaypoints[0].x, farmWaypoints[0].y);
    for (let i = 1; i < farmWaypoints.length; i++) {
      ctx.lineTo(farmWaypoints[i].x, farmWaypoints[i].y);
    }
  }
  ctx.stroke();
  ctx.restore();

  // 4. Sprayed Path Swath (Green Treated Coverage)
  ctx.save();
  ctx.strokeStyle = "rgba(52, 211, 153, 0.35)";
  ctx.lineWidth = 26; // spray boom width
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.beginPath();
  if (sprayedPath.length > 0) {
    ctx.moveTo(sprayedPath[0].x, sprayedPath[0].y);
    for (let i = 1; i < sprayedPath.length; i++) {
      ctx.lineTo(sprayedPath[i].x, sprayedPath[i].y);
    }
    ctx.stroke();
  }
  ctx.restore();

  // 5. Draw Active Spray Mist Particles
  if (STATE.sprayActive && STATE.simRunning) {
    for (let i = 0; i < 2; i++) {
      STATE.particles.push({
        x: droneScreenPos.x + (Math.random() - 0.5) * 14,
        y: droneScreenPos.y + (Math.random() - 0.5) * 14,
        radius: Math.random() * 3 + 2,
        alpha: 0.6,
        life: 1.0
      });
    }
  }

  // Update & Render Spray Particles
  for (let i = STATE.particles.length - 1; i >= 0; i--) {
    const p = STATE.particles[i];
    p.life -= 0.04;
    p.alpha = Math.max(0, p.life * 0.6);
    p.radius += 0.2;

    ctx.save();
    ctx.fillStyle = `rgba(56, 189, 248, ${p.alpha})`;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    if (p.life <= 0) {
      STATE.particles.splice(i, 1);
    }
  }

  // 6. Draw Drone Shadow (Height effect)
  ctx.save();
  ctx.fillStyle = "rgba(0, 0, 0, 0.4)";
  ctx.beginPath();
  ctx.ellipse(droneScreenPos.x + 8, droneScreenPos.y + 12, 14, 8, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();

  // 7. Draw Drone Vehicle & Rotors
  ctx.save();
  ctx.translate(droneScreenPos.x, droneScreenPos.y);

  // Cross Frame
  ctx.strokeStyle = "#475569";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(-16, -16);
  ctx.lineTo(16, 16);
  ctx.moveTo(-16, 16);
  ctx.lineTo(16, -16);
  ctx.stroke();

  // Spray Boom arms
  ctx.strokeStyle = "#0284c7";
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.moveTo(-22, 0);
  ctx.lineTo(22, 0);
  ctx.stroke();

  // Central Hub
  ctx.fillStyle = "#10b981";
  ctx.beginPath();
  ctx.arc(0, 0, 8, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = "#fff";
  ctx.lineWidth = 1.5;
  ctx.stroke();

  // 4 Rotors Spinning
  rotorAngle += 0.4;
  const rotorOffsets = [
    { x: -16, y: -16 },
    { x: 16, y: -16 },
    { x: 16, y: 16 },
    { x: -16, y: 16 }
  ];

  ctx.strokeStyle = "rgba(255, 255, 255, 0.7)";
  ctx.lineWidth = 1.5;
  rotorOffsets.forEach(pos => {
    ctx.save();
    ctx.translate(pos.x, pos.y);
    ctx.rotate(rotorAngle);
    ctx.beginPath();
    ctx.ellipse(0, 0, 9, 2.5, 0, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  });

  ctx.restore();

  // 8. Field Labels & GPS Boundary Coordinates
  ctx.save();
  ctx.fillStyle = "#94a3b8";
  ctx.font = "11px monospace";
  ctx.fillText("NW: 21.1465° N, 79.0875° E", margin - 15, margin - 26);
  ctx.fillText("SE: 21.1450° N, 79.0895° E", w - margin - 130, h - margin + 35);
  ctx.fillStyle = "#34d399";
  ctx.font = "bold 12px sans-serif";
  ctx.fillText("PLOT #1: Green Valley Cotton (15.5 ACRES)", margin, margin + 15);
  ctx.restore();

  animFrameId = requestAnimationFrame(renderCanvas);
}

// ----------------- Flight Simulation Ticker -----------------
function startSimulationTicker() {
  setInterval(() => {
    if (!STATE.simRunning || farmWaypoints.length < 2) return;

    STATE.simStep++;
    const totalWaypoints = farmWaypoints.length;
    const currentWpIndex = Math.floor((STATE.simStep / 40) % totalWaypoints);
    const nextWpIndex = (currentWpIndex + 1) % totalWaypoints;

    const progress = (STATE.simStep % 40) / 40;
    const startWp = farmWaypoints[currentWpIndex];
    const endWp = farmWaypoints[nextWpIndex];

    droneScreenPos.x = startWp.x + (endWp.x - startWp.x) * progress;
    droneScreenPos.y = startWp.y + (endWp.y - startWp.y) * progress;

    if (STATE.sprayActive) {
      sprayedPath.push({ x: droneScreenPos.x, y: droneScreenPos.y });
      if (sprayedPath.length > 500) sprayedPath.shift();
    }

    // Telemetry Sensor Updates
    STATE.currentDrone.lat = +(21.145800 + (droneScreenPos.y / 100000)).toFixed(6);
    STATE.currentDrone.lng = +(79.088200 + (droneScreenPos.x / 100000)).toFixed(6);
    STATE.currentDrone.battery = Math.max(15, +(STATE.currentDrone.battery - 0.04).toFixed(1));
    if (STATE.sprayActive) {
      STATE.currentDrone.tankLiters = Math.max(0, +(STATE.currentDrone.tankLiters - 0.05).toFixed(1));
    }

    updateTelemetryHUD();
  }, 100);
}

function updateTelemetryHUD() {
  const d = STATE.currentDrone;
  const alt = (3.7 + Math.sin(STATE.simStep * 0.1) * 0.2).toFixed(1);
  const spd = (18.2 + Math.cos(STATE.simStep * 0.08) * 1.1).toFixed(1);

  document.getElementById("hudAltitude").textContent = alt;
  document.getElementById("hudSpeed").textContent = spd;
  document.getElementById("hudFlow").textContent = STATE.sprayActive ? d.flowRate.toFixed(1) : "0.0";
  document.getElementById("hudCoords").textContent = `${d.lat}, ${d.lng}`;
  document.getElementById("droneBatteryVal").textContent = Math.round(d.battery);
  document.getElementById("droneBatteryBar").style.width = `${d.battery}%`;

  const tankPct = Math.round((d.tankLiters / d.maxTank) * 100);
  document.getElementById("droneTankVal").textContent = d.tankLiters;
  document.getElementById("droneTankBar").style.width = `${tankPct}%`;

  if (d.battery < 20 || d.tankLiters <= 0.5) {
    triggerReturnToHome("Low battery or empty tank");
  }
}

// ----------------- Telemetry Controls -----------------
function initControls() {
  // Pause / Resume Simulation
  const btnPause = document.getElementById("btnSimPause");
  btnPause.addEventListener("click", () => {
    STATE.simRunning = !STATE.simRunning;
    document.getElementById("simBtnIcon").textContent = STATE.simRunning ? "⏸️" : "▶️";
    document.getElementById("simBtnTxt").textContent = STATE.simRunning ? "Pause Sim" : "Resume Sim";
    addFlightLog(STATE.simRunning ? "Mission resumed by dispatcher." : "Mission paused by dispatcher.", "info");
  });

  // Toggle Spray
  const btnToggleSpray = document.getElementById("btnToggleSpray");
  btnToggleSpray.addEventListener("click", () => {
    STATE.sprayActive = !STATE.sprayActive;
    document.getElementById("sprayStateTxt").textContent = STATE.sprayActive ? "ACTIVE" : "OFF";
    btnToggleSpray.style.borderColor = STATE.sprayActive ? "#10b981" : "#ef4444";
    addFlightLog(STATE.sprayActive ? "Spray valves OPEN: 3.4 L/min." : "Spray valves CLOSED.", STATE.sprayActive ? "spray" : "info");
  });

  // Return to Home (RTH)
  const btnRth = document.getElementById("btnRth");
  btnRth.addEventListener("click", () => {
    triggerReturnToHome("Manual pilot trigger");
  });

  // AI NDVI Toggle Overlay
  const btnToggleNdvi = document.getElementById("btnToggleNdviView");
  let ndviActive = false;
  btnToggleNdvi.addEventListener("click", () => {
    ndviActive = !ndviActive;
    const vp = document.getElementById("aiHeatmapViewport");
    if (ndviActive) {
      vp.style.filter = "hue-rotate(90deg) saturate(200%)";
      btnToggleNdvi.textContent = "View Optical RGB";
    } else {
      vp.style.filter = "none";
      btnToggleNdvi.textContent = "Toggle NDVI Overlay";
    }
  });

  // Scan Current Field
  const btnScan = document.getElementById("btnRunAiAnalysis");
  btnScan.addEventListener("click", () => {
    btnScan.textContent = "Scanning...";
    setTimeout(() => {
      btnScan.textContent = "Scan Current Field";
      const newNdvi = (0.75 + Math.random() * 0.1).toFixed(3);
      document.getElementById("aiNdviScore").textContent = newNdvi;
      addFlightLog(`AI Scan complete: Field NDVI computed at ${newNdvi}.`, "ai");
      alert(`AI Multispectral Scan complete!\nComputed NDVI: ${newNdvi} (Healthy Canopy)\nPrescription: Maintain low spray flow rate.`);
    }, 1200);
  });

  // Cockpit Controls
  const flowSlider = document.getElementById("cockpitFlowSlider");
  if (flowSlider) {
    flowSlider.addEventListener("input", (e) => {
      const val = parseFloat(e.target.value);
      STATE.currentDrone.flowRate = val;
      document.getElementById("cockpitFlowRate").textContent = `${val.toFixed(1)} L/min`;
      document.getElementById("hudFlow").textContent = val.toFixed(1);
    });
  }

  const btnArm = document.getElementById("btnCockpitArm");
  if (btnArm) {
    btnArm.addEventListener("click", () => {
      btnArm.textContent = btnArm.textContent.includes("ARMED") ? "🔴 MOTORS DISARMED" : "🟢 MOTORS ARMED";
      btnArm.classList.toggle("btn-primary");
    });
  }
}

function triggerReturnToHome(reason) {
  STATE.sprayActive = false;
  document.getElementById("sprayStateTxt").textContent = "OFF";
  document.getElementById("droneStatusBadge").textContent = "RETURNING TO HOME";
  document.getElementById("droneStatusBadge").className = "status-badge status-charging";
  addFlightLog(`⚠️ Failsafe Return To Home (RTH) triggered: ${reason}. Returning to base coordinates.`, "info");
}

function addFlightLog(msg, type = "info") {
  const time = new Date().toTimeString().split(" ")[0];
  STATE.flightLogs.unshift({ time, msg, type });
  if (STATE.flightLogs.length > 20) STATE.flightLogs.pop();
  renderFlightLogs();
}

function renderFlightLogs() {
  const container = document.getElementById("flightLogsContainer");
  if (!container) return;
  container.innerHTML = STATE.flightLogs.map(log => {
    let color = "#94a3b8";
    if (log.type === "success") color = "#10b981";
    if (log.type === "spray") color = "#38bdf8";
    if (log.type === "ai") color = "#a855f7";
    return `
      <div class="log-item">
        <span style="font-family: monospace; color: #64748b; margin-right: 0.5rem;">[${log.time}]</span>
        <span style="flex: 1; color: ${color};">${log.msg}</span>
      </div>
    `;
  }).join("");
}

// ----------------- Dispatch & Bookings Table -----------------
function renderBookingsTable(filter = "all") {
  const tbody = document.getElementById("bookingsTableBody");
  if (!tbody) return;

  const filtered = STATE.bookings.filter(b => {
    if (filter === "all") return true;
    return b.mission_status === filter;
  });

  tbody.innerHTML = filtered.map(b => {
    let statusClass = "status-idle";
    if (b.mission_status === "in_progress") statusClass = "status-in_mission";
    if (b.mission_status === "assigned") statusClass = "status-charging";

    return `
      <tr>
        <td><strong>#BK-${String(b.id).padStart(3, "0")}</strong></td>
        <td>
          <div style="font-weight: 700;">${b.farmer_name}</div>
          <div style="font-size: 0.75rem; color: #94a3b8;">${b.farm_name}</div>
        </td>
        <td>
          <div>${formatService(b.service_type)}</div>
          <div style="font-size: 0.75rem; color: #38bdf8;">Crop: ${b.target_crop}</div>
        </td>
        <td><strong>${b.area_acres}</strong> Acres</td>
        <td>
          <div>${b.scheduled_date}</div>
          <div style="font-size: 0.75rem; color: #94a3b8;">${b.scheduled_slot}</div>
        </td>
        <td><strong>₹${b.total_cost.toLocaleString()}</strong></td>
        <td>
          <span style="color: ${b.payment_status === 'paid' ? '#10b981' : '#f59e0b'}; font-weight: 700;">
            ${b.payment_status.toUpperCase()}
          </span>
        </td>
        <td>
          <span class="status-badge ${statusClass}">${b.mission_status.replace("_", " ")}</span>
        </td>
        <td>
          <div>${b.drone_model || '<span style="color:#64748b;">Unassigned</span>'}</div>
          <div style="font-size: 0.75rem; color: #94a3b8;">${b.operator_name || ''}</div>
        </td>
        <td>
          <div class="action-btn-group">
            ${b.mission_status === 'pending' ? `<button class="action-btn" onclick="openAssignModal(${b.id})">Assign</button>` : ''}
            <button class="action-btn" onclick="viewInvoice(${b.id})">Invoice</button>
          </div>
        </td>
      </tr>
    `;
  }).join("");

  // Update counts
  document.getElementById("countAll").textContent = STATE.bookings.length;
  document.getElementById("countPending").textContent = STATE.bookings.filter(b => b.mission_status === "pending").length;
  document.getElementById("countAssigned").textContent = STATE.bookings.filter(b => b.mission_status === "assigned").length;
  document.getElementById("countInProg").textContent = STATE.bookings.filter(b => b.mission_status === "in_progress").length;
}

function formatService(s) {
  const map = {
    pesticide_spraying: "Pesticide Spray",
    liquid_fertilizer: "Nano Fertilizer",
    ai_crop_scouting: "AI Crop Scouting",
    thermal_imaging: "Thermal Imaging"
  };
  return map[s] || s;
}

// ----------------- Farmer App Booking Simulator -----------------
function initFarmerForm() {
  const acreInput = document.getElementById("farmerAcreInput");
  const serviceSelect = document.getElementById("farmerServiceSelect");
  const btnSubmit = document.getElementById("btnSubmitFarmerBooking");

  function calcFarmerPrice() {
    const acres = parseFloat(acreInput.value) || 1;
    let rate = 300;
    if (serviceSelect.value === "ai_crop_scouting") rate = 200;
    if (serviceSelect.value === "thermal_imaging") rate = 250;

    const base = acres * rate;
    const subsidy = base * 0.25;
    const payable = base - subsidy;

    document.getElementById("farmerEstCost").textContent = `₹${base.toLocaleString()}`;
    document.getElementById("farmerPayableCost").textContent = `₹${payable.toLocaleString()}`;
  }

  if (acreInput && serviceSelect) {
    acreInput.addEventListener("input", calcFarmerPrice);
    serviceSelect.addEventListener("change", calcFarmerPrice);
  }

  if (btnSubmit) {
    btnSubmit.addEventListener("click", () => {
      const acres = parseFloat(acreInput.value) || 10;
      const farmSelect = document.getElementById("farmerFarmSelect");
      const farmName = farmSelect.options[farmSelect.selectedIndex].text;
      const rate = serviceSelect.value === "ai_crop_scouting" ? 200 : 300;
      const total = acres * rate;

      const newBooking = {
        id: STATE.bookings.length + 1,
        farmer_id: 4,
        farmer_name: "Ramesh Patel",
        farmer_phone: "+91 9412345678",
        farm_name: farmName.split(" (")[0],
        service_type: serviceSelect.value,
        target_crop: "Cotton / Paddy",
        area_acres: acres,
        scheduled_date: document.getElementById("farmerDateInput").value,
        scheduled_slot: document.getElementById("farmerSlotSelect").value,
        total_cost: total,
        payment_status: "paid",
        mission_status: "pending",
        drone_model: null,
        operator_name: null
      };

      STATE.bookings.unshift(newBooking);
      renderBookingsTable();
      addFlightLog(`New booking registered: #${newBooking.id} (${acres} Acres) for Ramesh Patel.`, "info");
      alert(`🎉 Booking Confirmed!\nBooking ID: #BK-00${newBooking.id}\nScheduled for: ${newBooking.scheduled_date}\nDispatched to AgroDrone Control Center.`);
    });
  }

  // Filter Buttons on table
  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderBookingsTable(btn.getAttribute("data-filter"));
    });
  });
}

// ----------------- Modals (Assign Pilot & View Invoice) -----------------
function initModals() {
  document.getElementById("closeAssignModal").addEventListener("click", () => {
    document.getElementById("assignModal").classList.remove("active");
  });
  document.getElementById("closeInvoiceModal").addEventListener("click", () => {
    document.getElementById("invoiceModal").classList.remove("active");
  });

  document.getElementById("btnConfirmAssign").addEventListener("click", () => {
    const bId = parseInt(document.getElementById("assignBookingId").value);
    const droneSelect = document.getElementById("selectDrone");
    const pilotSelect = document.getElementById("selectPilot");

    const droneText = droneSelect.options[droneSelect.selectedIndex].text.split(" (")[0];
    const pilotText = pilotSelect.options[pilotSelect.selectedIndex].text.split(" (")[0];

    const target = STATE.bookings.find(b => b.id === bId);
    if (target) {
      target.drone_model = droneText;
      target.operator_name = pilotText;
      target.mission_status = "assigned";
      renderBookingsTable();
      addFlightLog(`Mission #${bId} assigned to ${pilotText} with ${droneText}.`, "success");
    }
    document.getElementById("assignModal").classList.remove("active");
  });
}

window.openAssignModal = function(id) {
  document.getElementById("assignBookingId").value = id;
  document.getElementById("assignModal").classList.add("active");
};

window.viewInvoice = function(id) {
  const b = STATE.bookings.find(item => item.id === id);
  if (!b) return;

  const gst = (b.total_cost * 0.05).toFixed(2);
  const subtotal = (b.total_cost - gst).toFixed(2);

  document.getElementById("invoiceDetails").innerHTML = `
    <div style="display:flex; justify-content:space-between; margin-bottom:1rem; border-bottom:1px solid #334155; padding-bottom:0.5rem;">
      <div>
        <strong style="color:#10b981; font-size:1.1rem;">AgroDrone Agritech Ltd.</strong><br>
        <span style="color:#94a3b8; font-size:0.75rem;">DGCA Certified Drone-as-a-Service Provider</span>
      </div>
      <div style="text-align:right;">
        <strong>TAX INVOICE</strong><br>
        <span style="font-family:monospace;">INV-AGRO-2026-000${b.id}</span>
      </div>
    </div>
    <div><strong>Billed To:</strong> ${b.farmer_name} (${b.farmer_phone})</div>
    <div><strong>Farm Location:</strong> ${b.farm_name}</div>
    <div><strong>Service:</strong> ${formatService(b.service_type)} (${b.area_acres} Acres)</div>
    <div><strong>Scheduled Flight:</strong> ${b.scheduled_date} (${b.scheduled_slot})</div>
    <hr style="border:0; border-top:1px solid #334155; margin:0.8rem 0;">
    <div style="display:flex; justify-content:space-between;"><span>Subtotal:</span><span>₹${subtotal}</span></div>
    <div style="display:flex; justify-content:space-between;"><span>Agricultural GST (5%):</span><span>₹${gst}</span></div>
    <div style="display:flex; justify-content:space-between; font-weight:800; font-size:1.1rem; color:#10b981; margin-top:0.4rem;">
      <span>Total Paid:</span><span>₹${b.total_cost.toLocaleString()}</span>
    </div>
    <div style="margin-top:0.8rem; font-size:0.75rem; color:#64748b;">
      Payment Status: <strong style="color:#10b981;">PAID (UPI)</strong> • Flight Clearance: DGCA-AGRO-AUTH-PASS
    </div>
  `;
  document.getElementById("invoiceModal").classList.add("active");
};
