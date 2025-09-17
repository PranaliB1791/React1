package com.example.demo.observer;

import com.example.demo.entity.Bill;

public class EmailNotificationObserver implements NotificationObserver {
	@Override
	public void notify(Bill bill) {
		System.out.println("Email sent to user " + bill.getUserId() + ": Your bill for Plan #" + bill.getPlanId()
				+ " is ready. Amount: ₹" + bill.getTotalCharge());
	}
}
