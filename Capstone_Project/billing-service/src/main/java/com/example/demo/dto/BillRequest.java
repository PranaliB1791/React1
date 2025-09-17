package com.example.demo.dto;

public class BillRequest {
	private Long userId;
	// Optionally add more fields like billing month, planId etc.

	public BillRequest() {
	}

	public BillRequest(Long userId) {
		this.userId = userId;
	}

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}
}
