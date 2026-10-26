package com.devlens.learn.dto;

import lombok.Data;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;

@Data
public class StudySessionRequest {
    @Min(1)
    @Max(120)
    private Integer durationMinutes;
    
    @NotBlank
    private String sessionType; // 'FOCUS_TIMER' or 'PASSIVE'
    
    private boolean wasStrict = true; // Indicates if they kept focus without switching tabs
}
