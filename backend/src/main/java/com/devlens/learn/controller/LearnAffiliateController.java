package com.devlens.learn.controller;

import com.devlens.learn.entity.LearnAffiliateLedger;
import com.devlens.learn.entity.LearnPromoCode;
import com.devlens.learn.repository.LearnAffiliateLedgerRepository;
import com.devlens.learn.security.LearnUserPrincipal;
import com.devlens.learn.service.LearnAffiliateService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.List;
import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping("/api/v1/learn/affiliate")
@RequiredArgsConstructor
public class LearnAffiliateController {

    private final LearnAffiliateService affiliateService;
    private final LearnAffiliateLedgerRepository ledgerRepository;

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/promo/create")
    public ResponseEntity<?> createPromoCode(
            @RequestParam UUID affiliateUserId,
            @RequestParam String code,
            @RequestParam BigDecimal discountPct,
            @RequestParam BigDecimal commissionPct) {
        
        try {
            LearnPromoCode promo = affiliateService.createPromoCode(affiliateUserId, code, discountPct, commissionPct);
            return ResponseEntity.ok(Map.of("message", "Promo code created", "promoCode", promo));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(Map.of("error", e.getMessage()));
        }
    }

    @PreAuthorize("hasRole('LEARN_USER')") // Assuming TPOs are regular users with an affiliate role/code
    @GetMapping("/ledger")
    public ResponseEntity<?> getMyLedger(@AuthenticationPrincipal LearnUserPrincipal principal) {
        List<LearnAffiliateLedger> ledger = ledgerRepository.findByAffiliateUserIdOrderByCreatedAtDesc(principal.getId());
        
        // Calculate totals
        BigDecimal totalGross = ledger.stream().map(LearnAffiliateLedger::getGrossCommission).reduce(BigDecimal.ZERO, BigDecimal::add);
        BigDecimal totalTds = ledger.stream().map(LearnAffiliateLedger::getTdsAmount).reduce(BigDecimal.ZERO, BigDecimal::add);
        BigDecimal totalNet = ledger.stream().map(LearnAffiliateLedger::getNetPayable).reduce(BigDecimal.ZERO, BigDecimal::add);
        
        return ResponseEntity.ok(Map.of(
            "transactions", ledger,
            "summary", Map.of(
                "totalGrossCommission", totalGross,
                "totalTdsDeducted", totalTds,
                "totalNetPayable", totalNet
            )
        ));
    }
}
