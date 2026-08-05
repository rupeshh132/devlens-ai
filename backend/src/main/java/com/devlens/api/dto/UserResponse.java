package com.devlens.api.dto;

import com.devlens.api.entity.UserRole;
import com.devlens.api.entity.UserStatus;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.UUID;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserResponse {

    private UUID id;
    private String email;
    private String firstName;
    private String lastName;
    private UserRole role;
    private UserStatus status;
    private Integer points;
    private String badges;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
