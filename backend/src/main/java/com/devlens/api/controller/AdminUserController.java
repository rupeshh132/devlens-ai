package com.devlens.api.controller;

import com.devlens.api.dto.admin.*;
import com.devlens.api.service.admin.AdminUserService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping("/api/v1/admin/users")
@RequiredArgsConstructor
@PreAuthorize("hasRole('ADMIN')")
public class AdminUserController {

    private final AdminUserService adminUserService;

    @GetMapping
    public ResponseEntity<Page<AdminDevUserDto>> getUsers(
            @RequestParam(required = false, defaultValue = "ALL") String role,
            @RequestParam(required = false, defaultValue = "ALL") String status,
            @RequestParam(required = false) String search,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "20") int size
    ) {
        return ResponseEntity.ok(adminUserService.getUsers(role, status, search, page, size));
    }

    @GetMapping("/stats")
    public ResponseEntity<AdminDevUserStatsDto> getStats() {
        return ResponseEntity.ok(adminUserService.getStats());
    }

    @GetMapping("/{id}")
    public ResponseEntity<AdminDevUserDetailDto> getUserDetails(@PathVariable UUID id) {
        return ResponseEntity.ok(adminUserService.getUserDetails(id));
    }

    @PatchMapping("/{id}/role")
    public ResponseEntity<?> updateRole(
            @PathVariable UUID id,
            @Valid @RequestBody AdminUpdateRoleDto dto
    ) {
        adminUserService.updateRole(id, dto.getRole());
        return ResponseEntity.ok(Map.of("message", "User role updated successfully to " + dto.getRole()));
    }

    @PatchMapping("/{id}/status")
    public ResponseEntity<?> updateStatus(
            @PathVariable UUID id,
            @Valid @RequestBody AdminUpdateStatusDto dto
    ) {
        adminUserService.updateStatus(id, dto.getStatus());
        return ResponseEntity.ok(Map.of("message", "User status updated successfully to " + dto.getStatus()));
    }

    @PostMapping("/{id}/reset-password")
    public ResponseEntity<?> resetPassword(
            @PathVariable UUID id,
            @Valid @RequestBody AdminDevPasswordResetDto dto
    ) {
        adminUserService.resetPassword(id, dto.getNewPassword());
        return ResponseEntity.ok(Map.of("message", "Password reset successfully. Active sessions revoked."));
    }

    @PostMapping("/{id}/points")
    public ResponseEntity<?> adjustPoints(
            @PathVariable UUID id,
            @Valid @RequestBody AdminAdjustPointsDto dto
    ) {
        adminUserService.adjustPoints(id, dto.getPoints(), dto.getOperation());
        return ResponseEntity.ok(Map.of("message", "User points updated successfully."));
    }

    @PatchMapping("/{id}/profile")
    public ResponseEntity<?> updateProfile(
            @PathVariable UUID id,
            @Valid @RequestBody AdminDevProfileUpdateDto dto
    ) {
        adminUserService.updateProfile(id, dto);
        return ResponseEntity.ok(Map.of("message", "User profile updated successfully."));
    }
}
