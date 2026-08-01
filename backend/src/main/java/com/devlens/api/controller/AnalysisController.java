package com.devlens.api.controller;

import com.devlens.api.dto.AnalysisRequest;
import com.devlens.api.dto.AnalysisResponse;
import com.devlens.api.entity.AnalysisJob;
import com.devlens.api.exception.ResourceNotFoundException;
import com.devlens.api.mapper.AnalysisMapper;
import com.devlens.api.security.UserPrincipal;
import com.devlens.api.service.AnalysisJobService;
import com.devlens.api.service.RepositoryService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/v1")
@RequiredArgsConstructor
public class AnalysisController {

    private final AnalysisJobService analysisJobService;
    private final RepositoryService repositoryService;
    private final AnalysisMapper analysisMapper;

    @PostMapping("/analyses/start")
    public ResponseEntity<AnalysisResponse> startAnalysis(
            @AuthenticationPrincipal UserPrincipal userPrincipal,
            @Valid @RequestBody AnalysisRequest request) {
        
        // Verify user owns repository
        repositoryService.getRepository(userPrincipal.getId(), request.getRepositoryId());
        
        AnalysisJob job = analysisJobService.queueJob(request.getRepositoryId());
        return new ResponseEntity<>(analysisMapper.toResponse(job), HttpStatus.CREATED);
    }

    @GetMapping("/analyses/{jobId}/status")
    public ResponseEntity<AnalysisResponse> getStatus(
            @AuthenticationPrincipal UserPrincipal userPrincipal,
            @PathVariable UUID jobId) {
        
        AnalysisJob job = getOwnedJob(userPrincipal.getId(), jobId);
        return ResponseEntity.ok(analysisMapper.toResponse(job));
    }

    @GetMapping("/analyses/{jobId}/result")
    public ResponseEntity<AnalysisResponse> getResult(
            @AuthenticationPrincipal UserPrincipal userPrincipal,
            @PathVariable UUID jobId) {
        
        // For now, result is just the response. In the future, this might return detailed findings.
        AnalysisJob job = getOwnedJob(userPrincipal.getId(), jobId);
        return ResponseEntity.ok(analysisMapper.toResponse(job));
    }

    @GetMapping("/repositories/{repositoryId}/analyses")
    public ResponseEntity<List<AnalysisResponse>> listAnalyses(
            @AuthenticationPrincipal UserPrincipal userPrincipal,
            @PathVariable UUID repositoryId) {
        
        // Verify user owns repository
        repositoryService.getRepository(userPrincipal.getId(), repositoryId);
        
        List<AnalysisJob> jobs = analysisJobService.getJobsForRepository(repositoryId);
        List<AnalysisResponse> responses = jobs.stream()
                .map(analysisMapper::toResponse)
                .collect(Collectors.toList());
                
        return ResponseEntity.ok(responses);
    }

    @PostMapping("/analyses/{jobId}/cancel")
    public ResponseEntity<Void> cancelAnalysis(
            @AuthenticationPrincipal UserPrincipal userPrincipal,
            @PathVariable UUID jobId) {
        
        getOwnedJob(userPrincipal.getId(), jobId);
        analysisJobService.cancelJob(jobId);
        return ResponseEntity.ok().build();
    }
    
    private AnalysisJob getOwnedJob(UUID userId, UUID jobId) {
        AnalysisJob job = analysisJobService.getJobStatus(jobId);
        if (job == null) {
            throw new ResourceNotFoundException("Analysis job not found");
        }
        if (!job.getRepository().getUser().getId().equals(userId)) {
            throw new AccessDeniedException("You do not have access to this analysis job");
        }
        return job;
    }
}
