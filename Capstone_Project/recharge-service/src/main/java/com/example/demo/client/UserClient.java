package com.example.demo.client;

import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;
import java.util.Map;

@Component
public class UserClient {

    private final RestTemplate restTemplate;

    public UserClient(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    // Change URL to use Eureka service name "user-service"
    public Map<String, Object> getUserById(Long userId) {
        String url = "http://user-service/users/" + userId;
        return restTemplate.getForObject(url, Map.class);
    }
}
