package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Recharge;

@Repository
public interface RechargeRepository extends JpaRepository<Recharge, Long> {
	List<Recharge> findByUserId(Long userId);

	List<Recharge> findByPlanId(Long planId);

}
