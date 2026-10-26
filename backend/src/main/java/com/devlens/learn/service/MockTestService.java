package com.devlens.learn.service;

import com.devlens.learn.entity.LearnMockTest;
import com.devlens.learn.entity.LearnQuestion;
import com.devlens.learn.entity.LearnTestAttempt;
import com.devlens.learn.entity.LearnTestQuestion;
import com.devlens.learn.repository.LearnMockTestRepository;
import com.devlens.learn.repository.LearnQuestionRepository;
import com.devlens.learn.repository.LearnTestAttemptRepository;
import com.devlens.learn.repository.LearnTestQuestionRepository;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.*;
import java.util.stream.Collectors;

@Slf4j
@Service
@RequiredArgsConstructor
public class MockTestService {

    private final LearnMockTestRepository mockTestRepository;
    private final LearnTestQuestionRepository testQuestionRepository;
    private final LearnQuestionRepository questionRepository;
    private final LearnTestAttemptRepository attemptRepository;
    private final com.devlens.learn.repository.LearnUserRepository userRepository;
    private final com.devlens.learn.repository.LearnExamTypeRepository examTypeRepository;
    private final com.devlens.learn.repository.LearnTopicRepository topicRepository;
    private final ObjectMapper objectMapper;

    public List<LearnMockTest> getAvailableTests(UUID examTypeId) {
        return mockTestRepository.findByExamTypeId(examTypeId);
    }

    public LearnMockTest getTestDetails(UUID mockTestId) {
        return mockTestRepository.findById(mockTestId)
                .orElseThrow(() -> new com.devlens.api.exception.ResourceNotFoundException("Mock test not found: " + mockTestId));
    }

    public LearnTestAttempt getAttemptDetails(UUID attemptId) {
        return attemptRepository.findById(attemptId)
                .orElseThrow(() -> new com.devlens.api.exception.ResourceNotFoundException("Attempt not found: " + attemptId));
    }

    public Optional<com.devlens.learn.entity.LearnExamType> resolveExamTypeForGoal(String rawGoal) {
        if (rawGoal == null || rawGoal.trim().isEmpty()) return Optional.empty();
        String goal = rawGoal.trim();

        // 1. Direct name lookup
        Optional<com.devlens.learn.entity.LearnExamType> opt = examTypeRepository.findByNameIgnoreCase(goal);
        if (opt.isPresent()) return opt;

        // 2. Slug check
        String slug = goal.toLowerCase().replaceAll("[^a-z0-9]+", "-").replaceAll("^-|-$", "");
        opt = examTypeRepository.findBySlug(slug);
        if (opt.isPresent()) return opt;

        // 3. Normalized alias mapping
        String gUpper = goal.toUpperCase();
        if (gUpper.contains("12")) {
            opt = examTypeRepository.findBySlug("class-12");
            if (opt.isPresent()) return opt;
            opt = examTypeRepository.findBySlug("cbse-class-12");
            if (opt.isPresent()) return opt;
        } else if (gUpper.contains("11")) {
            opt = examTypeRepository.findBySlug("class-11");
            if (opt.isPresent()) return opt;
            opt = examTypeRepository.findBySlug("cbse-class-11");
            if (opt.isPresent()) return opt;
        } else if (gUpper.contains("10")) {
            opt = examTypeRepository.findBySlug("class-10");
            if (opt.isPresent()) return opt;
            opt = examTypeRepository.findBySlug("cbse-class-10");
            if (opt.isPresent()) return opt;
        } else if (gUpper.contains("9")) {
            opt = examTypeRepository.findBySlug("class-9");
            if (opt.isPresent()) return opt;
            opt = examTypeRepository.findBySlug("cbse-class-9");
            if (opt.isPresent()) return opt;
        } else if (gUpper.contains("JEE")) {
            opt = examTypeRepository.findBySlug("jee-mains");
            if (opt.isPresent()) return opt;
        } else if (gUpper.contains("NEET")) {
            opt = examTypeRepository.findBySlug("neet-ug");
            if (opt.isPresent()) return opt;
        } else if (gUpper.contains("SSC")) {
            opt = examTypeRepository.findBySlug("ssc-cgl");
            if (opt.isPresent()) return opt;
        } else if (gUpper.contains("UPSC")) {
            opt = examTypeRepository.findBySlug("upsc-cse");
            if (opt.isPresent()) return opt;
        }

        // 4. Substring search across active exam types
        List<com.devlens.learn.entity.LearnExamType> allTypes = examTypeRepository.findByIsActiveTrueOrderByDisplayOrderAsc();
        for (com.devlens.learn.entity.LearnExamType et : allTypes) {
            if (et.getName().equalsIgnoreCase(goal) || 
                (et.getFullName() != null && et.getFullName().equalsIgnoreCase(goal)) ||
                et.getName().toUpperCase().contains(gUpper) ||
                gUpper.contains(et.getName().toUpperCase())) {
                return Optional.of(et);
            }
        }

        return Optional.empty();
    }

