package com.devlens.api.dto.billing;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ManualVerifyRequestDto {
    private String vertical;          // "LMS" or "LEARN"
    private String razorpayPaymentId; // Optional custom ID or offline reference
    private String adminNotes;        // Audit notes / reason for manual approval
}
