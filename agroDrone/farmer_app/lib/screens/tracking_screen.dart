import 'package:flutter/material.dart';

class TrackingScreen extends StatelessWidget {
  const TrackingScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Live Drone Tracking'),
        backgroundColor: const Color(0xFF059669),
      ),
      body: Column(
        children: [
          // Simulated Map Area
          Expanded(
            flex: 6,
            child: Container(
              color: const Color(0xFF0F172A),
              child: Stack(
                children: [
                  Center(
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        Container(
                          padding: const EdgeInsets.all(20),
                          decoration: BoxDecoration(
                            shape: BoxShape.circle,
                            color: const Color(0xFF10B981).withOpacity(0.2),
                            border: Border.all(color: const Color(0xFF10B981), width: 2),
                          ),
                          child: const Icon(Icons.flight, size: 54, color: Color(0xFF10B981)),
                        ),
                        const SizedBox(height: 12),
                        const Text(
                          'AgroDrone Titan T-40 Active',
                          style: TextStyle(color: Colors.white, fontWeight: FontWeight.bold, fontSize: 16),
                        ),
                        const Text(
                          'Spraying Zone B (Cotton Estate)',
                          style: TextStyle(color: Colors.white70, fontSize: 13),
                        ),
                      ],
                    ),
                  ),

                  // Floating Telemetry Bubble
                  Positioned(
                    top: 16,
                    left: 16,
                    right: 16,
                    child: Container(
                      padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
                      decoration: BoxDecoration(
                        color: Colors.black87,
                        borderRadius: BorderRadius.circular(12),
                        border: Border.all(color: Colors.white24),
                      ),
                      child: Row(
                        mainAxisAlignment: MainAxisAlignment.spaceAround,
                        children: const [
                          _StatItem(label: 'ALTITUDE', val: '3.8m'),
                          _StatItem(label: 'SPEED', val: '18.5 km/h'),
                          _StatItem(label: 'TANK', val: '24.5L (61%)'),
                          _StatItem(label: 'BATTERY', val: '88%'),
                        ],
                      ),
                    ),
                  ),
                ],
              ),
            ),
          ),

          // Pilot & Mission Details Card
          Expanded(
            flex: 4,
            child: Container(
              padding: const EdgeInsets.all(20),
              decoration: const BoxDecoration(
                color: Colors.white,
                borderRadius: BorderRadius.only(
                  topLeft: Radius.circular(24),
                  topRight: Radius.circular(24),
                ),
              ),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: const [
                          Text('Capt. Vikram Rathore', style: TextStyle(fontWeight: FontWeight.bold, fontSize: 16)),
                          Text('DGCA Drone Pilot (#DGCA-RPA-99482-B)', style: TextStyle(color: Colors.grey, fontSize: 12)),
                        ],
                      ),
                      IconButton(
                        icon: const CircleAvatar(
                          backgroundColor: Color(0xFF10B981),
                          child: Icon(Icons.phone, color: Colors.white, size: 20),
                        ),
                        onPressed: () {},
                      ),
                    ],
                  ),
                  const Divider(height: 24),
                  const Text('Field Coverage Progress', style: TextStyle(fontWeight: FontWeight.bold, fontSize: 13)),
                  const SizedBox(height: 8),
                  LinearProgressIndicator(
                    value: 0.65,
                    minHeight: 10,
                    borderRadius: BorderRadius.circular(5),
                    backgroundColor: Colors.grey.shade200,
                    color: const Color(0xFF10B981),
                  ),
                  const SizedBox(height: 6),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: const [
                      Text('10.1 of 15.5 Acres Treated', style: TextStyle(fontSize: 12, color: Colors.grey)),
                      Text('65% Done • 7 mins left', style: TextStyle(fontSize: 12, fontWeight: FontWeight.bold, color: Color(0xFF059669))),
                    ],
                  ),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }
}

class _StatItem extends StatelessWidget {
  final String label;
  final String val;

  const _StatItem({Key? key, required this.label, required this.val}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Text(label, style: const TextStyle(color: Colors.grey, fontSize: 10, fontWeight: FontWeight.bold)),
        const SizedBox(height: 2),
        Text(val, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.bold, fontSize: 13)),
      ],
    );
  }
}
