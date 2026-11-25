/**
 * AgroDrone Web App - Role-based Gateway & Autonomous Mission Intelligence
 * Features: Multi-language (i18n), Animated Logo Splash, Live Flight Telemetry
 */

// ==========================================================
// 1. MULTILINGUAL TRANSLATION DICTIONARY (I18N)
// ==========================================================
const I18N_TRANSLATIONS = {
  en: {
    name: "English",
    flag: "🇺🇸",
    splash_tagline: "Autonomous Precision Agri-Flight Intelligence",
    splash_skip: "Skip Intro ⏭️",
    btn_replay_intro: "Intro",
    gateway_title: "AgroDrone Gateway",
    app_subtitle: "Autonomous Agricultural Drone-as-a-Service Platform",
    farmer_login_tab: "Farmer Login",
    farmer_login_sub: "Book spray & track missions",
    pilot_login_tab: "Drone / Pilot Login",
    pilot_login_sub: "Telemetry HUD & flight cockpit",
    farmer_banner_title: "🌾 KisanFly Farmer Services",
    farmer_banner_desc: "Book drone pesticide/fertilizer spraying with 25% govt subsidy, track your flight live, and inspect crop health.",
    drone_banner_title: "🛸 Pilot & Drone Telemetry Link",
    drone_banner_desc: "Connect pilot flight controller to drone hardware, monitor RTK telemetry, arm motors, and execute autonomous lawnmower grid sweeps.",
    lbl_farmer_email: "Farmer Mobile Number or Email",
    ph_farmer_email: "Enter mobile or email",
    lbl_password: "Password",
    ph_password: "Enter password",
    lbl_remember_farm: "Remember My Farm",
    btn_farmer_login: "Login to Farmer Portal",
    btn_farmer_demo: "⚡ One-Click Demo Login as Ramesh Patel (Cotton Farmer)",
    perk_subsidy: "✔️ 25% Govt SMAM Subsidy",
    perk_tracking: "✔️ Live GPS Tracking",
    perk_ai_doctor: "✔️ AI Crop Doctor",
    lbl_pilot_license: "DGCA Pilot License Number",
    lbl_paired_drone: "Select Paired Commercial Drone",
    lbl_controller_pin: "Flight Controller Access PIN",
    btn_drone_login: "Connect & Arm Flight Cockpit",
    btn_drone_demo: "⚡ One-Click Demo Login as Capt. Vikram (Pilot Cockpit)",
    perk_rtk: "✔️ RTK Fixed GPS (18 Sats)",
    perk_radar: "✔️ 360° Obstacle Radar",
    perk_autonomous: "✔️ Autonomous Grid Sweep",
    status_telemetry_live: "TELEMETRY LIVE",
    weather_safe: "SAFE",
    btn_logout: "Logout",
    kpi_active_mission: "Active Mission",
    kpi_my_acreage: "My Farm Acreage",
    kpi_total_acreage: "Total Acreage",
    kpi_govt_subsidy: "Govt Subsidy",
    kpi_safety_window: "Flight Safety Window",
    status_cleared: "CLEARED",
    tab_book_spray: "📝 Book Drone Spray",
    tab_live_track: "📍 Live Flight Tracking",
    tab_ai_doctor: "🧠 AI Crop Doctor (NDVI)",
    tab_my_orders: "📜 My Orders & Invoices",
    book_title: "🚜 Book High-Yield Drone Spraying",
    book_desc: "Autonomous 40L agricultural drones deliver uniform micron droplet spray, saving 90% water and 38% chemical costs.",
    lbl_farm_parcel: "Registered Farm Parcel",
    lbl_service_type: "Service Type",
    opt_service_pesticide: "Pesticide Spraying (₹300/acre)",
    opt_service_fertilizer: "Liquid Fertilizer / Nano Urea (₹300/acre)",
    opt_service_scouting: "AI Multispectral Scouting (₹200/acre)",
    opt_service_thermal: "Thermal Moisture Imaging (₹250/acre)",
    lbl_area_acres: "Area to Spray (Acres)",
    lbl_flight_date: "Preferred Flight Date",
    lbl_flight_slot: "Preferred Time Slot (Weather Advisory Recommended)",
    opt_slot_morning_calm: "06:00 - 08:30 AM (Calmest Wind - Highly Recommended)",
    opt_slot_morning_clear: "08:30 - 11:00 AM (Morning Clear)",
    opt_slot_evening: "04:00 - 06:30 PM (Evening Dew)",
    lbl_base_fee: "Base Spraying Service Fee:",
    lbl_subsidy_amt: "Govt Agricultural Drone Subsidy (25% SMAM):",
    lbl_final_payable: "Farmer Final Payable:",
    btn_dispatch_drone: "Confirm & Dispatch Drone Mission",
    track_title: "Live Tracking: Titan T-40 Spraying Plot #1",
    lbl_pilot_contact: "Pilot Contact: +91 9811223344",
    lbl_altitude: "Altitude",
    lbl_speed: "Ground Speed",
    lbl_spray_rate: "Spray Rate",
    lbl_progress: "Progress",
    lbl_est_completion: "Est Completion",
    lbl_assigned_pilot: "Assigned Pilot & Drone",
    btn_call_pilot: "📞 Call Drone Pilot",
    lbl_crop: "Crop",
    lbl_chemical: "Chemical",
    lbl_safety: "Safety Status",
    ai_title: "Multispectral AI Canopy Scan (NDVI Analysis)",
    btn_toggle_ndvi: "Toggle NDVI Overlay",
    btn_scan_field: "Scan Current Field",
    lbl_ndvi_score: "Normalized Difference Vegetation Index:",
    lbl_canopy_cov: "Canopy Coverage:",
    lbl_pest_alert: "⚠️ Pest Alert: Pink Bollworm (Early Stage)",
    lbl_pest_desc: "Computer vision detected pest cluster in Northeast quadrant of Green Valley Cotton plot.",
    lbl_prescribed_chem: "Prescribed Chemical:",
    lbl_vra_title: "Precision Variable Rate Application (VRA) Map",
    orders_title: "My Spray Bookings & Tax Invoices",
    col_booking_id: "Booking ID",
    col_farm_plot: "Farm Plot",
    col_service_crop: "Service & Crop",
    col_acreage: "Acreage",
    col_date: "Date",
    col_total_fee: "Total Fee",
    col_status: "Status",
    col_invoice: "Invoice",
    btn_spray: "Spray",
    btn_rth: "Return To Home",
    btn_pause_sim: "Pause Sim",
    lbl_battery_lvl: "Battery Level",
    lbl_tank_lvl: "Spray Tank Level",
    btn_motors_armed: "🟢 MOTORS ARMED",
    btn_auto_sweep: "🚀 AUTO SWEEP",
    lbl_dgca_clearance: "Pre-Flight DGCA Clearance",
    status_passed: "PASSED",
    invoice_title: "Official Agricultural Service Tax Invoice",
    btn_print_pdf: "🖨️ Print / Download PDF"
  },
  hi: {
    name: "हिन्दी",
    flag: "🇮🇳",
    splash_tagline: "स्वायत्त सटीक कृषि ड्रोन प्रणाली",
    splash_skip: "छोड़ें ⏭️",
    btn_replay_intro: "परिचय",
    gateway_title: "एग्रोड्रोन प्रवेश द्वार",
    app_subtitle: "स्वायत्त कृषि ड्रोन सेवा और फसल स्वास्थ्य मंच",
    farmer_login_tab: "किसान लॉगिन",
    farmer_login_sub: "छिड़काव बुक करें व उड़ान ट्रैक करें",
    pilot_login_tab: "पायलट / ड्रोन लॉगिन",
    pilot_login_sub: "टेलीमेट्री एचयूडी और कॉकपिट",
    farmer_banner_title: "🌾 किसानफ्लाई कृषि सेवाएँ",
    farmer_banner_desc: "25% सरकारी सब्सिडी के साथ ड्रोन कीटनाशक/उर्वरक छिड़काव बुक करें, लाइव ट्रैक करें और फसल स्वास्थ्य जांचें।",
    drone_banner_title: "🛸 पायलट और ड्रोन टेलीमेट्री लिंक",
    drone_banner_desc: "उड़ान नियंत्रक को ड्रोन से जोड़ें, आरटीके टेलीमेट्री मॉनिटर करें और स्वचालित ग्रिड छिड़काव चलाएं।",
    lbl_farmer_email: "किसान मोबाइल नंबर या ईमेल",
    ph_farmer_email: "मोबाइल नंबर या ईमेल दर्ज करें",
    lbl_password: "पासवर्ड",
    ph_password: "पासवर्ड दर्ज करें",
    lbl_remember_farm: "मेरा खेत याद रखें",
    btn_farmer_login: "किसान पोर्टल में प्रवेश करें",
    btn_farmer_demo: "⚡ रमेश पटेल (कपास किसान) के रूप में एक-क्लिक डेमो लॉगिन",
    perk_subsidy: "✔️ 25% सरकारी कृषि सब्सिडी",
    perk_tracking: "✔️ लाइव जीपीएस ट्रैकिंग",
    perk_ai_doctor: "✔️ एआई फसल डॉक्टर",
    lbl_pilot_license: "डीजीसीए पायलट लाइसेंस नंबर",
    lbl_paired_drone: "जोड़ा गया वाणिज्यिक ड्रोन चुनें",
    lbl_controller_pin: "फ़्लाइट कंट्रोलर पिन",
    btn_drone_login: "कनेक्ट करें और कॉकपिट आर्म करें",
    btn_drone_demo: "⚡ कैप्टन विक्रम (पायलट) के रूप में डेमो लॉगिन",
    perk_rtk: "✔️ आरटीके फिक्स्ड जीपीएस (18 उपग्रह)",
    perk_radar: "✔️ 360° बाधा बचाव रडार",
    perk_autonomous: "✔️ स्वचालित ग्रिड छिड़काव",
    status_telemetry_live: "लाइव टेलीमेट्री",
    weather_safe: "सुरक्षित",
    btn_logout: "लॉग आउट",
    kpi_active_mission: "सक्रिय मिशन",
    kpi_my_acreage: "मेरे खेत का क्षेत्रफल",
    kpi_total_acreage: "कुल क्षेत्रफल",
    kpi_govt_subsidy: "सरकारी सब्सिडी",
    kpi_safety_window: "उड़ान सुरक्षा खिड़की",
    status_cleared: "मंजूर",
    tab_book_spray: "📝 ड्रोन छिड़काव बुक करें",
    tab_live_track: "📍 लाइव उड़ान ट्रैकिंग",
    tab_ai_doctor: "🧠 एआई फसल डॉक्टर (NDVI)",
    tab_my_orders: "📜 मेरे आदेश और बिल",
    book_title: "🚜 उच्च-उत्पादन ड्रोन छिड़काव बुक करें",
    book_desc: "स्वायत्त 40L कृषि ड्रोन सटीक बूंद छिड़काव करते हैं, जिससे 90% पानी और 38% दवा की बचत होती है।",
    lbl_farm_parcel: "पंजीकृत खेत पार्सल",
    lbl_service_type: "सेवा का प्रकार",
    opt_service_pesticide: "कीटनाशक छिड़काव (₹300/एकड़)",
    opt_service_fertilizer: "तरल उर्वरक / नैनो यूरिया (₹300/एकड़)",
    opt_service_scouting: "एआई मल्टीस्पेक्ट्रल फसल जांच (₹200/एकड़)",
    opt_service_thermal: "थर्मल नमी इमेजिंग (₹250/एकड़)",
    lbl_area_acres: "छिड़काव क्षेत्र (एकड़)",
    lbl_flight_date: "पसंदीदा उड़ान तिथि",
    lbl_flight_slot: "पसंदीदा समय स्लॉट (मौसम सलाह)",
    opt_slot_morning_calm: "06:00 - 08:30 AM (शांत हवा - अत्यधिक अनुशंसित)",
    opt_slot_morning_clear: "08:30 - 11:00 AM (सुबह साफ)",
    opt_slot_evening: "04:00 - 06:30 PM (शाम की ओस)",
    lbl_base_fee: "मूल छिड़काव शुल्क:",
    lbl_subsidy_amt: "सरकारी ड्रोन सब्सिडी (25% SMAM):",
    lbl_final_payable: "किसान देय अंतिम राशि:",
    btn_dispatch_drone: "पुष्टि करें और ड्रोन मिशन भेजें",
    track_title: "लाइव ट्रैकिंग: टाइटन T-40 खेत #1 पर छिड़काव कर रहा है",
    lbl_pilot_contact: "पायलट संपर्क: +91 9811223344",
    lbl_altitude: "ऊंचाई",
    lbl_speed: "जमीनी गति",
    lbl_spray_rate: "छिड़काव दर",
    lbl_progress: "प्रगति",
    lbl_est_completion: "अनुमानित समय",
    lbl_assigned_pilot: "नियुक्त पायलट और ड्रोन",
    btn_call_pilot: "📞 ड्रोन पायलट को कॉल करें",
    lbl_crop: "फसल",
    lbl_chemical: "रसायन",
    lbl_safety: "सुरक्षा स्थिति",
    ai_title: "मल्टीस्पेक्ट्रल एआई कैनोपी स्कैन (NDVI विश्लेषण)",
    btn_toggle_ndvi: "NDVI ओवरले बदलें",
    btn_scan_field: "वर्तमान खेत स्कैन करें",
    lbl_ndvi_score: "वनस्पति सूचकांक (NDVI):",
    lbl_canopy_cov: "कैनोपी कवरेज:",
    lbl_pest_alert: "⚠️ कीट चेतावनी: पिंक बॉलवर्म (शुरुआती चरण)",
    lbl_pest_desc: "ग्रीन वैली कॉटन खेत के उत्तर-पूर्व क्षेत्र में कीट समूह का पता चला।",
    lbl_prescribed_chem: "अनुशंसित रसायन:",
    lbl_vra_title: "परिशुद्ध परिवर्तनीय दर छिड़काव (VRA) मानचित्र",
    orders_title: "मेरी बुकिंग और टैक्स इनवॉइस",
    col_booking_id: "बुकिंग आईडी",
    col_farm_plot: "खेत",
    col_service_crop: "सेवा और फसल",
    col_acreage: "एकड़",
    col_date: "तारीख",
    col_total_fee: "कुल शुल्क",
    col_status: "स्थिति",
    col_invoice: "इनवॉइस",
    btn_spray: "छिड़काव",
    btn_rth: "घर लौटें (RTH)",
    btn_pause_sim: "रोकें",
    lbl_battery_lvl: "बैटरी स्तर",
    lbl_tank_lvl: "स्प्रे टैंक स्तर",
    btn_motors_armed: "🟢 मोटर चालू",
    btn_auto_sweep: "🚀 स्वतः छिड़काव",
    lbl_dgca_clearance: "उड़ान पूर्व डीजीसीए मंजूरी",
    status_passed: "सफल",
    invoice_title: "आधिकारिक कृषि सेवा टैक्स इनवॉइस",
    btn_print_pdf: "🖨️ प्रिंट / पीडीएफ डाउनलोड करें"
  },
  te: {
    name: "తెలుగు",
    flag: "🇮🇳",
    splash_tagline: "స్వయంప్రతిపత్త కచ్చితమైన వ్యవసాయ డ్రోన్ వ్యవస్థ",
    splash_skip: "దాటవేయి ⏭️",
    btn_replay_intro: "పరిచయం",
    gateway_title: "అగ్రోడ్రోన్ గేట్‌వే",
    app_subtitle: "రైతులు మరియు పైలట్ల వ్యవసాయ డ్రోన్ వేదిక",
    farmer_login_tab: "రైతు లాగిన్",
    farmer_login_sub: "స్ప్రే బుక్ చేయండి & ట్రాక్ చేయండి",
    pilot_login_tab: "పైలట్ / డ్రోన్ లాగిన్",
    pilot_login_sub: "టెలిమెట్రీ మరియు కాక్‌పిట్",
    farmer_banner_title: "🌾 కిసాన్‌ఫ్లై రైతు సేవలు",
    farmer_banner_desc: "25% ప్రభుత్వ సబ్సిడీతో డ్రోన్ పిచికారీ బుక్ చేయండి, లైవ్ ట్రాకింగ్ చేయండి మరియు పంట ఆరోగ్యాన్ని తనిఖీ చేయండి.",
    drone_banner_title: "🛸 పైలట్ & డ్రోన్ టెలిమెట్రీ లింక్",
    drone_banner_desc: "డ్రోన్ హార్డ్‌వేర్‌ను కనెక్ట్ చేయండి, ఆర్టీకే టెలిమెట్రీని పర్యవేక్షించండి మరియు ఆటోమేటిక్ గ్రిడ్ స్ప్రే ప్రారంభించండి.",
    lbl_farmer_email: "రైతు మొబైల్ లేదా ఈమెయిల్",
    ph_farmer_email: "మొబైల్ లేదా ఈమెయిల్ నమోదు చేయండి",
    lbl_password: "పాస్‌వర్డ్",
    ph_password: "పాస్‌వర్డ్ నమోదు చేయండి",
    lbl_remember_farm: "నా పొలం వివరాలు గుర్తుంచుకో",
    btn_farmer_login: "రైతు పోర్టల్ లాగిన్",
    btn_farmer_demo: "⚡ రమేష్ పటేల్ (పత్తి రైతు) డెమో లాగిన్",
    perk_subsidy: "✔️ 25% ప్రభుత్వ సబ్సిడీ",
    perk_tracking: "✔️ లైవ్ జీపీఎస్ ట్రాకింగ్",
    perk_ai_doctor: "✔️ ఏఐ పంట డాక్టర్",
    lbl_pilot_license: "డీజీసీఏ పైలట్ లైసెన్స్ సంఖ్య",
    lbl_paired_drone: "డ్రోన్ ఎంచుకోండి",
    lbl_controller_pin: "ఫ్లైట్ పిన్",
    btn_drone_login: "కాక్‌పిట్ కనెక్ట్ చేయండి",
    btn_drone_demo: "⚡ విక్రమ్ (పైలట్) డెమో లాగిన్",
    perk_rtk: "✔️ ఆర్టీకే జీపీఎస్ (18 ఉపగ్రహాలు)",
    perk_radar: "✔️ 360° రాడార్",
    perk_autonomous: "✔️ ఆటోమేటిక్ స్ప్రే",
    status_telemetry_live: "లైవ్ టెలిమెట్రీ",
    weather_safe: "సురక్షితం",
    btn_logout: "లాగ్ అవుట్",
    kpi_active_mission: "ప్రస్తుత మిషన్",
    kpi_my_acreage: "నా పొలం విస్తీర్ణం",
    kpi_total_acreage: "మొత్తం ఎకరాలు",
    kpi_govt_subsidy: "ప్రభుత్వ సబ్సిడీ",
    kpi_safety_window: "వాతావరణ భద్రత",
    status_cleared: "అనుమతించబడింది",
    tab_book_spray: "📝 డ్రోన్ పిచికారీ బుక్ చేయండి",
    tab_live_track: "📍 లైవ్ విమాన ట్రాకింగ్",
    tab_ai_doctor: "🧠 ఏఐ పంట డాక్టర్ (NDVI)",
    tab_my_orders: "📜 నా ఆర్డర్లు & రసీదులు",
    book_title: "🚜 డ్రోన్ పిచికారీ బుకింగ్",
    book_desc: "40 లీటర్ల డ్రోన్‌లు 90% నీటిని మరియు 38% మందులను ఆదా చేస్తాయి.",
    lbl_farm_parcel: "నమోదిత పొలం",
    lbl_service_type: "సేవ రకం",
    opt_service_pesticide: "పురుగుమందుల పిచికారీ (₹300/ఎకరా)",
    opt_service_fertilizer: "ద్రవ ఎరువులు / నానో యూరియా (₹300/ఎకరా)",
    opt_service_scouting: "ఏఐ పంట సర్వే (₹200/ఎకరా)",
    opt_service_thermal: "థర్మల్ తేమ ఇమేజింగ్ (₹250/ఎకరా)",
    lbl_area_acres: "విస్తీర్ణం (ఎకరాలు)",
    lbl_flight_date: "తేదీ",
    lbl_flight_slot: "సమయం",
    opt_slot_morning_calm: "06:00 - 08:30 AM (అత్యంత అనుకూలం)",
    opt_slot_morning_clear: "08:30 - 11:00 AM (ఉదయం)",
    opt_slot_evening: "04:00 - 06:30 PM (సాయంత్రం)",
    lbl_base_fee: "సేవా రుసుము:",
    lbl_subsidy_amt: "ప్రభుత్వ సబ్సిడీ (25%):",
    lbl_final_payable: "చెల్లించవలసిన మొత్తం:",
    btn_dispatch_drone: "మిషన్ నిర్ధారించండి",
    track_title: "లైవ్ ట్రాకింగ్: టైటాన్ T-40 పిచికారీ జరుగుతోంది",
    lbl_pilot_contact: "పైలట్ సంప్రదించండి: +91 9811223344",
    lbl_altitude: "ఎత్తు",
    lbl_speed: "వేగం",
    lbl_spray_rate: "స్ప్రే రేటు",
    lbl_progress: "పురోగతి",
    lbl_est_completion: "మిగిలిన సమయం",
    lbl_assigned_pilot: "కేటాయించిన పైలట్ & డ్రోన్",
    btn_call_pilot: "📞 పైలట్‌కు కాల్ చేయండి",
    lbl_crop: "పంట",
    lbl_chemical: "మందు",
    lbl_safety: "భద్రత",
    ai_title: "ఏఐ పంట స్కాన్ (NDVI విశ్లేషణ)",
    btn_toggle_ndvi: "NDVI మార్చండి",
    btn_scan_field: "పొలం స్కాన్ చేయండి",
    lbl_ndvi_score: "పంట ఆరోగ్య సూచిక (NDVI):",
    lbl_canopy_cov: "పంట సాంద్రత:",
    lbl_pest_alert: "⚠️ పురుగుల హెచ్చరిక: గులాబీ రంగు పురుగు",
    lbl_pest_desc: "పత్తి పంట ఈశాన్య భాగంలో పురుగులు గుర్తించబడ్డాయి.",
    lbl_prescribed_chem: "సిఫార్సు చేసిన మందు:",
    lbl_vra_title: "ఖచ్చితమైన స్ప్రే మ్యాప్ (VRA)",
    orders_title: "నా బుకింగ్స్ & ఇన్వాయిస్‌లు",
    col_booking_id: "బుకింగ్ నంబర్",
    col_farm_plot: "పొలం",
    col_service_crop: "సేవ & పంట",
    col_acreage: "ఎకరాలు",
    col_date: "తేదీ",
    col_total_fee: "మొత్తం రుసుము",
    col_status: "స్థితి",
    col_invoice: "ఇన్వాయిస్",
    btn_spray: "స్ప్రే",
    btn_rth: "తిరిగి రండి",
    btn_pause_sim: "ఆపండి",
    lbl_battery_lvl: "బ్యాటరీ స్థాయి",
    lbl_tank_lvl: "ట్యాంక్ స్థాయి",
    btn_motors_armed: "🟢 మోటార్లు సిద్ధం",
    btn_auto_sweep: "🚀 ఆటో స్వీప్",
    lbl_dgca_clearance: "డీజీసీఏ క్లియరెన్స్",
    status_passed: "పాస్",
    invoice_title: "వ్యవసాయ సేవా పన్ను రసీదు",
    btn_print_pdf: "🖨️ ప్రింట్ / డౌన్‌లోడ్"
  },
  ta: {
    name: "தமிழ்",
    flag: "🇮🇳",
    splash_tagline: "தன்னியக்க துல்லிய விவசாய ட்ரோன் இயங்குதளம்",
    splash_skip: "தவிர் ⏭️",
    btn_replay_intro: "அறிமுகம்",
    gateway_title: "அக்ரோட்ரோன் நுழைவுவாயில்",
    app_subtitle: "விவசாயிகளுக்கான தன்னியக்க ட்ரோன் தெளிப்பு சேவை",
    farmer_login_tab: "விவசாயி உள்நுழைவு",
    farmer_login_sub: "தெளிப்பு பதிவு & கண்காணிப்பு",
    pilot_login_tab: "விமானி / ட்ரோன் உள்நுழைவு",
    pilot_login_sub: "டெலிமெட்ரி & கட்டுப்பாட்டகம்",
    farmer_banner_title: "🌾 கிசான்ஃபிளை விவசாய சேவைகள்",
    farmer_banner_desc: "25% அரசு மானியத்துடன் ட்ரோன் தெளிப்பை முன்பதிவு செய்யுங்கள், பயிர் ஆரோக்கியத்தை கண்காணிக்கவும்.",
    drone_banner_title: "🛸 விமானி மற்றும் ட்ரோன் இணைப்பு",
    drone_banner_desc: "ட்ரோனை இணைக்கவும், ஆர்டிகே டெலிமெட்ரியை கண்காணிக்கவும் மற்றும் தானியங்கி தெளிப்பை இயக்கவும்.",
    lbl_farmer_email: "கைபேசி எண் அல்லது மின்னஞ்சல்",
    ph_farmer_email: "எண் அல்லது மின்னஞ்சல் உள்ளிடவும்",
    lbl_password: "கடவுச்சொல்",
    ph_password: "கடவுச்சொல் உள்ளிடவும்",
    lbl_remember_farm: "நினைவில் வைக்கவும்",
    btn_farmer_login: "விவசாயி தளத்தில் நுழைக",
    btn_farmer_demo: "⚡ ரமேஷ் படேல் டெமோ உள்நுழைவு",
    perk_subsidy: "✔️ 25% அரசு மானியம்",
    perk_tracking: "✔️ நேரலை ஜிபிஎஸ்",
    perk_ai_doctor: "✔️ AI பயிர் மருத்துவர்",
    lbl_pilot_license: "DGCA உரிம எண்",
    lbl_paired_drone: "ட்ரோனைத் தேர்ந்தெடுக்கவும்",
    lbl_controller_pin: "அணுகல் பின் (PIN)",
    btn_drone_login: "கட்டுப்பாட்டகத்தை இயக்கு",
    btn_drone_demo: "⚡ விக்ரம் (விமானி) டெமோ உள்நுழைவு",
    perk_rtk: "✔️ ஆர்டிகே ஜிபிஎஸ் (18 செயற்கைக்கோள்கள்)",
    perk_radar: "✔️ 360° ரேடார்",
    perk_autonomous: "✔️ தானியங்கி தெளிப்பு",
    status_telemetry_live: "நேரலை டெலிமெட்ரி",
    weather_safe: "பாதுகாப்பானது",
    btn_logout: "வெளியேறு",
    kpi_active_mission: "செயலில் உள்ள பணி",
    kpi_my_acreage: "என் பண்ணை பரப்பளவு",
    kpi_total_acreage: "மொத்த பரப்பளவு",
    kpi_govt_subsidy: "அரசு மானியம்",
    kpi_safety_window: "வானிலை பாதுகாப்பு",
    status_cleared: "அனுமதிக்கப்பட்டது",
    tab_book_spray: "📝 ட்ரோன் தெளிப்பு பதிவு",
    tab_live_track: "📍 நேரலை விமான கண்காணிப்பு",
    tab_ai_doctor: "🧠 AI பயிர் மருத்துவர் (NDVI)",
    tab_my_orders: "📜 என் பதிவுகள் & ரசீதுகள்",
    book_title: "🚜 ட்ரோன் தெளிப்பு முன்பதிவு",
    book_desc: "40L விவசாய ட்ரோன்கள் 90% நீர் மற்றும் 38% மருந்துகளை சேமிக்கின்றன.",
    lbl_farm_parcel: "பதிவு செய்யப்பட்ட பண்ணை",
    lbl_service_type: "சேவை வகை",
    opt_service_pesticide: "பூச்சிக்கொல்லி தெளிப்பு (₹300/ஏக்கர்)",
    opt_service_fertilizer: "திரவ உரம் / நானோ யூரியா (₹300/ஏக்கர்)",
    opt_service_scouting: "AI பயிர் ஆய்வு (₹200/ஏக்கர்)",
    opt_service_thermal: "வெப்ப ஈரப்பதம் படம் (₹250/ஏக்கர்)",
    lbl_area_acres: "பரப்பளவு (ஏக்கர்)",
    lbl_flight_date: "தேதி",
    lbl_flight_slot: "நேரம்",
    opt_slot_morning_calm: "06:00 - 08:30 AM (சிறந்தது)",
    opt_slot_morning_clear: "08:30 - 11:00 AM (காலை)",
    opt_slot_evening: "04:00 - 06:30 PM (மாலை)",
    lbl_base_fee: "அடிப்படை கட்டணம்:",
    lbl_subsidy_amt: "அரசு மானியம் (25%):",
    lbl_final_payable: "செலுத்த வேண்டிய தொகை:",
    btn_dispatch_drone: "பணியை உறுதிசெய்",
    track_title: "நேரலை கண்காணிப்பு: டைட்டன் T-40 தெளிக்கிறது",
    lbl_pilot_contact: "விமானி தொடர்பு: +91 9811223344",
    lbl_altitude: "உயரம்",
    lbl_speed: "வேகம்",
    lbl_spray_rate: "தெளிப்பு வீதம்",
    lbl_progress: "முன்னேற்றம்",
    lbl_est_completion: "மதிப்பிடப்பட்ட நேரம்",
    lbl_assigned_pilot: "நியமிக்கப்பட்ட விமானி",
    btn_call_pilot: "📞 விமானியை அழைக்கவும்",
    lbl_crop: "பயிர்",
    lbl_chemical: "மருந்து",
    lbl_safety: "பாதுகாப்பு நிலை",
    ai_title: "AI பயிர் ஸ்கேன் (NDVI பகுப்பாய்வு)",
    btn_toggle_ndvi: "NDVI அடுக்கு மாற்று",
    btn_scan_field: "பண்ணையை ஸ்கேன் செய்",
    lbl_ndvi_score: "பயிர் குறியீடு (NDVI):",
    lbl_canopy_cov: "பயிர் அடர்த்தி:",
    lbl_pest_alert: "⚠️ பூச்சி எச்சரிக்கை: பிங்க் காய்ப்புழு",
    lbl_pest_desc: "பருத்தி வயலின் வடகிழக்கு பகுதியில் பூச்சிகள் கண்டறியப்பட்டன.",
    lbl_prescribed_chem: "பரிந்துரைக்கப்பட்ட மருந்து:",
    lbl_vra_title: "துல்லிய தெளிப்பு வரைபடம் (VRA)",
    orders_title: "என் முன்பதிவுகள் & விலைப்பட்டியல்",
    col_booking_id: "பதிவு எண்",
    col_farm_plot: "பண்ணை",
    col_service_crop: "சேவை & பயிர்",
    col_acreage: "ஏக்கர்",
    col_date: "தேதி",
    col_total_fee: "மொத்த கட்டணம்",
    col_status: "நிலை",
    col_invoice: "ரசீது",
    btn_spray: "தெளிப்பு",
    btn_rth: "திரும்பு (RTH)",
    btn_pause_sim: "நிறுத்து",
    lbl_battery_lvl: "பேட்டரி நிலை",
    lbl_tank_lvl: "தெளிப்பான் தொட்டி நிலை",
    btn_motors_armed: "🟢 மோட்டார் இயக்கப்பட்டது",
    btn_auto_sweep: "🚀 தானியங்கி தெளிப்பு",
    lbl_dgca_clearance: "DGCA ஒப்புதல்",
    status_passed: "தேர்ச்சி",
    invoice_title: "அதிகாரப்பூர்வ சேவை வரி ரசீது",
    btn_print_pdf: "🖨️ அச்சிடு / பதிவிறக்கு"
  },
  mr: {
    name: "मराठी",
    flag: "🇮🇳",
    splash_tagline: "स्वायत्त अचूक शेती ड्रोन प्रणाली",
    splash_skip: "वगळा ⏭️",
    btn_replay_intro: "प्रस्तावना",
    gateway_title: "ॲग्रोड्रोन प्रवेशद्वार",
    app_subtitle: "शेतकऱ्यांसाठी स्वायत्त ड्रोन फवारणी सेवा",
    farmer_login_tab: "शेतकरी लॉगिन",
    farmer_login_sub: "फवारणी बुक करा व ट्रॅक करा",
    pilot_login_tab: "पायलट / ड्रोन लॉगिन",
    pilot_login_sub: "टेलिमेट्री व कॉकपिट",
    farmer_banner_title: "🌾 किसानफ्लाय शेतकरी सेवा",
    farmer_banner_desc: "२५% शासकीय अनुदानासह ड्रोन फवारणी बुक करा, थेट ट्रॅकिंग करा आणि पीक आरोग्य तपासा.",
    drone_banner_title: "🛸 पायलट आणि ड्रोन टेलिमेट्री लिंक",
    drone_banner_desc: "ड्रोन कनेक्ट करा, आरटीके टेलिमेट्री तपासा आणि स्वयंचलित ग्रिड फवारणी सुरू करा.",
    lbl_farmer_email: "शेतकरी मोबाइल नंबर किंवा ईमेल",
    ph_farmer_email: "मोबाइल किंवा ईमेल टाका",
    lbl_password: "पासवर्ड",
    ph_password: "पासवर्ड टाका",
    lbl_remember_farm: "माझे शेत लक्षात ठेवा",
    btn_farmer_login: "शेतकरी पोर्टल लॉगिन",
    btn_farmer_demo: "⚡ रमेश पटेल (कापूस शेतकरी) डेमो लॉगिन",
    perk_subsidy: "✔️ २५% शासकीय अनुदान",
    perk_tracking: "✔️ थेट जीपीएस ट्रॅकिंग",
    perk_ai_doctor: "✔️ एआय पीक डॉक्टर",
    lbl_pilot_license: "DGCA पायलट परवाना क्रमांक",
    lbl_paired_drone: "ड्रोन निवडा",
    lbl_controller_pin: "फ्लाइट पिन",
    btn_drone_login: "कॉकपिट कनेक्ट करा",
    btn_drone_demo: "⚡ कॅप्टन विक्रम डेमो लॉगिन",
    perk_rtk: "✔️ आरटीके जीपीएस (१८ उपग्रह)",
    perk_radar: "✔️ ३६०° रडार",
    perk_autonomous: "✔️ स्वयंचलित फवारणी",
    status_telemetry_live: "थेट टेलिमेट्री",
    weather_safe: "सुरक्षित",
    btn_logout: "लॉग आउट",
    kpi_active_mission: "सक्रिय मिशन",
    kpi_my_acreage: "माझे क्षेत्रफळ",
    kpi_total_acreage: "एकूण क्षेत्र",
    kpi_govt_subsidy: "शासकीय अनुदान",
    kpi_safety_window: "उड्डाण सुरक्षा",
    status_cleared: "मंजूर",
    tab_book_spray: "📝 ड्रोन फवारणी बुक करा",
    tab_live_track: "📍 थेट उड्डाण ट्रॅकिंग",
    tab_ai_doctor: "🧠 एआय पीक डॉक्टर (NDVI)",
    tab_my_orders: "📜 माझ्या ऑर्डर्स व पावत्या",
    book_title: "🚜 ड्रोन फवारणी बुकिंग",
    book_desc: "४० लिटर क्षमतेचे ड्रोन ९०% पाणी व ३८% औषधांची बचत करतात.",
    lbl_farm_parcel: "नोंदणीकृत शेत",
    lbl_service_type: "सेवेचा प्रकार",
    opt_service_pesticide: "कीटकनाशक फवारणी (₹३००/एकर)",
    opt_service_fertilizer: "द्रव खत / नॅनो युरिया (₹३००/एकर)",
    opt_service_scouting: "एआय पीक पाहणी (₹२००/एकर)",
    opt_service_thermal: "थर्मल ओलावा तपासणी (₹२५०/एकर)",
    lbl_area_acres: "क्षेत्र (एकर)",
    lbl_flight_date: "उड्डाणाची तारीख",
    lbl_flight_slot: "वेळ",
    opt_slot_morning_calm: "०६:०० - ०८:३० AM (शांत हवा - उत्तम)",
    opt_slot_morning_clear: "०८:३० - ११:०० AM (सकाळ)",
    opt_slot_evening: "०४:०० - ०६:३० PM (संध्याकाळ)",
    lbl_base_fee: "मूळ सेवा शुल्क:",
    lbl_subsidy_amt: "शासकीय अनुदान (२५%):",
    lbl_final_payable: "शेतकऱ्यास देय रक्कम:",
    btn_dispatch_drone: "मिशन निश्चित करा",
    track_title: "थेट ट्रॅकिंग: टायटन T-40 फवारणी सुरू आहे",
    lbl_pilot_contact: "पायलट संपर्क: +91 9811223344",
    lbl_altitude: "उंची",
    lbl_speed: "गती",
    lbl_spray_rate: "फवारणी दर",
    lbl_progress: "प्रगती",
    lbl_est_completion: "अंदाजे वेळ",
    lbl_assigned_pilot: "पायलट व ड्रोन",
    btn_call_pilot: "📞 पायलटला कॉल करा",
    lbl_crop: "पीक",
    lbl_chemical: "औषध",
    lbl_safety: "सुरक्षा स्थिती",
    ai_title: "मल्टीस्पेक्ट्रल पीक तपासणी (NDVI)",
    btn_toggle_ndvi: "NDVI बदला",
    btn_scan_field: "शेत स्कॅन करा",
    lbl_ndvi_score: "पीक आरोग्य निर्देशांक:",
    lbl_canopy_cov: "कॅनॉपी कव्हरेज:",
    lbl_pest_alert: "⚠️ कीड इशारा: बोंडअळी प्रादुर्भाव",
    lbl_pest_desc: "कापूस शेतात ईशान्य भागात कीड आढळली.",
    lbl_prescribed_chem: "शिफारस केलेले औषध:",
    lbl_vra_title: "अचूक फवारणी नकाशा (VRA)",
    orders_title: "माझ्या फवारणी नोंदी व बिल",
    col_booking_id: "बुकिंग क्रमांक",
    col_farm_plot: "शेत",
    col_service_crop: "सेवा व पीक",
    col_acreage: "एकर",
    col_date: "तारीख",
    col_total_fee: "एकूण शुल्क",
    col_status: "स्थिती",
    col_invoice: "पावती",
    btn_spray: "फवारणी",
    btn_rth: "घरी परत (RTH)",
    btn_pause_sim: "थांबवा",
    lbl_battery_lvl: "बॅटरी पातळी",
    lbl_tank_lvl: "टाकी पातळी",
    btn_motors_armed: "🟢 मोटर्स सुरू",
    btn_auto_sweep: "🚀 स्वयंचलित फवारणी",
    lbl_dgca_clearance: "DGCA मंजुरी",
    status_passed: "उत्तीर्ण",
    invoice_title: "अधिकृत कृषी सेवा कर पावती",
    btn_print_pdf: "🖨️ प्रिंट / पीडीएफ डाउनलोड"
  },
  gu: {
    name: "ગુજરાતી",
    flag: "🇮🇳",
    splash_tagline: "સ્વાયત્ત ચોક્કસ કૃષિ ડ્રોન સિસ્ટમ",
    splash_skip: "છોડો ⏭️",
    btn_replay_intro: "પરિચય",
    gateway_title: "એગ્રોડ્રોન ગેટવે",
    app_subtitle: "ખેડૂતો અને પાઇલટ્સ માટે સ્વાયત્ત ડ્રોન પ્લેટફોર્મ",
    farmer_login_tab: "ખેડૂત લૉગિન",
    farmer_login_sub: "સ્પ્રે બુક કરો અને ટ્રેક કરો",
    pilot_login_tab: "પાઇલટ / ડ્રોન લૉગિન",
    pilot_login_sub: "ટેલિમેટ્રી અને કંટ્રોલ રૂમ",
    farmer_banner_title: "🌾 કિસાનફ્લાય કૃષિ સેવાઓ",
    farmer_banner_desc: "25% સરકારી સબસિડી સાથે ડ્રોન છંટકાવ બુક કરો, લાઇવ ટ્રેક કરો અને પાક સ્વાસ્થ્ય ચકાસો.",
    drone_banner_title: "🛸 પાઇલટ અને ડ્રોન ટેલિમેટ્રી લિંક",
    drone_banner_desc: "ડ્રોન કનેક્ટ કરો, RTK ટેલિમેટ્રી મોનિટર કરો અને ઓટોમેટિક સ્પ્રે ચલાવો.",
    lbl_farmer_email: "મોબાઇલ નંબર અથવા ઇમેઇલ",
    ph_farmer_email: "મોબાઇલ અથવા ઇમેઇલ દાખલ કરો",
    lbl_password: "પાસવર્ડ",
    ph_password: "પાસવર્ડ દાખલ કરો",
    lbl_remember_farm: "મારું ખેતર યાદ રાખો",
    btn_farmer_login: "ખેડૂત પોર્ટલમાં લૉગિન કરો",
    btn_farmer_demo: "⚡ રમેશ પટેલ ડેમો લૉગિન",
    perk_subsidy: "✔️ 25% સરકારી સબસિડી",
    perk_tracking: "✔️ લાઇવ GPS ટ્રેકિંગ",
    perk_ai_doctor: "✔️ AI પાક ડૉક્ટર",
    lbl_pilot_license: "DGCA પાઇલટ લાઇસન્સ નંબર",
    lbl_paired_drone: "ડ્રોન પસંદ કરો",
    lbl_controller_pin: "ફ્લાઇટ પિન",
    btn_drone_login: "કૉકપિટ કનેક્ટ કરો",
    btn_drone_demo: "⚡ કેપ્ટન વિક્રમ ડેમો લૉગિન",
    perk_rtk: "✔️ RTK GPS (18 સેટેલાઇટ)",
    perk_radar: "✔️ 360° રડાર",
    perk_autonomous: "✔️ સ્વચાલિત છંટકાવ",
    status_telemetry_live: "લાઇવ ટેલિમેટ્રી",
    weather_safe: "સુરક્ષિત",
    btn_logout: "લૉગ આઉટ",
    kpi_active_mission: "સક્રિય મિશન",
    kpi_my_acreage: "મારા ખેતરનું ક્ષેત્રફળ",
    kpi_total_acreage: "કુલ ક્ષેત્રફળ",
    kpi_govt_subsidy: "સરકારી સબસિડી",
    kpi_safety_window: "હવામાન સુરક્ષા",
    status_cleared: "મંજૂર",
    tab_book_spray: "📝 ડ્રોન છંટકાવ બુક કરો",
    tab_live_track: "📍 લાઇવ ફ્લાઇટ ટ્રેકિંગ",
    tab_ai_doctor: "🧠 AI પાક ડૉક્ટર (NDVI)",
    tab_my_orders: "📜 મારા ઓર્ડર અને બિલ",
    book_title: "🚜 ડ્રોન છંટકાવ બુકિંગ",
    book_desc: "40L ક્ષમતાવાળા ડ્રોન 90% પાણી અને 38% દવાની બચત કરે છે.",
    lbl_farm_parcel: "નોંધાયેલ ખેતર",
    lbl_service_type: "સેવાનો પ્રકાર",
    opt_service_pesticide: "જંતુનાશક છંટકાવ (₹300/એકર)",
    opt_service_fertilizer: "પ્રવાહી ખાતર / નેનો યુરિયા (₹300/એકર)",
    opt_service_scouting: "AI પાક સર્વેક્ષણ (₹200/એકર)",
    opt_service_thermal: "થર્મલ ભેજ ઇમેજિંગ (₹250/એકર)",
    lbl_area_acres: "વિસ્તાર (એકર)",
    lbl_flight_date: "તારીખ",
    lbl_flight_slot: "સમય",
    opt_slot_morning_calm: "06:00 - 08:30 AM (શાંત પવન - શ્રેષ્ઠ)",
    opt_slot_morning_clear: "08:30 - 11:00 AM (સવાર)",
    opt_slot_evening: "04:00 - 06:30 PM (સાંજ)",
    lbl_base_fee: "મૂળ સેવા ફી:",
    lbl_subsidy_amt: "સરકારી સબસિડી (25%):",
    lbl_final_payable: "ખેડૂતે ચૂકવવાની રકમ:",
    btn_dispatch_drone: "મિશન કન્ફર્મ કરો",
    track_title: "લાઇવ ટ્રેકિંગ: ટાઇટન T-40 સ્પ્રે કરી રહ્યું છે",
    lbl_pilot_contact: "પાઇલટ સંપર્ક: +91 9811223344",
    lbl_altitude: "ઊંચાઈ",
    lbl_speed: "ઝડપ",
    lbl_spray_rate: "સ્પ્રે દર",
    lbl_progress: "પ્રગતિ",
    lbl_est_completion: "બાકી સમય",
    lbl_assigned_pilot: "નિયુક્ત પાઇલટ અને ડ્રોન",
    btn_call_pilot: "📞 પાઇલટને કૉલ કરો",
    lbl_crop: "પાક",
    lbl_chemical: "રસાયણ",
    lbl_safety: "સુરક્ષા",
    ai_title: "AI પાક સ્કેન (NDVI વિશ્લેષણ)",
    btn_toggle_ndvi: "NDVI બદલો",
    btn_scan_field: "ખેતર સ્કેન કરો",
    lbl_ndvi_score: "પાક સૂચકાંક (NDVI):",
    lbl_canopy_cov: "પાક ઘનતા:",
    lbl_pest_alert: "⚠️ જીવાત ચેતવણી: ગુલાબી ઈયળ",
    lbl_pest_desc: "કપાસના ખેતરમાં પૂર્વોત્તર ભાગમાં જીવાત મળી.",
    lbl_prescribed_chem: "ભલામણ કરેલ રસાયણ:",
    lbl_vra_title: "ચોક્કસ છંટકાવ નકશો (VRA)",
    orders_title: "મારા બુકિંગ અને ટેક્સ ઇન્વોઇસ",
    col_booking_id: "બુકિંગ ID",
    col_farm_plot: "ખેતર",
    col_service_crop: "સેવા અને પાક",
    col_acreage: "એકર",
    col_date: "તારીખ",
    col_total_fee: "કુલ ફી",
    col_status: "સ્થિતિ",
    col_invoice: "બિલ",
    btn_spray: "સ્પ્રે",
    btn_rth: "પાછા ફરો (RTH)",
    btn_pause_sim: "રોકો",
    lbl_battery_lvl: "બેટરી લેવલ",
    lbl_tank_lvl: "ટાંકી લેવલ",
    btn_motors_armed: "🟢 મોટર્સ ચાલુ",
    btn_auto_sweep: "🚀 સ્વચાલિત સ્પ્રે",
    lbl_dgca_clearance: "DGCA મંજૂરી",
    status_passed: "પાસ",
    invoice_title: "સત્તાવાર કૃષિ સેવા ટેક્સ બિલ",
    btn_print_pdf: "🖨️ પ્રિન્ટ / ડાઉનલોડ"
  },
  kn: {
    name: "ಕನ್ನಡ",
    flag: "🇮🇳",
    splash_tagline: "ಸ್ವಾಯತ್ತ ನಿಖರ ಕೃಷಿ ಡ್ರೋನ್ ವ್ಯವಸ್ಥೆ",
    splash_skip: "ಬಿಟ್ಟುಬಿಡಿ ⏭️",
    btn_replay_intro: "ಪರಿಚಯ",
    gateway_title: "ಅಗ್ರೋಡ್ರೋನ್ ಗೇಟ್‌ವೇ",
    app_subtitle: "ರೈತರಿಗಾಗಿ ಸ್ವಾಯತ್ತ ಡ್ರೋನ್ ಸಿಂಪಡಣೆ ಸೇವೆ",
    farmer_login_tab: "ರೈತ ಲಾಗಿನ್",
    farmer_login_sub: "ಸಿಂಪಡಣೆ ಬುಕ್ ಮಾಡಿ & ಟ್ರ್ಯಾಕ್ ಮಾಡಿ",
    pilot_login_tab: "ಪೈಲಟ್ / ಡ್ರೋನ್ ಲಾಗಿನ್",
    pilot_login_sub: "ಟೆಲಿಮೆಟ್ರಿ ಮತ್ತು ಕಾಕ್‌ಪಿಟ್",
    farmer_banner_title: "🌾 ಕಿಸಾನ್‌ಫ್ಲೈ ರೈತ ಸೇವೆಗಳು",
    farmer_banner_desc: "25% ಸರ್ಕಾರಿ ಸಬ್ಸಿಡಿಯೊಂದಿಗೆ ಡ್ರೋನ್ ಸಿಂಪಡಣೆ ಬುಕ್ ಮಾಡಿ, ಲೈವ್ ಟ್ರ್ಯಾಕ್ ಮಾಡಿ ಮತ್ತು ಬೆಳೆ ಆರೋಗ್ಯ ಪರಿಶೀಲಿಸಿ.",
    drone_banner_title: "🛸 ಪೈಲಟ್ ಮತ್ತು ಡ್ರೋನ್ ಟೆಲಿಮೆಟ್ರಿ ಲಿಂಕ್",
    drone_banner_desc: "ಡ್ರೋನ್ ಸಂಪರ್ಕಿಸಿ, ಆರ್‌ಟಿಕೆ ಟೆಲಿಮೆಟ್ರಿ ವೀಕ್ಷಿಸಿ ಮತ್ತು ಸ್ವಯಂಚಾಲಿತ ಸಿಂಪಡಣೆ ಪ್ರಾರಂಭಿಸಿ.",
    lbl_farmer_email: "ಮೊಬೈಲ್ ಸಂಖ್ಯೆ ಅಥವಾ ಇಮೇಲ್",
    ph_farmer_email: "ಮೊಬೈಲ್ ಅಥವಾ ಇಮೇಲ್ ನಮೂದಿಸಿ",
    lbl_password: "ಪಾಸ್‌ವರ್ಡ್",
    ph_password: "ಪಾಸ್‌ವರ್ಡ್ ನಮೂದಿಸಿ",
    lbl_remember_farm: "ನನ್ನ ಜಮೀನು ನೆನಪಿಡಿ",
    btn_farmer_login: "ರೈತ ಪೋರ್ಟಲ್ ಲಾಗಿನ್",
    btn_farmer_demo: "⚡ ರಮೇಶ್ ಪಟೇಲ್ ಡೆಮೊ ಲಾಗಿನ್",
    perk_subsidy: "✔️ 25% ಸರ್ಕಾರಿ ಸಬ್ಸಿಡಿ",
    perk_tracking: "✔️ ಲೈವ್ ಜಿಪಿಎಸ್ ಟ್ರ್ಯಾಕಿಂಗ್",
    perk_ai_doctor: "✔️ AI ಬೆಳೆ ವೈದ್ಯ",
    lbl_pilot_license: "DGCA ಪೈಲಟ್ ಪರವಾನಗಿ ಸಂಖ್ಯೆ",
    lbl_paired_drone: "ಡ್ರೋನ್ ಆಯ್ಕೆಮಾಡಿ",
    lbl_controller_pin: "ಫ್ಲೈಟ್ ಪಿನ್",
    btn_drone_login: "ಕಾಕ್‌ಪಿಟ್ ಸಂಪರ್ಕಿಸಿ",
    btn_drone_demo: "⚡ ವಿಕ್ರಮ್ ಡೆಮೊ ಲಾಗಿನ್",
    perk_rtk: "✔️ ಆರ್‌ಟಿಕೆ ಜಿಪಿಎಸ್ (18 ಉಪಗ್ರಹಗಳು)",
    perk_radar: "✔️ 360° ರೇಡಾರ್",
    perk_autonomous: "✔️ ಸ್ವಯಂಚಾಲಿತ ಸಿಂಪಡಣೆ",
    status_telemetry_live: "ಲೈವ್ ಟೆಲಿಮೆಟ್ರಿ",
    weather_safe: "ಸುರಕ್ಷಿತ",
    btn_logout: "ಲಾಗ್ ಔಟ್",
    kpi_active_mission: "ಸಕ್ರಿಯ ಮಿಷನ್",
    kpi_my_acreage: "ನನ್ನ ಜಮೀನಿನ ವಿಸ್ತೀರ್ಣ",
    kpi_total_acreage: "ಒಟ್ಟು ವಿಸ್ತೀರ್ಣ",
    kpi_govt_subsidy: "ಸರ್ಕಾರಿ ಸಬ್ಸಿಡಿ",
    kpi_safety_window: "ಹವಾಮಾನ ಸುರಕ್ಷತೆ",
    status_cleared: "ಅನುಮೋದಿಸಲಾಗಿದೆ",
    tab_book_spray: "📝 ಡ್ರೋನ್ ಸಿಂಪಡಣೆ ಬುಕ್ ಮಾಡಿ",
    tab_live_track: "📍 ಲೈವ್ ಫ್ಲೈಟ್ ಟ್ರ್ಯಾಕಿಂಗ್",
    tab_ai_doctor: "🧠 AI ಬೆಳೆ ವೈದ್ಯ (NDVI)",
    tab_my_orders: "📜 ನನ್ನ ಆರ್ಡರ್‌ಗಳು & ಬಿಲ್‌ಗಳು",
    book_title: "🚜 ಡ್ರೋನ್ ಸಿಂಪಡಣೆ ಬುಕಿಂಗ್",
    book_desc: "40L ಡ್ರೋನ್‌ಗಳು 90% ನೀರು ಮತ್ತು 38% ಔಷಧಿ ಉಳಿಸುತ್ತವೆ.",
    lbl_farm_parcel: "ನೋಂದಾಯಿತ ಜಮೀನು",
    lbl_service_type: "ಸೇವೆಯ ಪ್ರಕಾರ",
    opt_service_pesticide: "ಕೀಟನಾಶಕ ಸಿಂಪಡಣೆ (₹300/ಎಕರೆ)",
    opt_service_fertilizer: "ದ್ರವ ಗೊಬ್ಬರ / ನ್ಯಾನೊ ಯೂರಿಯಾ (₹300/ಎಕರೆ)",
    opt_service_scouting: "AI ಬೆಳೆ ಸಮೀಕ್ಷೆ (₹200/ಎಕರೆ)",
    opt_service_thermal: "ಉಷ್ಣ ತೇವಾಂಶ ಇಮೇಜಿಂಗ್ (₹250/ಎಕರೆ)",
    lbl_area_acres: "ವಿಸ್ತೀರ್ಣ (ಎಕರೆ)",
    lbl_flight_date: "ದಿನಾಂಕ",
    lbl_flight_slot: "ಸಮಯ",
    opt_slot_morning_calm: "06:00 - 08:30 AM (ಶಾಂತ ಗಾಳಿ - ಅತ್ಯುತ್ತಮ)",
    opt_slot_morning_clear: "08:30 - 11:00 AM (ಬೆಳಿಗ್ಗೆ)",
    opt_slot_evening: "04:00 - 06:30 PM (ಸಂಜೆ)",
    lbl_base_fee: "ಮೂಲ ಶುಲ್ಕ:",
    lbl_subsidy_amt: "ಸರ್ಕಾರಿ ಸಬ್ಸಿಡಿ (25%):",
    lbl_final_payable: "ಪಾವತಿಸಬೇಕಾದ ಮೊತ್ತ:",
    btn_dispatch_drone: "ಮಿಷನ್ ಖಚಿತಪಡಿಸಿ",
    track_title: "ಲೈವ್ ಟ್ರ್ಯಾಕಿಂಗ್: ಟೈಟಾನ್ T-40 ಸಿಂಪಡಿಸುತ್ತಿದೆ",
    lbl_pilot_contact: "ಪೈಲಟ್ ಸಂಪರ್ಕ: +91 9811223344",
    lbl_altitude: "ಎತ್ತರ",
    lbl_speed: "ವೇಗ",
    lbl_spray_rate: "ಸಿಂಪಡಣೆ ದರ",
    lbl_progress: "ಪ್ರಗತಿ",
    lbl_est_completion: "ಅಂದಾಜು ಸಮಯ",
    lbl_assigned_pilot: "ನಿಯೋಜಿತ ಪೈಲಟ್ & ಡ್ರೋನ್",
    btn_call_pilot: "📞 ಪೈಲಟ್‌ಗೆ ಕರೆ ಮಾಡಿ",
    lbl_crop: "ಬೆಳೆ",
    lbl_chemical: "ಔಷಧ",
    lbl_safety: "ಸುರಕ್ಷತೆ",
    ai_title: "AI ಬೆಳೆ ಸ್ಕ್ಯಾನ್ (NDVI ವಿಶ್ಲೇಷಣೆ)",
    btn_toggle_ndvi: "NDVI ಬದಲಾಯಿಸಿ",
    btn_scan_field: "ಜಮೀನು ಸ್ಕ್ಯಾನ್ ಮಾಡಿ",
    lbl_ndvi_score: "ಬೆಳೆ ಆರೋಗ್ಯ ಸೂಚ್ಯಂಕ (NDVI):",
    lbl_canopy_cov: "ಬೆಳೆ ಸಾಂದ್ರತೆ:",
    lbl_pest_alert: "⚠️ ಕೀಟ ಎಚ್ಚರಿಕೆ: ಗುಲಾಬಿ ಕಾಯಿಕೊರಕ",
    lbl_pest_desc: "ಹತ್ತಿ ಜಮೀನಿನಲ್ಲಿ ಕೀಟಗಳು ಕಂಡುಬಂದಿವೆ.",
    lbl_prescribed_chem: "ಶಿಫಾರಸು ಮಾಡಿದ ಔಷಧ:",
    lbl_vra_title: "ನಿಖರ ಸಿಂಪಡಣೆ ನಕ್ಷೆ (VRA)",
    orders_title: "ನನ್ನ ಬುಕಿಂಗ್‌ಗಳು ಮತ್ತು ತೆರಿಗೆ ಇನ್‌ವಾಯ್ಸ್‌ಗಳು",
    col_booking_id: "ಬುಕಿಂಗ್ ಐಡಿ",
    col_farm_plot: "ಜಮೀನು",
    col_service_crop: "ಸೇವೆ & ಬೆಳೆ",
    col_acreage: "ಎಕರೆ",
    col_date: "ದಿನಾಂಕ",
    col_total_fee: "ಒಟ್ಟು ಶುಲ್ಕ",
    col_status: "ಸ್ಥಿತಿ",
    col_invoice: "ರಸೀದಿ",
    btn_spray: "ಸ್ಪ್ರೇ",
    btn_rth: "ಮರಳಿ ಬನ್ನಿ (RTH)",
    btn_pause_sim: "ನಿಲ್ಲಿಸಿ",
    lbl_battery_lvl: "ಬ್ಯಾಟರಿ ಮಟ್ಟ",
    lbl_tank_lvl: "ಟ್ಯಾಂಕ್ ಮಟ್ಟ",
    btn_motors_armed: "🟢 ಮೋಟಾರ್ ಸಕ್ರಿಯ",
    btn_auto_sweep: "🚀 ಆಟೋ ಸ್ವಿಪ್",
    lbl_dgca_clearance: "DGCA ಅನುಮೋದನೆ",
    status_passed: "ಉತ್ತೀರ್ಣ",
    invoice_title: "ಕೃಷಿ ಸೇವಾ ತೆರಿಗೆ ರಸೀದಿ",
    btn_print_pdf: "🖨️ ಮುದ್ರಿಸಿ / ಡೌನ್‌ಲೋಡ್"
  },
  pa: {
    name: "ਪੰਜਾਬੀ",
    flag: "🇮🇳",
    splash_tagline: "ਖੁਦਮੁਖਤਿਆਰ ਸ਼ੁੱਧ ਖੇਤੀਬਾੜੀ ਡਰੋਨ ਸਿਸਟਮ",
    splash_skip: "ਛੱਡੋ ⏭️",
    btn_replay_intro: "ਜਾਣ-ਪਛਾਣ",
    gateway_title: "ਐਗਰੋਡਰੋਨ ਗੇਟਵੇ",
    app_subtitle: "ਕਿਸਾਨਾਂ ਲਈ ਆਟੋਨੋਮਸ ਡਰੋਨ ਸਪਰੇਅ ਪਲੇਟਫਾਰਮ",
    farmer_login_tab: "ਕਿਸਾਨ ਲੌਗਇਨ",
    farmer_login_sub: "ਸਪਰੇਅ ਬੁੱਕ ਕਰੋ ਤੇ ਟ੍ਰੈਕ ਕਰੋ",
    pilot_login_tab: "ਪਾਇਲਟ / ਡਰੋਨ ਲੌਗਇਨ",
    pilot_login_sub: "ਟੈਲੀਮੈਟਰੀ ਤੇ ਕਾਕਪਿਟ",
    farmer_banner_title: "🌾 ਕਿਸਾਨਫਲਾਈ ਖੇਤੀ ਸੇਵਾਵਾਂ",
    farmer_banner_desc: "25% ਸਰਕਾਰੀ ਸਬਸਿਡੀ ਨਾਲ ਡਰੋਨ ਸਪਰੇਅ ਬੁੱਕ ਕਰੋ, ਲਾਈਵ ਟ੍ਰੈਕ ਕਰੋ ਅਤੇ ਫਸਲ ਦੀ ਸਿਹਤ ਜਾਂਚੋ।",
    drone_banner_title: "🛸 ਪਾਇਲਟ ਅਤੇ ਡਰੋਨ ਟੈਲੀਮੈਟਰੀ",
    drone_banner_desc: "ਡਰੋਨ ਜੋੜੋ, RTK ਟੈਲੀਮੈਟਰੀ ਦੇਖੋ ਅਤੇ ਆਟੋਮੈਟਿਕ ਗਰਿੱਡ ਸਪਰੇਅ ਚਲਾਓ।",
    lbl_farmer_email: "ਮੋਬਾਈਲ ਨੰਬਰ ਜਾਂ ਈਮੇਲ",
    ph_farmer_email: "ਮੋਬਾਈਲ ਜਾਂ ਈਮੇਲ ਦਰਜ ਕਰੋ",
    lbl_password: "ਪਾਸਵਰਡ",
    ph_password: "ਪਾਸਵਰਡ ਦਰਜ ਕਰੋ",
    lbl_remember_farm: "ਮੇਰਾ ਖੇਤ ਯਾਦ ਰੱਖੋ",
    btn_farmer_login: "ਕਿਸਾਨ ਪੋਰਟਲ ਵਿੱਚ ਲੌਗਇਨ ਕਰੋ",
    btn_farmer_demo: "⚡ ਰਮੇਸ਼ ਪਟੇਲ ਡੈਮੋ ਲੌਗਇਨ",
    perk_subsidy: "✔️ 25% ਸਰਕਾਰੀ ਸਬਸਿਡੀ",
    perk_tracking: "✔️ ਲਾਈਵ GPS ਟ੍ਰੈਕਿੰਗ",
    perk_ai_doctor: "✔️ AI ਫਸਲ ਡਾਕਟਰ",
    lbl_pilot_license: "DGCA ਪਾਇਲਟ ਲਾਇਸੰਸ ਨੰਬਰ",
    lbl_paired_drone: "ਡਰੋਨ ਚੁਣੋ",
    lbl_controller_pin: "ਫਲਾਈਟ ਪਿੰਨ",
    btn_drone_login: "ਕਾਕਪਿਟ ਕਨੈਕਟ ਕਰੋ",
    btn_drone_demo: "⚡ ਕੈਪਟਨ ਵਿਕਰਮ ਡੈਮੋ ਲੌਗਇਨ",
    perk_rtk: "✔️ RTK GPS (18 ਸੈਟੇਲਾਈਟ)",
    perk_radar: "✔️ 360° ਰਾਡਾਰ",
    perk_autonomous: "✔️ ਆਟੋਮੈਟਿਕ ਸਪਰੇਅ",
    status_telemetry_live: "ਲਾਈਵ ਟੈਲੀਮੈਟਰੀ",
    weather_safe: "ਸੁਰੱਖਿਅਤ",
    btn_logout: "ਲੌਗ ਆਉਟ",
    kpi_active_mission: "ਚੱਲ ਰਿਹਾ ਮਿਸ਼ਨ",
    kpi_my_acreage: "ਮੇਰਾ ਖੇਤਰਫਲ",
    kpi_total_acreage: "ਕੁੱਲ ਰਕਬਾ",
    kpi_govt_subsidy: "ਸਰਕਾਰੀ ਸਬਸਿਡੀ",
    kpi_safety_window: "ਮੌਸਮ ਸੁਰੱਖਿਆ",
    status_cleared: "ਮਨਜ਼ੂਰ",
    tab_book_spray: "📝 ਡਰੋਨ ਸਪਰੇਅ ਬੁੱਕ ਕਰੋ",
    tab_live_track: "📍 ਲਾਈਵ ਉਡਾਣ ਟ੍ਰੈਕਿੰਗ",
    tab_ai_doctor: "🧠 AI ਫਸਲ ਡਾਕਟਰ (NDVI)",
    tab_my_orders: "📜 ਮੇਰੇ ਆਰਡਰ ਅਤੇ ਬਿੱਲ",
    book_title: "🚜 ਡਰੋਨ ਸਪਰੇਅ ਬੁਕਿੰਗ",
    book_desc: "40L ਡਰੋਨ 90% ਪਾਣੀ ਅਤੇ 38% ਦਵਾਈ ਬਚਾਉਂਦੇ ਹਨ।",
    lbl_farm_parcel: "ਰਜਿਸਟਰਡ ਖੇਤ",
    lbl_service_type: "ਸੇਵਾ ਦੀ ਕਿਸਮ",
    opt_service_pesticide: "ਕੀਟਨਾਸ਼ਕ ਸਪਰੇਅ (₹300/ਏਕੜ)",
    opt_service_fertilizer: "ਤਰਲ ਖਾਦ / ਨੈਨੋ ਯੂਰੀਆ (₹300/ਏਕੜ)",
    opt_service_scouting: "AI ਫਸਲ ਸਰਵੇਖਣ (₹200/ਏਕੜ)",
    opt_service_thermal: "ਥਰਮਲ ਨਮੀ ਜਾਂਚ (₹250/ਏਕੜ)",
    lbl_area_acres: "ਰਕਬਾ (ਏਕੜ)",
    lbl_flight_date: "ਮਿਤੀ",
    lbl_flight_slot: "ਸਮਾਂ",
    opt_slot_morning_calm: "06:00 - 08:30 AM (ਸਭ ਤੋਂ ਵਧੀਆ)",
    opt_slot_morning_clear: "08:30 - 11:00 AM (ਸਵੇਰ)",
    opt_slot_evening: "04:00 - 06:30 PM (ਸ਼ਾਮ)",
    lbl_base_fee: "ਮੂਲ ਫੀਸ:",
    lbl_subsidy_amt: "ਸਰਕਾਰੀ ਸਬਸਿਡੀ (25%):",
    lbl_final_payable: "ਕਿਸਾਨ ਦੇਣਯੋਗ ਰਕਮ:",
    btn_dispatch_drone: "ਮਿਸ਼ਨ ਪੱਕਾ ਕਰੋ",
    track_title: "ਲਾਈਵ ਟ੍ਰੈਕਿੰਗ: ਟਾਈਟਨ T-40 ਸਪਰੇਅ ਕਰ ਰਿਹਾ ਹੈ",
    lbl_pilot_contact: "ਪਾਇਲਟ ਸੰਪਰਕ: +91 9811223344",
    lbl_altitude: "ਉਚਾਈ",
    lbl_speed: "ਗਤੀ",
    lbl_spray_rate: "ਸਪਰੇਅ ਦਰ",
    lbl_progress: "ਤਰੱਕੀ",
    lbl_est_completion: "ਬਾਕੀ ਸਮਾਂ",
    lbl_assigned_pilot: "ਨਿਯੁਕਤ ਪਾਇਲਟ",
    btn_call_pilot: "📞 ਪਾਇਲਟ ਨੂੰ ਕਾਲ ਕਰੋ",
    lbl_crop: "ਫਸਲ",
    lbl_chemical: "ਦਵਾਈ",
    lbl_safety: "ਸੁਰੱਖਿਆ",
    ai_title: "AI ਫਸਲ ਸਕੈਨ (NDVI ਵਿਸ਼ਲੇਸ਼ਣ)",
    btn_toggle_ndvi: "NDVI ਬਦਲੋ",
    btn_scan_field: "ਖੇਤ ਸਕੈਨ ਕਰੋ",
    lbl_ndvi_score: "ਫਸਲ ਸੂਚਕਾਂਕ (NDVI):",
    lbl_canopy_cov: "ਫਸਲ ਘਣਤਾ:",
    lbl_pest_alert: "⚠️ ਕੀੜੇ ਦੀ ਚੇਤਾਵਨੀ: ਗੁਲਾਬੀ ਸੁੰਡੀ",
    lbl_pest_desc: "ਕਪਾਹ ਦੇ ਖੇਤ ਵਿੱਚ ਕੀੜੇ ਮਿਲੇ।",
    lbl_prescribed_chem: "ਸਿਫ਼ਾਰਸ਼ ਕੀਤੀ ਦਵਾਈ:",
    lbl_vra_title: "ਸ਼ੁੱਧ ਸਪਰੇਅ ਨਕਸ਼ਾ (VRA)",
    orders_title: "ਮੇਰੀਆਂ ਬੁਕਿੰਗਾਂ ਅਤੇ ਬਿੱਲ",
    col_booking_id: "ਬੁਕਿੰਗ ID",
    col_farm_plot: "ਖੇਤ",
    col_service_crop: "ਸੇਵਾ ਤੇ ਫਸਲ",
    col_acreage: "ਏਕੜ",
    col_date: "ਮਿਤੀ",
    col_total_fee: "ਕੁੱਲ ਫੀਸ",
    col_status: "ਸਥਿਤੀ",
    col_invoice: "ਬਿੱਲ",
    btn_spray: "ਸਪਰੇਅ",
    btn_rth: "ਵਾਪਸ ਆਓ (RTH)",
    btn_pause_sim: "ਰੋਕੋ",
    lbl_battery_lvl: "ਬੈਟਰੀ ਪੱਧਰ",
    lbl_tank_lvl: "ਟੈਂਕੀ ਪੱਧਰ",
    btn_motors_armed: "🟢 ਮੋਟਰਾਂ ਚਾਲੂ",
    btn_auto_sweep: "🚀 ਆਟੋ ਸਪਰੇਅ",
    lbl_dgca_clearance: "DGCA ਪ੍ਰਵਾਨਗੀ",
    status_passed: "ਪਾਸ",
    invoice_title: "ਅਧਿਕਾਰਤ ਖੇਤੀਬਾੜੀ ਸੇਵਾ ਟੈਕਸ ਬਿੱਲ",
    btn_print_pdf: "🖨️ ਪ੍ਰਿੰਟ / ਡਾਊਨਲੋਡ"
  },
  bn: {
    name: "বাংলা",
    flag: "🇮🇳",
    splash_tagline: "স্বায়ত্তশাসিত নির্ভুল কৃষি ড্রোন প্ল্যাটফর্ম",
    splash_skip: "এড়িয়ে যান ⏭️",
    btn_replay_intro: "ভূমিকা",
    gateway_title: "অ্যাগ্রোড্রোন গেটওয়ে",
    app_subtitle: "কৃষকদের জন্য স্বায়ত্তশাসিত ড্রোন পরিষেবা",
    farmer_login_tab: "কৃষক লগইন",
    farmer_login_sub: "স্প্রে বুক করুন এবং ট্র্যাক করুন",
    pilot_login_tab: "পাইলট / ড্রোন লগইন",
    pilot_login_sub: "টেলিমেট্রি ও ককপিট",
    farmer_banner_title: "🌾 কিসানফ্লাই কৃষি পরিষেবা",
    farmer_banner_desc: "২৫% সরকারি ভর্তুকি সহ ড্রোন স্প্রে বুক করুন, লাইভ ট্র্যাক করুন এবং ফসলের স্বাস্থ্য পরীক্ষা করুন।",
    drone_banner_title: "🛸 পাইলট ও ড্রোন টেলিমেট্রি",
    drone_banner_desc: "ড্রোন সংযুক্ত করুন, RTK টেলিমেট্রি পর্যবেক্ষণ করুন এবং স্বয়ংক্রিয় গ্রিড স্প্রে চালান।",
    lbl_farmer_email: "মোবাইল নম্বর বা ইমেল",
    ph_farmer_email: "মোবাইল বা ইমেল লিখুন",
    lbl_password: "পাসওয়ার্ড",
    ph_password: "পাসওয়ার্ড লিখুন",
    lbl_remember_farm: "আমার খামার মনে রাখুন",
    btn_farmer_login: "কৃষক পোর্টালে লগইন করুন",
    btn_farmer_demo: "⚡ রমেশ প্যাটেল ডেমো লগইন",
    perk_subsidy: "✔️ ২৫% সরকারি ভর্তুকি",
    perk_tracking: "✔️ লাইভ জিপিএস ট্র্যাকিং",
    perk_ai_doctor: "✔️ এআই ফসল ডাক্তার",
    lbl_pilot_license: "ডিজিসিএ লাইসেন্স নম্বর",
    lbl_paired_drone: "ড্রোন নির্বাচন করুন",
    lbl_controller_pin: "ফ্লাইট পিন",
    btn_drone_login: "ককপিট সংযুক্ত করুন",
    btn_drone_demo: "⚡ বিক্রম ডেমো লগইন",
    perk_rtk: "✔️ RTK জিপিএস (১৮ স্যাটেলাইট)",
    perk_radar: "✔️ ৩৬০° রাডার",
    perk_autonomous: "✔️ স্বয়ংক্রিয় স্প্রে",
    status_telemetry_live: "লাইভ টেলিমেট্রি",
    weather_safe: "নিরাপদ",
    btn_logout: "লগ আউট",
    kpi_active_mission: "সক্রিয় মিশন",
    kpi_my_acreage: "আমার জমির পরিমাণ",
    kpi_total_acreage: "মোট জমি",
    kpi_govt_subsidy: "সরকারি ভর্তুকি",
    kpi_safety_window: "আবহাওয়া সুরক্ষা",
    status_cleared: "অনুমোদিত",
    tab_book_spray: "📝 ড্রোন স্প্রে বুকিং",
    tab_live_track: "📍 লাইভ ফ্লাইট ট্র্যাকিং",
    tab_ai_doctor: "🧠 এআই ফসল ডাক্তার (NDVI)",
    tab_my_orders: "📜 আমার অর্ডার ও বিল",
    book_title: "🚜 ড্রোন স্প্রে বুকিং",
    book_desc: "৪০L ড্রোন ৯০% জল এবং ৩৮% কীটনাশক সাশ্রয় করে।",
    lbl_farm_parcel: "নিবন্ধিত জমি",
    lbl_service_type: "পরিষেবার ধরন",
    opt_service_pesticide: "কীটনাশক স্প্রে (₹৩০০/একর)",
    opt_service_fertilizer: "তরল সার / ন্যানো ইউরিয়া (₹৩০০/একর)",
    opt_service_scouting: "এআই ফসল জরিপ (₹২০০/একর)",
    opt_service_thermal: "থার্মাল আর্দ্রতা চিত্রায়ন (₹২৫০/একর)",
    lbl_area_acres: "পরিমাণ (একর)",
    lbl_flight_date: "তারিখ",
    lbl_flight_slot: "সময়",
    opt_slot_morning_calm: "০৬:০০ - ০৮:৩০ AM (শান্ত বাতাস - সেরা)",
    opt_slot_morning_clear: "০৮:৩০ - ১১:০০ AM (সকাল)",
    opt_slot_evening: "০৪:০০ - ০৬:৩০ PM (সন্ধ্যা)",
    lbl_base_fee: "মূল ফি:",
    lbl_subsidy_amt: "সরকারি ভর্তুকি (২৫%):",
    lbl_final_payable: "কৃষকের প্রদেয় মোট:",
    btn_dispatch_drone: "মিশন নিশ্চিত করুন",
    track_title: "লাইভ ট্র্যাকিং: টাইটান T-40 স্প্রে করছে",
    lbl_pilot_contact: "পাইলট যোগাযোগ: +91 9811223344",
    lbl_altitude: "উচ্চতা",
    lbl_speed: "গতি",
    lbl_spray_rate: "স্প্রে হার",
    lbl_progress: "অগ্রগতি",
    lbl_est_completion: "আনুমানিক সময়",
    lbl_assigned_pilot: "নিযুক্ত পাইলট ও ড্রোন",
    btn_call_pilot: "📞 পাইলটকে কল করুন",
    lbl_crop: "ফসল",
    lbl_chemical: "রাসায়নিক",
    lbl_safety: "নিরাপত্তা",
    ai_title: "এআই ফসল স্ক্যান (NDVI বিশ্লেষণ)",
    btn_toggle_ndvi: "NDVI পরিবর্তন করুন",
    btn_scan_field: "জমি স্ক্যান করুন",
    lbl_ndvi_score: "ফসল স্বাস্থ্য সূচক (NDVI):",
    lbl_canopy_cov: "ফসলের ঘনত্ব:",
    lbl_pest_alert: "⚠️ পোকার সতর্কতা: গোলাপী বোলওয়ার্ম",
    lbl_pest_desc: "তুলা ক্ষেতে ক্ষতিকারক পোকা সনাক্ত হয়েছে।",
    lbl_prescribed_chem: "সুপারিশকৃত কীটনাশক:",
    lbl_vra_title: "নির্ভুল স্প্রে মানচিত্র (VRA)",
    orders_title: "আমার বুকিং এবং ইনভয়েস",
    col_booking_id: "বুকিং আইডি",
    col_farm_plot: "জমি",
    col_service_crop: "পরিষেবা ও ফসল",
    col_acreage: "একর",
    col_date: "তারিখ",
    col_total_fee: "মোট ফি",
    col_status: "অবস্থা",
    col_invoice: "বিল",
    btn_spray: "স্প্রে",
    btn_rth: "ফিরে আসুন (RTH)",
    btn_pause_sim: "থামুন",
    lbl_battery_lvl: "ব্যাটারি স্তর",
    lbl_tank_lvl: "ট্যাঙ্ক স্তর",
    btn_motors_armed: "🟢 মোটর সক্রিয়",
    btn_auto_sweep: "🚀 স্বয়ংক্রিয় স্প্রে",
    lbl_dgca_clearance: "DGCA অনুমোদন",
    status_passed: "পাস",
    invoice_title: "অফিসিয়াল কৃষি পরিষেবা ট্যাক্স ইনভয়েস",
    btn_print_pdf: "🖨️ প্রিন্ট / ডাউনলোড"
  },
  es: {
    name: "Español",
    flag: "🇪🇸",
    splash_tagline: "Plataforma Autónoma de Drones de Precisión Agrícola",
    splash_skip: "Saltar Intro ⏭️",
    btn_replay_intro: "Intro",
    gateway_title: "Portal AgroDrone",
    app_subtitle: "Plataforma Autónoma de Drones Agrícolas como Servicio",
    farmer_login_tab: "Acceso Agricultor",
    farmer_login_sub: "Reservar pulverización y rastreo",
    pilot_login_tab: "Acceso Piloto / Drone",
    pilot_login_sub: "Telemetría HUD y cabina de vuelo",
    farmer_banner_title: "🌾 Servicios Agrícolas KisanFly",
    farmer_banner_desc: "Reserve pulverización con subsidio gubernamental del 25%, rastree su vuelo en vivo e inspeccione la salud de sus cultivos.",
    drone_banner_title: "🛸 Enlace de Telemetría Piloto y Dron",
    drone_banner_desc: "Conecte el controlador de vuelo al dron, monitoree la telemetría RTK, arme los motores y ejecute barridos autónomos.",
    lbl_farmer_email: "Móvil o Correo del Agricultor",
    ph_farmer_email: "Ingrese móvil o correo",
    lbl_password: "Contraseña",
    ph_password: "Ingrese contraseña",
    lbl_remember_farm: "Recordar mi finca",
    btn_farmer_login: "Iniciar Sesión como Agricultor",
    btn_farmer_demo: "⚡ Demo en 1-Clic: Ramesh Patel (Algodón)",
    perk_subsidy: "✔️ 25% Subsidio Agrícola",
    perk_tracking: "✔️ Rastreo GPS en Vivo",
    perk_ai_doctor: "✔️ Diagnóstico de Cultivos AI",
    lbl_pilot_license: "Número de Licencia de Piloto DGCA",
    lbl_paired_drone: "Seleccionar Dron Comercial",
    lbl_controller_pin: "PIN de Control de Vuelo",
    btn_drone_login: "Conectar y Armar Cabina de Vuelo",
    btn_drone_demo: "⚡ Demo en 1-Clic: Cap. Vikram (Piloto)",
    perk_rtk: "✔️ GPS RTK Fijo (18 Satélites)",
    perk_radar: "✔️ Radar Anticolisión 360°",
    perk_autonomous: "✔️ Barrido de Malla Autónomo",
    status_telemetry_live: "TELEMETRÍA EN VIVO",
    weather_safe: "SEGURO",
    btn_logout: "Cerrar Sesión",
    kpi_active_mission: "Misión Activa",
    kpi_my_acreage: "Superficie de Mi Finca",
    kpi_total_acreage: "Superficie Total",
    kpi_govt_subsidy: "Subsidio de Gobierno",
    kpi_safety_window: "Ventana de Seguridad de Vuelo",
    status_cleared: "DESPEJADO",
    tab_book_spray: "📝 Reservar Pulverización",
    tab_live_track: "📍 Rastreo de Vuelo en Vivo",
    tab_ai_doctor: "🧠 Doctor de Cultivos AI (NDVI)",
    tab_my_orders: "📜 Mis Órdenes y Facturas",
    book_title: "🚜 Reservar Pulverización con Dron de Alto Rendimiento",
    book_desc: "Drones autónomos de 40L aplican microgotas uniformes, ahorrando 90% de agua y 38% en agroquímicos.",
    lbl_farm_parcel: "Parcela Agrícola Registrada",
    lbl_service_type: "Tipo de Servicio",
    opt_service_pesticide: "Fumigación de Pesticidas (₹300/acre)",
    opt_service_fertilizer: "Fertilizante Líquido / Nano Urea (₹300/acre)",
    opt_service_scouting: "Escaneo Multiespectral AI (₹200/acre)",
    opt_service_thermal: "Mapeo Térmico de Humedad (₹250/acre)",
    lbl_area_acres: "Área a Pulverizar (Acres)",
    lbl_flight_date: "Fecha Preferida de Vuelo",
    lbl_flight_slot: "Franja Horaria Recomendada",
    opt_slot_morning_calm: "06:00 - 08:30 AM (Viento en calma - Recomendado)",
    opt_slot_morning_clear: "08:30 - 11:00 AM (Mañana despejada)",
    opt_slot_evening: "04:00 - 06:30 PM (Rocío de la tarde)",
    lbl_base_fee: "Tarifa Base del Servicio:",
    lbl_subsidy_amt: "Subsidio Estatal (25% SMAM):",
    lbl_final_payable: "Total a Pagar por el Agricultor:",
    btn_dispatch_drone: "Confirmar y Despachar Misión",
    track_title: "Rastreo en Vivo: Titan T-40 Pulverizando Parcela #1",
    lbl_pilot_contact: "Contacto del Piloto: +91 9811223344",
    lbl_altitude: "Altitud",
    lbl_speed: "Velocidad de Tierra",
    lbl_spray_rate: "Tasa de Flujo",
    lbl_progress: "Progreso",
    lbl_est_completion: "Tiempo Estimado",
    lbl_assigned_pilot: "Piloto y Dron Asignados",
    btn_call_pilot: "📞 Llamar al Piloto del Dron",
    lbl_crop: "Cultivo",
    lbl_chemical: "Químico",
    lbl_safety: "Estado de Seguridad",
    ai_title: "Escaneo Multiespectral del Dosel (Análisis NDVI)",
    btn_toggle_ndvi: "Alternar Capa NDVI",
    btn_scan_field: "Escanear Parcela Actual",
    lbl_ndvi_score: "Índice de Vegetación (NDVI):",
    lbl_canopy_cov: "Cobertura de Copa:",
    lbl_pest_alert: "⚠️ Alerta de Plaga: Gusano Rosado (Etapa Temprana)",
    lbl_pest_desc: "La visión por computadora detectó un foco de plaga en el cuadrante noreste de la parcela.",
    lbl_prescribed_chem: "Químico Prescrito:",
    lbl_vra_title: "Mapa de Aplicación de Tasa Variable (VRA)",
    orders_title: "Mis Reservas de Pulverización y Facturas",
    col_booking_id: "ID Reserva",
    col_farm_plot: "Parcela",
    col_service_crop: "Servicio y Cultivo",
    col_acreage: "Acres",
    col_date: "Fecha",
    col_total_fee: "Tarifa Total",
    col_status: "Estado",
    col_invoice: "Factura",
    btn_spray: "Pulverización",
    btn_rth: "Retorno a Base (RTH)",
    btn_pause_sim: "Pausar",
    lbl_battery_lvl: "Nivel de Batería",
    lbl_tank_lvl: "Nivel del Tanque",
    btn_motors_armed: "🟢 MOTORES ARMADOS",
    btn_auto_sweep: "🚀 BARRIDO AUTO",
    lbl_dgca_clearance: "Autorización DGCA Pre-Vuelo",
    status_passed: "APROBADO",
    invoice_title: "Factura Fiscal Oficial de Servicios Agrícolas",
    btn_print_pdf: "🖨️ Imprimir / Guardar PDF"
  }
};

