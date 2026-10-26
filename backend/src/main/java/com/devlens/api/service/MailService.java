package com.devlens.api.service;

import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;

@Service
@RequiredArgsConstructor
@Slf4j
public class MailService {

    private final JavaMailSender mailSender;

    @Value("${spring.mail.username:}")
    private String fromEmail;

    @Value("${spring.mail.password:}")
    private String mailPassword;

    @Value("${app.frontend.url:http://localhost:5173}")
    private String frontendUrl;

    /**
     * Returns true only if mail is properly configured (not placeholder).
     * This prevents registration and other flows from failing when SMTP is not yet set up.
     */
    private boolean isMailConfigured() {
        return fromEmail != null
                && !fromEmail.isBlank()
                && !fromEmail.equals("your_email@gmail.com")
                && !fromEmail.equals("hello@devlens.com")
                && fromEmail.contains("@")
                && mailPassword != null
                && !mailPassword.isBlank()
                && !mailPassword.equals("your_app_password")
                && !mailPassword.contains("YOUR_16_DIGIT");
    }

    public void sendPasswordResetEmail(String to, String token) {
        if (!isMailConfigured()) {
            log.warn("Mail not configured. Skipping password reset email to {}. Reset token: {}", to, token);
            return;
        }
        try {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setFrom(fromEmail);
            message.setTo(to);
            message.setSubject("Password Reset Request - PrepLens AI");
            
            String resetLink = frontendUrl + "/reset-password?token=" + token;
            
            message.setText("Hello,\n\n" +
                    "You requested a password reset for your PrepLens AI account.\n\n" +
                    "Click the link below to reset your password (valid for 24 hours):\n" +
                    resetLink + "\n\n" +
                    "If you did not request this, please ignore this email.\n\n" +
                    "Best regards,\n" +
                    "PrepLens AI Team");
            
            mailSender.send(message);
            log.info("Password reset email sent to {}", to);
        } catch (Exception e) {
            log.error("Failed to send password reset email to {}", to, e);
        }
    }

    public void sendWelcomeEmail(String to, String name) {
        if (!isMailConfigured()) {
            log.warn("Mail not configured. Skipping welcome email to {}", to);
            return;
        }
        try {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setFrom(fromEmail);
            message.setTo(to);
            message.setSubject("Welcome to PrepLens AI Platform!");
            
            message.setText("Hello " + name + ",\n\n" +
                    "Welcome to PrepLens AI! We are thrilled to have you onboard.\n" +
                    "Start your learning journey, submit GitHub projects, and get your AI tailored resume today.\n\n" +
                    "Best regards,\n" +
                    "PrepLens AI Team");
            
            mailSender.send(message);
            log.info("Welcome email sent to {}", to);
        } catch (Exception e) {
            log.error("Failed to send welcome email to {}", to, e);
        }
    }

    public void sendProjectReviewedEmail(String to, String userName, String projectName, String status, String feedback) {
        if (!isMailConfigured()) {
            log.warn("Mail not configured. Skipping project review email to {}", to);
            return;
        }
        try {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setFrom(fromEmail);
            message.setTo(to);
            message.setSubject("Update on your Project Submission: " + projectName);
            
            String statusMessage = status.equals("COMPLETED") ? "APPROVED" : "REJECTED";
            
            StringBuilder text = new StringBuilder();
            text.append("Hello ").append(userName).append(",\n\n");
            text.append("Your recent project submission for '").append(projectName).append("' has been reviewed.\n\n");
            text.append("Status: ").append(statusMessage).append("\n");
            
            if (feedback != null && !feedback.trim().isEmpty()) {
                text.append("Admin Feedback: ").append(feedback).append("\n\n");
            } else {
                text.append("\n");
            }
            
            if (status.equals("COMPLETED")) {
                text.append("Congratulations! 100 points have been added to your profile.\n");
            } else {
                text.append("Please check the feedback, make the necessary changes, and resubmit.\n");
            }
            
            text.append("\nBest regards,\nPrepLens AI Team");
            
            message.setText(text.toString());
            mailSender.send(message);
            log.info("Project review email sent to {}", to);
        } catch (Exception e) {
            log.error("Failed to send project review email to {}", to, e);
        }
    }

    public void sendOtpEmail(String to, String otp) {
        if (!isMailConfigured()) {
            log.warn("Mail not configured. Skipping OTP email to {}. OTP: {}", to, otp);
            return;
        }
        try {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setFrom(fromEmail);
            message.setTo(to);
            message.setSubject("Your PrepLens Verification Code");
            
            message.setText("Hello,\n\n" +
                    "Your verification code is: " + otp + "\n\n" +
                    "This code will expire in 10 minutes.\n\n" +
                    "If you did not request this, please ignore this email.\n\n" +
                    "Best regards,\n" +
                    "PrepLens AI Team");
            
            mailSender.send(message);
            log.info("OTP email sent to {}", to);
        } catch (Exception e) {
            log.error("Failed to send OTP email to {}. OTP was: {}", to, otp, e);
        }
    }
}
