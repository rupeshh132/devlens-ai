package com.devlens.learn.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AdminSubscriptionUpdateDto {
    @NotBlank(message = "Plan cannot be blank")
    private String plan; // FREE, PRO, UNLIMITED

    private Integer durationDays; // e.g. 30, 90, 365
    private String expiryDate;    // e.g. ISO string "2026-12-31" or "2026-12-31T23:59:59"
    private String reason;        // admin note/memo
}
