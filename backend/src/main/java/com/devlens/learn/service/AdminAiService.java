package com.devlens.learn.service;

import com.devlens.api.exception.ResourceNotFoundException;
import com.devlens.learn.dto.AdminAiStatsDto;
import com.devlens.learn.dto.AdminSettingsUpdateDto;
import com.devlens.learn.entity.LearnAiDoubt;
import com.devlens.learn.repository.LearnAiDoubtRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.List;
import java.util.Map;
import java.util.UUID;

@Slf4j
@Service
@RequiredArgsConstructor
public class AdminAiService {

    private final LearnAiDoubtRepository learnAiDoubtRepository;
    private final SystemSettingsService systemSettingsService;

    @Transactional(readOnly = true)
    public AdminAiStatsDto getTelemetryStats() {
        long totalQueries = learnAiDoubtRepository.count();
        long todayQueries = learnAiDoubtRepository.countByCreatedAtAfter(LocalDate.now().atStartOfDay());
        long promptTokens = learnAiDoubtRepository.sumPromptTokens() != null ? learnAiDoubtRepository.sumPromptTokens() : 0L;
        long completionTokens = learnAiDoubtRepository.sumCompletionTokens() != null ? learnAiDoubtRepository.sumCompletionTokens() : 0L;
        long totalTokens = learnAiDoubtRepository.sumTotalTokens() != null ? learnAiDoubtRepository.sumTotalTokens() : 0L;
        double costUsd = learnAiDoubtRepository.sumEstimatedCostUsd() != null ? learnAiDoubtRepository.sumEstimatedCostUsd().doubleValue() : 0.0;
        double costInr = learnAiDoubtRepository.sumEstimatedCostInr() != null ? learnAiDoubtRepository.sumEstimatedCostInr().doubleValue() : 0.0;
        double avgLatency = learnAiDoubtRepository.averageLatencyMs() != null ? learnAiDoubtRepository.averageLatencyMs() : 0.0;
        long successCount = learnAiDoubtRepository.countByStatus("SUCCESS");
        double successRate = totalQueries > 0 ? ((double) successCount / totalQueries) * 100.0 : 100.0;

        boolean killswitch = systemSettingsService.getBooleanSetting("ai_emergency_killswitch", false);
        int freeLimit = systemSettingsService.getIntSetting("free_doubts_daily_limit", 5);
        int proLimit = systemSettingsService.getIntSetting("pro_doubts_daily_limit", 100);

        List<Map<String, Object>> topTopics = learnAiDoubtRepository.getTopTopics().stream()
                .map(p -> Map.<String, Object>of("topic", p.getTopic() != null ? p.getTopic() : "General", "count", p.getCount()))
                .toList();

        List<Map<String, Object>> modelBreakdown = learnAiDoubtRepository.getModelBreakdown().stream()
                .map(p -> Map.<String, Object>of("model", p.getModel() != null ? p.getModel() : "Default", "count", p.getCount()))
                .toList();

        return AdminAiStatsDto.builder()
                .totalQueries(totalQueries)
                .todayQueries(todayQueries)
                .totalPromptTokens(promptTokens)
                .totalCompletionTokens(completionTokens)
                .totalTokens(totalTokens)
                .totalCostUsd(costUsd)
                .totalCostInr(costInr)
                .avgLatencyMs(avgLatency)
                .successRatePercent(Math.round(successRate * 10.0) / 10.0)
                .killswitchActive(killswitch)
                .freeDoubtsDailyLimit(freeLimit)
                .proDoubtsDailyLimit(proLimit)
                .topTopics(topTopics)
                .modelBreakdown(modelBreakdown)
                .availableTopics(learnAiDoubtRepository.findDistinctTopics())
                .build();
    }

    @Transactional(readOnly = true)
    public Page<LearnAiDoubt> getDoubts(String query, String topic, Boolean isFlagged, String status, Pageable pageable) {
        String cleanQuery = (query != null && !query.trim().isEmpty()) ? query.trim() : null;
        String cleanTopic = (topic != null && !topic.trim().isEmpty() && !"ALL".equalsIgnoreCase(topic.trim())) ? topic.trim() : null;
        String cleanStatus = (status != null && !status.trim().isEmpty() && !"ALL".equalsIgnoreCase(status.trim())) ? status.trim() : null;
        return learnAiDoubtRepository.searchDoubts(cleanQuery, cleanTopic, isFlagged, cleanStatus, pageable);
    }

    @Transactional
    public LearnAiDoubt flagDoubt(UUID doubtId, Boolean isFlagged, String flagReason) {
        LearnAiDoubt doubt = learnAiDoubtRepository.findById(doubtId)
                .orElseThrow(() -> new ResourceNotFoundException("AI Doubt not found with id: " + doubtId));

        doubt.setIsFlagged(isFlagged != null ? isFlagged : true);
        if (flagReason != null) {
            doubt.setFlagReason(flagReason);
        }
        return learnAiDoubtRepository.save(doubt);
    }

    @Transactional
    public boolean toggleKillswitch(boolean active) {
        systemSettingsService.updateSetting("ai_emergency_killswitch", String.valueOf(active));
        log.warn("ADMIN ACTION: AI Emergency Killswitch toggled to [{}]", active);
        return active;
    }

    @Transactional(readOnly = true)
    public Map<String, String> getSystemSettings() {
        return systemSettingsService.getAllSettings();
    }

    @Transactional
    public Map<String, String> updateSystemSettings(AdminSettingsUpdateDto dto) {
        if (dto.getFreeDoubtsDailyLimit() != null) {
            systemSettingsService.updateSetting("free_doubts_daily_limit", String.valueOf(dto.getFreeDoubtsDailyLimit()));
        }
        if (dto.getProDoubtsDailyLimit() != null) {
            systemSettingsService.updateSetting("pro_doubts_daily_limit", String.valueOf(dto.getProDoubtsDailyLimit()));
        }
        if (dto.getAiEmergencyKillswitch() != null) {
            systemSettingsService.updateSetting("ai_emergency_killswitch", String.valueOf(dto.getAiEmergencyKillswitch()));
        }
        if (dto.getDailyXpCap() != null) {
            systemSettingsService.updateSetting("daily_xp_cap", String.valueOf(dto.getDailyXpCap()));
        }
        if (dto.getMaintenanceMode() != null) {
            systemSettingsService.updateSetting("maintenance_mode", String.valueOf(dto.getMaintenanceMode()));
        }
        if (dto.getAdditionalSettings() != null) {
            systemSettingsService.updateSettings(dto.getAdditionalSettings());
        }
        return systemSettingsService.getAllSettings();
    }
}
