package com.example.demo.strategy;

public class BillingStrategyFactory {

    public static BillingStrategy getStrategy(String planType) {
        if (planType == null) {
            planType = "PREPAID"; // Default fallback plan type
        }

        switch (planType.toUpperCase()) {
            case "POSTPAID":
                return new PostpaidBillingStrategy();
            case "DATA_ONLY":
                return new DataOnlyBillingStrategy();
            case "PREPAID":
                return new PrepaidBillingStrategy();
            default:
                System.out.println("[WARN] Unknown plan type '" + planType + "', defaulting to PrepaidBillingStrategy");
                return new PrepaidBillingStrategy();
        }
    }
}
