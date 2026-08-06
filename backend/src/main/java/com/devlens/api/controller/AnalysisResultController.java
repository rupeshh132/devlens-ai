package com.devlens.api.controller;

import com.devlens.api.dto.AnalysisReportResponse;
import com.devlens.api.entity.AnalysisJob;
import com.devlens.api.entity.Vulnerability;
import com.devlens.api.exception.ResourceNotFoundException;
import com.devlens.api.repository.AnalysisJobRepository;
import com.devlens.api.repository.VulnerabilityRepository;
import com.devlens.api.security.UserPrincipal;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/v1/analyses")
@RequiredArgsConstructor
public class AnalysisResultController {

    private final AnalysisJobRepository jobRepository;
    private final VulnerabilityRepository vulnerabilityRepository;

    @GetMapping("/{jobId}/detailed-report")
    public ResponseEntity<AnalysisReportResponse> getReport(
            @AuthenticationPrincipal UserPrincipal userPrincipal,
            @PathVariable UUID jobId) {

        AnalysisJob job = jobRepository.findById(jobId)
                .orElseThrow(() -> new ResourceNotFoundException("Job not found"));

        // Basic authorization check (ensure repo belongs to user)
        if (!job.getRepository().getUser().getId().equals(userPrincipal.getId())) {
            throw new ResourceNotFoundException("Job not found"); // mask 403 as 404 for security
        }

        List<Vulnerability> vulnerabilities = vulnerabilityRepository.findByAnalysisJobId(jobId);

        AnalysisReportResponse response = AnalysisReportResponse.builder()
                .jobId(job.getId())
                .score(job.getScore())
                .summary(job.getSummary())
                .vulnerabilities(vulnerabilities.stream().map(v ->
                        AnalysisReportResponse.VulnerabilityDto.builder()
                                .id(v.getId())
                                .filePath(v.getFilePath())
                                .lineNumber(v.getLineNumber())
                                .severity(v.getSeverity())
                                .description(v.getDescription())
                                .suggestedFix(v.getSuggestedFix())
                                .build()
                ).collect(Collectors.toList()))
                .build();

        return ResponseEntity.ok(response);
    }
}
