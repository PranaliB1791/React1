package com.example.demo;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest(properties = {
    "spring.security.oauth2.resourceserver.jwt.secret=your-256-bit-secret-key-your-256-bit-secret-key"
})
class AuthServiceApplicationTests {

    @Test
    void contextLoads() {
    }
}
