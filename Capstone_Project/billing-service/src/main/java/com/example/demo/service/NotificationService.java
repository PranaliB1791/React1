package com.example.demo.service;

import com.example.demo.entity.Bill;
import com.example.demo.observer.NotificationObserver;
import java.util.ArrayList;
import java.util.List;

public class NotificationService {
	private List<NotificationObserver> observers = new ArrayList<>();

	public void addObserver(NotificationObserver observer) {
		observers.add(observer);
	}

	public void notifyAll(Bill bill) {
		for (NotificationObserver observer : observers) {
			observer.notify(bill);
		}
	}
}
