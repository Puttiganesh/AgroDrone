import 'package:flutter/material.dart';

class FlightLogScreen extends StatelessWidget {
  const FlightLogScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFF0B1120),
      appBar: AppBar(
        title: const Text('DGCA Flight Logbook'),
        backgroundColor: const Color(0xFF131D31),
      ),
      body: ListView(
        padding: const EdgeInsets.all(16),
        children: [
          _buildLogTile(
            date: '2026-11-24',
            field: 'Green Valley Cotton Estate',
            acres: '15.5 Acres',
            duration: '42 mins',
            chemical: 'Chlorantraniliprole 18.5%',
            pilot: 'Capt. Vikram Rathore (RPA-99482)',
          ),
          _buildLogTile(
            date: '2026-11-22',
            field: 'Golden Harvest Wheat Plot',
            acres: '28.0 Acres',
            duration: '1 hr 15 mins',
            chemical: 'Nano Urea & Micronutrient Zinc',
            pilot: 'Capt. Vikram Rathore (RPA-99482)',
          ),
          _buildLogTile(
            date: '2026-11-20',
            field: 'Narmada Basin Paddy Field',
            acres: '12.0 Acres',
            duration: '35 mins',
            chemical: 'Cartap Hydrochloride',
            pilot: 'Capt. Vikram Rathore (RPA-99482)',
          ),
        ],
      ),
    );
  }

  Widget _buildLogTile({
    required String date,
    required String field,
    required String acres,
    required String duration,
    required String chemical,
    required String pilot,
  }) {
    return Container(
      margin: const EdgeInsets.only(bottom: 12),
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: const Color(0xFF131D31),
        borderRadius: BorderRadius.circular(14),
        border: Border.all(color: const Color(0xFF243553)),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Text(field, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.bold, fontSize: 14)),
              Text(date, style: const TextStyle(color: Color(0xFF10B981), fontSize: 12, fontWeight: FontWeight.bold)),
            ],
          ),
          const SizedBox(height: 6),
          Text('Treated: $acres • Flight Duration: $duration', style: const TextStyle(color: Color(0xFFCBD5E1), fontSize: 12)),
          const SizedBox(height: 4),
          Text('Chemical Formula: $chemical', style: const TextStyle(color: Color(0xFF94A3B8), fontSize: 11)),
          const SizedBox(height: 4),
          Text('Pilot: $pilot', style: const TextStyle(color: Color(0xFF64748B), fontSize: 11)),
        ],
      ),
    );
  }
}
