package com.example.demo.exception;

public class UsageDataNotFoundException extends RuntimeException {
	public UsageDataNotFoundException(Long userId) {
		super("No usage data found for user " + userId);
	}
}
