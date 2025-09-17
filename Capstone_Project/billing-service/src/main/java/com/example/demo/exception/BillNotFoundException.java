package com.example.demo.exception;

public class BillNotFoundException extends RuntimeException {
	public BillNotFoundException(Long billId) {
		super("Bill not found with id: " + billId);
	}
}
