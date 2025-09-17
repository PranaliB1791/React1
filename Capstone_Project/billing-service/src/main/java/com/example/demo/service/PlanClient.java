package com.example.demo.service;

import com.example.demo.dto.PlanResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.ResourceAccessException;

@Service
public class PlanClient {

    @Autowired
    private RestTemplate restTemplate;

    public PlanResponse getPlanById(Long planId) {
        String url = "http://plan-service/plans/" + planId; // Note: use Eureka service ID "plan-service"
        try {
            return restTemplate.getForObject(url, PlanResponse.class);
        } catch (HttpClientErrorException.NotFound ex) {
            System.out.println("Plan not found for id: " + planId);
            return null;
        } catch (ResourceAccessException ex) {
            System.err.println("Plan service inaccessible: " + ex.getMessage());
            throw new RuntimeException("Failed to fetch plan details", ex);
        }
    }
}
