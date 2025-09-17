package com.example.demo.service;

import java.util.List;

import com.example.demo.entity.Plan;

public interface PlanService {
	Plan createPlan(Plan plan);

	Plan getPlanById(Long id);

	List<Plan> getAllPlans();

	Plan updatePlan(Long id, Plan plan);

	void deletePlan(Long id);
}
