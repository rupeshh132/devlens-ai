package com.devlens.learn.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AdminQuestionDto {
    private UUID id;
    private UUID topicId;
    private String topicTitle;
    private UUID chapterId;
    private String chapterTitle;
    private UUID subjectId;
    private String subjectName;
    private UUID examTypeId;
    private String examName;

    private String questionText;
    private String optionA;
    private String optionB;
    private String optionC;
    private String optionD;
    private String correctAnswer;
    private String explanation;
    private String difficulty;
    private String sourceYear;
    private boolean isVerified;
    private String createdAt;
}
