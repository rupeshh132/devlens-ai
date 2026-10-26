package com.devlens.api.dto.lms;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.ZonedDateTime;
import java.util.UUID;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CourseAdminResponseDto {
    private UUID id;
    private String title;
    private String description;
    private Integer price;
    private Boolean isPublished;
    private ZonedDateTime createdAt;

    // Track curriculum module breakdown
    private long totalModules;
    private long lessonsCount;
    private long videosCount;
    private long projectsCount;
    private long mockTestsCount;

    // Track-level developer analytics
    private long enrolledCount;
    private long certificatesCount;
    private long pendingSubmissionsCount;
}

