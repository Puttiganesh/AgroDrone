import 'dart:async';
import 'package:flutter/foundation.dart';

class TelemetryService extends ChangeNotifier {
  bool _isArmed = true;
  bool _isSpraying = true;
  bool _isAutoMission = true;

  double _altitude = 3.8;
  double _speed = 18.5;
  int _batteryPct = 88;
  double _tankLiters = 24.5;
  double _flowRate = 3.4;
  int _gpsSatellites = 18;

  Timer? _ticker;

  bool get isArmed => _isArmed;
  bool get isSpraying => _isSpraying;
  bool get isAutoMission => _isAutoMission;

  double get altitude => _altitude;
  double get speed => _speed;
  int get batteryPct => _batteryPct;
  double get tankLiters => _tankLiters;
  double get flowRate => _flowRate;
  int get gpsSatellites => _gpsSatellites;

  TelemetryService() {
    _startSimulatedTelemetry();
  }

  void toggleArm() {
    _isArmed = !_isArmed;
    notifyListeners();
  }

  void toggleSpray() {
    _isSpraying = !_isSpraying;
    notifyListeners();
  }

  void setFlowRate(double rate) {
    _flowRate = rate;
    notifyListeners();
  }

  void triggerReturnToHome() {
    _isSpraying = false;
    _isAutoMission = false;
    notifyListeners();
  }

  void _startSimulatedTelemetry() {
    _ticker = Timer.periodic(const Duration(seconds: 2), (timer) {
      if (_isArmed && _isAutoMission) {
        if (_batteryPct > 15) _batteryPct -= 1;
        if (_isSpraying && _tankLiters > 0.5) _tankLiters = (_tankLiters - 0.2).clamp(0.0, 40.0);
        notifyListeners();
      }
    });
  }

  @override
  void dispose() {
    _ticker?.cancel();
    super.dispose();
  }
}
