package com.devlens.api.service;

import com.devlens.api.dto.ActivityDto;
import com.devlens.api.entity.User;
import com.devlens.api.interview.InterviewSession;
import com.devlens.api.interview.InterviewSessionRepository;
import com.devlens.api.resume.Resume;
import com.devlens.api.resume.ResumeRepository;
import com.devlens.api.roadmap.Roadmap;
import com.devlens.api.roadmap.RoadmapRepository;
import com.devlens.api.skillgap.SkillGapAnalysis;
import com.devlens.api.skillgap.SkillGapAnalysisRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Duration;
import java.time.Instant;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ActivityService {

    private final ResumeRepository resumeRepository;
    private final SkillGapAnalysisRepository skillGapAnalysisRepository;
    private final InterviewSessionRepository interviewSessionRepository;
    private final RoadmapRepository roadmapRepository;

    private static class ActivityItem {
        Instant timestamp;
        ActivityDto dto;

        ActivityItem(Instant timestamp, ActivityDto dto) {
            this.timestamp = timestamp;
            this.dto = dto;
        }
    }

    @Transactional(readOnly = true)
    public List<ActivityDto> getRecentActivities(User user) {
        List<ActivityItem> items = new ArrayList<>();

        // Resumes
        List<Resume> resumes = resumeRepository.findByUserIdOrderByCreatedAtDesc(user.getId());
        resumes.stream().limit(5).forEach(r -> {
            items.add(new ActivityItem(r.getCreatedAt(), ActivityDto.builder()
                    .id(r.getId().toString())
                    .title("Resume Uploaded")
                    .date(formatTimeAgo(r.getCreatedAt()))
                    .type("resume")
                    .build()));
        });

        // Skill Gap Analyses
        List<SkillGapAnalysis> analyses = skillGapAnalysisRepository.findByUserOrderByCreatedAtDesc(user);
        analyses.stream().limit(5).forEach(a -> {
            Instant time = a.getCreatedAt() != null ? a.getCreatedAt().toInstant(java.time.ZoneOffset.UTC) : Instant.now();
            items.add(new ActivityItem(time, ActivityDto.builder()
                    .id(a.getId().toString())
                    .title("Skill Gap Analysis")
                    .date(formatTimeAgo(time))
                    .type("analysis")
                    .build()));
        });

        // Interviews
        List<InterviewSession> interviews = interviewSessionRepository.findAllByUserOrderByCreatedAtDesc(user);
        interviews.stream().limit(5).forEach(i -> {
            Instant time = i.getCreatedAt() != null ? i.getCreatedAt().toInstant(java.time.ZoneOffset.UTC) : Instant.now();
            items.add(new ActivityItem(time, ActivityDto.builder()
                    .id(i.getId().toString())
                    .title("Mock Interview Generated")
                    .date(formatTimeAgo(time))
                    .type("interview")
                    .build()));
        });

        // Roadmaps
        List<Roadmap> roadmaps = roadmapRepository.findByUserOrderByCreatedAtDesc(user);
        roadmaps.stream().limit(5).forEach(r -> {
            Instant time = r.getCreatedAt() != null ? r.getCreatedAt().toInstant(java.time.ZoneOffset.UTC) : Instant.now();
            items.add(new ActivityItem(time, ActivityDto.builder()
                    .id(r.getId().toString())
                    .title("Roadmap Generated")
                    .date(formatTimeAgo(time))
                    .type("roadmap")
                    .build()));
        });

        // Sort by timestamp descending
        items.sort(Comparator.comparing((ActivityItem i) -> i.timestamp).reversed());

        // Return top 10
        return items.stream()
                .limit(10)
                .map(i -> i.dto)
                .collect(Collectors.toList());
    }

    private String formatTimeAgo(Instant time) {
        if (time == null) return "Unknown";
        Duration diff = Duration.between(time, Instant.now());
        if (diff.toMinutes() < 1) return "Just now";
        if (diff.toMinutes() < 60) return diff.toMinutes() + " mins ago";
        if (diff.toHours() < 24) return diff.toHours() + " hours ago";
        return diff.toDays() + " days ago";
    }
}
