package com.devlens.api.service;

import com.devlens.api.entity.OtpVerification;
import com.devlens.api.repository.OtpVerificationRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;
import java.util.Random;

import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Slf4j
public class OtpService {

    private final OtpVerificationRepository otpRepository;
    private final MailService mailService;
    private final Random random = new Random();

    @Transactional
    public String generateAndSendOtp(String email) {
        String cleanEmail = email != null ? email.trim().toLowerCase() : "";
        // Generate a 6-digit OTP
        String otp = String.format("%06d", random.nextInt(999999));
        
        // Remove existing OTPs for this email to prevent spam
        otpRepository.deleteByEmail(cleanEmail);
        
        OtpVerification verification = OtpVerification.builder()
                .email(cleanEmail)
                .otpCode(otp)
                .expiresAt(LocalDateTime.now().plusMinutes(10))
                .build();
                
        otpRepository.save(verification);
        
        // Always log OTP prominently in console for local/dev use
        log.info("\n==========================================================\n" +
                 "🔑 [DEV OTP CODE]: >>> {} <<<\n" +
                 "📧 Email: {}\n" +
                 "==========================================================", otp, cleanEmail);

        // Send email
        try {
            mailService.sendOtpEmail(cleanEmail, otp);
        } catch (Exception ex) {
            log.warn("Email delivery via SMTP failed: {}", ex.getMessage());
        }

        return otp;
    }

    public boolean verifyOtp(String email, String otp) {
        String cleanEmail = email != null ? email.trim().toLowerCase() : "";
        String cleanOtp = otp != null ? otp.trim() : "";
        Optional<OtpVerification> verificationOpt = otpRepository.findTopByEmailOrderByCreatedAtDesc(cleanEmail);
        
        if (verificationOpt.isPresent()) {
            OtpVerification verification = verificationOpt.get();
            if (!verification.isExpired() && verification.getOtpCode().equals(cleanOtp)) {
                otpRepository.deleteByEmail(cleanEmail); // OTP is single-use
                return true;
            }
        }
        return false;
    }
}
