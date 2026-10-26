package com.devlens.learn.controller;

import com.devlens.api.repository.AnalysisJobRepository;
import com.devlens.learn.repository.LearnAffiliateLedgerRepository;
import com.devlens.learn.repository.LearnTransactionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.math.BigDecimal;
import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/learn/admin/dashboard")
@RequiredArgsConstructor
public class LearnAdminDashboardController {

    private final LearnTransactionRepository transactionRepository;
    private final LearnAffiliateLedgerRepository ledgerRepository;
    private final AnalysisJobRepository analysisJobRepository;

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/metrics")
    public ResponseEntity<?> getDashboardMetrics() {
        
        // 1. Total Revenue / Sales
        Long totalSales = transactionRepository.getTotalSales();
        if (totalSales == null) totalSales = 0L;

        // 2. Total Commission Distributed (LTV metric part)
        BigDecimal totalCommission = ledgerRepository.getTotalCommission();
        if (totalCommission == null) totalCommission = BigDecimal.ZERO;

        // 3. API Burn Rate (Cost estimation for last 24 hours)
        Instant yesterday = Instant.now().minus(24, ChronoUnit.HOURS);
        long aiJobsLast24h = analysisJobRepository.countByCreatedAtAfter(yesterday);
        
        // Assuming average $0.005 per analysis job for Groq/Gemini context
        double estimatedBurnRate = aiJobsLast24h * 0.005;

        return ResponseEntity.ok(Map.of(
            "totalSales", totalSales,
            "totalCommissionPaid", totalCommission,
            "netRevenue", new BigDecimal(totalSales).subtract(totalCommission),
            "aiJobsLast24h", aiJobsLast24h,
            "estimatedApiBurnRateUsd", estimatedBurnRate
        ));
    }
}
