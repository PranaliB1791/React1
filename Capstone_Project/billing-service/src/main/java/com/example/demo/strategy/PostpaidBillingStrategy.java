package com.example.demo.strategy;

import com.example.demo.dto.PlanResponse;
import com.example.demo.dto.UsageResponse;

import java.util.List;

public class PostpaidBillingStrategy implements BillingStrategy {
	@Override
	public double calculateCallCharge(List<UsageResponse> usageList, PlanResponse plan) {
		int totalMinutes = usageList.stream().mapToInt(UsageResponse::getCallMinutes).sum();
		return totalMinutes * 0.3; // Example
	}

	@Override
	public double calculateDataCharge(List<UsageResponse> usageList, PlanResponse plan) {
		double totalGB = usageList.stream().mapToDouble(UsageResponse::getDataUsageInGB).sum();
		return totalGB * 8.0; // Example
	}

	@Override
	public double calculateSmsCharge(List<UsageResponse> usageList, PlanResponse plan) {
		int totalSMS = usageList.stream().mapToInt(UsageResponse::getSmsCount).sum();
		return totalSMS * 0.15; // Example
	}
}
