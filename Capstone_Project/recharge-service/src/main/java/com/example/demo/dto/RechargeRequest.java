package com.example.demo.dto;

import java.time.LocalDateTime;

import jakarta.validation.constraints.NotNull;

import java.time.LocalDate;

public class RechargeRequest {

	@NotNull(message = "User ID cannot be null")
	private Long userId;

	@NotNull(message = "Plan ID cannot be null")
	private Long planId;

	@NotNull(message = "Recharge date cannot be null")
	private LocalDate rechargeDate;

	public RechargeRequest() {
	}

	public RechargeRequest(Long userId, Long planId, LocalDate rechargeDate) {
		this.userId = userId;
		this.planId = planId;
		this.rechargeDate = rechargeDate;
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

	public LocalDate getRechargeDate() {
		return rechargeDate;
	}

	public void setRechargeDate(LocalDate rechargeDate) {
		this.rechargeDate = rechargeDate;
	}
}
