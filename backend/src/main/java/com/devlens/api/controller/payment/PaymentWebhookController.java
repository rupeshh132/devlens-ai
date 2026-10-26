package com.devlens.api.controller.payment;

import com.devlens.api.service.payment.PaymentService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/webhooks")
@RequiredArgsConstructor
@Slf4j
public class PaymentWebhookController {

    private final PaymentService paymentService;

    @PostMapping("/razorpay")
    public ResponseEntity<String> handleRazorpayWebhook(
            @RequestBody String payload,
            @RequestHeader("X-Razorpay-Signature") String signature) {
        
        log.info("Received Razorpay Webhook");
        try {
            paymentService.handleWebhook(payload, signature);
            return ResponseEntity.ok("Webhook processed successfully");
        } catch (Exception e) {
            log.error("Failed to process Razorpay webhook", e);
            return ResponseEntity.badRequest().body("Webhook processing failed");
        }
    }
}
