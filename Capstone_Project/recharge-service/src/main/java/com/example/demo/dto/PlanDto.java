package com.example.demo.dto;

public class PlanDto {
	private Long id;
	private String planName;
	private Double price;

	public PlanDto() {
	}

	public PlanDto(Long id, String planName, Double price) {
		this.id = id;
		this.planName = planName;
		this.price = price;
	}

	// Getters & Setters
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getPlanName() {
		return planName;
	}

	public void setPlanName(String planName) {
		this.planName = planName;
	}

	public Double getPrice() {
		return price;
	}

	public void setPrice(Double price) {
		this.price = price;
	}
}
