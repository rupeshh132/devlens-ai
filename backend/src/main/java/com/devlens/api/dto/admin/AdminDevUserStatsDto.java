package com.devlens.api.dto.admin;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AdminDevUserStatsDto {
    private long totalUsers;
    private long activeUsers;
    private long suspendedUsers;
    private long adminUsers;
    private long totalRepositories;
    private long totalScans;
}
