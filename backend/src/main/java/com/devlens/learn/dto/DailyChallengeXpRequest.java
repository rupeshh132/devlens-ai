package com.devlens.learn.dto;

import lombok.Data;

@Data
public class DailyChallengeXpRequest {
    private String questionId;
    private String subject;
    private String questionTitle;
    private boolean isCorrect;
    private String selectedOption;
}
