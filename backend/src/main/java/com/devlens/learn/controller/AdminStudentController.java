package com.devlens.learn.controller;

import com.devlens.learn.dto.*;
import com.devlens.learn.service.AdminStudentService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping("/api/v1/learn/admin/students")
@RequiredArgsConstructor
public class AdminStudentController {

    private final AdminStudentService adminStudentService;

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping
    public ResponseEntity<List<AdminStudentDto>> getStudents(
            @RequestParam(required = false, defaultValue = "ALL") String plan,
            @RequestParam(required = false, defaultValue = "ALL") String crmStatus,
            @RequestParam(required = false, defaultValue = "ALL") String examGoal,
            @RequestParam(required = false, defaultValue = "ALL") String status,
            @RequestParam(required = false) String search,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "25") int size
    ) {
        return ResponseEntity.ok(adminStudentService.getStudents(plan, crmStatus, examGoal, status, search, page, size));
    }

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/stats")
    public ResponseEntity<AdminStudentStatsDto> getStats() {
        return ResponseEntity.ok(adminStudentService.getStats());
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PatchMapping("/{id}/crm")
    public ResponseEntity<?> updateCrm(
            @PathVariable UUID id,
            @Valid @RequestBody AdminCrmUpdateDto dto
    ) {
        adminStudentService.updateCrm(id, dto);
        return ResponseEntity.ok(Map.of("message", "CRM status updated successfully"));
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PatchMapping("/{id}/subscription")
    public ResponseEntity<?> updateSubscription(
            @PathVariable UUID id,
            @Valid @RequestBody AdminSubscriptionUpdateDto dto
    ) {
        adminStudentService.updateSubscription(id, dto);
        return ResponseEntity.ok(Map.of("message", "Subscription updated successfully"));
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PatchMapping("/{id}/status")
    public ResponseEntity<?> updateStatus(
            @PathVariable UUID id,
            @Valid @RequestBody AdminStatusUpdateDto dto
    ) {
        adminStudentService.updateStatus(id, dto);
        return ResponseEntity.ok(Map.of("message", "Account status updated successfully"));
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("/{id}/profile")
    public ResponseEntity<?> updateProfile(
            @PathVariable UUID id,
            @Valid @RequestBody AdminProfileUpdateDto dto
    ) {
        adminStudentService.updateProfile(id, dto);
        return ResponseEntity.ok(Map.of("message", "Profile updated successfully"));
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/{id}/reset-password")
    public ResponseEntity<?> resetPassword(
            @PathVariable UUID id,
            @RequestBody AdminPasswordResetDto dto
    ) {
        return ResponseEntity.ok(adminStudentService.resetPassword(id, dto));
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/{id}/adjust-xp")
    public ResponseEntity<?> adjustXp(
            @PathVariable UUID id,
            @Valid @RequestBody AdminXpAdjustDto dto
    ) {
        return ResponseEntity.ok(adminStudentService.adjustXp(id, dto));
    }

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/{id}/activity")
    public ResponseEntity<Map<String, Object>> getStudentActivity(@PathVariable UUID id) {
        return ResponseEntity.ok(adminStudentService.getStudentActivity(id));
    }
}
