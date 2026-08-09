package com.devlens.api.interview;

import lombok.Data;
import java.util.List;

@Data
public class InterviewEvaluationRequest {
    private List<AnswerItem> answers;

    @Data
    public static class AnswerItem {
        private String question;
        private String expectedAnswer;
        private String userAnswer;
    }
}
