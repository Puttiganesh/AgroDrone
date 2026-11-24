import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../services/booking_service.dart';
import '../services/api_service.dart';
import '../widgets/price_summary.dart';

class BookingScreen extends StatefulWidget {
  const BookingScreen({Key? key}) : super(key: key);

  @override
  State<BookingScreen> createState() => _BookingScreenState();
}

class _BookingScreenState extends State<BookingScreen> {
  final _acreController = TextEditingController(text: '15.5');
  String _selectedSlot = '06:00 - 08:30 AM (Best Wind)';
  bool _isSubmitting = false;

  @override
  void dispose() {
    _acreController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final booking = context.watch<BookingService>();

    return Scaffold(
      appBar: AppBar(
        title: const Text('Book Drone Spraying'),
        backgroundColor: const Color(0xFF059669),
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            // Farm Plot Selection
            const Text('Select Registered Farm', style: TextStyle(fontWeight: FontWeight.bold, fontSize: 14)),
            const SizedBox(height: 6),
            Container(
              padding: const EdgeInsets.symmetric(horizontal: 12),
              decoration: BoxDecoration(
                border: Border.all(color: Colors.grey.shade300),
                borderRadius: BorderRadius.circular(10),
              ),
              child: DropdownButtonHideUnderline(
                child: DropdownButton<String>(
                  isExpanded: true,
                  value: booking.farmName,
                  items: const [
                    DropdownMenuItem(value: 'Green Valley Cotton Estate', child: Text('Green Valley Cotton (15.5 Acres)')),
                    DropdownMenuItem(value: 'Narmada Basin Paddy Plot', child: Text('Narmada Basin Plot (12.0 Acres)')),
                  ],
                  onChanged: (val) {},
                ),
              ),
            ),
            const SizedBox(height: 16),

            // Service Type Selection
            const Text('Select Agricultural Service', style: TextStyle(fontWeight: FontWeight.bold, fontSize: 14)),
            const SizedBox(height: 6),
            Container(
              padding: const EdgeInsets.symmetric(horizontal: 12),
              decoration: BoxDecoration(
                border: Border.all(color: Colors.grey.shade300),
                borderRadius: BorderRadius.circular(10),
              ),
              child: DropdownButtonHideUnderline(
                child: DropdownButton<String>(
                  isExpanded: true,
                  value: booking.serviceType,
                  items: const [
                    DropdownMenuItem(value: 'pesticide_spraying', child: Text('Pesticide Spraying (₹300/acre)')),
                    DropdownMenuItem(value: 'liquid_fertilizer', child: Text('Liquid Nano Fertilizer (₹300/acre)')),
                    DropdownMenuItem(value: 'ai_crop_scouting', child: Text('AI Multispectral Scouting (₹200/acre)')),
                    DropdownMenuItem(value: 'thermal_imaging', child: Text('Thermal Moisture Imaging (₹250/acre)')),
                  ],
                  onChanged: (val) {
                    if (val != null) booking.updateService(val);
                  },
                ),
              ),
            ),
            const SizedBox(height: 16),

            // Acreage Input
            const Text('Area to Spray (Acres)', style: TextStyle(fontWeight: FontWeight.bold, fontSize: 14)),
            const SizedBox(height: 6),
            TextField(
              controller: _acreController,
              keyboardType: const TextInputType.numberWithOptions(decimal: true),
              decoration: InputDecoration(
                border: OutlineInputBorder(borderRadius: BorderRadius.circular(10)),
                suffixText: 'Acres',
              ),
              onChanged: (val) {
                final acres = double.tryParse(val) ?? 1.0;
                booking.updateAcreage(acres);
              },
            ),
            const SizedBox(height: 16),

            // Time Slot Selection
            const Text('Preferred Time Slot', style: TextStyle(fontWeight: FontWeight.bold, fontSize: 14)),
            const SizedBox(height: 6),
            Container(
              padding: const EdgeInsets.symmetric(horizontal: 12),
              decoration: BoxDecoration(
                border: Border.all(color: Colors.grey.shade300),
                borderRadius: BorderRadius.circular(10),
              ),
              child: DropdownButtonHideUnderline(
                child: DropdownButton<String>(
                  isExpanded: true,
                  value: _selectedSlot,
                  items: const [
                    DropdownMenuItem(value: '06:00 - 08:30 AM (Best Wind)', child: Text('06:00 - 08:30 AM (Recommended)')),
                    DropdownMenuItem(value: '08:30 - 11:00 AM', child: Text('08:30 - 11:00 AM')),
                    DropdownMenuItem(value: '04:00 - 06:30 PM (Evening)', child: Text('04:00 - 06:30 PM (Evening)')),
                  ],
                  onChanged: (val) {
                    if (val != null) setState(() => _selectedSlot = val);
                  },
                ),
              ),
            ),
            const SizedBox(height: 24),

            // Price Summary Card
            PriceSummaryCard(
              acreage: booking.acreage,
              ratePerAcre: booking.ratePerAcre,
              baseCost: booking.totalBaseCost,
              subsidy: booking.subsidyAmount,
              totalPayable: booking.farmerPayable,
            ),
            const SizedBox(height: 24),

            // Submit Button
            SizedBox(
              width: double.infinity,
              height: 52,
              child: ElevatedButton(
                style: ElevatedButton.styleFrom(
                  backgroundColor: const Color(0xFF059669),
                  shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
                ),
                onPressed: _isSubmitting
                    ? null
                    : () async {
                        setState(() => _isSubmitting = true);
                        await ApiService().createBooking({
                          'farmer_id': 4,
                          'farm_id': 1,
                          'service_type': booking.serviceType,
                          'target_crop': 'Cotton',
                          'area_acres': booking.acreage,
                          'scheduled_date': '2026-11-25',
                          'scheduled_slot': _selectedSlot,
                        });
                        setState(() => _isSubmitting = false);

                        if (!mounted) return;
                        showDialog(
                          context: context,
                          builder: (ctx) => AlertDialog(
                            title: const Text('🎉 Mission Booked!'),
                            content: Text(
                              'Drone spraying scheduled for ${booking.acreage} Acres.\nTotal Payable: ₹${booking.farmerPayable.toStringAsFixed(2)}\n\nPilot and drone assignment details will appear in your live tracking tab.',
                            ),
                            actions: [
                              TextButton(
                                onPressed: () {
                                  Navigator.pop(ctx);
                                  Navigator.pop(context);
                                },
                                child: const Text('OK'),
                              ),
                            ],
                          ),
                        );
                      },
                child: _isSubmitting
                    ? const CircularProgressIndicator(color: Colors.white)
                    : const Text('Confirm & Book Drone Spray', style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold)),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
