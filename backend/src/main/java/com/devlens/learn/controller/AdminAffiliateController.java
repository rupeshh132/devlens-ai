package com.devlens.learn.controller;

import com.devlens.learn.dto.*;
import com.devlens.learn.service.AdminAffiliateService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping("/api/v1/learn/admin/affiliate")
@RequiredArgsConstructor
@PreAuthorize("hasRole('ADMIN')")
public class AdminAffiliateController {

    private final AdminAffiliateService affiliateService;

    @GetMapping("/stats")
    public ResponseEntity<AdminAffiliateStatsDto> getStats() {
        return ResponseEntity.ok(affiliateService.getAffiliateStats());
    }

    @GetMapping("/promos")
    public ResponseEntity<Page<AdminPromoCodeDto>> getPromoCodes(
            @RequestParam(required = false) String query,
            @RequestParam(required = false) Boolean isActive,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "20") int size) {

        PageRequest pageRequest = PageRequest.of(page, Math.min(size, 100), Sort.by(Sort.Direction.DESC, "createdAt"));
        return ResponseEntity.ok(affiliateService.getPromoCodes(query, isActive, pageRequest));
    }

    @PostMapping("/promos")
    public ResponseEntity<AdminPromoCodeDto> createPromoCode(
            @Valid @RequestBody AdminPromoCodeCreateDto dto) {

        return ResponseEntity.ok(affiliateService.createPromoCode(dto));
    }

    @PatchMapping("/promos/{id}/toggle")
    public ResponseEntity<AdminPromoCodeDto> togglePromoCode(
            @PathVariable UUID id) {

        return ResponseEntity.ok(affiliateService.togglePromoCode(id));
    }

    @DeleteMapping("/promos/{id}")
    public ResponseEntity<Map<String, Object>> deletePromoCode(
            @PathVariable UUID id) {

        affiliateService.deletePromoCode(id);
        return ResponseEntity.ok(Map.of("success", true, "message", "Promo code deleted or deactivated successfully"));
    }

    @GetMapping("/ledger")
    public ResponseEntity<Page<AdminAffiliateLedgerDto>> getLedger(
            @RequestParam(required = false) String status,
            @RequestParam(required = false) String query,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "20") int size) {

        PageRequest pageRequest = PageRequest.of(page, Math.min(size, 100), Sort.by(Sort.Direction.DESC, "createdAt"));
        return ResponseEntity.ok(affiliateService.getLedger(status, query, pageRequest));
    }

    @PostMapping("/ledger/{id}/settle")
    public ResponseEntity<AdminAffiliateLedgerDto> settlePayout(
            @PathVariable UUID id,
            @Valid @RequestBody AdminSettlePayoutRequestDto dto,
            Authentication authentication) {

        String adminEmail = authentication != null ? authentication.getName() : "Admin";
        return ResponseEntity.ok(affiliateService.settlePayout(id, adminEmail, dto));
    }
}
