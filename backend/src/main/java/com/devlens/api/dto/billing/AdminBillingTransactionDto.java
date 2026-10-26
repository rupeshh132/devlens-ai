package com.devlens.api.dto.billing;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AdminBillingTransactionDto {
    private UUID id;
    private String vertical;          // "LMS" or "LEARN"
    private UUID userId;
    private String userName;
    private String userEmail;
    private String itemName;          // Course Title or PrepLens Plan
    private Double amount;            // In INR
    private String status;            // SUCCESS, PENDING, FAILED
    private String razorpayOrderId;
    private String razorpayPaymentId;
    private String promoCode;
    private String createdAt;
    private String adminNotes;
    private UUID verifiedByAdminId;
    private String refundStatus;
}
