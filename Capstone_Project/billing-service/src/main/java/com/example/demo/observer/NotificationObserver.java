package com.example.demo.observer;

import com.example.demo.entity.Bill;

public interface NotificationObserver {
	void notify(Bill bill);
}
