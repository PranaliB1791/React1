package com.example.demo.exception;

public class ExternalSericeException extends RuntimeException {
	public ExternalSericeException(String message, Throwable cause) {
		super(message, cause);
	}
}
