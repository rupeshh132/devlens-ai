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
public class AdminAffiliateStatsDto {
    private long totalPromos;
    private long activePromos;
    private long totalRedemptions;
    private BigDecimal totalSalesDriven;
    private BigDecimal totalGrossCommission;
    private BigDecimal pendingPayoutAmount;
    private long pendingPayoutsCount;
    private BigDecimal settledPayoutAmount;
}
