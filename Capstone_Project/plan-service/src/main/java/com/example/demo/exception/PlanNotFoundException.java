package com.example.demo.exception;

public class PlanNotFoundException extends RuntimeException {
	public PlanNotFoundException(String message) {
		super(message);
	}
}
