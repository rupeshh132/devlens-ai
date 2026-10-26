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
public class AdminSettlePayoutRequestDto {

    @NotBlank(message = "Payout UTR or reference number is required")
    private String payoutReference;

    private String payoutNotes;
}