const AUTH_PORTAL_TRANSLATIONS = {
  en: {
    auth_operator_sub: "Manage requests and spraying",
    auth_operator_identifier: "Operator ID / Email",
    auth_operator_login: "Login",
    auth_farmer_help: "Sign in with your registered phone number or email and password.",
    auth_operator_help: "Sign in with your registered operator ID or email and password.",
    auth_create_farmer: "Create new farmer account",
    auth_register_operator: "Register as Drone Operator",
    auth_register_name: "Full name",
    auth_register_email: "Email",
    auth_register_phone: "10-digit phone number",
    auth_register_license: "Operator license ID",
    auth_register_password: "Password (at least 8 characters)",
    auth_create_account: "Create account",
    auth_register_operator_submit: "Register operator",
    auth_back_to_login: "Back to login",
    auth_operator_placeholder: "Enter operator ID or email",
    auth_farmer_phone_title: "Enter a 10-digit phone number or a valid email address.",
    auth_language_menu_title: "Select Language"
  },
  hi: {
    auth_operator_sub: "बुकिंग अनुरोध और छिड़काव प्रबंधित करें",
    auth_operator_identifier: "ऑपरेटर आईडी / ईमेल",
    auth_operator_login: "लॉगिन",
    auth_farmer_help: "अपने पंजीकृत मोबाइल नंबर या ईमेल और पासवर्ड से लॉगिन करें।",
    auth_operator_help: "अपनी पंजीकृत ऑपरेटर आईडी या ईमेल और पासवर्ड से लॉगिन करें।",
    auth_create_farmer: "नया किसान खाता बनाएँ",
    auth_register_operator: "ड्रोन ऑपरेटर के रूप में पंजीकरण करें",
    auth_register_name: "पूरा नाम",
    auth_register_email: "ईमेल",
    auth_register_phone: "10 अंकों का मोबाइल नंबर",
    auth_register_license: "ऑपरेटर लाइसेंस आईडी",
    auth_register_password: "पासवर्ड (कम से कम 8 अक्षर)",
    auth_create_account: "खाता बनाएँ",
    auth_register_operator_submit: "ऑपरेटर पंजीकृत करें",
    auth_back_to_login: "लॉगिन पर वापस जाएँ",
    auth_operator_placeholder: "ऑपरेटर आईडी या ईमेल दर्ज करें",
    auth_farmer_phone_title: "10 अंकों का मोबाइल नंबर या मान्य ईमेल दर्ज करें।",
    auth_language_menu_title: "भाषा चुनें"
  },
  te: {
    auth_operator_sub: "బుకింగ్ అభ్యర్థనలు మరియు స్ప్రేయింగ్‌ను నిర్వహించండి",
    auth_operator_identifier: "ఆపరేటర్ ఐడి / ఇమెయిల్",
    auth_operator_login: "లాగిన్",
    auth_farmer_help: "నమోదు చేసిన ఫోన్ నంబర్ లేదా ఇమెయిల్, పాస్‌వర్డ్‌తో సైన్ ఇన్ చేయండి.",
    auth_operator_help: "నమోదు చేసిన ఆపరేటర్ ఐడి లేదా ఇమెయిల్, పాస్‌వర్డ్‌తో సైన్ ఇన్ చేయండి.",
    auth_create_farmer: "కొత్త రైతు ఖాతా సృష్టించండి",
    auth_register_operator: "డ్రోన్ ఆపరేటర్‌గా నమోదు చేసుకోండి",
    auth_register_name: "పూర్తి పేరు",
    auth_register_email: "ఇమెయిల్",
    auth_register_phone: "10 అంకెల ఫోన్ నంబర్",
    auth_register_license: "ఆపరేటర్ లైసెన్స్ ఐడి",
    auth_register_password: "పాస్‌వర్డ్ (కనీసం 8 అక్షరాలు)",
    auth_create_account: "ఖాతా సృష్టించండి",
    auth_register_operator_submit: "ఆపరేటర్‌ను నమోదు చేయండి",
    auth_back_to_login: "లాగిన్‌కు తిరిగి వెళ్ళండి",
    auth_operator_placeholder: "ఆపరేటర్ ఐడి లేదా ఇమెయిల్ నమోదు చేయండి",
    auth_farmer_phone_title: "10 అంకెల ఫోన్ నంబర్ లేదా సరైన ఇమెయిల్ నమోదు చేయండి.",
    auth_language_menu_title: "భాషను ఎంచుకోండి"
  },
  ta: {
    auth_operator_sub: "கோரிக்கைகள் மற்றும் தெளிப்புப் பணிகளை நிர்வகிக்கவும்",
    auth_operator_identifier: "ஆபரேட்டர் ஐடி / மின்னஞ்சல்",
    auth_operator_login: "உள்நுழை",
    auth_farmer_help: "பதிவுசெய்த தொலைபேசி எண் அல்லது மின்னஞ்சல் மற்றும் கடவுச்சொல்லைப் பயன்படுத்தவும்.",
    auth_operator_help: "பதிவுசெய்த ஆபரேட்டர் ஐடி அல்லது மின்னஞ்சல் மற்றும் கடவுச்சொல்லைப் பயன்படுத்தவும்.",
    auth_create_farmer: "புதிய விவசாயி கணக்கை உருவாக்கு",
    auth_register_operator: "ட்ரோன் ஆபரேட்டராகப் பதிவு செய்க",
    auth_register_name: "முழுப் பெயர்",
    auth_register_email: "மின்னஞ்சல்",
    auth_register_phone: "10 இலக்க தொலைபேசி எண்",
    auth_register_license: "ஆபரேட்டர் உரிம ஐடி",
    auth_register_password: "கடவுச்சொல் (குறைந்தது 8 எழுத்துகள்)",
    auth_create_account: "கணக்கை உருவாக்கு",
    auth_register_operator_submit: "ஆபரேட்டரைப் பதிவு செய்க",
    auth_back_to_login: "உள்நுழைவுக்குத் திரும்பு",
    auth_operator_placeholder: "ஆபரேட்டர் ஐடி அல்லது மின்னஞ்சலை உள்ளிடவும்",
    auth_farmer_phone_title: "10 இலக்க தொலைபேசி எண் அல்லது சரியான மின்னஞ்சலை உள்ளிடவும்.",
    auth_language_menu_title: "மொழியைத் தேர்ந்தெடுக்கவும்"
  },
  mr: {
    auth_operator_sub: "बुकिंग विनंत्या आणि फवारणी व्यवस्थापित करा",
    auth_operator_identifier: "ऑपरेटर आयडी / ईमेल",
    auth_operator_login: "लॉगिन",
    auth_farmer_help: "नोंदणीकृत फोन नंबर किंवा ईमेल आणि पासवर्डने साइन इन करा.",
    auth_operator_help: "नोंदणीकृत ऑपरेटर आयडी किंवा ईमेल आणि पासवर्डने साइन इन करा.",
    auth_create_farmer: "नवीन शेतकरी खाते तयार करा",
    auth_register_operator: "ड्रोन ऑपरेटर म्हणून नोंदणी करा",
    auth_register_name: "पूर्ण नाव",
    auth_register_email: "ईमेल",
    auth_register_phone: "10 अंकी फोन नंबर",
    auth_register_license: "ऑपरेटर परवाना आयडी",
    auth_register_password: "पासवर्ड (किमान 8 अक्षरे)",
    auth_create_account: "खाते तयार करा",
    auth_register_operator_submit: "ऑपरेटरची नोंदणी करा",
    auth_back_to_login: "लॉगिनवर परत जा",
    auth_operator_placeholder: "ऑपरेटर आयडी किंवा ईमेल टाका",
    auth_farmer_phone_title: "10 अंकी फोन नंबर किंवा वैध ईमेल टाका.",
    auth_language_menu_title: "भाषा निवडा"
  },
  gu: {
    auth_operator_sub: "બુકિંગ વિનંતીઓ અને છંટકાવનું સંચાલન કરો",
    auth_operator_identifier: "ઓપરેટર આઈડી / ઈમેલ",
    auth_operator_login: "લૉગિન",
    auth_farmer_help: "નોંધાયેલ ફોન નંબર અથવા ઈમેલ અને પાસવર્ડથી સાઇન ઇન કરો.",
    auth_operator_help: "નોંધાયેલ ઓપરેટર આઈડી અથવા ઈમેલ અને પાસવર્ડથી સાઇન ઇન કરો.",
    auth_create_farmer: "નવું ખેડૂત ખાતું બનાવો",
    auth_register_operator: "ડ્રોન ઓપરેટર તરીકે નોંધણી કરો",
    auth_register_name: "પૂરું નામ",
    auth_register_email: "ઈમેલ",
    auth_register_phone: "10 અંકનો ફોન નંબર",
    auth_register_license: "ઓપરેટર લાઇસન્સ આઈડી",
    auth_register_password: "પાસવર્ડ (ઓછામાં ઓછા 8 અક્ષરો)",
    auth_create_account: "ખાતું બનાવો",
    auth_register_operator_submit: "ઓપરેટરની નોંધણી કરો",
    auth_back_to_login: "લૉગિન પર પાછા જાઓ",
    auth_operator_placeholder: "ઓપરેટર આઈડી અથવા ઈમેલ દાખલ કરો",
    auth_farmer_phone_title: "10 અંકનો ફોન નંબર અથવા માન્ય ઈમેલ દાખલ કરો.",
    auth_language_menu_title: "ભાષા પસંદ કરો"
  },
  kn: {
    auth_operator_sub: "ಬುಕಿಂಗ್ ವಿನಂತಿಗಳು ಮತ್ತು ಸಿಂಪಡಣೆಯನ್ನು ನಿರ್ವಹಿಸಿ",
    auth_operator_identifier: "ಆಪರೇಟರ್ ಐಡಿ / ಇಮೇಲ್",
    auth_operator_login: "ಲಾಗಿನ್",
    auth_farmer_help: "ನೋಂದಾಯಿತ ಫೋನ್ ಸಂಖ್ಯೆ ಅಥವಾ ಇಮೇಲ್ ಮತ್ತು ಪಾಸ್‌ವರ್ಡ್‌ನಿಂದ ಸೈನ್ ಇನ್ ಮಾಡಿ.",
    auth_operator_help: "ನೋಂದಾಯಿತ ಆಪರೇಟರ್ ಐಡಿ ಅಥವಾ ಇಮೇಲ್ ಮತ್ತು ಪಾಸ್‌ವರ್ಡ್‌ನಿಂದ ಸೈನ್ ಇನ್ ಮಾಡಿ.",
    auth_create_farmer: "ಹೊಸ ರೈತ ಖಾತೆ ರಚಿಸಿ",
    auth_register_operator: "ಡ್ರೋನ್ ಆಪರೇಟರ್ ಆಗಿ ನೋಂದಾಯಿಸಿ",
    auth_register_name: "ಪೂರ್ಣ ಹೆಸರು",
    auth_register_email: "ಇಮೇಲ್",
    auth_register_phone: "10 ಅಂಕಿಯ ಫೋನ್ ಸಂಖ್ಯೆ",
    auth_register_license: "ಆಪರೇಟರ್ ಪರವಾನಗಿ ಐಡಿ",
    auth_register_password: "ಪಾಸ್‌ವರ್ಡ್ (ಕನಿಷ್ಠ 8 ಅಕ್ಷರಗಳು)",
    auth_create_account: "ಖಾತೆ ರಚಿಸಿ",
    auth_register_operator_submit: "ಆಪರೇಟರ್ ನೋಂದಾಯಿಸಿ",
    auth_back_to_login: "ಲಾಗಿನ್‌ಗೆ ಹಿಂತಿರುಗಿ",
    auth_operator_placeholder: "ಆಪರೇಟರ್ ಐಡಿ ಅಥವಾ ಇಮೇಲ್ ನಮೂದಿಸಿ",
    auth_farmer_phone_title: "10 ಅಂಕಿಯ ಫೋನ್ ಸಂಖ್ಯೆ ಅಥವಾ ಮಾನ್ಯ ಇಮೇಲ್ ನಮೂದಿಸಿ.",
    auth_language_menu_title: "ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ"
  },
  pa: {
    auth_operator_sub: "ਬੁਕਿੰਗ ਬੇਨਤੀਆਂ ਅਤੇ ਛਿੜਕਾਅ ਦਾ ਪ੍ਰਬੰਧ ਕਰੋ",
    auth_operator_identifier: "ਆਪਰੇਟਰ ਆਈਡੀ / ਈਮੇਲ",
    auth_operator_login: "ਲੌਗਇਨ",
    auth_farmer_help: "ਆਪਣੇ ਰਜਿਸਟਰ ਕੀਤੇ ਫ਼ੋਨ ਨੰਬਰ ਜਾਂ ਈਮੇਲ ਅਤੇ ਪਾਸਵਰਡ ਨਾਲ ਸਾਈਨ ਇਨ ਕਰੋ।",
    auth_operator_help: "ਆਪਣੀ ਰਜਿਸਟਰ ਕੀਤੀ ਆਪਰੇਟਰ ਆਈਡੀ ਜਾਂ ਈਮੇਲ ਅਤੇ ਪਾਸਵਰਡ ਨਾਲ ਸਾਈਨ ਇਨ ਕਰੋ।",
    auth_create_farmer: "ਨਵਾਂ ਕਿਸਾਨ ਖਾਤਾ ਬਣਾਓ",
    auth_register_operator: "ਡਰੋਨ ਆਪਰੇਟਰ ਵਜੋਂ ਰਜਿਸਟਰ ਕਰੋ",
    auth_register_name: "ਪੂਰਾ ਨਾਮ",
    auth_register_email: "ਈਮੇਲ",
    auth_register_phone: "10 ਅੰਕਾਂ ਦਾ ਫ਼ੋਨ ਨੰਬਰ",
    auth_register_license: "ਆਪਰੇਟਰ ਲਾਇਸੈਂਸ ਆਈਡੀ",
    auth_register_password: "ਪਾਸਵਰਡ (ਘੱਟੋ-ਘੱਟ 8 ਅੱਖਰ)",
    auth_create_account: "ਖਾਤਾ ਬਣਾਓ",
    auth_register_operator_submit: "ਆਪਰੇਟਰ ਰਜਿਸਟਰ ਕਰੋ",
    auth_back_to_login: "ਲੌਗਇਨ ਤੇ ਵਾਪਸ ਜਾਓ",
    auth_operator_placeholder: "ਆਪਰੇਟਰ ਆਈਡੀ ਜਾਂ ਈਮੇਲ ਦਰਜ ਕਰੋ",
    auth_farmer_phone_title: "10 ਅੰਕਾਂ ਦਾ ਫ਼ੋਨ ਨੰਬਰ ਜਾਂ ਵੈਧ ਈਮੇਲ ਦਰਜ ਕਰੋ।",
    auth_language_menu_title: "ਭਾਸ਼ਾ ਚੁਣੋ"
  },
  bn: {
    auth_operator_sub: "বুকিং অনুরোধ ও স্প্রে পরিচালনা করুন",
    auth_operator_identifier: "অপারেটর আইডি / ইমেল",
    auth_operator_login: "লগইন",
    auth_farmer_help: "নিবন্ধিত ফোন নম্বর বা ইমেল ও পাসওয়ার্ড দিয়ে সাইন ইন করুন।",
    auth_operator_help: "নিবন্ধিত অপারেটর আইডি বা ইমেল ও পাসওয়ার্ড দিয়ে সাইন ইন করুন।",
    auth_create_farmer: "নতুন কৃষক অ্যাকাউন্ট তৈরি করুন",
    auth_register_operator: "ড্রোন অপারেটর হিসেবে নিবন্ধন করুন",
    auth_register_name: "পুরো নাম",
    auth_register_email: "ইমেল",
    auth_register_phone: "10 সংখ্যার ফোন নম্বর",
    auth_register_license: "অপারেটর লাইসেন্স আইডি",
    auth_register_password: "পাসওয়ার্ড (কমপক্ষে 8 অক্ষর)",
    auth_create_account: "অ্যাকাউন্ট তৈরি করুন",
    auth_register_operator_submit: "অপারেটর নিবন্ধন করুন",
    auth_back_to_login: "লগইনে ফিরে যান",
    auth_operator_placeholder: "অপারেটর আইডি বা ইমেল লিখুন",
    auth_farmer_phone_title: "10 সংখ্যার ফোন নম্বর বা বৈধ ইমেল লিখুন।",
    auth_language_menu_title: "ভাষা নির্বাচন করুন"
  },
  es: {
    auth_operator_sub: "Administre solicitudes y fumigaciones",
    auth_operator_identifier: "ID de operador / Correo",
    auth_operator_login: "Iniciar sesión",
    auth_farmer_help: "Inicie sesión con su teléfono o correo registrado y su contraseña.",
    auth_operator_help: "Inicie sesión con su ID de operador o correo registrado y su contraseña.",
    auth_create_farmer: "Crear cuenta de agricultor",
    auth_register_operator: "Registrarse como operador de drones",
    auth_register_name: "Nombre completo",
    auth_register_email: "Correo electrónico",
    auth_register_phone: "Teléfono de 10 dígitos",
    auth_register_license: "ID de licencia del operador",
    auth_register_password: "Contraseña (al menos 8 caracteres)",
    auth_create_account: "Crear cuenta",
    auth_register_operator_submit: "Registrar operador",
    auth_back_to_login: "Volver al inicio de sesión",
    auth_operator_placeholder: "Ingrese ID de operador o correo",
    auth_farmer_phone_title: "Ingrese un teléfono de 10 dígitos o un correo válido.",
    auth_language_menu_title: "Seleccionar idioma"
  }
};

