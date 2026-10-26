package com.devlens.learn.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AdminQuestionStatsDto {
    private long totalQuestions;
    private long easyCount;
    private long mediumCount;
    private long hardCount;
    private long totalTopicsCovered;
}
