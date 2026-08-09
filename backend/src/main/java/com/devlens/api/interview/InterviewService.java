package com.devlens.api.interview;

import com.devlens.api.entity.User;
import com.devlens.api.skillgap.SkillGapAnalysis;
import com.devlens.api.skillgap.SkillGapAnalysisRepository;
import com.devlens.api.service.GroqClientService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@RequiredArgsConstructor
@Slf4j
public class InterviewService {

    private final InterviewSessionRepository interviewSessionRepository;
    private final SkillGapAnalysisRepository skillGapAnalysisRepository;
    private final GroqClientService GroqClientService;

    @Transactional
    public InterviewSession generateInterviewSession(User user, InterviewSessionRequest request) {
        log.info("Generating interview session for user: {} and role: {}", user.getEmail(), request.getTargetRole());

        // Try to fetch latest skill gap analysis for context
        Optional<SkillGapAnalysis> latestAnalysis = skillGapAnalysisRepository.findFirstByUserOrderByCreatedAtDesc(user);
        
        String skillsJson = "{}";
        if (latestAnalysis.isPresent()) {
            skillsJson = latestAnalysis.get().getGapReport();
        }

        // Call Gemini to generate questions
        String questionsJson = GroqClientService.generateInterviewQuestions(request.getTargetRole(), skillsJson);

        // Save session
        InterviewSession session = InterviewSession.builder()
                .user(user)
                .targetRole(request.getTargetRole())
                .sessionData(questionsJson)
                .build();

        return interviewSessionRepository.save(session);
    }

    @Transactional(readOnly = true)
    public Optional<InterviewSession> getLatestSession(User user) {
        return interviewSessionRepository.findFirstByUserOrderByCreatedAtDesc(user);
    }

    public InterviewEvaluationResponse evaluateInterview(InterviewEvaluationRequest request) {
        log.info("Evaluating interview with {} answers", request.getAnswers().size());
        
        try {
            com.fasterxml.jackson.databind.ObjectMapper mapper = new com.fasterxml.jackson.databind.ObjectMapper();
            String jsonInput = mapper.writeValueAsString(request);
            
            String responseJson = GroqClientService.evaluateInterviewAnswers(jsonInput);
            
            return mapper.readValue(responseJson, InterviewEvaluationResponse.class);
        } catch (Exception e) {
            log.error("Failed to evaluate interview answers", e);
            throw new RuntimeException("Evaluation failed: " + e.getMessage(), e);
        }
    }
}
