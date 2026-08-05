package com.devlens.api.interview;

import lombok.Builder;
import lombok.Data;
import java.time.LocalDateTime;
import java.util.UUID;

@Data
@Builder
public class InterviewSessionResponse {
    private UUID id;
    private String targetRole;
    private String sessionData;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    public static InterviewSessionResponse fromEntity(InterviewSession session) {
        return InterviewSessionResponse.builder()
                .id(session.getId())
                .targetRole(session.getTargetRole())
                .sessionData(session.getSessionData())
                .createdAt(session.getCreatedAt())
                .updatedAt(session.getUpdatedAt())
                .build();
    }
}
