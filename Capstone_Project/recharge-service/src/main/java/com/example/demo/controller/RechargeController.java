package com.example.demo.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import com.example.demo.dto.RechargeRequest;
import com.example.demo.dto.RechargeResponse;
import com.example.demo.service.RechargeService;

import jakarta.validation.Valid;

import java.util.List;

@RestController
@RequestMapping("/recharges")
public class RechargeController {

    private final RechargeService rechargeService;

    public RechargeController(RechargeService rechargeService) {
        this.rechargeService = rechargeService;
    }

    // Create a new recharge - authenticated users allowed (can restrict further as needed)
    @PostMapping
    public ResponseEntity<RechargeResponse> createRecharge(@RequestBody @Valid RechargeRequest request) {
        RechargeResponse response = rechargeService.createRecharge(request);
        return ResponseEntity.ok(response);
    }

    // Only ADMIN can get all recharges
    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping
    public ResponseEntity<List<Object>> getAll(@RequestParam String role) {
        List<Object> allRecharges = rechargeService.getAllRecharges(role);
        return ResponseEntity.ok(allRecharges);
    }

    // Get recharge by ID - accessible to authenticated users (could protect further if needed)
    @GetMapping("/{id}")
    public ResponseEntity<RechargeResponse> getRechargeById(@PathVariable Long id) {
        RechargeResponse response = rechargeService.getRechargeById(id);
        return ResponseEntity.ok(response);
    }

    // Get recharge history by user ID - authenticated users; add role restrictions if needed
    @GetMapping("/user/{userId}")
    public ResponseEntity<List<RechargeResponse>> getRechargesByUser(@PathVariable Long userId) {
        List<RechargeResponse> responses = rechargeService.getRechargesByUserId(userId);
        return ResponseEntity.ok(responses);
    }

    // Get recharge history by plan ID
    @GetMapping("/plan/{planId}")
    public ResponseEntity<List<RechargeResponse>> getRechargesByPlan(@PathVariable Long planId) {
        List<RechargeResponse> responses = rechargeService.getRechargesByPlanId(planId);
        return ResponseEntity.ok(responses);
    }
}
