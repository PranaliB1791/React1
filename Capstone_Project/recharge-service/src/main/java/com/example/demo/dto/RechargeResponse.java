package com.example.demo.dto;

import java.time.LocalDateTime;

public class RechargeResponse {
	private Long id;
	private Long userId;
	private Long planId;
	private LocalDateTime rechargeDate;

	private UserDto user;
	private PlanDto plan;

	public RechargeResponse() {
	}

	public RechargeResponse(Long id, Long userId, Long planId, LocalDateTime rechargeDate, UserDto user, PlanDto plan) {
		this.id = id;
		this.userId = userId;
		this.planId = planId;
		this.rechargeDate = rechargeDate;
		this.user = user;
		this.plan = plan;
	}

	// Getters & Setters
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
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

	public LocalDateTime getRechargeDate() {
		return rechargeDate;
	}

	public void setRechargeDate(LocalDateTime rechargeDate) {
		this.rechargeDate = rechargeDate;
	}

	public UserDto getUser() {
		return user;
	}

	public void setUser(UserDto user) {
		this.user = user;
	}

	public PlanDto getPlan() {
		return plan;
	}

	public void setPlan(PlanDto plan) {
		this.plan = plan;
	}
}
