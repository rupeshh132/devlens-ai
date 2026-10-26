package com.devlens.learn.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.Map;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AdminAiStatsDto {
    private long totalQueries;
    private long todayQueries;
    private long totalPromptTokens;
    private long totalCompletionTokens;
    private long totalTokens;
    private double totalCostUsd;
    private double totalCostInr;
    private double avgLatencyMs;
    private double successRatePercent;
    private boolean killswitchActive;
    private int freeDoubtsDailyLimit;
    private int proDoubtsDailyLimit;
    private List<Map<String, Object>> topTopics;
    private List<Map<String, Object>> modelBreakdown;
    private List<String> availableTopics;
}
