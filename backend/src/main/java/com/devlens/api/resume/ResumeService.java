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

@Slf4j
@Service
@RequiredArgsConstructor
public class ResumeService {

    private final ResumeRepository resumeRepository;
    private final UserRepository userRepository;
    
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

            // Create new resume entry
            Resume resume = Resume.builder()
                    .user(user)
                    .fileName(file.getOriginalFilename())
                    .parsedText(parsedText.trim())
                    // Mocked AI response for Sprint 1
                    .atsScore(75.0)
                    .suggestions("[\"Add more metrics to your experience section\", \"Highlight your Spring Boot expertise\"]")
                    .build();

            // Delete old resumes for this user so only the newest one exists
            resumeRepository.deleteByUserId(userId);

            return resumeRepository.save(resume);
            
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
