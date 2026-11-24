import 'package:flutter/material.dart';
import '../services/api_service.dart';

class CropHealthScreen extends StatefulWidget {
  const CropHealthScreen({Key? key}) : super(key: key);

  @override
  State<CropHealthScreen> createState() => _CropHealthScreenState();
}

class _CropHealthScreenState extends State<CropHealthScreen> {
  bool _analyzing = false;
  Map<String, dynamic>? _result;

  Future<void> _scanCrop() async {
    setState(() => _analyzing = true);
    final data = await ApiService().analyzeCropHealth(1, 'Cotton');
    setState(() {
      _analyzing = false;
      _result = data;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('AI Crop Doctor & NDVI'),
        backgroundColor: const Color(0xFF059669),
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            // Scanner Header Card
            Container(
              padding: const EdgeInsets.all(20),
              decoration: BoxDecoration(
                color: const Color(0xFFF0FDF4),
                borderRadius: BorderRadius.circular(16),
                border: Border.all(color: const Color(0xFFBBF7D0)),
              ),
              child: Column(
                children: [
                  const Icon(Icons.document_scanner, size: 48, color: Color(0xFF10B981)),
                  const SizedBox(height: 12),
                  const Text('Multispectral Field Health Scan', style: TextStyle(fontWeight: FontWeight.bold, fontSize: 16)),
                  const SizedBox(height: 6),
                  const Text(
                    'Analyze vegetation index (NDVI), detect early pink bollworm outbreaks, and calculate variable-rate spray needs.',
                    textAlign: TextAlign.center,
                    style: TextStyle(fontSize: 12, color: Colors.grey),
                  ),
                  const SizedBox(height: 16),
                  ElevatedButton.icon(
                    style: ElevatedButton.styleFrom(
                      backgroundColor: const Color(0xFF059669),
                      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(10)),
                    ),
                    icon: _analyzing
                        ? const SizedBox(width: 16, height: 16, child: CircularProgressIndicator(color: Colors.white, strokeWidth: 2))
                        : const Icon(Icons.camera_alt),
                    label: Text(_analyzing ? 'Analyzing Multispectral Imagery...' : 'Run Field Diagnostic Scan'),
                    onPressed: _analyzing ? null : _scanCrop,
                  ),
                ],
              ),
            ),
            const SizedBox(height: 24),

            if (_result != null) ...[
              const Text('Diagnosis Report', style: TextStyle(fontWeight: FontWeight.bold, fontSize: 16)),
              const SizedBox(height: 12),
              Card(
                shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
                child: Padding(
                  padding: const EdgeInsets.all(16),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          const Text('NDVI Health Score:', style: TextStyle(fontSize: 15, fontWeight: FontWeight.bold)),
                          Text(
                            '${_result!['ndvi_score']}',
                            style: const TextStyle(fontSize: 18, fontWeight: FontWeight.bold, color: Color(0xFF059669)),
                          ),
                        ],
                      ),
                      const SizedBox(height: 8),
                      Text('Classification: ${_result!['health_classification']}', style: const TextStyle(fontWeight: FontWeight.w600)),
                      const SizedBox(height: 6),
                      Text('Weed Infestation: ${_result!['weed_infestation_pct']}%', style: TextStyle(color: Colors.grey[700])),
                      const Divider(height: 24),
                      const Text('Agronomic Recommendation:', style: TextStyle(fontWeight: FontWeight.bold, fontSize: 13)),
                      const SizedBox(height: 4),
                      Text(
                        _result!['recommendation'] ?? '',
                        style: TextStyle(color: Colors.grey[800], fontSize: 13, height: 1.5),
                      ),
                    ],
                  ),
                ),
              ),
            ],
          ],
        ),
      ),
    );
  }
}
