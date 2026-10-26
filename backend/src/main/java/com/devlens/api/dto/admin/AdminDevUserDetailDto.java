package com.devlens.api.dto.admin;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AdminDevUserDetailDto {
    private AdminDevUserDto user;
    private List<AdminDevRepoSummaryDto> repositories;
    private List<AdminDevScanSummaryDto> recentScans;
    private List<AdminDevEnrollmentSummaryDto> enrollments;
}
