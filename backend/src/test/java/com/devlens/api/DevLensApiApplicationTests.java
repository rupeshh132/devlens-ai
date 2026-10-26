package com.devlens.api;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

@SpringBootTest
@ActiveProfiles("test")
class DevLensApiApplicationTests {

    @org.springframework.boot.test.mock.mockito.MockBean
    private org.springframework.mail.javamail.JavaMailSender javaMailSender;

    @Test
    void contextLoads() {
    }
}
