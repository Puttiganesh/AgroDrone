import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'services/telemetry_service.dart';
import 'screens/pilot_dashboard.dart';

void main() {
  runApp(
    MultiProvider(
      providers: [
        ChangeNotifierProvider(create: (_) => TelemetryService()),
      ],
      child: const AgroDroneOperatorApp(),
    ),
  );
}

class AgroDroneOperatorApp extends StatelessWidget {
  const AgroDroneOperatorApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'AgroDrone Pilot HUD',
      debugShowCheckedModeBanner: false,
      theme: ThemeData.dark().copyWith(
        scaffoldBackgroundColor: const Color(0xFF0B1120),
        primaryColor: const Color(0xFF10B981),
        appBarTheme: const AppBarTheme(
          backgroundColor: Color(0xFF131D31),
          foregroundColor: Colors.white,
          elevation: 0,
        ),
      ),
      home: const PilotDashboardScreen(),
    );
  }
}