const PORTAL_CONTROL_TRANSLATIONS = {
  en: {
    auth_forgot_password: "Forgot password?",
    auth_reset_title: "Reset your password",
    auth_reset_intro: "Enter your account email. If it is registered, we will email a 6-digit code that expires in 10 minutes.",
    auth_reset_email: "Email address",
    auth_reset_email_placeholder: "Enter your registered email",
    auth_send_code: "Send verification code",
    auth_reset_code: "6-digit verification code",
    auth_reset_code_placeholder: "Enter the code from your email",
    auth_reset_new_password: "New password (at least 8 characters)",
    auth_reset_new_password_placeholder: "Enter a new password",
    auth_reset_confirm_password: "Confirm new password",
    auth_reset_confirm_password_placeholder: "Re-enter the new password",
    auth_reset_submit: "Update password",
    auth_reset_back: "Use a different email",
    auth_reset_cancel: "Cancel",
    auth_reset_sent: "If an account exists for this email, a verification code has been sent.",
    auth_reset_complete: "Password updated. Sign in with your new password.",
    auth_reset_mismatch: "The passwords do not match.",
    auth_reset_sending: "Sending code...",
    auth_reset_updating: "Updating password...",
    auth_login_code_sent: "We sent a 6-digit sign-in code to {email}. It expires in 10 minutes.",
    auth_login_sending_code: "Verifying your password and sending a code...",
    auth_login_verifying_code: "Verifying code...",
    auth_login_verify: "Verify and sign in",
    auth_login_back: "Back to password",
    theme_to_light: "Light mode",
    theme_to_dark: "Dark mode"
  },
  hi: {
    auth_forgot_password: "पासवर्ड भूल गए?",
    auth_reset_title: "पासवर्ड रीसेट करें",
    auth_reset_intro: "अपना ईमेल दर्ज करें। खाता मौजूद होने पर 10 मिनट में समाप्त होने वाला 6 अंकों का कोड भेजा जाएगा।",
    auth_reset_email: "ईमेल पता",
    auth_reset_email_placeholder: "अपना पंजीकृत ईमेल दर्ज करें",
    auth_send_code: "सत्यापन कोड भेजें",
    auth_reset_code: "6 अंकों का सत्यापन कोड",
    auth_reset_code_placeholder: "ईमेल में मिला कोड दर्ज करें",
    auth_reset_new_password: "नया पासवर्ड (कम से कम 8 अक्षर)",
    auth_reset_new_password_placeholder: "नया पासवर्ड दर्ज करें",
    auth_reset_confirm_password: "नए पासवर्ड की पुष्टि करें",
    auth_reset_confirm_password_placeholder: "नया पासवर्ड फिर से दर्ज करें",
    auth_reset_submit: "पासवर्ड अपडेट करें",
    auth_reset_back: "दूसरा ईमेल इस्तेमाल करें",
    auth_reset_cancel: "रद्द करें",
    auth_reset_sent: "यदि इस ईमेल से खाता जुड़ा है, तो सत्यापन कोड भेज दिया गया है।",
    auth_reset_complete: "पासवर्ड अपडेट हो गया। नए पासवर्ड से लॉगिन करें।",
    auth_reset_mismatch: "दोनों पासवर्ड मेल नहीं खाते।",
    auth_reset_sending: "कोड भेजा जा रहा है...",
    auth_reset_updating: "पासवर्ड अपडेट हो रहा है...",
    auth_login_code_sent: "6 अंकों का साइन-इन कोड {email} पर भेजा गया है। यह 10 मिनट में समाप्त होगा।",
    auth_login_sending_code: "पासवर्ड सत्यापित करके कोड भेजा जा रहा है...",
    auth_login_verifying_code: "कोड सत्यापित हो रहा है...",
    auth_login_verify: "सत्यापित करें और साइन इन करें",
    auth_login_back: "पासवर्ड पर वापस जाएँ",
    theme_to_light: "लाइट मोड",
    theme_to_dark: "डार्क मोड"
  },
  te: {
    auth_forgot_password: "పాస్‌వర్డ్ మర్చిపోయారా?",
    auth_reset_title: "పాస్‌వర్డ్‌ను రీసెట్ చేయండి",
    auth_reset_intro: "మీ ఖాతా ఇమెయిల్ నమోదు చేయండి. ఖాతా ఉంటే 10 నిమిషాల్లో గడువు ముగిసే 6 అంకెల కోడ్‌ను పంపిస్తాము.",
    auth_reset_email: "ఇమెయిల్ చిరునామా",
    auth_reset_email_placeholder: "నమోదు చేసిన ఇమెయిల్ నమోదు చేయండి",
    auth_send_code: "ధృవీకరణ కోడ్ పంపండి",
    auth_reset_code: "6 అంకెల ధృవీకరణ కోడ్",
    auth_reset_code_placeholder: "ఇమెయిల్‌లో వచ్చిన కోడ్ నమోదు చేయండి",
    auth_reset_new_password: "కొత్త పాస్‌వర్డ్ (కనీసం 8 అక్షరాలు)",
    auth_reset_new_password_placeholder: "కొత్త పాస్‌వర్డ్ నమోదు చేయండి",
    auth_reset_confirm_password: "కొత్త పాస్‌వర్డ్‌ను నిర్ధారించండి",
    auth_reset_confirm_password_placeholder: "కొత్త పాస్‌వర్డ్‌ను మళ్లీ నమోదు చేయండి",
    auth_reset_submit: "పాస్‌వర్డ్‌ను నవీకరించండి",
    auth_reset_back: "వేరే ఇమెయిల్ ఉపయోగించండి",
    auth_reset_cancel: "రద్దు చేయండి",
    auth_reset_sent: "ఈ ఇమెయిల్‌తో ఖాతా ఉంటే, ధృవీకరణ కోడ్ పంపబడింది.",
    auth_reset_complete: "పాస్‌వర్డ్ నవీకరించబడింది. కొత్త పాస్‌వర్డ్‌తో లాగిన్ చేయండి.",
    auth_reset_mismatch: "పాస్‌వర్డ్‌లు సరిపోలలేదు.",
    auth_reset_sending: "కోడ్ పంపుతోంది...",
    auth_reset_updating: "పాస్‌వర్డ్ నవీకరిస్తోంది...",
    auth_login_code_sent: "6 అంకెల సైన్-ఇన్ కోడ్ {email}కు పంపించాం. ఇది 10 నిమిషాల్లో గడువు ముగుస్తుంది.",
    auth_login_sending_code: "పాస్‌వర్డ్‌ను ధృవీకరించి కోడ్ పంపిస్తున్నాం...",
    auth_login_verifying_code: "కోడ్‌ను ధృవీకరిస్తోంది...",
    auth_login_verify: "ధృవీకరించి సైన్ ఇన్ చేయండి",
    auth_login_back: "పాస్‌వర్డ్‌కు తిరిగి వెళ్లండి",
    theme_to_light: "లైట్ మోడ్",
    theme_to_dark: "డార్క్ మోడ్"
  },
  ta: {
    auth_forgot_password: "கடவுச்சொல்லை மறந்துவிட்டீர்களா?",
    auth_reset_title: "கடவுச்சொல்லை மீட்டமை",
    auth_reset_intro: "உங்கள் கணக்கு மின்னஞ்சலை உள்ளிடவும். கணக்கு இருந்தால் 10 நிமிடங்களில் காலாவதியாகும் 6 இலக்கக் குறியீடு அனுப்பப்படும்.",
    auth_reset_email: "மின்னஞ்சல் முகவரி",
    auth_reset_email_placeholder: "பதிவுசெய்த மின்னஞ்சலை உள்ளிடவும்",
    auth_send_code: "சரிபார்ப்புக் குறியீட்டை அனுப்பு",
    auth_reset_code: "6 இலக்க சரிபார்ப்புக் குறியீடு",
    auth_reset_code_placeholder: "மின்னஞ்சலில் வந்த குறியீட்டை உள்ளிடவும்",
    auth_reset_new_password: "புதிய கடவுச்சொல் (குறைந்தது 8 எழுத்துகள்)",
    auth_reset_new_password_placeholder: "புதிய கடவுச்சொல்லை உள்ளிடவும்",
    auth_reset_confirm_password: "புதிய கடவுச்சொல்லை உறுதிப்படுத்தவும்",
    auth_reset_confirm_password_placeholder: "புதிய கடவுச்சொல்லை மீண்டும் உள்ளிடவும்",
    auth_reset_submit: "கடவுச்சொல்லைப் புதுப்பி",
    auth_reset_back: "வேறு மின்னஞ்சலைப் பயன்படுத்து",
    auth_reset_cancel: "ரத்துசெய்",
    auth_reset_sent: "இந்த மின்னஞ்சலுடன் கணக்கு இருந்தால், சரிபார்ப்புக் குறியீடு அனுப்பப்பட்டது.",
    auth_reset_complete: "கடவுச்சொல் புதுப்பிக்கப்பட்டது. புதிய கடவுச்சொல்லுடன் உள்நுழையவும்.",
    auth_reset_mismatch: "கடவுச்சொற்கள் பொருந்தவில்லை.",
    auth_reset_sending: "குறியீடு அனுப்பப்படுகிறது...",
    auth_reset_updating: "கடவுச்சொல் புதுப்பிக்கப்படுகிறது...",
    auth_login_code_sent: "6 இலக்க உள்நுழைவு குறியீடு {email}க்கு அனுப்பப்பட்டது. 10 நிமிடங்களில் காலாவதியாகும்.",
    auth_login_sending_code: "கடவுச்சொல் சரிபார்க்கப்பட்டு குறியீடு அனுப்பப்படுகிறது...",
    auth_login_verifying_code: "குறியீடு சரிபார்க்கப்படுகிறது...",
    auth_login_verify: "சரிபார்த்து உள்நுழை",
    auth_login_back: "கடவுச்சொல்லுக்குத் திரும்பு",
    theme_to_light: "ஒளி பயன்முறை",
    theme_to_dark: "இருள் பயன்முறை"
  },
  mr: {
    auth_forgot_password: "पासवर्ड विसरलात?",
    auth_reset_title: "पासवर्ड रीसेट करा",
    auth_reset_intro: "तुमचा खाते ईमेल टाका. खाते असल्यास 10 मिनिटांत कालबाह्य होणारा 6 अंकी कोड पाठवला जाईल.",
    auth_reset_email: "ईमेल पत्ता",
    auth_reset_email_placeholder: "नोंदणीकृत ईमेल टाका",
    auth_send_code: "सत्यापन कोड पाठवा",
    auth_reset_code: "6 अंकी सत्यापन कोड",
    auth_reset_code_placeholder: "ईमेलमधील कोड टाका",
    auth_reset_new_password: "नवीन पासवर्ड (किमान 8 अक्षरे)",
    auth_reset_new_password_placeholder: "नवीन पासवर्ड टाका",
    auth_reset_confirm_password: "नवीन पासवर्डची पुष्टी करा",
    auth_reset_confirm_password_placeholder: "नवीन पासवर्ड पुन्हा टाका",
    auth_reset_submit: "पासवर्ड अपडेट करा",
    auth_reset_back: "दुसरा ईमेल वापरा",
    auth_reset_cancel: "रद्द करा",
    auth_reset_sent: "या ईमेलसाठी खाते असल्यास, सत्यापन कोड पाठवला आहे.",
    auth_reset_complete: "पासवर्ड अपडेट झाला. नवीन पासवर्डने लॉगिन करा.",
    auth_reset_mismatch: "दोन्ही पासवर्ड जुळत नाहीत.",
    auth_reset_sending: "कोड पाठवत आहे...",
    auth_reset_updating: "पासवर्ड अपडेट करत आहे...",
    auth_login_code_sent: "6 अंकी साइन-इन कोड {email} वर पाठवला आहे. तो 10 मिनिटांत कालबाह्य होईल.",
    auth_login_sending_code: "पासवर्ड तपासून कोड पाठवत आहे...",
    auth_login_verifying_code: "कोड तपासत आहे...",
    auth_login_verify: "तपासा आणि साइन इन करा",
    auth_login_back: "पासवर्डकडे परत जा",
    theme_to_light: "लाइट मोड",
    theme_to_dark: "डार्क मोड"
  },
  gu: {
    auth_forgot_password: "પાસવર્ડ ભૂલી ગયા?",
    auth_reset_title: "પાસવર્ડ રીસેટ કરો",
    auth_reset_intro: "તમારો ખાતાનો ઈમેલ દાખલ કરો. ખાતું હશે તો 10 મિનિટમાં સમાપ્ત થતો 6 અંકનો કોડ મોકલવામાં આવશે.",
    auth_reset_email: "ઈમેલ સરનામું",
    auth_reset_email_placeholder: "નોંધાયેલ ઈમેલ દાખલ કરો",
    auth_send_code: "ચકાસણી કોડ મોકલો",
    auth_reset_code: "6 અંકનો ચકાસણી કોડ",
    auth_reset_code_placeholder: "ઈમેલમાં આવેલ કોડ દાખલ કરો",
    auth_reset_new_password: "નવો પાસવર્ડ (ઓછામાં ઓછા 8 અક્ષરો)",
    auth_reset_new_password_placeholder: "નવો પાસવર્ડ દાખલ કરો",
    auth_reset_confirm_password: "નવા પાસવર્ડની પુષ્ટિ કરો",
    auth_reset_confirm_password_placeholder: "નવો પાસવર્ડ ફરી દાખલ કરો",
    auth_reset_submit: "પાસવર્ડ અપડેટ કરો",
    auth_reset_back: "બીજો ઈમેલ વાપરો",
    auth_reset_cancel: "રદ કરો",
    auth_reset_sent: "આ ઈમેલ સાથે ખાતું હશે તો ચકાસણી કોડ મોકલવામાં આવ્યો છે.",
    auth_reset_complete: "પાસવર્ડ અપડેટ થયો. નવા પાસવર્ડથી લૉગિન કરો.",
    auth_reset_mismatch: "બંને પાસવર્ડ મેળ ખાતા નથી.",
    auth_reset_sending: "કોડ મોકલાઈ રહ્યો છે...",
    auth_reset_updating: "પાસવર્ડ અપડેટ થઈ રહ્યો છે...",
    auth_login_code_sent: "6 અંકનો સાઇન-ઇન કોડ {email} પર મોકલ્યો છે. તે 10 મિનિટમાં સમાપ્ત થશે.",
    auth_login_sending_code: "પાસવર્ડ ચકાસીને કોડ મોકલાઈ રહ્યો છે...",
    auth_login_verifying_code: "કોડ ચકાસાઈ રહ્યો છે...",
    auth_login_verify: "ચકાસો અને સાઇન ઇન કરો",
    auth_login_back: "પાસવર્ડ પર પાછા જાઓ",
    theme_to_light: "લાઇટ મોડ",
    theme_to_dark: "ડાર્ક મોડ"
  },
  kn: {
    auth_forgot_password: "ಪಾಸ್‌ವರ್ಡ್ ಮರೆತಿರಾ?",
    auth_reset_title: "ಪಾಸ್‌ವರ್ಡ್ ಮರುಹೊಂದಿಸಿ",
    auth_reset_intro: "ನಿಮ್ಮ ಖಾತೆಯ ಇಮೇಲ್ ನಮೂದಿಸಿ. ಖಾತೆ ಇದ್ದರೆ 10 ನಿಮಿಷಗಳಲ್ಲಿ ಅವಧಿ ಮುಗಿಯುವ 6 ಅಂಕಿಯ ಕೋಡ್ ಕಳುಹಿಸಲಾಗುತ್ತದೆ.",
    auth_reset_email: "ಇಮೇಲ್ ವಿಳಾಸ",
    auth_reset_email_placeholder: "ನೋಂದಾಯಿತ ಇಮೇಲ್ ನಮೂದಿಸಿ",
    auth_send_code: "ಪರಿಶೀಲನಾ ಕೋಡ್ ಕಳುಹಿಸಿ",
    auth_reset_code: "6 ಅಂಕಿಯ ಪರಿಶೀಲನಾ ಕೋಡ್",
    auth_reset_code_placeholder: "ಇಮೇಲ್‌ನಲ್ಲಿರುವ ಕೋಡ್ ನಮೂದಿಸಿ",
    auth_reset_new_password: "ಹೊಸ ಪಾಸ್‌ವರ್ಡ್ (ಕನಿಷ್ಠ 8 ಅಕ್ಷರಗಳು)",
    auth_reset_new_password_placeholder: "ಹೊಸ ಪಾಸ್‌ವರ್ಡ್ ನಮೂದಿಸಿ",
    auth_reset_confirm_password: "ಹೊಸ ಪಾಸ್‌ವರ್ಡ್ ದೃಢೀಕರಿಸಿ",
    auth_reset_confirm_password_placeholder: "ಹೊಸ ಪಾಸ್‌ವರ್ಡ್ ಮತ್ತೆ ನಮೂದಿಸಿ",
    auth_reset_submit: "ಪಾಸ್‌ವರ್ಡ್ ನವೀಕರಿಸಿ",
    auth_reset_back: "ಬೇರೆ ಇಮೇಲ್ ಬಳಸಿ",
    auth_reset_cancel: "ರದ್ದುಮಾಡಿ",
    auth_reset_sent: "ಈ ಇಮೇಲ್‌ಗೆ ಖಾತೆ ಇದ್ದರೆ ಪರಿಶೀಲನಾ ಕೋಡ್ ಕಳುಹಿಸಲಾಗಿದೆ.",
    auth_reset_complete: "ಪಾಸ್‌ವರ್ಡ್ ನವೀಕರಿಸಲಾಗಿದೆ. ಹೊಸ ಪಾಸ್‌ವರ್ಡ್‌ನಿಂದ ಲಾಗಿನ್ ಮಾಡಿ.",
    auth_reset_mismatch: "ಪಾಸ್‌ವರ್ಡ್‌ಗಳು ಹೊಂದಿಕೆಯಾಗುತ್ತಿಲ್ಲ.",
    auth_reset_sending: "ಕೋಡ್ ಕಳುಹಿಸಲಾಗುತ್ತಿದೆ...",
    auth_reset_updating: "ಪಾಸ್‌ವರ್ಡ್ ನವೀಕರಿಸಲಾಗುತ್ತಿದೆ...",
    auth_login_code_sent: "6 ಅಂಕಿಯ ಸೈನ್-ಇನ್ ಕೋಡ್ ಅನ್ನು {email} ಗೆ ಕಳುಹಿಸಲಾಗಿದೆ. ಇದು 10 ನಿಮಿಷಗಳಲ್ಲಿ ಅವಧಿ ಮುಗಿಯುತ್ತದೆ.",
    auth_login_sending_code: "ಪಾಸ್‌ವರ್ಡ್ ಪರಿಶೀಲಿಸಿ ಕೋಡ್ ಕಳುಹಿಸಲಾಗುತ್ತಿದೆ...",
    auth_login_verifying_code: "ಕೋಡ್ ಪರಿಶೀಲಿಸಲಾಗುತ್ತಿದೆ...",
    auth_login_verify: "ಪರಿಶೀಲಿಸಿ ಸೈನ್ ಇನ್ ಮಾಡಿ",
    auth_login_back: "ಪಾಸ್‌ವರ್ಡ್‌ಗೆ ಹಿಂತಿರುಗಿ",
    theme_to_light: "ಲೈಟ್ ಮೋಡ್",
    theme_to_dark: "ಡಾರ್ಕ್ ಮೋಡ್"
  },
  pa: {
    auth_forgot_password: "ਪਾਸਵਰਡ ਭੁੱਲ ਗਏ?",
    auth_reset_title: "ਪਾਸਵਰਡ ਰੀਸੈੱਟ ਕਰੋ",
    auth_reset_intro: "ਆਪਣਾ ਖਾਤਾ ਈਮੇਲ ਦਰਜ ਕਰੋ। ਖਾਤਾ ਹੋਣ 'ਤੇ 10 ਮਿੰਟਾਂ ਵਿੱਚ ਮਿਆਦ ਪੁੱਗਣ ਵਾਲਾ 6 ਅੰਕਾਂ ਦਾ ਕੋਡ ਭੇਜਿਆ ਜਾਵੇਗਾ।",
    auth_reset_email: "ਈਮੇਲ ਪਤਾ",
    auth_reset_email_placeholder: "ਰਜਿਸਟਰ ਕੀਤਾ ਈਮੇਲ ਦਰਜ ਕਰੋ",
    auth_send_code: "ਤਸਦੀਕ ਕੋਡ ਭੇਜੋ",
    auth_reset_code: "6 ਅੰਕਾਂ ਦਾ ਤਸਦੀਕ ਕੋਡ",
    auth_reset_code_placeholder: "ਈਮੇਲ ਵਿੱਚ ਮਿਲਿਆ ਕੋਡ ਦਰਜ ਕਰੋ",
    auth_reset_new_password: "ਨਵਾਂ ਪਾਸਵਰਡ (ਘੱਟੋ-ਘੱਟ 8 ਅੱਖਰ)",
    auth_reset_new_password_placeholder: "ਨਵਾਂ ਪਾਸਵਰਡ ਦਰਜ ਕਰੋ",
    auth_reset_confirm_password: "ਨਵੇਂ ਪਾਸਵਰਡ ਦੀ ਪੁਸ਼ਟੀ ਕਰੋ",
    auth_reset_confirm_password_placeholder: "ਨਵਾਂ ਪਾਸਵਰਡ ਦੁਬਾਰਾ ਦਰਜ ਕਰੋ",
    auth_reset_submit: "ਪਾਸਵਰਡ ਅੱਪਡੇਟ ਕਰੋ",
    auth_reset_back: "ਹੋਰ ਈਮੇਲ ਵਰਤੋ",
    auth_reset_cancel: "ਰੱਦ ਕਰੋ",
    auth_reset_sent: "ਜੇ ਇਸ ਈਮੇਲ ਨਾਲ ਖਾਤਾ ਹੈ, ਤਾਂ ਤਸਦੀਕ ਕੋਡ ਭੇਜਿਆ ਗਿਆ ਹੈ।",
    auth_reset_complete: "ਪਾਸਵਰਡ ਅੱਪਡੇਟ ਹੋ ਗਿਆ। ਨਵੇਂ ਪਾਸਵਰਡ ਨਾਲ ਲੌਗਇਨ ਕਰੋ।",
    auth_reset_mismatch: "ਦੋਵੇਂ ਪਾਸਵਰਡ ਮੇਲ ਨਹੀਂ ਖਾਂਦੇ।",
    auth_reset_sending: "ਕੋਡ ਭੇਜਿਆ ਜਾ ਰਿਹਾ ਹੈ...",
    auth_reset_updating: "ਪਾਸਵਰਡ ਅੱਪਡੇਟ ਹੋ ਰਿਹਾ ਹੈ...",
    auth_login_code_sent: "6 ਅੰਕਾਂ ਦਾ ਸਾਈਨ-ਇਨ ਕੋਡ {email} ਤੇ ਭੇਜਿਆ ਗਿਆ ਹੈ। ਇਹ 10 ਮਿੰਟਾਂ ਵਿੱਚ ਮਿਆਦ ਪੁੱਗੇਗਾ।",
    auth_login_sending_code: "ਪਾਸਵਰਡ ਦੀ ਪੁਸ਼ਟੀ ਕਰਕੇ ਕੋਡ ਭੇਜਿਆ ਜਾ ਰਿਹਾ ਹੈ...",
    auth_login_verifying_code: "ਕੋਡ ਦੀ ਜਾਂਚ ਹੋ ਰਹੀ ਹੈ...",
    auth_login_verify: "ਜਾਂਚੋ ਅਤੇ ਸਾਈਨ ਇਨ ਕਰੋ",
    auth_login_back: "ਪਾਸਵਰਡ ਤੇ ਵਾਪਸ ਜਾਓ",
    theme_to_light: "ਲਾਈਟ ਮੋਡ",
    theme_to_dark: "ਡਾਰਕ ਮੋਡ"
  },
  bn: {
    auth_forgot_password: "পাসওয়ার্ড ভুলে গেছেন?",
    auth_reset_title: "পাসওয়ার্ড রিসেট করুন",
    auth_reset_intro: "আপনার অ্যাকাউন্টের ইমেল দিন। অ্যাকাউন্ট থাকলে 10 মিনিটে মেয়াদ শেষ হওয়া 6 সংখ্যার কোড পাঠানো হবে।",
    auth_reset_email: "ইমেল ঠিকানা",
    auth_reset_email_placeholder: "নিবন্ধিত ইমেল দিন",
    auth_send_code: "যাচাইকরণ কোড পাঠান",
    auth_reset_code: "6 সংখ্যার যাচাইকরণ কোড",
    auth_reset_code_placeholder: "ইমেলে পাওয়া কোড দিন",
    auth_reset_new_password: "নতুন পাসওয়ার্ড (কমপক্ষে 8 অক্ষর)",
    auth_reset_new_password_placeholder: "নতুন পাসওয়ার্ড দিন",
    auth_reset_confirm_password: "নতুন পাসওয়ার্ড নিশ্চিত করুন",
    auth_reset_confirm_password_placeholder: "নতুন পাসওয়ার্ড আবার দিন",
    auth_reset_submit: "পাসওয়ার্ড আপডেট করুন",
    auth_reset_back: "অন্য ইমেল ব্যবহার করুন",
    auth_reset_cancel: "বাতিল",
    auth_reset_sent: "এই ইমেলে অ্যাকাউন্ট থাকলে যাচাইকরণ কোড পাঠানো হয়েছে।",
    auth_reset_complete: "পাসওয়ার্ড আপডেট হয়েছে। নতুন পাসওয়ার্ড দিয়ে লগইন করুন।",
    auth_reset_mismatch: "পাসওয়ার্ড দুটি মেলেনি।",
    auth_reset_sending: "কোড পাঠানো হচ্ছে...",
    auth_reset_updating: "পাসওয়ার্ড আপডেট হচ্ছে...",
    auth_login_code_sent: "6 সংখ্যার সাইন-ইন কোড {email} ঠিকানায় পাঠানো হয়েছে। এটি 10 মিনিটে মেয়াদ শেষ হবে।",
    auth_login_sending_code: "পাসওয়ার্ড যাচাই করে কোড পাঠানো হচ্ছে...",
    auth_login_verifying_code: "কোড যাচাই হচ্ছে...",
    auth_login_verify: "যাচাই করে সাইন ইন করুন",
    auth_login_back: "পাসওয়ার্ডে ফিরে যান",
    theme_to_light: "লাইট মোড",
    theme_to_dark: "ডার্ক মোড"
  },
  es: {
    auth_forgot_password: "¿Olvidó su contraseña?",
    auth_reset_title: "Restablecer contraseña",
    auth_reset_intro: "Ingrese el correo de su cuenta. Si existe, recibirá un código de 6 dígitos que caduca en 10 minutos.",
    auth_reset_email: "Correo electrónico",
    auth_reset_email_placeholder: "Ingrese su correo registrado",
    auth_send_code: "Enviar código de verificación",
    auth_reset_code: "Código de verificación de 6 dígitos",
    auth_reset_code_placeholder: "Ingrese el código recibido por correo",
    auth_reset_new_password: "Nueva contraseña (al menos 8 caracteres)",
    auth_reset_new_password_placeholder: "Ingrese una nueva contraseña",
    auth_reset_confirm_password: "Confirmar nueva contraseña",
    auth_reset_confirm_password_placeholder: "Repita la nueva contraseña",
    auth_reset_submit: "Actualizar contraseña",
    auth_reset_back: "Usar otro correo",
    auth_reset_cancel: "Cancelar",
    auth_reset_sent: "Si existe una cuenta con este correo, se ha enviado un código de verificación.",
    auth_reset_complete: "Contraseña actualizada. Inicie sesión con su nueva contraseña.",
    auth_reset_mismatch: "Las contraseñas no coinciden.",
    auth_reset_sending: "Enviando código...",
    auth_reset_updating: "Actualizando contraseña...",
    auth_login_code_sent: "Enviamos un código de acceso de 6 dígitos a {email}. Caduca en 10 minutos.",
    auth_login_sending_code: "Verificando su contraseña y enviando un código...",
    auth_login_verifying_code: "Verificando código...",
    auth_login_verify: "Verificar e iniciar sesión",
    auth_login_back: "Volver a la contraseña",
    theme_to_light: "Modo claro",
    theme_to_dark: "Modo oscuro"
  }
};

