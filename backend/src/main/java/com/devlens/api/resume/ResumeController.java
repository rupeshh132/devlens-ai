package com.devlens.api.resume;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.UUID;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/resumes")
@RequiredArgsConstructor
public class ResumeController {

    private final ResumeService resumeService;

    @PostMapping
    public ResponseEntity<?> uploadResume(
            @RequestParam("file") MultipartFile file,
            Authentication authentication) {
        
        try {
            // In a real app, user ID is typically extracted from the JWT token via SecurityContext
            // For now, assume authentication.getName() returns the UUID string or we have a custom principal
            UUID userId = UUID.fromString(authentication.getName());
            
            Resume resume = resumeService.uploadAndParseResume(userId, file);
            return ResponseEntity.status(HttpStatus.CREATED).body(resume);
            
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(Map.of("error", e.getMessage()));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("error", "Failed to process resume"));
        }
    }

    @GetMapping("/me")
    public ResponseEntity<Resume> getMyLatestResume(Authentication authentication) {
        UUID userId = UUID.fromString(authentication.getName());
        Resume resume = resumeService.getLatestResume(userId);
        return ResponseEntity.ok(resume);
    }
}
