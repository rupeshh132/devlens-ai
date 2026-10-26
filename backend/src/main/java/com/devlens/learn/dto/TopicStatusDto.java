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
public class TopicStatusDto {
    private UUID subjectId;
    private String subjectName;
    private UUID chapterId;
    private String chapterTitle;
    private UUID topicId;
    private String topicTitle;
    private boolean hasVideo;
    private boolean hasPdf;
    private boolean hasQuiz;
}
