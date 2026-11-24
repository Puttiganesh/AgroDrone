import 'package:flutter/material.dart';

class WeatherCard extends StatelessWidget {
  final double temp;
  final double windSpeed;
  final String status;
  final String recommendation;

  const WeatherCard({
    Key? key,
    required this.temp,
    required this.windSpeed,
    required this.status,
    required this.recommendation,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final isSafe = status == 'SAFE';

    return Container(
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: isSafe ? const Color(0xFFECFDF5) : const Color(0xFFFEF2F2),
        borderRadius: BorderRadius.circular(16),
        border: Border.all(
          color: isSafe ? const Color(0xFFA7F3D0) : const Color(0xFFFECACA),
        ),
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
                    isSafe ? Icons.check_circle : Icons.warning_amber_rounded,
                    color: isSafe ? const Color(0xFF059669) : const Color(0xFFDC2626),
                  ),
                  const SizedBox(width: 8),
                  Text(
                    'Spray Advisory: $status',
                    style: TextStyle(
                      fontWeight: FontWeight.bold,
                      fontSize: 15,
                      color: isSafe ? const Color(0xFF065F46) : const Color(0xFF991B1B),
                    ),
                  ),
                ],
              ),
              Text(
                '${temp.toStringAsFixed(1)}°C',
                style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 16),
              ),
            ],
          ),
          const SizedBox(height: 8),
          Text(
            'Wind: ${windSpeed.toStringAsFixed(1)} km/h • $recommendation',
            style: TextStyle(fontSize: 13, color: Colors.grey[700]),
          ),
        ],
      ),
    );
  }
}
