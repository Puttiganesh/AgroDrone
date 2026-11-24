import 'package:flutter/material.dart';

class SafetyChecklistWidget extends StatelessWidget {
  const SafetyChecklistWidget({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: const Color(0xFF1E293B),
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: const Color(0xFF334155)),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: const [
              Text('DGCA Pre-Flight Safety Clearance', style: TextStyle(color: Colors.white, fontWeight: FontWeight.bold, fontSize: 13)),
              Icon(Icons.verified, color: Color(0xFF10B981), size: 18),
            ],
          ),
          const SizedBox(height: 10),
          _item('GPS RTK Locked (> 14 Satellites)', true),
          _item('Lithium Smart Battery Pack (> 48V)', true),
          _item('Obstacle Avoidance Radar Calibrated', true),
          _item('Chemical Tank Air-bleed Purged', true),
        ],
      ),
    );
  }

  Widget _item(String title, bool passed) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 3),
      child: Row(
        children: [
          Icon(passed ? Icons.check_circle_outline : Icons.cancel_outlined, color: passed ? const Color(0xFF10B981) : Colors.red, size: 16),
          const SizedBox(width: 8),
          Text(title, style: const TextStyle(color: Color(0xFFCBD5E1), fontSize: 12)),
        ],
      ),
    );
  }
}