    public List<com.devlens.learn.dto.MockTestSummaryDto> getMyTests(UUID userId) {
        com.devlens.learn.entity.LearnUser user = userRepository.findById(userId).orElseThrow();
        if (user.getExamGoal() == null) return List.of();
        
        Optional<com.devlens.learn.entity.LearnExamType> examTypeOpt = resolveExamTypeForGoal(user.getExamGoal());
        if (examTypeOpt.isEmpty()) return List.of();
        
        List<LearnMockTest> tests = mockTestRepository.findByExamTypeId(examTypeOpt.get().getId());
        
        // If tests list is empty for this specific exam type id, check if an alias exam type holds the tests
        if (tests.isEmpty()) {
            String slug = examTypeOpt.get().getSlug();
            if ("class-12".equals(slug) || "cbse-class-12".equals(slug)) {
                tests = mockTestRepository.findAll().stream()
                        .filter(t -> t.getTitle() != null && t.getTitle().contains("Class 12"))
                        .collect(Collectors.toList());
            } else if ("class-11".equals(slug) || "cbse-class-11".equals(slug)) {
                tests = mockTestRepository.findAll().stream()
                        .filter(t -> t.getTitle() != null && t.getTitle().contains("Class 11"))
                        .collect(Collectors.toList());
            } else if ("class-10".equals(slug) || "cbse-class-10".equals(slug)) {
                tests = mockTestRepository.findAll().stream()
                        .filter(t -> t.getTitle() != null && t.getTitle().contains("Class 10"))
                        .collect(Collectors.toList());
            } else if ("class-9".equals(slug) || "cbse-class-9".equals(slug)) {
                tests = mockTestRepository.findAll().stream()
                        .filter(t -> t.getTitle() != null && t.getTitle().contains("Class 9"))
                        .collect(Collectors.toList());
            }
        }

        List<LearnTestAttempt> userAttempts = attemptRepository.findByUserIdOrderByStartedAtDesc(userId);
        
        return tests.stream().map(test -> {
            com.devlens.learn.dto.MockTestSummaryDto dto = new com.devlens.learn.dto.MockTestSummaryDto();
            dto.setId(test.getId());
            dto.setTitle(test.getTitle());
            dto.setDurationMins(test.getDurationMins());
            dto.setTotalMarks(test.getTotalMarks());
            dto.setFree(test.isFree());
            
            // Find highest score among attempts for this test
            Optional<LearnTestAttempt> bestAttempt = userAttempts.stream()
                .filter(a -> a.getMockTestId().equals(test.getId()) && "COMPLETED".equals(a.getStatus()))
                .max(Comparator.comparing(a -> a.getScore() != null ? a.getScore() : java.math.BigDecimal.ZERO));
                
            if (bestAttempt.isPresent()) {
                dto.setTaken(true);
                dto.setScore(bestAttempt.get().getScore());
            } else {
                dto.setTaken(false);
            }
            return dto;
        }).collect(Collectors.toList());
    }

    @Transactional
    public LearnTestAttempt startTest(UUID userId, UUID mockTestId) {
        LearnMockTest mockTest = mockTestRepository.findById(mockTestId)
                .orElseThrow(() -> new RuntimeException("Mock test not found"));

        if (!mockTest.isFree()) {
            com.devlens.learn.entity.LearnUser user = userRepository.findById(userId)
                    .orElseThrow(() -> new RuntimeException("User not found"));
            
            if (user.getSubscriptionPlan() == null || 
                user.getSubscribedUntil() == null || 
                user.getSubscribedUntil().isBefore(LocalDateTime.now())) {
                throw new RuntimeException("Premium Mock Test! Please purchase a mock test pass.");
            }
        }

        LearnTestAttempt attempt = new LearnTestAttempt();
        attempt.setUserId(userId);
        attempt.setMockTestId(mockTestId);
        attempt.setStatus("IN_PROGRESS");
        attempt.setStartedAt(LocalDateTime.now());
        return attemptRepository.save(attempt);
    }

