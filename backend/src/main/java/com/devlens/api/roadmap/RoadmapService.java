package com.devlens.api.roadmap;

import com.devlens.api.entity.User;
import com.devlens.api.skillgap.SkillGapAnalysis;
import com.devlens.api.skillgap.SkillGapAnalysisRepository;
import com.devlens.api.service.GroqClientService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class RoadmapService {

    private final RoadmapRepository roadmapRepository;
    private final SkillGapAnalysisRepository skillGapRepository;
    private final GroqClientService GroqClientService;
    private final com.devlens.api.service.GamificationService gamificationService;

    @Transactional
    public Roadmap generateRoadmap(User user, String title) {
        // Find latest skill gap analysis to base roadmap upon
        SkillGapAnalysis latestAnalysis = skillGapRepository.findFirstByUserOrderByCreatedAtDesc(user)
                .orElseThrow(() -> new IllegalArgumentException("No skill gap analysis found. Please run a skill gap analysis first."));

        // Call Gemini
        String roadmapJson = GroqClientService.generateRoadmap(title, latestAnalysis.getGapReport());

        // Save roadmap
        Roadmap roadmap = Roadmap.builder()
                .user(user)
                .title(title)
                .roadmapData(roadmapJson)
                .build();

        Roadmap saved = roadmapRepository.save(roadmap);
        gamificationService.awardPoints(user, 15);
        return saved;
    }
    
    public Roadmap getLatestRoadmap(User user) {
        return roadmapRepository.findFirstByUserOrderByCreatedAtDesc(user)
                .orElseThrow(() -> new com.devlens.api.exception.ResourceNotFoundException("No roadmap found."));
    }
}
