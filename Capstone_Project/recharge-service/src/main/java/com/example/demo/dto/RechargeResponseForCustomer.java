package com.example.demo.dto;

import java.time.LocalDateTime;

public class RechargeResponseForCustomer {
	private String planName;
	private double price;
	private LocalDateTime rechargeDate;

	public RechargeResponseForCustomer() {
	}

	public RechargeResponseForCustomer(String planName, double price, LocalDateTime rechargeDate) {
		super();
		this.planName = planName;
		this.price = price;
		this.rechargeDate = rechargeDate;
	}

	public String getPlanName() {
		return planName;
	}

	public void setPlanName(String planName) {
		this.planName = planName;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public LocalDateTime getRechargeDate() {
		return rechargeDate;
	}

	public void setRechargeDate(LocalDateTime rechargeDate) {
		this.rechargeDate = rechargeDate;
	}

	// Getters and Setters
}
