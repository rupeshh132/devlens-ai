package com.devlens.learn.controller;

import com.devlens.learn.security.LearnUserPrincipal;
import com.devlens.learn.service.LearnPaymentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping("/api/v1/learn/payments")
@RequiredArgsConstructor
public class LearnPaymentController {

    private final LearnPaymentService paymentService;

    @PreAuthorize("hasRole('LEARN_USER')")
    @PostMapping("/create-order")
    public ResponseEntity<?> createOrder(
            @AuthenticationPrincipal LearnUserPrincipal principal,
            @RequestBody Map<String, Object> request) {
        try {
            String planName = (String) request.get("planName");
            String billingCycle = (String) request.get("billingCycle");
            Integer amount = request.get("amount") != null ? ((Number) request.get("amount")).intValue() : null;
            String promoCode = (String) request.get("promoCode");
            
            return ResponseEntity.ok(paymentService.createSubscriptionOrder(principal.getId(), planName, billingCycle, amount, promoCode));
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(500).body(Map.of("error", e.getMessage() != null ? e.getMessage() : e.toString()));
        }
    }

    @PreAuthorize("hasRole('LEARN_USER')")
    @PostMapping("/verify")
    public ResponseEntity<?> verifyPayment(
            @AuthenticationPrincipal LearnUserPrincipal principal,
            @RequestBody Map<String, String> request) {
        try {
            String orderId = request.get("razorpay_order_id");
            String paymentId = request.get("razorpay_payment_id");
            String signature = request.get("razorpay_signature");
            
            boolean success = paymentService.verifyPayment(principal.getId(), orderId, paymentId, signature);
            if (success) {
                return ResponseEntity.ok().body(Map.of("message", "Payment verified and subscription activated"));
            } else {
                return ResponseEntity.badRequest().body(Map.of("error", "Payment verification failed"));
            }
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(500).body(Map.of("error", e.getMessage() != null ? e.getMessage() : e.toString()));
        }
    }

    @GetMapping("/validate-code")
    public ResponseEntity<?> validateCode(
            @AuthenticationPrincipal LearnUserPrincipal principal,
            @RequestParam("code") String code) {
        UUID userId = principal != null ? principal.getId() : null;
        return ResponseEntity.ok(paymentService.validateCode(userId, code));
    }
}
