package com.devlens.learn.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Map;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AdminSettingsUpdateDto {
    private Integer freeDoubtsDailyLimit;
    private Integer proDoubtsDailyLimit;
    private Boolean aiEmergencyKillswitch;
    private Integer dailyXpCap;
    private Boolean maintenanceMode;
    private Map<String, String> additionalSettings;
}
