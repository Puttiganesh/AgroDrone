import 'package:flutter/foundation.dart';

class BookingService extends ChangeNotifier {
  double _acreage = 15.5;
  String _serviceType = 'pesticide_spraying';
  String _selectedCrop = 'Cotton';
  String _farmName = 'Green Valley Cotton Estate';

  double get acreage => _acreage;
  String get serviceType => _serviceType;
  String get selectedCrop => _selectedCrop;
  String get farmName => _farmName;

  void updateAcreage(double acres) {
    _acreage = acres;
    notifyListeners();
  }

  void updateService(String service) {
    _serviceType = service;
    notifyListeners();
  }

  double get ratePerAcre {
    switch (_serviceType) {
      case 'ai_crop_scouting':
        return 200.0;
      case 'thermal_imaging':
        return 250.0;
      case 'seeding':
        return 350.0;
      default:
        return 300.0;
    }
  }

  double get totalBaseCost => _acreage * ratePerAcre;
  double get subsidyAmount => totalBaseCost * 0.25; // 25% Sub-Mission on Agricultural Mechanization (SMAM)
  double get farmerPayable => totalBaseCost - subsidyAmount;
}
