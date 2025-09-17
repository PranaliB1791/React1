package com.example.demo.service;

import java.util.List;

import com.example.demo.dto.BillResponse;

public interface BillingService {
    BillResponse generateBillForUser(Long userId);
    List<BillResponse> getBillsForUser(Long userId);

    // New methods added to support controller
    BillResponse getBillById(Long billId);
    List<BillResponse> getAllBills();
    void deleteBill(Long billId);
}
