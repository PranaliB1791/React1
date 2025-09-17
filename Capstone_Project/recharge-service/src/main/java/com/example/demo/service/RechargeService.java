package com.example.demo.service;

import com.example.demo.dto.RechargeRequest;
import com.example.demo.dto.RechargeResponse;
import com.example.demo.entity.Recharge;

import java.util.List;

public interface RechargeService {
	RechargeResponse createRecharge(RechargeRequest request); // formerly performRecharge

	List<Object> getAllRecharges(String role);

	RechargeResponse getRechargeById(Long id); // ✅ add this

	List<RechargeResponse> getRechargesByUserId(Long userId);

	List<RechargeResponse> getRechargesByPlanId(Long planId);

}