// Application State
const STATE = {
  backendUrl: "http://localhost:8000/api",
  accessToken: null,
  currentUser: null,
  currentRole: "farmer",
  currentLang: localStorage.getItem("agro_selected_lang") || "en",
  currentTheme: "dark",
  passwordResetRole: "farmer",
  currentFarmLocation: null,
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
      scheduled_date: "2026-11-25",
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
      scheduled_date: "2026-11-26",
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
      scheduled_date: "2026-11-27",
      scheduled_slot: "08:00 - 09:30 AM",
      total_cost: 2400.00,
      payment_status: "unpaid",
      mission_status: "pending",
      drone_model: null,
      operator_name: null
    }
  ],
  particles: []
};

const ROLE_DASHBOARD_STORAGE_KEY = "agrodrone_role_dashboard";

function loadRoleDashboardState() {
  const savedState = localStorage.getItem(ROLE_DASHBOARD_STORAGE_KEY);
  if (!savedState) return null;

  try {
    const parsedState = JSON.parse(savedState);
    if (parsedState && typeof parsedState === "object" && !Array.isArray(parsedState)) {
      return parsedState;
    }
  } catch (error) {
    if (!(error instanceof SyntaxError)) throw error;
    console.error("Saved booking data is invalid JSON.", error);
  }
  console.error("Saved booking data has an invalid format.");
  return null;
}

