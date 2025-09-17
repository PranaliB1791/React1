package com.example.demo.strategy;

import com.example.demo.dto.PlanResponse;
import com.example.demo.dto.UsageResponse;
import java.util.List;

public class DataOnlyBillingStrategy implements BillingStrategy {
	@Override
	public double calculateCallCharge(List<UsageResponse> usageList, PlanResponse plan) {
		// Calls not allowed on data-only plan
		return 0.0;
	}

	@Override
	public double calculateDataCharge(List<UsageResponse> usageList, PlanResponse plan) {
		double totalGB = 0.0;
		for (UsageResponse usage : usageList) {
			totalGB += usage.getDataUsageInGB();
		}
		// Example data rate for data-only plan
		return totalGB * 9.0; // You can change 9.0 to your actual rate
	}

	@Override
	public double calculateSmsCharge(List<UsageResponse> usageList, PlanResponse plan) {
		// SMS not allowed or not charged on data-only plan
		return 0.0;
	}
}
