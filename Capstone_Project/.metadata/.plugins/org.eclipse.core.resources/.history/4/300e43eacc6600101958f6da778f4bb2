package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.entity.Bill;
import java.util.List;

public interface BillRepository extends JpaRepository<Bill, Long> {
	List<Bill> findByUserId(Long userId);
}