const SAVED_ROLE_DASHBOARD_STATE = loadRoleDashboardState();
const ROLE_DASHBOARD_STATE = {
  booking: SAVED_ROLE_DASHBOARD_STATE && SAVED_ROLE_DASHBOARD_STATE.booking || null,
  bookingCounter: SAVED_ROLE_DASHBOARD_STATE && Number.isInteger(SAVED_ROLE_DASHBOARD_STATE.bookingCounter)
    ? SAVED_ROLE_DASHBOARD_STATE.bookingCounter
    : 0,
  bookingRequestStatus: SAVED_ROLE_DASHBOARD_STATE && SAVED_ROLE_DASHBOARD_STATE.bookingRequestStatus || "Pending",
  operatorAvailable: SAVED_ROLE_DASHBOARD_STATE && typeof SAVED_ROLE_DASHBOARD_STATE.operatorAvailable === "boolean"
    ? SAVED_ROLE_DASHBOARD_STATE.operatorAvailable
    : true,
  spraying: SAVED_ROLE_DASHBOARD_STATE && typeof SAVED_ROLE_DASHBOARD_STATE.spraying === "boolean"
    ? SAVED_ROLE_DASHBOARD_STATE.spraying
    : false
};
let AVAILABLE_OPERATORS = [];

function persistRoleDashboardState() {
  localStorage.setItem(ROLE_DASHBOARD_STORAGE_KEY, JSON.stringify(ROLE_DASHBOARD_STATE));
}