    public List<Map<String, Object>> getTestQuestions(UUID mockTestId) {
        List<LearnTestQuestion> testQuestions = testQuestionRepository.findByMockTestIdOrderByOrderIndexAsc(mockTestId);
        
        List<UUID> questionIds = testQuestions.stream().map(LearnTestQuestion::getQuestionId).collect(Collectors.toList());
        Map<UUID, LearnQuestion> questionMap = questionRepository.findAllById(questionIds).stream()
                .collect(Collectors.toMap(LearnQuestion::getId, q -> q));
        
        List<Map<String, Object>> result = new ArrayList<>();
        for (LearnTestQuestion tq : testQuestions) {
            LearnQuestion q = questionMap.get(tq.getQuestionId());
            if (q != null) {
                Map<String, Object> map = new HashMap<>();
                map.put("questionId", q.getId());
                map.put("text", q.getQuestionText());
                map.put("marks", tq.getMarks());
                map.put("section", tq.getSectionName());
                try {
                    map.put("options", objectMapper.readValue(q.getOptionsJson(), new TypeReference<Map<String, String>>() {}));
                } catch (Exception e) {
                    map.put("options", new HashMap<>());
                }
                result.add(map);
            }
        }
        return result;
    }

    @Transactional
    public LearnTestAttempt submitTest(UUID attemptId, Map<String, String> answers) {
        LearnTestAttempt attempt = attemptRepository.findById(attemptId)
                .orElseThrow(() -> new RuntimeException("Attempt not found"));

        if ("COMPLETED".equals(attempt.getStatus()) || "EVALUATING".equals(attempt.getStatus())) {
            throw new RuntimeException("Test already submitted");
        }

        LearnMockTest mockTest = mockTestRepository.findById(attempt.getMockTestId())
                .orElseThrow(() -> new RuntimeException("Mock test not found"));

        // Anti-Cheat: Server-Side Clock Enforcement
        // Add 60 seconds grace period for network latency
        LocalDateTime deadline = attempt.getStartedAt().plusMinutes(mockTest.getDurationMins()).plusSeconds(60);
        LocalDateTime now = LocalDateTime.now();
        if (now.isAfter(deadline)) {
            log.warn("Anti-Cheat Triggered: Attempt {} submitted late by user {}. Expected by {}, received at {}", 
                     attemptId, attempt.getUserId(), deadline, now);
            throw new RuntimeException("Submission rejected: Time limit exceeded. You cannot tamper with the timer.");
        }

        // 1. Instantly mark as EVALUATING to prevent duplicate submissions
        attempt.setStatus("EVALUATING");
        attempt.setSubmittedAt(now);
        try {
            attempt.setAnswersJson(objectMapper.writeValueAsString(answers));
        } catch (JsonProcessingException e) {
            log.error("Failed to serialize answers", e);
        }
        LearnTestAttempt savedAttempt = attemptRepository.save(attempt);

        // 2. Push to background in-memory queue (Spring Async ThreadPool)
        // This offloads the heavy DB query and calculations, freeing up Tomcat threads
        evaluateTestAsync(savedAttempt.getId(), savedAttempt.getMockTestId(), answers);

        return savedAttempt;
    }

