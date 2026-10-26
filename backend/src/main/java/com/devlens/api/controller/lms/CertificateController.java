package com.devlens.api.controller.lms;

import com.devlens.api.entity.lms.Certificate;
import com.devlens.api.repository.lms.CertificateRepository;
import com.devlens.api.security.UserPrincipal;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/v1/certificates")
@RequiredArgsConstructor
public class CertificateController {

    private final CertificateRepository certificateRepository;

    @GetMapping
    public ResponseEntity<List<Certificate>> getMyCertificates(@AuthenticationPrincipal UserPrincipal userPrincipal) {
        return ResponseEntity.ok(certificateRepository.findByUserId(userPrincipal.getId()));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Certificate> getCertificateById(@PathVariable UUID id) {
        return certificateRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}
