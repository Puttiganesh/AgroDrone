import 'package:flutter/material.dart';

class SprayControllerWidget extends StatelessWidget {
  final bool isSpraying;
  final double flowRate;
  final ValueChanged<bool> onToggleSpray;
  final ValueChanged<double> onFlowChanged;

  const SprayControllerWidget({
    Key? key,
    required this.isSpraying,
    required this.flowRate,
    required this.onToggleSpray,
    required this.onFlowChanged,
  }) : super(key: key);

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
            children: [
              Row(
                children: [
                  Icon(
                    Icons.water_drop,
                    color: isSpraying ? const Color(0xFF38BDF8) : const Color(0xFF64748B),
                  ),
                  const SizedBox(width: 8),
                  const Text('Centrifugal Atomizer Nozzles', style: TextStyle(color: Colors.white, fontWeight: FontWeight.bold)),
                ],
              ),
              Switch(
                value: isSpraying,
                activeColor: const Color(0xFF38BDF8),
                onChanged: onToggleSpray,
              ),
            ],
          ),
          const SizedBox(height: 12),
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Text('Flow Rate: ${flowRate.toStringAsFixed(1)} L/min', style: const TextStyle(color: Color(0xFF94A3B8), fontSize: 13)),
              const Text('VRA Smart Mode', style: TextStyle(color: Color(0xFF10B981), fontSize: 11, fontWeight: FontWeight.bold)),
            ],
          ),
          Slider(
            value: flowRate,
            min: 1.0,
            max: 5.0,
            divisions: 20,
            activeColor: const Color(0xFF38BDF8),
            inactiveColor: const Color(0xFF334155),
            onChanged: onFlowChanged,
          ),
        ],
      ),
    );
  }
}
