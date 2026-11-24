import 'package:flutter/material.dart';

class PriceSummaryCard extends StatelessWidget {
  final double acreage;
  final double ratePerAcre;
  final double baseCost;
  final double subsidy;
  final double totalPayable;

  const PriceSummaryCard({
    Key? key,
    required this.acreage,
    required this.ratePerAcre,
    required this.baseCost,
    required this.subsidy,
    required this.totalPayable,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: const Color(0xFFF1F5F9),
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: const Color(0xFFCBD5E1)),
      ),
      child: Column(
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Text('$acreage Acres × ₹$ratePerAcre/acre', style: TextStyle(color: Colors.grey[700])),
              Text('₹${baseCost.toStringAsFixed(2)}', style: const TextStyle(fontWeight: FontWeight.w600)),
            ],
          ),
          const SizedBox(height: 8),
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              const Text('Govt Subsidy (25% SMAM Scheme)', style: TextStyle(color: Color(0xFF059669), fontWeight: FontWeight.w600)),
              Text('- ₹${subsidy.toStringAsFixed(2)}', style: const TextStyle(color: Color(0xFF059669), fontWeight: FontWeight.bold)),
            ],
          ),
          const Divider(height: 24),
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              const Text('Total Farmer Payable', style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold)),
              Text(
                '₹${totalPayable.toStringAsFixed(2)}',
                style: const TextStyle(fontSize: 18, fontWeight: FontWeight.bold, color: Color(0xFF064E3B)),
              ),
            ],
          ),
        ],
      ),
    );
  }
}
