package com.devlens.api.dto.lms;

import com.devlens.api.entity.lms.ProgressStatus;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SubmissionAdminResponseDto {
    private UUID id;
    
    // User Info
    private UUID userId;
    private String userName;
    private String userEmail;
    
    // Module & Course Info
    private UUID moduleId;
    private String moduleTitle;
    private UUID courseId;
    private String courseTitle;
    
    // Submission Details
    private ProgressStatus status;
    private String projectRepoUrl;
    private String projectDeployUrl;
    private String rejectionReason;

    // Backward-compatible nested objects for existing frontend callers
    private UserNestedDto user;
    private ModuleNestedDto module;

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class UserNestedDto {
        private UUID id;
        private String email;
        private String fullName;
    }

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class ModuleNestedDto {
        private UUID id;
        private String title;
        private String courseTitle;
    }
}
