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
public class AdminTopicDto {
    private UUID id;
    private UUID chapterId;
    private String title;
    private String description;
    private Integer orderIndex;
    private Boolean isActive;
}
