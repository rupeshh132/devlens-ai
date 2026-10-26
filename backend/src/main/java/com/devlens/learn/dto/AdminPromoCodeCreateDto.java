package com.devlens.learn.dto;

import jakarta.validation.constraints.DecimalMax;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AdminPromoCodeCreateDto {

    @NotBlank(message = "Coupon code cannot be empty")
    private String code;

    @NotNull(message = "Discount percentage is required")
    @DecimalMin(value = "0.0", message = "Discount cannot be negative")
    @DecimalMax(value = "100.0", message = "Discount cannot exceed 100%")
    private BigDecimal discountPercentage;

    @DecimalMin(value = "0.0", message = "Commission cannot be negative")
    @DecimalMax(value = "50.0", message = "Commission cannot exceed 50%")
    private BigDecimal commissionPercentage;

    private Integer maxRedemptions;

    private LocalDateTime expiryDate;

    private String description;

    private String partnerName;

    private String partnerEmail;

    private String partnerPayoutUpi;
}
