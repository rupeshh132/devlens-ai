package com.devlens.api.dto.payment;

import lombok.Data;

@Data
public class VerifyPaymentRequestDto {
    private String razorpayOrderId;
    private String razorpayPaymentId;
    private String razorpaySignature;
}
