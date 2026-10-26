package com.devlens.api.dto.admin;

import com.devlens.api.entity.lms.EnrollmentStatus;
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
public class AdminDevEnrollmentSummaryDto {
    private UUID id;
    private UUID courseId;
    private String courseTitle;
    private ZonedDateTime enrolledAt;
    private EnrollmentStatus status;
}