// ==========================================================
// 2. LANGUAGE SWITCHER IMPLEMENTATION
// ==========================================================

function setLanguage(lang) {
  if (!I18N_TRANSLATIONS[lang]) lang = "en";
  STATE.currentLang = lang;
  localStorage.setItem("agro_selected_lang", lang);
  document.documentElement.lang = lang;

  const t = {
    ...I18N_TRANSLATIONS[lang],
    ...AUTH_PORTAL_TRANSLATIONS[lang],
    ...PORTAL_CONTROL_TRANSLATIONS[lang]
  };

  // 1. Update text for all elements with data-i18n
  document.querySelectorAll("[data-i18n]").forEach(elem => {
    const key = elem.getAttribute("data-i18n");
    if (t[key] !== undefined) {
      elem.textContent = t[key];
    }
  });

  // 2. Update placeholders with data-i18n-ph
  document.querySelectorAll("[data-i18n-ph]").forEach(elem => {
    const key = elem.getAttribute("data-i18n-ph");
    if (t[key] !== undefined) {
      elem.placeholder = t[key];
    }
  });

  // 3. Update accessible and browser-native title text
  document.querySelectorAll("[data-i18n-title]").forEach(elem => {
    const key = elem.getAttribute("data-i18n-title");
    if (t[key] !== undefined) {
      elem.title = t[key];
    }
  });

  // 4. Update active states in both language dropdown menus
  document.querySelectorAll(".lang-selector-wrap").forEach(wrap => {
    const currentLabel = wrap.querySelector(".current-lang-label");
    if (currentLabel) {
      currentLabel.textContent = `${t.flag} ${t.name}`;
    }

    wrap.querySelectorAll(".lang-option-btn").forEach(btn => {
      if (btn.getAttribute("data-lang") === lang) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });

    wrap.classList.remove("open");
  });

  updateThemeToggleButtons(t);

  // Re-render orders to update column formats if needed
  renderFarmerOrders();
}

function updateThemeToggleButtons(translations) {
  const labelKey = STATE.currentTheme === "light" ? "theme_to_dark" : "theme_to_light";
  const label = translations[labelKey];
  document.querySelectorAll("[data-theme-toggle]").forEach(button => {
    const icon = button.querySelector("[data-theme-icon]");
    const text = button.querySelector("[data-theme-label]");
    if (icon) icon.textContent = STATE.currentTheme === "light" ? "🌙" : "☀️";
    if (text) text.textContent = label;
    button.setAttribute("aria-label", label);
    button.title = label;
  });
}

function setTheme(theme) {
  STATE.currentTheme = theme === "light" ? "light" : "dark";
  document.documentElement.dataset.theme = STATE.currentTheme;
  localStorage.setItem("agro_theme", STATE.currentTheme);
  const translations = {
    ...I18N_TRANSLATIONS[STATE.currentLang],
    ...AUTH_PORTAL_TRANSLATIONS[STATE.currentLang],
    ...PORTAL_CONTROL_TRANSLATIONS[STATE.currentLang]
  };
  updateThemeToggleButtons(translations);
}

function toggleTheme() {
  setTheme(STATE.currentTheme === "dark" ? "light" : "dark");
}

function portalText(key) {
  return PORTAL_CONTROL_TRANSLATIONS[STATE.currentLang][key] || key;
}

function toggleLangMenu(containerId) {
  const target = document.getElementById(containerId);
  if (!target) return;

  const isOpen = target.classList.contains("open");
  // Close any other open menus
  document.querySelectorAll(".lang-selector-wrap").forEach(w => w.classList.remove("open"));

  if (!isOpen) {
    target.classList.add("open");
  }
}

// Global click handler to close open language dropdowns
document.addEventListener("click", (e) => {
  if (!e.target.closest(".lang-selector-wrap")) {
    document.querySelectorAll(".lang-selector-wrap").forEach(w => w.classList.remove("open"));
  }
});

// ==========================================================
// 3. ANIMATED LOGO & INTRO SPLASH SEQUENCE
// ==========================================================

let splashTimer = null;
let splashProgressInterval = null;

function initSplashScreen() {
  const splash = document.getElementById("agroSplashIntro");
  const bar = document.getElementById("splashProgressBar");
  const statusText = document.getElementById("splashStatusText");
  if (!splash) return;

  // Reset state
  splash.style.display = "flex";
  splash.classList.remove("fade-out");
  if (bar) bar.style.width = "0%";

  const telemetrySteps = [
    { pct: 15, msg: "LOCKING RTK GNSS SATELLITES (18 SATS)..." },
    { pct: 40, msg: "SYNCING DUAL FLIGHT CONTROLLERS..." },
    { pct: 68, msg: "CALIBRATING MULTISPECTRAL CANOPY NDVI..." },
    { pct: 90, msg: "TESTING 40L CENTRIFUGAL SPRAY NOZZLES..." },
    { pct: 100, msg: "AGRODRONE AVIONICS ARMED • READY TO FLY! ⚡" }
  ];

  let currentStep = 0;
  let progress = 0;

  if (splashProgressInterval) clearInterval(splashProgressInterval);
  splashProgressInterval = setInterval(() => {
    progress += 2;
    if (bar) bar.style.width = `${Math.min(100, progress)}%`;

    if (currentStep < telemetrySteps.length && progress >= telemetrySteps[currentStep].pct) {
      if (statusText) statusText.textContent = telemetrySteps[currentStep].msg;
      currentStep++;
    }

    if (progress >= 100) {
      clearInterval(splashProgressInterval);
      splashTimer = setTimeout(() => {
        skipSplashIntro();
      }, 500);
    }
  }, 45); // ~2.25 seconds total cinematic load
}

