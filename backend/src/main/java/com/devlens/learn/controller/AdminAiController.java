package com.devlens.learn.controller;

import com.devlens.learn.dto.AdminAiStatsDto;
import com.devlens.learn.dto.AdminFlagDoubtRequestDto;
import com.devlens.learn.dto.AdminSettingsUpdateDto;
import com.devlens.learn.entity.LearnAiDoubt;
import com.devlens.learn.service.AdminAiService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping("/api/v1/learn/admin/ai")
@RequiredArgsConstructor
@PreAuthorize("hasRole('ADMIN')")
public class AdminAiController {

    private final AdminAiService adminAiService;

    @GetMapping("/stats")
    public ResponseEntity<AdminAiStatsDto> getTelemetryStats() {
        return ResponseEntity.ok(adminAiService.getTelemetryStats());
    }

    @GetMapping("/doubts")
    public ResponseEntity<Page<LearnAiDoubt>> getDoubts(
            @RequestParam(required = false) String query,
            @RequestParam(required = false) String topic,
            @RequestParam(required = false) Boolean isFlagged,
            @RequestParam(required = false) String status,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "20") int size) {

        PageRequest pageRequest = PageRequest.of(page, Math.min(size, 100), Sort.by(Sort.Direction.DESC, "createdAt"));
        return ResponseEntity.ok(adminAiService.getDoubts(query, topic, isFlagged, status, pageRequest));
    }

    @PatchMapping("/doubts/{id}/flag")
    public ResponseEntity<LearnAiDoubt> flagDoubt(
            @PathVariable UUID id,
            @RequestBody AdminFlagDoubtRequestDto request) {

        return ResponseEntity.ok(adminAiService.flagDoubt(id, request.getIsFlagged(), request.getFlagReason()));
    }

    @PostMapping("/killswitch")
    public ResponseEntity<Map<String, Object>> toggleKillswitch(
            @RequestBody Map<String, Boolean> body) {

        boolean active = body.getOrDefault("active", false);
        boolean state = adminAiService.toggleKillswitch(active);
        return ResponseEntity.ok(Map.of(
                "success", true,
                "killswitchActive", state,
                "message", state ? "Emergency Killswitch Activated. AI Doubts solver is now DISABLED." : "AI Doubts solver is now ONLINE."
        ));
    }

    @GetMapping("/settings")
    public ResponseEntity<Map<String, String>> getSystemSettings() {
        return ResponseEntity.ok(adminAiService.getSystemSettings());
    }

    @PutMapping("/settings")
    public ResponseEntity<Map<String, String>> updateSystemSettings(
            @RequestBody AdminSettingsUpdateDto dto) {

        return ResponseEntity.ok(adminAiService.updateSystemSettings(dto));
    }
}