    @org.springframework.scheduling.annotation.Async("mockTestSubmissionExecutor")
    @Transactional
    public void evaluateTestAsync(UUID attemptId, UUID mockTestId, Map<String, String> answers) {
        log.info("Processing mock test submission for attempt: {} in background queue", attemptId);
        
        try {
            LearnMockTest mockTest = mockTestRepository.findById(mockTestId)
                    .orElseThrow(() -> new RuntimeException("Mock test not found"));

            java.math.BigDecimal score = java.math.BigDecimal.ZERO;
            int correctCount = 0;
            int wrongCount = 0;
            
            // Heavy evaluation logic
            List<LearnTestQuestion> testQuestions = testQuestionRepository.findByMockTestIdOrderByOrderIndexAsc(mockTest.getId());
            
            List<UUID> questionIds = testQuestions.stream().map(LearnTestQuestion::getQuestionId).collect(Collectors.toList());
            Map<UUID, LearnQuestion> questionMap = questionRepository.findAllById(questionIds).stream()
                    .collect(Collectors.toMap(LearnQuestion::getId, q -> q));
            
            // Track topic-level stats: topicId -> [correctCount, totalQuestions]
            Map<UUID, int[]> topicCounts = new HashMap<>();

            for (LearnTestQuestion tq : testQuestions) {
                LearnQuestion q = questionMap.get(tq.getQuestionId());
                if (q != null) {
                    UUID tId = q.getTopicId();
                    if (tId != null) {
                        topicCounts.putIfAbsent(tId, new int[2]);
                        topicCounts.get(tId)[1]++; // total questions in topic
                    }

                    String userAnswer = answers.get(q.getId().toString());
                    if (userAnswer != null) {
                        if (userAnswer.equalsIgnoreCase(q.getCorrectAnswer())) {
                            score = score.add(new java.math.BigDecimal(tq.getMarks()));
                            correctCount++;
                            if (tId != null) {
                                topicCounts.get(tId)[0]++; // correct questions in topic
                            }
                        } else {
                            wrongCount++;
                            if (mockTest.getNegativeMarking() != null) {
                                score = score.subtract(mockTest.getNegativeMarking());
                            }
                        }
                    }
                }
            }

            // Build topic scores JSON list
            List<Map<String, Object>> topicScoresList = new ArrayList<>();
            for (Map.Entry<UUID, int[]> entry : topicCounts.entrySet()) {
                UUID tId = entry.getKey();
                int correct = entry.getValue()[0];
                int total = entry.getValue()[1];
                int acc = total > 0 ? (int) Math.round((correct * 100.0) / total) : 0;

                String topicTitle = "Topic";
                Optional<com.devlens.learn.entity.LearnTopic> topicOpt = topicRepository.findById(tId);
                if (topicOpt.isPresent() && topicOpt.get().getTitle() != null) {
                    topicTitle = topicOpt.get().getTitle();
                }

                Map<String, Object> tMap = new HashMap<>();
                tMap.put("topicId", tId.toString());
                tMap.put("topic", topicTitle);
                tMap.put("correct", correct);
                tMap.put("total", total);
                tMap.put("accuracy", acc);
                topicScoresList.add(tMap);
            }

            LearnTestAttempt attempt = attemptRepository.findById(attemptId).orElseThrow();
            attempt.setScore(score);
            attempt.setCorrectAnswers(correctCount);
            attempt.setWrongAnswers(wrongCount);

            try {
                attempt.setTopicScoresJson(objectMapper.writeValueAsString(topicScoresList));
            } catch (Exception e) {
                log.warn("Failed to serialize topic scores for attempt {}: {}", attemptId, e.getMessage());
            }
            
            if (attempt.getStartedAt() != null && attempt.getSubmittedAt() != null) {
                long duration = java.time.Duration.between(attempt.getStartedAt(), attempt.getSubmittedAt()).getSeconds();
                attempt.setTimeTakenSeconds(duration);
            } else {
                attempt.setTimeTakenSeconds(0L);
            }
            
            attempt.setStatus("COMPLETED");
            attemptRepository.save(attempt);
            log.info("Finished evaluating mock test for attempt: {}", attemptId);
            
        } catch (Exception e) {
            log.error("Error evaluating mock test attempt: " + attemptId, e);
            // In a real system, maybe set status to FAILED so user can retry submission
        }
    }

    public List<Map<String, Object>> getLeaderboard(UUID mockTestId) {
        List<LearnTestAttempt> rankedAttempts = attemptRepository.getLeaderboard(mockTestId);
        
        List<Map<String, Object>> leaderboard = new ArrayList<>();
        int rank = 1;
        for (LearnTestAttempt attempt : rankedAttempts) {
            Map<String, Object> map = new HashMap<>();
            map.put("rank", rank++);
            map.put("attemptId", attempt.getId());
            map.put("userId", attempt.getUserId()); // Can fetch user details if needed
            map.put("score", attempt.getScore());
            map.put("timeTakenSeconds", attempt.getTimeTakenSeconds());
            map.put("correctAnswers", attempt.getCorrectAnswers());
            map.put("wrongAnswers", attempt.getWrongAnswers());
            leaderboard.add(map);
        }
        
        return leaderboard;
    }
}
