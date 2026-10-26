package com.devlens.api.controller.payment;

import com.devlens.api.dto.payment.CreateOrderRequestDto;
import com.devlens.api.dto.payment.VerifyPaymentRequestDto;
import com.devlens.api.security.UserPrincipal;
import com.devlens.api.service.payment.PaymentService;
import com.razorpay.RazorpayException;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/payments")
@RequiredArgsConstructor
public class PaymentController {

    private final PaymentService paymentService;

    @PostMapping("/create-order")
    public ResponseEntity<Map<String, String>> createOrder(
            @AuthenticationPrincipal UserPrincipal userPrincipal,
            @RequestBody CreateOrderRequestDto dto) {
        try {
            String orderId = paymentService.createOrder(userPrincipal.getId(), dto.getCourseId());
            return ResponseEntity.ok(Collections.singletonMap("orderId", orderId));
        } catch (RazorpayException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Collections.singletonMap("error", "Failed to create order with payment gateway"));
        } catch (IllegalStateException e) {
            return ResponseEntity.status(HttpStatus.CONFLICT)
                    .body(Collections.singletonMap("error", e.getMessage()));
        }
    }

    @PostMapping("/verify")
    public ResponseEntity<Map<String, String>> verifyPayment(@RequestBody VerifyPaymentRequestDto dto) {
        boolean isValid = paymentService.verifyPayment(
                dto.getRazorpayOrderId(),
                dto.getRazorpayPaymentId(),
                dto.getRazorpaySignature()
        );

        if (isValid) {
            return ResponseEntity.ok(Collections.singletonMap("status", "success"));
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(Collections.singletonMap("status", "verification_failed"));
        }
    }
}
