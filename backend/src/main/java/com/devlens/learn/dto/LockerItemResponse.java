package com.devlens.learn.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;
import java.util.UUID;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class LockerItemResponse {
    private UUID id;
    private String type; // NOTE, QUESTION, FORMULA
    private String title;
    private String subtitle;
    private String content;
    private List<String> tags;
    private String personalNote;
    private Map<String, Object> meta;
    private LocalDateTime savedAt;
}