function skipSplashIntro() {
  if (splashProgressInterval) clearInterval(splashProgressInterval);
  if (splashTimer) clearTimeout(splashTimer);

  const splash = document.getElementById("agroSplashIntro");
  if (!splash) return;

  splash.classList.add("fade-out");
  setTimeout(() => {
    splash.style.display = "none";
  }, 700);
}

function replaySplashIntro() {
  initSplashScreen();
}

function triggerDroneBoost() {
  const droneWrap = document.querySelector(".splash-drone-wrap");
  if (droneWrap) {
    droneWrap.style.transform = "translateY(-30px) scale(1.15)";
    droneWrap.style.transition = "transform 0.4s ease-out";
    setTimeout(() => {
      droneWrap.style.transform = "";
      droneWrap.style.transition = "";
    }, 450);
  }
}

// ==========================================================
// 4. AUTHENTICATION (FARMER & DRONE LOGIN)
// ==========================================================

function switchAuthRole(role) {
  STATE.currentRole = role;
  const farmerTab = document.getElementById("tabFarmerBtn");
  const droneTab = document.getElementById("tabDroneBtn");
  const farmerForm = document.getElementById("farmerLoginForm");
  const droneForm = document.getElementById("droneLoginForm");

  if (role === "farmer") {
    farmerTab.classList.add("active");
    droneTab.classList.remove("active");
    farmerForm.style.display = "block";
    droneForm.style.display = "none";
  } else {
    droneTab.classList.add("active");
    farmerTab.classList.remove("active");
    droneForm.style.display = "block";
    farmerForm.style.display = "none";
  }
}

function getApiBaseUrl() {
  const configuredBase = document.querySelector('meta[name="agrodrone-api-base"]')?.content.trim();
  if (location.hostname === "localhost" || location.hostname === "127.0.0.1") {
    return STATE.backendUrl;
  }
  if (configuredBase) return configuredBase.replace(/\/+$/, "");
  return `${location.origin}/api`;
}

async function apiRequest(path, { method = "GET", body, authenticated = true } = {}) {
  const headers = {};
  if (body !== undefined) headers["Content-Type"] = "application/json";
  if (authenticated && STATE.accessToken) {
    headers.Authorization = `Bearer ${STATE.accessToken}`;
  }
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15_000);
  let response;
  try {
    response = await fetch(`${getApiBaseUrl()}/${path}`, {
      method,
      headers,
      body: body === undefined ? undefined : JSON.stringify(body),
      signal: controller.signal
    });
  } catch (error) {
    if (error.name === "AbortError") {
      throw new Error("The API request timed out. Check the backend connection.");
    }
    throw error;
  } finally {
    clearTimeout(timeout);
  }
  let result;
  try {
    result = await response.json();
  } catch (error) {
    throw new Error(`Authentication service returned HTTP ${response.status}.`);
  }
  if (!response.ok) {
    throw new Error(result.detail || `Authentication request failed (${response.status}).`);
  }
  return result;
}

function postAuthRequest(path, payload) {
  return apiRequest(`auth/${path}`, { method: "POST", body: payload, authenticated: false });
}

async function passwordLogin(event, role) {
  if (event) event.preventDefault();
  const isFarmer = role === "farmer";
  const identifier = document.getElementById(isFarmer ? "farmerEmail" : "dronePilotId").value.trim();
  const password = document.getElementById(isFarmer ? "farmerPassword" : "operatorPassword").value;
  const message = document.getElementById(role === "farmer" ? "farmerAuthMessage" : "operatorAuthMessage");
  const form = document.getElementById(isFarmer ? "farmerCredentialsForm" : "operatorCredentialsForm");
  const submitButton = form.querySelector('button[type="submit"]');
  submitButton.disabled = true;
  message.textContent = "Signing in...";

  try {
    const result = await postAuthRequest("login/password", {
      phone: identifier,
      password,
      role
    });
    if (!result.access_token || !result.user || result.user.role !== role) {
      throw new Error("The login response was incomplete. Check your account and try again.");
    }
    STATE.accessToken = result.access_token;
    sessionStorage.setItem("agrodrone_access_token", result.access_token);
    message.textContent = "";
    if (isFarmer) loginAsFarmer(result.user);
    else loginAsDrone(result.user);
  } catch (error) {
    message.textContent = error.message || "Sign-in failed. Check your account details and try again.";
    console.error("Password sign-in failed.", error);
  } finally {
    submitButton.disabled = false;
  }
}

function handleFarmerLogin(event) {
  return passwordLogin(event, "farmer");
}

function handleDroneLogin(event) {
  return passwordLogin(event, "operator");
}

function openPortalLogin(role) {
  document.getElementById("publicPortalSelection").hidden = true;
  document.getElementById("authLoginGateway").hidden = false;
  switchAuthRole(role === "operator" ? "drone" : "farmer");
  document.getElementById(role === "operator" ? "dronePilotId" : "farmerEmail").focus();
}

function returnToPortalSelection() {
  document.getElementById("authLoginGateway").hidden = true;
  document.getElementById("publicPortalSelection").hidden = false;
  setAuthMode("farmer", "login");
  setAuthMode("operator", "login");
}

function setAuthMode(role, mode) {
  const isFarmer = role === "farmer";
  document.getElementById(isFarmer ? "farmerCredentialsForm" : "operatorCredentialsForm").hidden =
    mode !== "login";
  document.getElementById(isFarmer ? "farmerRegisterForm" : "operatorRegisterForm").hidden =
    mode !== "register";
  document.getElementById(isFarmer ? "farmerAuthMessage" : "operatorAuthMessage").textContent = "";
}

function openPasswordReset(role) {
  STATE.passwordResetRole = role === "operator" ? "operator" : "farmer";
  const identifier = document.getElementById(
    STATE.passwordResetRole === "farmer" ? "farmerEmail" : "dronePilotId"
  ).value.trim();
  const emailField = document.getElementById("passwordResetEmail");
  document.getElementById("passwordResetRequestForm").hidden = false;
  document.getElementById("passwordResetConfirmForm").hidden = true;
  document.getElementById("passwordResetRequestForm").reset();
  emailField.value = identifier.includes("@") ? identifier : "";
  document.getElementById("passwordResetConfirmForm").reset();
  document.getElementById("passwordResetMessage").textContent = "";
  const modal = document.getElementById("passwordResetModal");
  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
  emailField.focus();
}

function closePasswordReset() {
  const modal = document.getElementById("passwordResetModal");
  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
  document.getElementById("passwordResetRequestForm").reset();
  document.getElementById("passwordResetRequestForm").hidden = false;
  document.getElementById("passwordResetConfirmForm").reset();
  document.getElementById("passwordResetConfirmForm").hidden = true;
  document.getElementById("passwordResetMessage").textContent = "";
}

function backToPasswordResetRequest() {
  document.getElementById("passwordResetConfirmForm").reset();
  document.getElementById("passwordResetConfirmForm").hidden = true;
  document.getElementById("passwordResetRequestForm").hidden = false;
  document.getElementById("passwordResetMessage").textContent = "";
  document.getElementById("passwordResetEmail").focus();
}

async function handlePasswordResetRequest(event) {
  event.preventDefault();
  const form = document.getElementById("passwordResetRequestForm");
  const submitButton = form.querySelector('button[type="submit"]');
  const email = document.getElementById("passwordResetEmail").value.trim();
  const message = document.getElementById("passwordResetMessage");
  submitButton.disabled = true;
  message.textContent = portalText("auth_reset_sending");

  try {
    await postAuthRequest("password-reset/request", { email });
    form.hidden = true;
    document.getElementById("passwordResetConfirmForm").hidden = false;
    message.textContent = portalText("auth_reset_sent");
    document.getElementById("passwordResetCode").focus();
  } catch (error) {
    message.textContent = error.message || "Unable to send the verification code.";
    console.error("Password reset request failed.", error);
  } finally {
    submitButton.disabled = false;
  }
}

async function handlePasswordResetConfirm(event) {
  event.preventDefault();
  const email = document.getElementById("passwordResetEmail").value.trim();
  const code = document.getElementById("passwordResetCode").value.trim();
  const newPassword = document.getElementById("passwordResetNewPassword").value;
  const confirmPassword = document.getElementById("passwordResetConfirmPassword").value;
  const form = document.getElementById("passwordResetConfirmForm");
  const submitButton = form.querySelector('button[type="submit"]');
  const message = document.getElementById("passwordResetMessage");

  if (newPassword !== confirmPassword) {
    message.textContent = portalText("auth_reset_mismatch");
    return;
  }

  submitButton.disabled = true;
  message.textContent = portalText("auth_reset_updating");
  try {
    await postAuthRequest("password-reset/confirm", {
      email,
      code,
      new_password: newPassword
    });
    const role = STATE.passwordResetRole;
    closePasswordReset();
    setAuthMode(role, "login");
    document.getElementById(
      role === "farmer" ? "farmerAuthMessage" : "operatorAuthMessage"
    ).textContent = portalText("auth_reset_complete");
  } catch (error) {
    message.textContent = error.message || "Unable to update the password.";
    console.error("Password reset confirmation failed.", error);
  } finally {
    submitButton.disabled = false;
  }
}

async function registerAccount(event, role) {
  event.preventDefault();
  const isFarmer = role === "farmer";
  const prefix = isFarmer ? "farmer" : "operator";
  const message = document.getElementById(isFarmer ? "farmerAuthMessage" : "operatorAuthMessage");
  const form = document.getElementById(isFarmer ? "farmerRegisterForm" : "operatorRegisterForm");
  const submitButton = form.querySelector('button[type="submit"]');
  const payload = {
    full_name: document.getElementById(`${prefix}RegisterName`).value.trim(),
    email: document.getElementById(`${prefix}RegisterEmail`).value.trim(),
    phone: document.getElementById(`${prefix}RegisterPhone`).value.trim(),
    password: document.getElementById(`${prefix}RegisterPassword`).value,
    role
  };
  if (!isFarmer) {
    payload.license_number = document.getElementById("operatorRegisterLicense").value.trim();
  }

  submitButton.disabled = true;
  message.textContent = "Creating account...";
  try {
    await postAuthRequest("register", payload);
    setAuthMode(role, "login");
    document.getElementById(isFarmer ? "farmerEmail" : "dronePilotId").value = payload.phone;
    form.reset();
    message.textContent = "Account created. Sign in with your email and password.";
  } catch (error) {
    message.textContent = error.message || "Account creation failed. Please try again.";
    console.error("Account registration failed.", error);
  } finally {
    submitButton.disabled = false;
  }
}

function loginAsFarmer(user) {
  STATE.currentFarmLocation = null;
  STATE.currentUser = {
    role: "farmer",
    id: user.id,
    name: user.full_name,
    email: user.email,
    phone: user.phone,
    farm: "Green Valley Cotton Estate"
  };

  document.getElementById("authScreen").style.display = "none";
  document.getElementById("appScreen").style.display = "flex";

  const badge = document.getElementById("userRoleBadge");
  badge.textContent = "Farmer Portal";
  badge.style.background = "rgba(16, 185, 129, 0.2)";
  badge.style.color = "#10b981";
  badge.style.borderColor = "rgba(16, 185, 129, 0.4)";
  document.getElementById("userRoleSub").textContent = `Connected: ${STATE.currentUser.name} • ${STATE.currentUser.farm}`;

  // KPI updates
  document.getElementById("kpi1Title").textContent = I18N_TRANSLATIONS[STATE.currentLang]?.kpi_active_mission || "Active Mission";
  document.getElementById("kpi1Val").textContent = "BK-001";
  document.getElementById("kpi1Sub").textContent = "In Progress • 10.1 of 15.5 Acres";
  document.getElementById("kpi1Icon").textContent = "🚜";

  document.getElementById("kpi2Title").textContent = I18N_TRANSLATIONS[STATE.currentLang]?.kpi_my_acreage || "My Farm Acreage";
  document.getElementById("kpi2Val").textContent = "15.5 Acres";
  document.getElementById("kpi2Sub").textContent = "Cotton (Plot #1)";

  document.getElementById("kpi3Title").textContent = I18N_TRANSLATIONS[STATE.currentLang]?.kpi_govt_subsidy || "Govt Subsidy";
  document.getElementById("kpi3Val").textContent = "25% (₹1,162)";

  document.getElementById("viewFarmerContainer").style.display = "block";
  document.getElementById("viewDroneContainer").style.display = "none";

  loadRoleBookings();
}

function loginAsDrone(user) {
  STATE.currentUser = {
    role: "operator",
    id: user.id,
    name: user.full_name,
    operatorId: user.email
  };

  document.getElementById("authScreen").style.display = "none";
  document.getElementById("appScreen").style.display = "flex";

  const badge = document.getElementById("userRoleBadge");
  badge.textContent = "Drone Operator";
  badge.style.background = "rgba(56, 189, 248, 0.2)";
  badge.style.color = "#38bdf8";
  badge.style.borderColor = "rgba(56, 189, 248, 0.4)";
  document.getElementById("userRoleSub").textContent = `Operator: ${user.full_name}`;

  document.getElementById("viewFarmerContainer").style.display = "none";
  document.getElementById("viewDroneContainer").style.display = "block";
  loadOperatorPricing();
  loadRoleBookings();
}

function logout() {
  const token = STATE.accessToken;
  if (token) {
    fetch(`${getApiBaseUrl()}/auth/logout`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` }
    }).catch((error) => console.error("Could not revoke the server session.", error));
  }
  STATE.accessToken = null;
  sessionStorage.removeItem("agrodrone_access_token");
  STATE.currentUser = null;
  STATE.currentFarmLocation = null;
  document.getElementById("appScreen").style.display = "none";
  document.getElementById("authScreen").style.display = "flex";
  returnToPortalSelection();
}

function refreshRoleDashboard() {
  const booking = ROLE_DASHBOARD_STATE.booking;
  const farmerStatus = document.getElementById("farmerBookingStatus");
  const farmerDetails = document.getElementById("farmerBookingDetails");
  const requestStatus = document.getElementById("operatorRequestStatus");

  if (booking) {
    if (farmerStatus) farmerStatus.textContent = `Booking #BK-${booking.id}: ${booking.status}`;
    if (farmerDetails) farmerDetails.textContent = `${booking.field} · ${booking.crop} · ${booking.area} acres`;
    const requestFarmer = document.getElementById("operatorRequestFarmer");
    const requestField = document.getElementById("operatorRequestField");
    const requestCrop = document.getElementById("operatorRequestCrop");
    const requestArea = document.getElementById("operatorRequestArea");
    if (requestFarmer) requestFarmer.textContent = booking.farmer;
    if (requestField) requestField.textContent = booking.field;
    if (requestCrop) requestCrop.textContent = booking.crop;
    if (requestArea) requestArea.textContent = `${booking.area} acres`;
    if (requestStatus) requestStatus.textContent = `Booking request: ${ROLE_DASHBOARD_STATE.bookingRequestStatus}`;
    const requestPhone = document.getElementById("operatorRequestPhone");
    const requestEmail = document.getElementById("operatorRequestEmail");
    if (requestPhone) {
      requestPhone.textContent = booking.farmerPhone || "Available after assignment";
      requestPhone.href = booking.farmerPhone ? `tel:${booking.farmerPhone}` : "#";
    }
    if (requestEmail) {
      requestEmail.textContent = booking.farmerEmail || "Available after assignment";
      requestEmail.href = booking.farmerEmail ? `mailto:${booking.farmerEmail}` : "#";
    }
    const location = document.getElementById("operatorFarmerLocation");
    const coordinates = document.getElementById("operatorFarmerCoordinates");
    const mapLink = document.getElementById("operatorFarmerMapLink");
    if (location) location.textContent = booking.field || "Location not provided.";
    const hasCoordinates = Number.isFinite(booking.latitude)
      && Number.isFinite(booking.longitude)
      && (booking.latitude !== 0 || booking.longitude !== 0);
    if (coordinates) {
      coordinates.textContent = hasCoordinates
        ? `${booking.latitude.toFixed(6)}, ${booking.longitude.toFixed(6)}`
        : "Exact coordinates were not shared.";
    }
    if (mapLink) {
      mapLink.hidden = !hasCoordinates;
      mapLink.href = hasCoordinates
        ? `https://www.google.com/maps?q=${booking.latitude},${booking.longitude}`
        : "#";
    }
    const farmerOperatorContact = document.getElementById("farmerOperatorContact");
    if (farmerOperatorContact) {
      farmerOperatorContact.textContent = booking.operatorName
        ? `Operator: ${booking.operatorName} · ${booking.operatorPhone || "Phone unavailable"} · ${booking.operatorEmail || "Email unavailable"} · ₹${Number(booking.pricePerAcre || 0).toLocaleString("en-IN")}/acre · Total: ₹${Number(booking.paymentAmount || 0).toLocaleString("en-IN")}`
        : "Operator contact and quoted price appear after you choose an operator.";
    }
  } else {
    if (farmerStatus) farmerStatus.textContent = "No active booking.";
    if (farmerDetails) farmerDetails.textContent = "Your booking status will appear here.";
    if (requestStatus) requestStatus.textContent = "No pending booking requests.";
    const farmerOperatorContact = document.getElementById("farmerOperatorContact");
    if (farmerOperatorContact) {
      farmerOperatorContact.textContent = "Operator contact and quoted price appear after you choose an operator.";
    }
    const location = document.getElementById("operatorFarmerLocation");
    if (location) location.textContent = "Location appears when a booking is selected.";
  }

  const startButton = document.getElementById("btnStartSpraying");
  const completeButton = document.getElementById("btnCompleteSpraying");
  const acceptButton = document.getElementById("btnAcceptBooking");
  const rejectButton = document.getElementById("btnRejectBooking");
  const hasBooking = Boolean(booking);
  if (startButton) startButton.disabled = !hasBooking || ROLE_DASHBOARD_STATE.bookingRequestStatus !== "Accepted" || ROLE_DASHBOARD_STATE.spraying;
  if (completeButton) completeButton.disabled = !ROLE_DASHBOARD_STATE.spraying;
  const isPendingBooking = ["Pending", "Requested"].includes(ROLE_DASHBOARD_STATE.bookingRequestStatus);
  if (acceptButton) acceptButton.disabled = !hasBooking || !isPendingBooking;
  if (rejectButton) rejectButton.disabled = !hasBooking || !isPendingBooking;
}

function missionStatusLabel(status) {
  const labels = {
    pending: "Requested",
    assigned: "Accepted",
    in_progress: "Spraying",
    completed: "Completed",
    cancelled: "Rejected"
  };
  return labels[status] || status;
}

function mapApiBooking(data) {
  return {
    id: data.id,
    farmer: data.farmer_name || "",
    field: data.farm_name || data.notes || "",
    crop: data.target_crop,
    area: data.area_acres,
    pricePerAcre: data.price_per_acre,
    missionStatus: data.mission_status,
    status: missionStatusLabel(data.mission_status),
    paymentAmount: data.total_cost,
    paymentStatus: data.payment_status,
    farmerPhone: data.farmer_phone,
    farmerEmail: data.farmer_email,
    latitude: data.farm_latitude,
    longitude: data.farm_longitude,
    operatorName: data.operator_name,
    operatorPhone: data.operator_phone,
    operatorEmail: data.operator_email
  };
}

function renderPaymentHistory(bookings) {
  const table = document.getElementById("farmerPaymentHistory");
  table.replaceChildren();
  if (!bookings.length) {
    const row = table.insertRow();
    ["—", "—", "No payments yet"].forEach((value) => {
      row.insertCell().textContent = value;
    });
    return;
  }
  bookings.forEach((booking) => {
    const row = table.insertRow();
    [
      `#BK-${booking.id}`,
      `₹${Number(booking.total_cost).toLocaleString("en-IN")}`,
      booking.payment_status
    ].forEach((value) => {
      row.insertCell().textContent = value;
    });
  });
}

function updateFarmerQuote() {
  const operatorId = Number(document.getElementById("farmerOperatorSelect").value);
  const operator = AVAILABLE_OPERATORS.find((item) => item.id === operatorId);
  const area = Number(document.getElementById("farmerFieldArea").value);
  const details = document.getElementById("farmerOperatorDetails");
  const quote = document.getElementById("farmerBookingQuote");
  if (!operator) {
    details.textContent = "Choose an operator to see their contact details and price.";
    quote.textContent = "Select an operator to see the per-acre price.";
    return;
  }
  const rate = Number(operator.pesticide_price_per_acre);
  details.textContent =
    `${operator.full_name} · License ${operator.license_number || "not listed"} · Phone ${operator.phone} · Email ${operator.email} · ₹${rate.toLocaleString("en-IN")}/acre`;
  quote.textContent = Number.isFinite(area) && area > 0
    ? `Spraying estimate: ₹${rate.toLocaleString("en-IN")} × ${area} acres = ₹${(rate * area).toLocaleString("en-IN")}.`
    : `Operator rate: ₹${rate.toLocaleString("en-IN")} per acre.`;
}

async function loadOperatorPricing() {
  const status = document.getElementById("operatorPriceStatus");
  try {
    const result = await apiRequest("auth/operator-pricing");
    const input = document.getElementById("operatorPricePerAcre");
    if (result.pesticide_price_per_acre !== null) {
      input.value = result.pesticide_price_per_acre;
      status.textContent = `Current price: ₹${Number(result.pesticide_price_per_acre).toLocaleString("en-IN")} per acre.`;
    } else {
      input.value = "";
      status.textContent = "Set a price to receive farmer bookings.";
    }
  } catch (error) {
    status.textContent = `Could not load your price: ${error.message}`;
    console.error("Could not load operator spraying price.", error);
  }
}

async function loadRoleBookings() {
  try {
    const bookings = await apiRequest("bookings/dashboard");
    renderPaymentHistory(bookings);
    const selected = bookings[0] ? mapApiBooking(bookings[0]) : null;
    ROLE_DASHBOARD_STATE.booking = selected;
    ROLE_DASHBOARD_STATE.bookingRequestStatus = selected
      ? missionStatusLabel(selected.missionStatus)
      : "Pending";
    ROLE_DASHBOARD_STATE.spraying = Boolean(selected && selected.missionStatus === "in_progress");
    const sprayStatus = document.getElementById("operatorSprayStatus");
    if (sprayStatus && STATE.currentUser.role === "operator") {
      sprayStatus.textContent = !selected ? "No active spraying job."
        : selected.missionStatus === "in_progress" ? "Spraying in progress."
          : selected.missionStatus === "completed" ? "Spraying completed."
            : "Spraying not started.";
    }
    persistRoleDashboardState();
    refreshRoleDashboard();
  } catch (error) {
    const message = STATE.currentUser && STATE.currentUser.role === "farmer"
      ? document.getElementById("farmerBookingStatus")
      : document.getElementById("operatorRequestStatus");
    message.textContent = `Could not load bookings: ${error.message}`;
    console.error("Could not load dashboard bookings.", error);
  }
}

async function updateOperatorBooking(missionStatus) {
  const booking = ROLE_DASHBOARD_STATE.booking;
  if (!booking) return;
  try {
    const updated = await apiRequest(`bookings/dashboard/${booking.id}`, {
      method: "PATCH",
      body: { mission_status: missionStatus }
    });
    ROLE_DASHBOARD_STATE.booking = mapApiBooking(updated);
    ROLE_DASHBOARD_STATE.bookingRequestStatus =
      missionStatusLabel(updated.mission_status);
    ROLE_DASHBOARD_STATE.spraying = updated.mission_status === "in_progress";
    document.getElementById("operatorSprayStatus").textContent =
      updated.mission_status === "in_progress" ? "Spraying in progress."
        : updated.mission_status === "completed" ? "Spraying completed."
          : "Spraying not started.";
    persistRoleDashboardState();
    refreshRoleDashboard();
  } catch (error) {
    document.getElementById("operatorRequestStatus").textContent =
      `Could not update booking: ${error.message}`;
    console.error("Could not update operator booking.", error);
  }
}

function initRoleDashboardControls() {
  const farmerBookingForm = document.getElementById("farmerBookingForm");
  farmerBookingForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const field = document.getElementById("farmerFieldDetails").value.trim();
    const crop = document.getElementById("farmerCropType").value;
    const area = Number(document.getElementById("farmerFieldArea").value);
    if (!field || !crop || !Number.isFinite(area) || area <= 0) return;

    const bookingStatus = document.getElementById("farmerBookingStatus");
    const submitButton = farmerBookingForm.querySelector('button[type="submit"]');
    submitButton.disabled = true;
    bookingStatus.textContent = "Submitting booking request...";
    try {
      const created = await apiRequest("bookings/request", {
        method: "POST",
        body: {
          field_details: field,
          crop_type: crop,
          area_acres: area,
          operator_id: Number(document.getElementById("farmerOperatorSelect").value),
          latitude: STATE.currentFarmLocation && STATE.currentFarmLocation.latitude,
          longitude: STATE.currentFarmLocation && STATE.currentFarmLocation.longitude
        }
      });
      ROLE_DASHBOARD_STATE.booking = mapApiBooking(created);
      ROLE_DASHBOARD_STATE.bookingRequestStatus = "Requested";
      ROLE_DASHBOARD_STATE.spraying = false;
      persistRoleDashboardState();
      await loadRoleBookings();
    } catch (error) {
      bookingStatus.textContent = `Booking failed: ${error.message}`;
      console.error("Could not submit booking request.", error);
    } finally {
      submitButton.disabled = false;
    }
  });

  document.getElementById("btnCheckFarmerWeather").addEventListener("click", () => {
    document.getElementById("farmerWeatherStatus").textContent =
      "Demo forecast: 24°C, light wind. Suitable for spraying.";
  });
  document.getElementById("btnRefreshFarmerBookings").addEventListener("click", loadRoleBookings);
  document.getElementById("btnRefreshOperatorBookings").addEventListener("click", loadRoleBookings);
  document.getElementById("btnFindOperators").addEventListener("click", async () => {
    const status = document.getElementById("farmerOperatorsStatus");
    status.textContent = "Checking operator availability...";
    try {
      AVAILABLE_OPERATORS = await apiRequest("auth/operators");
      const select = document.getElementById("farmerOperatorSelect");
      select.replaceChildren(new Option(
        AVAILABLE_OPERATORS.length ? "Select an operator" : "No priced operators available",
        ""
      ));
      AVAILABLE_OPERATORS.forEach((operator) => {
        select.add(new Option(
          `${operator.full_name} — ₹${Number(operator.pesticide_price_per_acre).toLocaleString("en-IN")}/acre`,
          String(operator.id)
        ));
      });
      status.textContent = AVAILABLE_OPERATORS.length
        ? `${AVAILABLE_OPERATORS.length} operator(s) have published spraying prices.`
        : "No operator has set a spraying price yet.";
      updateFarmerQuote();
    } catch (error) {
      status.textContent = `Could not load operators: ${error.message}`;
      console.error("Could not load available operators.", error);
    }
  });
  document.getElementById("farmerOperatorSelect").addEventListener("change", updateFarmerQuote);
  document.getElementById("farmerFieldArea").addEventListener("input", updateFarmerQuote);

  document.getElementById("btnUseFarmerLocation").addEventListener("click", () => {
    const status = document.getElementById("farmerLocationStatus");
    if (!navigator.geolocation) {
      status.textContent = "Location sharing is not supported by this browser.";
      return;
    }
    status.textContent = "Requesting location permission...";
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        STATE.currentFarmLocation = {
          latitude: coords.latitude,
          longitude: coords.longitude
        };
        status.textContent =
          `Location ready: ${coords.latitude.toFixed(5)}, ${coords.longitude.toFixed(5)}.`;
      },
      (error) => {
        status.textContent = error.code === error.PERMISSION_DENIED
          ? "Location permission was denied. You can still enter the field location."
          : "Could not read your location. You can still enter the field location.";
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 60000 }
    );
  });

  document.getElementById("btnSaveOperatorPrice").addEventListener("click", async () => {
    const input = document.getElementById("operatorPricePerAcre");
    const status = document.getElementById("operatorPriceStatus");
    const rate = Number(input.value);
    if (!Number.isFinite(rate) || rate <= 0 || rate > 100000) {
      status.textContent = "Enter a price greater than ₹0 and no more than ₹100,000 per acre.";
      return;
    }
    const button = document.getElementById("btnSaveOperatorPrice");
    button.disabled = true;
    status.textContent = "Saving your price...";
    try {
      await apiRequest("auth/operator-pricing", {
        method: "PUT",
        body: { pesticide_price_per_acre: rate }
      });
      status.textContent = `Saved: ₹${rate.toLocaleString("en-IN")} per acre.`;
    } catch (error) {
      status.textContent = `Could not save your price: ${error.message}`;
      console.error("Could not save operator spraying price.", error);
    } finally {
      button.disabled = false;
    }
  });

  document.getElementById("btnAcceptBooking").addEventListener("click", () => updateOperatorBooking("assigned"));
  document.getElementById("btnRejectBooking").addEventListener("click", () => updateOperatorBooking("cancelled"));

  document.getElementById("btnSaveDroneDetails").addEventListener("click", () => {
    const model = document.getElementById("operatorDroneModel").value.trim();
    const droneId = document.getElementById("operatorDroneId").value.trim();
    document.getElementById("operatorDroneStatus").textContent =
      model && droneId ? `Saved: ${model} (${droneId})` : "Enter a drone model and ID.";
  });
  document.getElementById("btnToggleAvailability").addEventListener("click", (event) => {
    ROLE_DASHBOARD_STATE.operatorAvailable = !ROLE_DASHBOARD_STATE.operatorAvailable;
    persistRoleDashboardState();
    document.getElementById("operatorAvailabilityStatus").textContent =
      `Availability: ${ROLE_DASHBOARD_STATE.operatorAvailable ? "Available" : "Unavailable"}`;
    event.currentTarget.textContent =
      ROLE_DASHBOARD_STATE.operatorAvailable ? "Set Unavailable" : "Set Available";
  });
  document.getElementById("btnStartSpraying").addEventListener("click", () => {
    if (ROLE_DASHBOARD_STATE.bookingRequestStatus !== "Accepted") {
      document.getElementById("operatorSprayStatus").textContent = "Accept the booking before starting spraying.";
      return;
    }
    updateOperatorBooking("in_progress");
  });
  document.getElementById("btnCompleteSpraying").addEventListener("click", () => updateOperatorBooking("completed"));
}

