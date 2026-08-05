package com.devlens.api.skillgap;

import com.devlens.api.entity.User;
import com.devlens.api.resume.Resume;
import com.devlens.api.resume.ResumeRepository;
import com.devlens.api.service.GeminiClientService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class SkillGapService {

    private final SkillGapAnalysisRepository skillGapRepository;
    private final ResumeRepository resumeRepository;
    private final GeminiClientService geminiClientService;

    @Transactional
    public SkillGapAnalysis analyzeSkillGap(User user, String targetRole) {
        // Find latest resume
        Resume latestResume = resumeRepository.findFirstByUserIdOrderByCreatedAtDesc(user.getId())
                .orElseThrow(() -> new RuntimeException("No resume found. Please upload a resume first."));

        // Call Gemini
        String gapReportJson = geminiClientService.analyzeSkillGap(latestResume.getParsedText(), targetRole);

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
                .orElseThrow(() -> new RuntimeException("No skill gap analysis found."));
    }
}
