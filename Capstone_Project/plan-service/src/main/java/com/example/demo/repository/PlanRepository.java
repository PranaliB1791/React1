package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.Plan;

import java.util.Optional;

public interface PlanRepository extends JpaRepository<Plan, Long> {
	Optional<Plan> findByPlanName(String planName);
}
