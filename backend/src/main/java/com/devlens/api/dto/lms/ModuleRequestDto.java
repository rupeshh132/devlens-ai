package com.devlens.api.dto.lms;

import lombok.Data;
import java.util.UUID;

@Data
public class ModuleRequestDto {
    private UUID courseId;
    private String title;
    private Integer orderIndex;
    private String contentUrl;
    private String textContent;
    private String type; // VIDEO, LESSON, MOCK_TEST, PROJECT
}
