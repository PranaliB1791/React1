package com.example.demo.service;

import com.example.demo.dto.UsageResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.ResourceAccessException;

import java.util.Arrays;
import java.util.List;

@Service
public class UsageClient {

    @Autowired
    private RestTemplate restTemplate;

    public List<UsageResponse> getUsageForUser(Long userId) {
        String url = "http://usage-service/usages/user/" + userId; // Use Eureka service ID "usage-service"
        try {
            UsageResponse[] arr = restTemplate.getForObject(url, UsageResponse[].class);
            if (arr == null) {
                return List.of();
            }
            return Arrays.asList(arr);
        } catch (HttpClientErrorException.NotFound ex) {
            System.out.println("Usage data not found for user: " + userId);
            return List.of();
        } catch (ResourceAccessException ex) {
            System.err.println("Usage service inaccessible: " + ex.getMessage());
            throw new RuntimeException("Failed to fetch usage data", ex);
        }
    }
}
