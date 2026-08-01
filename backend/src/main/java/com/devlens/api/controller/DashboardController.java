package com.devlens.api.controller;

import com.devlens.api.dto.DashboardSummary;
import com.devlens.api.security.UserPrincipal;
import com.devlens.api.service.DashboardService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/dashboard")
@RequiredArgsConstructor
public class DashboardController {

    private final DashboardService dashboardService;

    @GetMapping("/summary")
    public ResponseEntity<DashboardSummary> getSummary(@AuthenticationPrincipal UserPrincipal userPrincipal) {
        DashboardSummary summary = dashboardService.getSummary(userPrincipal.getId());
        return ResponseEntity.ok(summary);
    }
}
