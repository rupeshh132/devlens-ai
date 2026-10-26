package com.devlens.learn.controller;

import com.devlens.learn.dto.PromoValidateResponseDto;
import com.devlens.learn.service.AdminAffiliateService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;

@RestController
@RequestMapping("/api/v1/learn/promo")
@RequiredArgsConstructor
public class LearnPromoController {

    private final AdminAffiliateService affiliateService;

    @GetMapping("/validate")
    public ResponseEntity<PromoValidateResponseDto> validatePromo(
            @RequestParam String code,
            @RequestParam(defaultValue = "0") BigDecimal amount) {

        return ResponseEntity.ok(affiliateService.validatePromoCode(code, amount));
    }
}
