package com.example.demo.exception;

public class InvalidTokenException extends RuntimeException {

	public InvalidTokenException() {
		super("Invalid or missing authentication token.");
	}

	public InvalidTokenException(String message) {
		super(message);
	}
}
