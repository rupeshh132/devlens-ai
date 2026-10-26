package com.devlens.learn;

import com.devlens.api.DevLensApiApplication;
import com.devlens.learn.service.LearnPaymentService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.UUID;

@SpringBootTest(classes = DevLensApiApplication.class)
public class PaymentTest {

    @Autowired
    private LearnPaymentService paymentService;

    @Test
    public void testVerify() {
        try {
            paymentService.verifyPayment(UUID.randomUUID(), "order_mock_test123", "pay_mock_test123", "sig_mock");
            System.out.println("VERIFY SUCCESS");
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }
}
