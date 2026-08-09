package com.devlens.api.resume;

import com.devlens.api.entity.User;
import com.devlens.api.exception.ResourceNotFoundException;
import com.devlens.api.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.tika.Tika;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.util.UUID;

import com.devlens.api.service.GroqClientService;
import com.devlens.api.exception.AiRateLimitException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

@Slf4j
@Service
@RequiredArgsConstructor
public class ResumeService {

    private final ResumeRepository resumeRepository;
    private final UserRepository userRepository;
    private final GroqClientService groqClientService;
    private final ObjectMapper objectMapper;
    private final com.devlens.api.service.GamificationService gamificationService;
    
    // Tika is thread-safe and can be reused
    private final Tika tika = new Tika();

    @Transactional
    public Resume uploadAndParseResume(UUID userId, MultipartFile file) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found: " + userId));

        if (file.isEmpty()) {
            throw new IllegalArgumentException("File is empty");
        }
        
        // Validate file type
        String contentType = file.getContentType();
        if (contentType == null || (!contentType.equals("application/pdf") && 
            !contentType.equals("application/vnd.openxmlformats-officedocument.wordprocessingml.document"))) {
            throw new IllegalArgumentException("Only PDF and DOCX files are supported");
        }

        try {
            // Parse text using Apache Tika
            log.info("Parsing resume for user: {}", userId);
            String parsedText = tika.parseToString(file.getInputStream());
            
            if (parsedText == null || parsedText.trim().isEmpty()) {
                throw new IllegalArgumentException("Could not extract text from the file");
            }

            // Truncate to reasonable length to avoid blowing up DB or AI token limits (e.g. 20,000 chars)
            if (parsedText.length() > 20000) {
                parsedText = parsedText.substring(0, 20000);
            }

            double atsScore = 0.0;
            String suggestionsJson = "[]";

            try {
                String aiResponse = groqClientService.analyzeResume(parsedText);
                JsonNode root = objectMapper.readTree(aiResponse);
                if (root.has("atsScore")) {
                    atsScore = root.get("atsScore").asDouble();
                }
                if (root.has("suggestions")) {
                    suggestionsJson = objectMapper.writeValueAsString(root.get("suggestions"));
                }
            } catch (AiRateLimitException e) {
                log.error("AI rate limit reached during resume analysis for user: {}", userId);
                throw e; // Let GlobalExceptionHandler handle it and return 429
            } catch (Exception e) {
                log.error("Failed to analyze resume with AI", e);
                throw new RuntimeException("Failed to analyze resume with AI: " + e.getMessage());
            }

            // Create new resume entry
            Resume resume = Resume.builder()
                    .user(user)
                    .fileName(file.getOriginalFilename())
                    .parsedText(parsedText.trim())
                    .atsScore(atsScore)
                    .suggestions(suggestionsJson)
                    .build();

            // Delete old resumes for this user so only the newest one exists
            resumeRepository.deleteByUserId(userId);

            gamificationService.awardPoints(user, 20);

            return resumeRepository.save(resume);
            
        } catch (AiRateLimitException e) {
            throw e;
        } catch (Exception e) {
            log.error("Failed to parse resume file", e);
            throw new RuntimeException("Failed to process resume: " + e.getMessage());
        }
    }
    
    @Transactional(readOnly = true)
    public Resume getLatestResume(UUID userId) {
        return resumeRepository.findFirstByUserIdOrderByCreatedAtDesc(userId)
                .orElseThrow(() -> new ResourceNotFoundException("No resume found for user: " + userId));
    }
}
