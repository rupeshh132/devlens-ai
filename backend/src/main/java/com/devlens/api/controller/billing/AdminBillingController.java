package com.devlens.api.controller.billing;

import com.devlens.api.dto.billing.AdminBillingStatsDto;
import com.devlens.api.dto.billing.ManualVerifyRequestDto;
import com.devlens.api.security.UserPrincipal;
import com.devlens.api.service.billing.AdminBillingService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping("/api/v1/admin/billing")
@RequiredArgsConstructor
public class AdminBillingController {

    private final AdminBillingService adminBillingService;

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/stats")
    public ResponseEntity<AdminBillingStatsDto> getBillingStats() {
        return ResponseEntity.ok(adminBillingService.getBillingStats());
    }

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/transactions")
    public ResponseEntity<Map<String, Object>> getTransactions(
            @RequestParam(required = false, defaultValue = "ALL") String vertical,
            @RequestParam(required = false, defaultValue = "ALL") String status,
            @RequestParam(required = false) String search,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "20") int size
    ) {
        return ResponseEntity.ok(adminBillingService.getTransactions(vertical, status, search, page, size));
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/transactions/{id}/manual-verify")
    public ResponseEntity<Map<String, Object>> manualVerifyTransaction(
            @PathVariable UUID id,
            @RequestBody ManualVerifyRequestDto request,
            @AuthenticationPrincipal Object principal
    ) {
        UUID adminId = null;
        if (principal instanceof UserPrincipal up) {
            adminId = up.getId();
        } else if (principal instanceof com.devlens.learn.security.LearnUserPrincipal lup) {
            adminId = lup.getId();
        }
        adminBillingService.manualVerify(id, request, adminId);
        return ResponseEntity.ok(Map.of(
                "success", true,
                "message", "Transaction manually verified and access granted successfully."
        ));
    }
}