// ==========================================================
// 5. FARMER PORTAL SUB-TABS
// ==========================================================

function switchFarmerTab(tabName) {
  const tabs = document.querySelectorAll(".farmer-subtab");
  tabs.forEach(t => t.classList.remove("active"));
  document.querySelectorAll(".farmer-tab-panel").forEach(p => p.classList.remove("active"));

  if (tabName === "book") {
    tabs[0].classList.add("active");
    document.getElementById("farmerTabBook").classList.add("active");
  } else if (tabName === "track") {
    tabs[1].classList.add("active");
    document.getElementById("farmerTabTrack").classList.add("active");
    setTimeout(() => initFarmerCanvas(), 50);
  } else if (tabName === "ai") {
    tabs[2].classList.add("active");
    document.getElementById("farmerTabAi").classList.add("active");
  } else if (tabName === "history") {
    tabs[3].classList.add("active");
    document.getElementById("farmerTabHistory").classList.add("active");
    renderFarmerOrders();
  }
}

function renderFarmerOrders() {
  const tbody = document.getElementById("farmerOrdersTableBody");
  if (!tbody) return;

  const t = I18N_TRANSLATIONS[STATE.currentLang] || I18N_TRANSLATIONS.en;
  const invBtnTxt = t.col_invoice || "Invoice";

  tbody.innerHTML = STATE.bookings.map(b => `
    <tr>
      <td><strong>#BK-${String(b.id).padStart(3, "0")}</strong></td>
      <td>${b.farm_name}</td>
      <td>${formatService(b.service_type)} (${b.target_crop})</td>
      <td><strong>${b.area_acres}</strong> Acres</td>
      <td>${b.scheduled_date}</td>
      <td><strong style="color:#10b981;">₹${b.total_cost.toLocaleString()}</strong></td>
      <td><span class="status-badge status-in_mission">${b.mission_status.toUpperCase()}</span></td>
      <td><button class="action-btn" onclick="viewInvoice(${b.id})">🧾 ${invBtnTxt}</button></td>
    </tr>
  `).join("");
}

// ==========================================================
// 6. CANVAS FLIGHT SIMULATOR (PILOT COCKPIT & FARMER TRACK)
// ==========================================================

let canvas, ctx;
let farmerCanvas, farmerCtx;
const farmWaypoints = [];
const sprayedPath = [];
let rotorAngle = 0;
let droneScreenPos = { x: 140, y: 120 };

function initCanvas() {
  canvas = document.getElementById("flightCanvas");
  if (!canvas) return;
  ctx = canvas.getContext("2d");
  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);
  generateFarmWaypoints();
  renderCanvas();
}

function initFarmerCanvas() {
  farmerCanvas = document.getElementById("flightCanvasFarmer");
  if (!farmerCanvas) return;
  farmerCtx = farmerCanvas.getContext("2d");
  const parent = farmerCanvas.parentElement;
  farmerCanvas.width = parent.clientWidth || 800;
  farmerCanvas.height = parent.clientHeight || 500;
}

function resizeCanvas() {
  if (!canvas) return;
  const parent = canvas.parentElement;
  canvas.width = parent.clientWidth || 800;
  canvas.height = parent.clientHeight || 500;
  generateFarmWaypoints();
}

function generateFarmWaypoints() {
  farmWaypoints.length = 0;
  const w = (canvas && canvas.width) || 800;
  const h = (canvas && canvas.height) || 500;
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

function renderCanvas() {
  drawSceneOnCanvas(canvas, ctx);
  if (farmerCanvas && farmerCtx) {
    drawSceneOnCanvas(farmerCanvas, farmerCtx);
  }
  requestAnimationFrame(renderCanvas);
}

function drawSceneOnCanvas(targetCanvas, targetCtx) {
  if (!targetCanvas || !targetCtx) return;
  targetCtx.clearRect(0, 0, targetCanvas.width, targetCanvas.height);

  const w = targetCanvas.width;
  const h = targetCanvas.height;
  const margin = 70;

  // Farm Boundary
  targetCtx.save();
  targetCtx.fillStyle = "rgba(6, 78, 59, 0.4)";
  targetCtx.strokeStyle = "#10b981";
  targetCtx.lineWidth = 2;
  targetCtx.setLineDash([6, 6]);
  targetCtx.beginPath();
  targetCtx.rect(margin - 20, margin - 20, w - margin * 2 + 40, h - margin * 2 + 40);
  targetCtx.fill();
  targetCtx.stroke();
  targetCtx.restore();

  // Crop Rows
  targetCtx.save();
  targetCtx.strokeStyle = "rgba(16, 185, 129, 0.08)";
  targetCtx.lineWidth = 1;
  for (let y = margin - 10; y <= h - margin + 10; y += 18) {
    targetCtx.beginPath();
    targetCtx.moveTo(margin - 15, y);
    targetCtx.lineTo(w - margin + 15, y);
    targetCtx.stroke();
  }
  targetCtx.restore();

  // Waypoints Grid
  targetCtx.save();
  targetCtx.strokeStyle = "rgba(56, 189, 248, 0.25)";
  targetCtx.lineWidth = 1.5;
  targetCtx.setLineDash([4, 4]);
  targetCtx.beginPath();
  if (farmWaypoints.length > 0) {
    targetCtx.moveTo(farmWaypoints[0].x, farmWaypoints[0].y);
    for (let i = 1; i < farmWaypoints.length; i++) {
      targetCtx.lineTo(farmWaypoints[i].x, farmWaypoints[i].y);
    }
  }
  targetCtx.stroke();
  targetCtx.restore();

  // Sprayed Swath
  targetCtx.save();
  targetCtx.strokeStyle = "rgba(52, 211, 153, 0.35)";
  targetCtx.lineWidth = 26;
  targetCtx.lineCap = "round";
  targetCtx.lineJoin = "round";
  targetCtx.beginPath();
  if (sprayedPath.length > 0) {
    targetCtx.moveTo(sprayedPath[0].x, sprayedPath[0].y);
    for (let i = 1; i < sprayedPath.length; i++) {
      targetCtx.lineTo(sprayedPath[i].x, sprayedPath[i].y);
    }
    targetCtx.stroke();
  }
  targetCtx.restore();

  // Spray Particles
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

  for (let i = STATE.particles.length - 1; i >= 0; i--) {
    const p = STATE.particles[i];
    p.life -= 0.04;
    p.alpha = Math.max(0, p.life * 0.6);
    p.radius += 0.2;

    targetCtx.save();
    targetCtx.fillStyle = `rgba(56, 189, 248, ${p.alpha})`;
    targetCtx.beginPath();
    targetCtx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    targetCtx.fill();
    targetCtx.restore();

    if (p.life <= 0) STATE.particles.splice(i, 1);
  }

  // Drone Vehicle
  targetCtx.save();
  targetCtx.translate(droneScreenPos.x, droneScreenPos.y);

  // Arms
  targetCtx.strokeStyle = "#475569";
  targetCtx.lineWidth = 4;
  targetCtx.beginPath();
  targetCtx.moveTo(-16, -16);
  targetCtx.lineTo(16, 16);
  targetCtx.moveTo(-16, 16);
  targetCtx.lineTo(16, -16);
  targetCtx.stroke();

  // Nozzle Boom
  targetCtx.strokeStyle = "#0284c7";
  targetCtx.lineWidth = 2.5;
  targetCtx.beginPath();
  targetCtx.moveTo(-22, 0);
  targetCtx.lineTo(22, 0);
  targetCtx.stroke();

  // Central Core
  targetCtx.fillStyle = "#10b981";
  targetCtx.beginPath();
  targetCtx.arc(0, 0, 8, 0, Math.PI * 2);
  targetCtx.fill();
  targetCtx.strokeStyle = "#fff";
  targetCtx.lineWidth = 1.5;
  targetCtx.stroke();

  // Rotors
  rotorAngle += 0.4;
  const rotorOffsets = [
    { x: -16, y: -16 },
    { x: 16, y: -16 },
    { x: 16, y: 16 },
    { x: -16, y: 16 }
  ];

  targetCtx.strokeStyle = "rgba(255, 255, 255, 0.75)";
  targetCtx.lineWidth = 1.5;
  rotorOffsets.forEach(pos => {
    targetCtx.save();
    targetCtx.translate(pos.x, pos.y);
    targetCtx.rotate(rotorAngle);
    targetCtx.beginPath();
    targetCtx.ellipse(0, 0, 9, 2.5, 0, 0, Math.PI * 2);
    targetCtx.stroke();
    targetCtx.restore();
  });

  targetCtx.restore();

  // Field Label
  targetCtx.save();
  targetCtx.fillStyle = "#34d399";
  targetCtx.font = "bold 12px sans-serif";
  targetCtx.fillText("PLOT #1: Green Valley Cotton Estate (15.5 ACRES)", margin, margin + 15);
  targetCtx.restore();
}

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

  const hudAlt = document.getElementById("hudAltitude");
  if (hudAlt) hudAlt.textContent = alt;
  const hudSpd = document.getElementById("hudSpeed");
  if (hudSpd) hudSpd.textContent = spd;
  const hudFlw = document.getElementById("hudFlow");
  if (hudFlw) hudFlw.textContent = STATE.sprayActive ? d.flowRate.toFixed(1) : "0.0";
  const hudCrd = document.getElementById("hudCoords");
  if (hudCrd) hudCrd.textContent = `${d.lat}, ${d.lng}`;
  const droneBatt = document.getElementById("droneBatteryVal");
  if (droneBatt) droneBatt.textContent = Math.round(d.battery);
  const droneBattBar = document.getElementById("droneBatteryBar");
  if (droneBattBar) droneBattBar.style.width = `${d.battery}%`;

  const tankPct = Math.round((d.tankLiters / d.maxTank) * 100);
  const droneTank = document.getElementById("droneTankVal");
  if (droneTank) droneTank.textContent = d.tankLiters;
  const droneTankBar = document.getElementById("droneTankBar");
  if (droneTankBar) droneTankBar.style.width = `${tankPct}%`;

  const fAlt = document.getElementById("farmerHudAlt");
  if (fAlt) fAlt.textContent = alt;
  const fSpd = document.getElementById("farmerHudSpeed");
  if (fSpd) fSpd.textContent = spd;
  const fFlw = document.getElementById("farmerHudFlow");
  if (fFlw) fFlw.textContent = STATE.sprayActive ? d.flowRate.toFixed(1) : "0.0";
}

// ==========================================================
// 7. CONTROLS & FORMS
// ==========================================================

function initFarmerForm() {
  const acreInput = document.getElementById("farmerAcreInput");
  const serviceSelect = document.getElementById("farmerServiceSelect");
  const btnSubmit = document.getElementById("btnSubmitFarmerBooking");

  function calcFarmerPrice() {
    if (!acreInput || !serviceSelect) return;
    const acres = parseFloat(acreInput.value) || 1;
    let rate = 300;
    if (serviceSelect.value === "ai_crop_scouting") rate = 200;
    if (serviceSelect.value === "thermal_imaging") rate = 250;

    const base = acres * rate;
    const subsidy = base * 0.25;
    const payable = base - subsidy;

    const costElem = document.getElementById("farmerEstCost");
    const payElem = document.getElementById("farmerPayableCost");
    if (costElem) costElem.textContent = `₹${base.toLocaleString()}`;
    if (payElem) payElem.textContent = `₹${payable.toLocaleString()}`;
  }

  if (acreInput && serviceSelect) {
    acreInput.addEventListener("input", calcFarmerPrice);
    serviceSelect.addEventListener("change", calcFarmerPrice);
  }

  if (btnSubmit) {
    btnSubmit.onclick = () => {
      const acres = parseFloat(acreInput.value) || 10;
      const farmSelect = document.getElementById("farmerFarmSelect");
      const farmName = farmSelect.options[farmSelect.selectedIndex].text.split(" (")[0];
      const rate = serviceSelect.value === "ai_crop_scouting" ? 200 : 300;
      const total = acres * rate;

      const newBooking = {
        id: STATE.bookings.length + 1,
        farmer_id: 4,
        farmer_name: "Ramesh Patel",
        farmer_phone: "+91 9412345678",
        farm_name: farmName,
        service_type: serviceSelect.value,
        target_crop: "Cotton",
        area_acres: acres,
        scheduled_date: document.getElementById("farmerDateInput").value,
        scheduled_slot: document.getElementById("farmerSlotSelect").value,
        total_cost: total,
        payment_status: "paid",
        mission_status: "pending",
        drone_model: "AgroDrone Titan T-40",
        operator_name: "Capt. Vikram Rathore"
      };

      STATE.bookings.unshift(newBooking);
      renderFarmerOrders();
      alert(`🎉 Drone Mission Booked!\nBooking ID: #BK-00${newBooking.id}\nAcreage: ${acres} Acres\nSubsidy Applied: 25%\nStatus: Dispatched to Pilot`);
      switchFarmerTab("track");
    };
  }
}

function initCockpitControls() {
  const btnPause = document.getElementById("btnSimPause");
  if (btnPause) {
    btnPause.addEventListener("click", () => {
      STATE.simRunning = !STATE.simRunning;
      document.getElementById("simBtnIcon").textContent = STATE.simRunning ? "⏸️" : "▶️";
      document.getElementById("simBtnTxt").textContent = STATE.simRunning ? "Pause Sim" : "Resume Sim";
    });
  }

  const btnToggleSpray = document.getElementById("btnToggleSpray");
  if (btnToggleSpray) {
    btnToggleSpray.addEventListener("click", () => {
      STATE.sprayActive = !STATE.sprayActive;
      document.getElementById("sprayStateTxt").textContent = STATE.sprayActive ? "ACTIVE" : "OFF";
      btnToggleSpray.style.borderColor = STATE.sprayActive ? "#10b981" : "#ef4444";
    });
  }

  const btnRth = document.getElementById("btnRth");
  if (btnRth) {
    btnRth.addEventListener("click", () => {
      STATE.sprayActive = false;
      document.getElementById("sprayStateTxt").textContent = "OFF";
      document.getElementById("droneStatusBadge").textContent = "RETURNING TO HOME";
      document.getElementById("droneStatusBadge").className = "status-badge status-charging";
      alert("⚠️ Failsafe Return To Home (RTH) Activated. Drone returning to launch coordinates.");
    });
  }

  const btnArm = document.getElementById("btnCockpitArm");
  if (btnArm) {
    btnArm.addEventListener("click", () => {
      btnArm.textContent = btnArm.textContent.includes("ARMED") ? "🔴 MOTORS DISARMED" : "🟢 MOTORS ARMED";
      btnArm.classList.toggle("btn-primary");
    });
  }

  const btnToggleNdvi = document.getElementById("btnToggleNdviView");
  let ndviActive = false;
  if (btnToggleNdvi) {
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
  }

  const btnScan = document.getElementById("btnRunAiAnalysis");
  if (btnScan) {
    btnScan.addEventListener("click", () => {
      btnScan.textContent = "Scanning...";
      setTimeout(() => {
        btnScan.textContent = "Scan Current Field";
        const newNdvi = (0.75 + Math.random() * 0.1).toFixed(3);
        document.getElementById("aiNdviScore").textContent = newNdvi;
        alert(`AI Field Scan Complete!\nCalculated NDVI: ${newNdvi} (Healthy Canopy)\nPrescription: Maintain low spray flow rate.`);
      }, 1200);
    });
  }
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

// Lifecycle Bootloader
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("farmerEmail").addEventListener("input", (event) => {
    event.currentTarget.setCustomValidity("");
  });

  const closeInv = document.getElementById("closeInvoiceModal");
  if (closeInv) {
    closeInv.addEventListener("click", () => {
      document.getElementById("invoiceModal").classList.remove("active");
    });
  }

  // 1. Initialize language
  const savedLang = localStorage.getItem("agro_selected_lang") || "en";
  setLanguage(savedLang);
  setTheme(localStorage.getItem("agro_theme") || "dark");
  initRoleDashboardControls();

  const passwordResetModal = document.getElementById("passwordResetModal");
  passwordResetModal.addEventListener("click", event => {
    if (event.target === passwordResetModal) closePasswordReset();
  });
  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && passwordResetModal.classList.contains("active")) {
      closePasswordReset();
    }
  });

  // 2. Start Animated Logo Splash Screen
  initSplashScreen();

  // 3. Initialize canvas & simulation
  initCanvas();
  initCockpitControls();
  startSimulationTicker();
});
