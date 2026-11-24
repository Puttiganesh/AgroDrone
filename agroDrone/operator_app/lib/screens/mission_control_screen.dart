import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../services/telemetry_service.dart';
import '../widgets/telemetry_gauge.dart';
import '../widgets/spray_controller.dart';
import '../widgets/safety_checklist_widget.dart';

class MissionControlScreen extends StatelessWidget {
  const MissionControlScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final telemetry = context.watch<TelemetryService>();

    return Scaffold(
      backgroundColor: const Color(0xFF0B1120),
      appBar: AppBar(
        title: const Text('Autonomous Mission Cockpit'),
        backgroundColor: const Color(0xFF131D31),
        actions: [
          IconButton(
            icon: const Icon(Icons.home, color: Color(0xFFF59E0B)),
            tooltip: 'Return to Home (RTH)',
            onPressed: () {
              telemetry.triggerReturnToHome();
              ScaffoldMessenger.of(context).showSnackBar(
                const SnackBar(content: Text('⚠️ Emergency Return-To-Home (RTH) Activated')),
              );
            },
          ),
        ],
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(16),
        child: Column(
          children: [
            // Telemetry Sensor Readout Grid
            GridView.count(
              crossAxisCount: 2,
              shrinkWrap: true,
              physics: const NeverScrollableScrollPhysics(),
              crossAxisSpacing: 10,
              mainAxisSpacing: 10,
              childAspectRatio: 1.8,
              children: [
                TelemetryGauge(
                  label: 'Altitude (AGL)',
                  value: telemetry.altitude.toStringAsFixed(1),
                  unit: 'meters',
                  valueColor: const Color(0xFF38BDF8),
                ),
                TelemetryGauge(
                  label: 'Ground Speed',
                  value: telemetry.speed.toStringAsFixed(1),
                  unit: 'km/h',
                ),
                TelemetryGauge(
                  label: 'Lithium Battery',
                  value: '${telemetry.batteryPct}',
                  unit: '%',
                  valueColor: telemetry.batteryPct > 20 ? const Color(0xFF10B981) : Colors.red,
                ),
                TelemetryGauge(
                  label: 'Chemical Tank',
                  value: telemetry.tankLiters.toStringAsFixed(1),
                  unit: 'Liters',
                  valueColor: const Color(0xFF38BDF8),
                ),
              ],
            ),
            const SizedBox(height: 16),

            // Spray Controller
            SprayControllerWidget(
              isSpraying: telemetry.isSpraying,
              flowRate: telemetry.flowRate,
              onToggleSpray: (val) => telemetry.toggleSpray(),
              onFlowChanged: (val) => telemetry.setFlowRate(val),
            ),
            const SizedBox(height: 16),

            // Safety Clearance Checklist
            const SafetyChecklistWidget(),
            const SizedBox(height: 20),

            // Flight State Actions
            Row(
              children: [
                Expanded(
                  child: ElevatedButton(
                    style: ElevatedButton.styleFrom(
                      backgroundColor: telemetry.isArmed ? Colors.red.shade700 : const Color(0xFF10B981),
                      padding: const EdgeInsets.symmetric(vertical: 14),
                      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(10)),
                    ),
                    onPressed: () => telemetry.toggleArm(),
                    child: Text(
                      telemetry.isArmed ? 'DISARM MOTORS' : 'ARM MOTORS',
                      style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 14),
                    ),
                  ),
                ),
                const SizedBox(width: 12),
                Expanded(
                  child: ElevatedButton(
                    style: ElevatedButton.styleFrom(
                      backgroundColor: const Color(0xFF0284C7),
                      padding: const EdgeInsets.symmetric(vertical: 14),
                      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(10)),
                    ),
                    onPressed: () {
                      ScaffoldMessenger.of(context).showSnackBar(
                        const SnackBar(content: Text('🚀 Autonomous Grid Waypoint Sequence Resumed')),
                      );
                    },
                    child: const Text(
                      'START GRID SWEEP',
                      style: TextStyle(fontWeight: FontWeight.bold, fontSize: 14),
                    ),
                  ),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
