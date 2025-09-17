package com.example.demo.client;

import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;
import java.util.Map;

@Component
public class PlanClient {

    private final RestTemplate restTemplate;

    public PlanClient(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    // Change URL to use Eureka service name "plan-service"
    public Map<String, Object> getPlanById(Long planId) {
        String url = "http://plan-service/plans/" + planId;
        return restTemplate.getForObject(url, Map.class);
    }
}
