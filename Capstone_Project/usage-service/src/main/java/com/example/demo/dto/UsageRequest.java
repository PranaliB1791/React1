package com.example.demo.dto;

public class UsageRequest {
	private Long userId;
	private Long planId;
	private int callMinutes;
	private double dataUsageInGB;
	private int smsCount;

	public UsageRequest() {
	}

	public UsageRequest(Long userId, Long planId, int callMinutes, double dataUsageInGB, int smsCount) {
		super();
		this.userId = userId;
		this.planId = planId;
		this.callMinutes = callMinutes;
		this.dataUsageInGB = dataUsageInGB;
		this.smsCount = smsCount;
	}

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	public Long getPlanId() {
		return planId;
	}

	public void setPlanId(Long planId) {
		this.planId = planId;
	}

	public int getCallMinutes() {
		return callMinutes;
	}

	public void setCallMinutes(int callMinutes) {
		this.callMinutes = callMinutes;
	}

	public double getDataUsageInGB() {
		return dataUsageInGB;
	}

	public void setDataUsageInGB(double dataUsageInGB) {
		this.dataUsageInGB = dataUsageInGB;
	}

	public int getSmsCount() {
		return smsCount;
	}

	public void setSmsCount(int smsCount) {
		this.smsCount = smsCount;
	}

	// Getters and setters
}
