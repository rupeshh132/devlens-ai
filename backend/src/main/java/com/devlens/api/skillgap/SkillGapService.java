package com.devlens.api.skillgap;

import com.devlens.api.entity.User;
import com.devlens.api.resume.Resume;
import com.devlens.api.resume.ResumeRepository;
import com.devlens.api.service.DevTemplateCache;
import com.devlens.api.service.GroqClientService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Slf4j
@Service
@RequiredArgsConstructor
public class SkillGapService {

    private final SkillGapAnalysisRepository skillGapRepository;
    private final ResumeRepository resumeRepository;
    private final GroqClientService groqClientService;
    private final DevTemplateCache devTemplateCache;

    @Transactional
    public SkillGapAnalysis analyzeSkillGap(User user, String targetRole) {
        String gapReportJson;
        
        try {
            // Find latest resume if available
            Resume latestResume = resumeRepository.findFirstByUserIdOrderByCreatedAtDesc(user.getId()).orElse(null);
            
            if (latestResume != null && latestResume.getParsedText() != null && !latestResume.getParsedText().isBlank()) {
                gapReportJson = groqClientService.analyzeSkillGap(latestResume.getParsedText(), targetRole);
            } else {
                log.info("No resume text found for user {}, serving template skill gap for {}", user.getId(), targetRole);
                gapReportJson = devTemplateCache.getSkillGap(targetRole);
            }
        } catch (Exception e) {
            log.warn("Groq AI call failed for skill gap analysis, using template cache fallback: {}", e.getMessage());
            gapReportJson = devTemplateCache.getSkillGap(targetRole);
        }

        // Save analysis
        SkillGapAnalysis analysis = SkillGapAnalysis.builder()
                .user(user)
                .targetRole(targetRole)
                .gapReport(gapReportJson)
                .build();

        return skillGapRepository.save(analysis);
    }
    
    public SkillGapAnalysis getLatestAnalysis(User user) {
        return skillGapRepository.findFirstByUserOrderByCreatedAtDesc(user)
                .orElseThrow(() -> new com.devlens.api.exception.ResourceNotFoundException("No skill gap analysis found."));
    }
}
