package com.example.demo.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.client.PlanClient;
import com.example.demo.client.UserClient;
import com.example.demo.dto.PlanDto;
import com.example.demo.dto.RechargeRequest;
import com.example.demo.dto.RechargeResponse;
import com.example.demo.dto.UserDto;
import com.example.demo.entity.Recharge;
import com.example.demo.exception.RechargeNotFoundException;
import com.example.demo.repository.RechargeRepository;

@Service
public class RechargeServiceImpl implements RechargeService {

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private RechargeRepository rechargeRepository;

    @Autowired
    private PlanClient planClient;

    @Autowired
    private UserClient userClient;

    @Override
    public RechargeResponse createRecharge(RechargeRequest request) {
        // Validate User existence
        Map<String, Object> userMap = userClient.getUserById(request.getUserId());
        if (userMap == null) {
            throw new RechargeNotFoundException("Invalid User ID: " + request.getUserId());
        }
        // Validate Plan existence
        Map<String, Object> planMap = planClient.getPlanById(request.getPlanId());
        if (planMap == null) {
            throw new RechargeNotFoundException("Invalid Plan ID: " + request.getPlanId());
        }

        UserDto user = modelMapper.map(userMap, UserDto.class);
        PlanDto plan = modelMapper.map(planMap, PlanDto.class);

        Recharge recharge = new Recharge();
        recharge.setUserId(request.getUserId());
        recharge.setPlanId(request.getPlanId());
        recharge.setRechargeDate(request.getRechargeDate() != null ? request.getRechargeDate().atStartOfDay()
                : LocalDateTime.now());
        recharge.setAmount(plan.getPrice());

        Recharge saved = rechargeRepository.save(recharge);

        return new RechargeResponse(saved.getId(), saved.getUserId(), saved.getPlanId(), saved.getRechargeDate(), user, plan);
    }

    @Override
    public RechargeResponse getRechargeById(Long id) {
        Recharge recharge = rechargeRepository.findById(id)
                .orElseThrow(() -> new RechargeNotFoundException("Recharge not found with ID: " + id));

        Map<String, Object> userMap = userClient.getUserById(recharge.getUserId());
        Map<String, Object> planMap = planClient.getPlanById(recharge.getPlanId());

        UserDto user = modelMapper.map(userMap, UserDto.class);
        PlanDto plan = modelMapper.map(planMap, PlanDto.class);

        return new RechargeResponse(recharge.getId(), recharge.getUserId(), recharge.getPlanId(), recharge.getRechargeDate(),
                user, plan);
    }

    @Override
    public List<RechargeResponse> getRechargesByUserId(Long userId) {
        List<Recharge> rechargeList = rechargeRepository.findByUserId(userId);
        return rechargeList.stream().map(r -> {
            Map<String, Object> userMap = userClient.getUserById(r.getUserId());
            Map<String, Object> planMap = planClient.getPlanById(r.getPlanId());

            UserDto user = modelMapper.map(userMap, UserDto.class);
            PlanDto plan = modelMapper.map(planMap, PlanDto.class);

            return new RechargeResponse(r.getId(), r.getUserId(), r.getPlanId(), r.getRechargeDate(), user, plan);
        }).collect(Collectors.toList());
    }

    @Override
    public List<RechargeResponse> getRechargesByPlanId(Long planId) {
        List<Recharge> rechargeList = rechargeRepository.findByPlanId(planId);
        return rechargeList.stream().map(r -> {
            Map<String, Object> userMap = userClient.getUserById(r.getUserId());
            Map<String, Object> planMap = planClient.getPlanById(r.getPlanId());

            UserDto user = modelMapper.map(userMap, UserDto.class);
            PlanDto plan = modelMapper.map(planMap, PlanDto.class);

            return new RechargeResponse(r.getId(), r.getUserId(), r.getPlanId(), r.getRechargeDate(), user, plan);
        }).collect(Collectors.toList());
    }

    @Override
    public List<Object> getAllRecharges(String role) {
        return rechargeRepository.findAll().stream().map(recharge -> {
            if ("ADMIN".equalsIgnoreCase(role)) {
                // Admin gets detailed info
                RechargeResponse adminDto = modelMapper.map(recharge, RechargeResponse.class);
                adminDto.setUser(modelMapper.map(userClient.getUserById(recharge.getUserId()), UserDto.class));
                adminDto.setPlan(modelMapper.map(planClient.getPlanById(recharge.getPlanId()), PlanDto.class));
                return adminDto;
            } else {
                // Customers get limited info
                PlanDto plan = modelMapper.map(planClient.getPlanById(recharge.getPlanId()), PlanDto.class);
                return new com.example.demo.dto.RechargeResponseForCustomer(
                        plan.getPlanName(),
                        plan.getPrice(),
                        recharge.getRechargeDate());
            }
        }).collect(Collectors.toList());
    }
}
