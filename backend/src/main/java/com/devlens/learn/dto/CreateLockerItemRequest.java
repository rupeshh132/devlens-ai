package com.devlens.learn.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

import java.util.List;
import java.util.Map;

@Data
public class CreateLockerItemRequest {
    private String type = "NOTE"; // NOTE, QUESTION, FORMULA

    @NotBlank(message = "Title is required")
    private String title;

    private String subtitle;

    @NotBlank(message = "Content is required")
    private String content;

    private List<String> tags;

    private String personalNote;

    private Map<String, Object> meta;
}
