package com.devlens.learn.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PromoValidateResponseDto {
    private boolean valid;
    private String code;
    private BigDecimal discountPercentage;
    private BigDecimal discountAmount;
    private BigDecimal discountedAmount;
    private String message;
}
