package com.devlens.api.controller;

import com.devlens.api.dto.CreateRepositoryRequest;
import com.devlens.api.dto.RepositoryResponse;
import com.devlens.api.dto.UpdateRepositoryRequest;
import com.devlens.api.security.UserPrincipal;
import com.devlens.api.service.RepositoryService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/api/v1/repositories")
@RequiredArgsConstructor
public class RepositoryController {

    private final RepositoryService repositoryService;

    @PostMapping
    public ResponseEntity<RepositoryResponse> addRepository(
            @AuthenticationPrincipal UserPrincipal userPrincipal,
            @Valid @RequestBody CreateRepositoryRequest request) {
        
        RepositoryResponse response = repositoryService.addRepository(userPrincipal.getId(), request);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<Page<RepositoryResponse>> listRepositories(
            @AuthenticationPrincipal UserPrincipal userPrincipal,
            @RequestParam(required = false) String name,
            Pageable pageable) {
        
        Page<RepositoryResponse> response = repositoryService.listRepositories(userPrincipal.getId(), name, pageable);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/{repositoryId}")
    public ResponseEntity<RepositoryResponse> getRepository(
            @AuthenticationPrincipal UserPrincipal userPrincipal,
            @PathVariable UUID repositoryId) {
        
        RepositoryResponse response = repositoryService.getRepository(userPrincipal.getId(), repositoryId);
        return ResponseEntity.ok(response);
    }

    @PutMapping("/{repositoryId}")
    public ResponseEntity<RepositoryResponse> updateRepository(
            @AuthenticationPrincipal UserPrincipal userPrincipal,
            @PathVariable UUID repositoryId,
            @Valid @RequestBody UpdateRepositoryRequest request) {
        
        RepositoryResponse response = repositoryService.updateRepository(userPrincipal.getId(), repositoryId, request);
        return ResponseEntity.ok(response);
    }

    @DeleteMapping("/{repositoryId}")
    public ResponseEntity<Void> deleteRepository(
            @AuthenticationPrincipal UserPrincipal userPrincipal,
            @PathVariable UUID repositoryId) {
        
        repositoryService.deleteRepository(userPrincipal.getId(), repositoryId);
        return ResponseEntity.noContent().build();
    }

    @PostMapping("/{repositoryId}/sync")
    public ResponseEntity<RepositoryResponse> syncRepository(
            @AuthenticationPrincipal UserPrincipal userPrincipal,
            @PathVariable UUID repositoryId) {
        
        RepositoryResponse response = repositoryService.syncRepository(userPrincipal.getId(), repositoryId);
        return ResponseEntity.ok(response);
    }
}
