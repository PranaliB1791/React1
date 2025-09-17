package com.example.demo.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "plans")
public class Plan {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(nullable = false, unique = true)
	private String planName;

	@Column(nullable = false)
	private double price;

	@Column(nullable = false)
	private int validityInDays;

	@Column(nullable = false)
	private String dataLimit; // e.g., "1GB", "Unlimited"

	@Column(nullable = false)
	private String talktime; // e.g., "100 mins", "Unlimited"

	@Column
	private String description;

	// Constructors
	public Plan() {
	}

	public Plan(Long id, String planName, double price, int validityInDays, String dataLimit, String talktime,
			String description) {
		this.id = id;
		this.planName = planName;
		this.price = price;
		this.validityInDays = validityInDays;
		this.dataLimit = dataLimit;
		this.talktime = talktime;
		this.description = description;
	}

	// Getters and Setters
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

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public int getValidityInDays() {
		return validityInDays;
	}

	public void setValidityInDays(int validityInDays) {
		this.validityInDays = validityInDays;
	}

	public String getDataLimit() {
		return dataLimit;
	}

	public void setDataLimit(String dataLimit) {
		this.dataLimit = dataLimit;
	}

	public String getTalktime() {
		return talktime;
	}

	public void setTalktime(String talktime) {
		this.talktime = talktime;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
}
