package com.devlens.learn.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.UUID;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AdminPromoCodeDto {
    private UUID id;
    private String code;
    private UUID affiliateUserId;
    private BigDecimal discountPercentage;
    private BigDecimal commissionPercentage;
    private Boolean isActive;
    private Integer maxRedemptions;
    private Integer currentRedemptions;
    private LocalDateTime expiryDate;
    private String description;
    private String partnerName;
    private String partnerEmail;
    private String partnerPayoutUpi;
    private LocalDateTime createdAt;
}
