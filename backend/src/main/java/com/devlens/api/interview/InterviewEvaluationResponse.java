package com.devlens.api.interview;

import lombok.Data;
import java.util.List;

@Data
public class InterviewEvaluationResponse {
    private int overallScore;
    private List<FeedbackItem> feedback;

    @Data
    public static class FeedbackItem {
        private String question;
        private int score;
        private String feedback;
    }
}
