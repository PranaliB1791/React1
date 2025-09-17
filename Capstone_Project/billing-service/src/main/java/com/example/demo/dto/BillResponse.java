package com.example.demo.dto;

import java.time.LocalDateTime;

public class BillResponse {
	private Long id;
	private Long userId;
	private Long planId;
	private double callCharge;
	private double dataCharge;
	private double smsCharge;
	private double totalCharge;
	private LocalDateTime generatedAt;
	private String status;

	public BillResponse() {
	}

	public BillResponse(Long id, Long userId, Long planId, double callCharge, double dataCharge, double smsCharge,
			double totalCharge, LocalDateTime generatedAt, String status) {
		this.id = id;
		this.userId = userId;
		this.planId = planId;
		this.callCharge = callCharge;
		this.dataCharge = dataCharge;
		this.smsCharge = smsCharge;
		this.totalCharge = totalCharge;
		this.generatedAt = generatedAt;
		this.status = status;
	}

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

	public double getCallCharge() {
		return callCharge;
	}

	public void setCallCharge(double callCharge) {
		this.callCharge = callCharge;
	}

	public double getDataCharge() {
		return dataCharge;
	}

	public void setDataCharge(double dataCharge) {
		this.dataCharge = dataCharge;
	}

	public double getSmsCharge() {
		return smsCharge;
	}

	public void setSmsCharge(double smsCharge) {
		this.smsCharge = smsCharge;
	}

	public double getTotalCharge() {
		return totalCharge;
	}

	public void setTotalCharge(double totalCharge) {
		this.totalCharge = totalCharge;
	}

	public LocalDateTime getGeneratedAt() {
		return generatedAt;
	}

	public void setGeneratedAt(LocalDateTime generatedAt) {
		this.generatedAt = generatedAt;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}
}
