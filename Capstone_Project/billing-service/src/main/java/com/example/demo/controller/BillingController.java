package com.example.demo.controller;

import com.example.demo.dto.BillResponse;
import com.example.demo.service.BillingService;
import jakarta.validation.constraints.Min;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/billing")
@Validated  // Enable method parameter validation
public class BillingController {

    @Autowired
    private BillingService billingService;

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/generate/{userId}")
    public BillResponse generateBill(
            @PathVariable @Min(value = 1, message = "User ID must be greater than 0") Long userId) {
        return billingService.generateBillForUser(userId);
    }

    @PreAuthorize("hasAnyRole('ADMIN','CUSTOMER')")
    @GetMapping("/history")
    public List<BillResponse> getBillHistory(
            @RequestParam @Min(value = 1, message = "User ID must be greater than 0") Long userId) {
        return billingService.getBillsForUser(userId);
    }

    @PreAuthorize("hasAnyRole('ADMIN','CUSTOMER')")
    @GetMapping("/{billId}")
    public BillResponse getBillById(
            @PathVariable @Min(value = 1, message = "Bill ID must be greater than 0") Long billId) {
        return billingService.getBillById(billId);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/all")
    public List<BillResponse> getAllBills() {
        return billingService.getAllBills();
    }

    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/{billId}")
    public String deleteBill(
            @PathVariable @Min(value = 1, message = "Bill ID must be greater than 0") Long billId) {
        billingService.deleteBill(billId);
        return "Bill deleted successfully";
    }
}
