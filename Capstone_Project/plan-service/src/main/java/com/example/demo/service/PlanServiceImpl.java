package com.example.demo.service;

import org.springframework.stereotype.Service;

import com.example.demo.entity.Plan;
import com.example.demo.repository.PlanRepository;

import java.util.List;

import java.util.Optional;

@Service
public class PlanServiceImpl implements PlanService {

	private final PlanRepository planRepository;

	public PlanServiceImpl(PlanRepository planRepository) {
		this.planRepository = planRepository;
	}

	@Override
	public Plan createPlan(Plan plan) {
		return planRepository.save(plan);
	}

	@Override
	public Plan getPlanById(Long id) {
		Optional<Plan> optionalPlan = planRepository.findById(id);
		if (optionalPlan.isPresent()) {
			return optionalPlan.get();
		} else {
			throw new RuntimeException("Plan not found with id: " + id);
		}
	}

	@Override
	public List<Plan> getAllPlans() {
		return planRepository.findAll();
	}

	@Override
	public Plan updatePlan(Long id, Plan planDetails) {
		Plan existingPlan = getPlanById(id);
		existingPlan.setPlanName(planDetails.getPlanName());
		existingPlan.setPrice(planDetails.getPrice());
		existingPlan.setValidityInDays(planDetails.getValidityInDays());
		existingPlan.setDataLimit(planDetails.getDataLimit());
		existingPlan.setTalktime(planDetails.getTalktime());
		existingPlan.setDescription(planDetails.getDescription());
		return planRepository.save(existingPlan);
	}

	@Override
	public void deletePlan(Long id) {
		planRepository.deleteById(id);
	}
}
