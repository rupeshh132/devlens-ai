package com.devlens.api.dto.billing;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AdminBillingStatsDto {
    private Double totalRevenue;
    private Double lmsRevenue;
    private Double learnRevenue;
    private Long totalTransactions;
    private Long successTransactions;
    private Long failedTransactions;
    private Long pendingTransactions;
    private Double successRate;
}
