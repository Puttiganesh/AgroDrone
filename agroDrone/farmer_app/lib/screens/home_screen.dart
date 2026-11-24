import 'package:flutter/material.dart';
import '../widgets/weather_card.dart';
import 'booking_screen.dart';
import 'tracking_screen.dart';
import 'crop_health_screen.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('KisanFly AgroDrone', style: TextStyle(fontWeight: FontWeight.bold)),
        backgroundColor: const Color(0xFF059669),
        elevation: 0,
        actions: [
          IconButton(
            icon: const Icon(Icons.notifications_none),
            onPressed: () {},
          ),
        ],
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            // Welcome Header
            Container(
              padding: const EdgeInsets.all(20),
              decoration: BoxDecoration(
                gradient: const LinearGradient(
                  colors: [Color(0xFF059669), Color(0xFF047857)],
                  begin: Alignment.topLeft,
                  end: Alignment.bottomRight,
                ),
                borderRadius: BorderRadius.circular(20),
                boxShadow: [
                  BoxShadow(color: Colors.green.withOpacity(0.3), blurRadius: 10, offset: const Offset(0, 4)),
                ],
              ),
              child: Row(
                children: [
                  Expanded(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: const [
                        Text('Namaste Ramesh ji! 🙏', style: TextStyle(color: Colors.white, fontSize: 18, fontWeight: FontWeight.bold)),
                        SizedBox(height: 6),
                        Text(
                          'Book high-precision autonomous drone spraying for your cotton crops.',
                          style: TextStyle(color: Colors.white70, fontSize: 13),
                        ),
                      ],
                    ),
                  ),
                  const CircleAvatar(
                    radius: 28,
                    backgroundColor: Colors.white24,
                    child: Icon(Icons.agriculture, color: Colors.white, size: 32),
                  ),
                ],
              ),
            ),
            const SizedBox(height: 20),

            // Live Weather & Flight Safety Advisory
            const Text('Aviation Weather Advisory', style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold)),
            const SizedBox(height: 10),
            const WeatherCard(
              temp: 24.5,
              windSpeed: 6.4,
              status: 'SAFE',
              recommendation: 'Calm morning winds. Ideal for pesticide droplet retention.',
            ),
            const SizedBox(height: 24),

            // Quick Service Actions Grid
            const Text('Agricultural Drone Services', style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold)),
            const SizedBox(height: 12),
            GridView.count(
              crossAxisCount: 2,
              shrinkWrap: true,
              physics: const NeverScrollableScrollPhysics(),
              crossAxisSpacing: 12,
              mainAxisSpacing: 12,
              childAspectRatio: 1.15,
              children: [
                _buildActionCard(
                  context,
                  title: 'Book Drone Spray',
                  subtitle: 'Pesticide & Fertilizer',
                  icon: Icons.water_drop,
                  color: const Color(0xFF10B981),
                  onTap: () => Navigator.push(context, MaterialPageRoute(builder: (_) => const BookingScreen())),
                ),
                _buildActionCard(
                  context,
                  title: 'AI Crop Scan',
                  subtitle: 'NDVI & Pest Doctor',
                  icon: Icons.camera_alt,
                  color: const Color(0xFF8B5CF6),
                  onTap: () => Navigator.push(context, MaterialPageRoute(builder: (_) => const CropHealthScreen())),
                ),
                _buildActionCard(
                  context,
                  title: 'Track Live Flight',
                  subtitle: 'Real-time GPS HUD',
                  icon: Icons.navigation,
                  color: const Color(0xFF0284C7),
                  onTap: () => Navigator.push(context, MaterialPageRoute(builder: (_) => const TrackingScreen())),
                ),
                _buildActionCard(
                  context,
                  title: 'My Farm Plots',
                  subtitle: '15.5 Acres (2 Plots)',
                  icon: Icons.map,
                  color: const Color(0xFFF59E0B),
                  onTap: () {},
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildActionCard(
    BuildContext context, {
    required String title,
    required String subtitle,
    required IconData icon,
    required Color color,
    required VoidCallback onTap,
  }) {
    return InkWell(
      onTap: onTap,
      borderRadius: BorderRadius.circular(16),
      child: Container(
        padding: const EdgeInsets.all(16),
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.circular(16),
          border: Border.all(color: Colors.grey.shade200),
          boxShadow: [
            BoxShadow(color: Colors.black.withOpacity(0.04), blurRadius: 8, offset: const Offset(0, 2)),
          ],
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            CircleAvatar(
              backgroundColor: color.withOpacity(0.12),
              child: Icon(icon, color: color),
            ),
            const SizedBox(height: 12),
            Text(title, style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 14)),
            const SizedBox(height: 2),
            Text(subtitle, style: TextStyle(color: Colors.grey[600], fontSize: 11)),
          ],
        ),
      ),
    );
  }
}
