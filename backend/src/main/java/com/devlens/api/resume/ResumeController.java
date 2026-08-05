package com.devlens.api.resume;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.UUID;
import java.util.Map;
import com.devlens.api.security.UserPrincipal;
import org.springframework.security.core.annotation.AuthenticationPrincipal;

@RestController
@RequestMapping("/api/v1/resumes")
@RequiredArgsConstructor
public class ResumeController {

    private final ResumeService resumeService;

    @PostMapping
    public ResponseEntity<?> uploadResume(
            @RequestParam("file") MultipartFile file,
            @AuthenticationPrincipal UserPrincipal currentUser) {
        
        try {
            UUID userId = currentUser.getId();
            
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
    public ResponseEntity<Resume> getMyLatestResume(@AuthenticationPrincipal UserPrincipal currentUser) {
        UUID userId = currentUser.getId();
        Resume resume = resumeService.getLatestResume(userId);
        return ResponseEntity.ok(resume);
    }
}
