package com.example.demo.strategy;

import com.example.demo.dto.PlanResponse;
import com.example.demo.dto.UsageResponse;

import java.util.List;

public interface BillingStrategy {
	double calculateCallCharge(List<UsageResponse> usageList, PlanResponse plan);

	double calculateDataCharge(List<UsageResponse> usageList, PlanResponse plan);

	double calculateSmsCharge(List<UsageResponse> usageList, PlanResponse plan);
}
