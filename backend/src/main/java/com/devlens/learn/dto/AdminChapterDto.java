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
public class AdminChapterDto {
    private UUID id;
    private UUID subjectId;
    private String title;
    private Integer orderIndex;
    private Boolean isActive;
}
