package com.devlens.api.dto.lms;

import lombok.Data;
import java.util.UUID;

@Data
public class CourseRequestDto {
    private String title;
    private String description;
    private Integer price;
    private Boolean isPublished;
}
