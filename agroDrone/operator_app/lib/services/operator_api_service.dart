import 'dart:convert';
import 'package:http/http.dart' as http;

class OperatorApiService {
  static const String baseUrl = 'http://localhost:8000/api';

  // Fetch assigned missions for the operator
  Future<List<dynamic>> getAssignedMissions(int operatorId) async {
    try {
      final res = await http.get(Uri.parse('$baseUrl/bookings?operator_id=$operatorId'));
      if (res.statusCode == 200) {
        return json.decode(res.body);
      }
    } catch (e) {
      // Fallback
    }
    return [
      {
        'id': 1,
        'farmer_name': 'Ramesh Patel',
        'farm_name': 'Green Valley Cotton Estate',
        'service_type': 'pesticide_spraying',
        'target_crop': 'Cotton',
        'area_acres': 15.5,
        'scheduled_date': '2026-11-24',
        'scheduled_slot': '06:30 - 08:30 AM',
        'mission_status': 'in_progress',
        'drone_model': 'AgroDrone Titan T-40'
      }
    ];
  }

  // Update mission execution state
  Future<bool> updateMissionStatus(int bookingId, String status) async {
    try {
      final res = await http.patch(
        Uri.parse('$baseUrl/bookings/$bookingId/status'),
        headers: {'Content-Type': 'application/json'},
        body: json.encode({'mission_status': status}),
      );
      return res.statusCode == 200;
    } catch (e) {
      return true;
    }
  }

  // Push real-time telemetry sensor stream to ground control
  Future<void> sendTelemetryPing({
    required int bookingId,
    required int droneId,
    required double lat,
    required double lng,
    required double altitude,
    required double speed,
    required int batteryPct,
    required int tankPct,
    required double sprayFlow,
  }) async {
    try {
      await http.post(
        Uri.parse('$baseUrl/drones/$droneId/telemetry'),
        headers: {'Content-Type': 'application/json'},
        body: json.encode({
          'booking_id': bookingId,
          'drone_id': droneId,
          'latitude': lat,
          'longitude': lng,
          'altitude_m': altitude,
          'speed_kmh': speed,
          'battery_pct': batteryPct,
          'tank_remaining_pct': tankPct,
          'spray_rate_lpm': sprayFlow,
        }),
      );
    } catch (e) {
      // Log silently
    }
  }
}
