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
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

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

        // 1. Direct name lookup (safe even if duplicate display names exist)
        List<com.devlens.learn.entity.LearnExamType> nameMatches = examTypeRepository.findAllByNameIgnoreCase(goal);
        if (!nameMatches.isEmpty()) return Optional.of(nameMatches.get(0));

        // 2. Slug check
        String slug = goal.toLowerCase().replaceAll("[^a-z0-9]+", "-").replaceAll("^-|-$", "");
        Optional<com.devlens.learn.entity.LearnExamType> opt = examTypeRepository.findBySlug(slug);
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
        } else if (gUpper.contains("JEE") && (gUpper.contains("ADV") || gUpper.contains("IIT"))) {
            opt = examTypeRepository.findBySlug("jee-advanced");
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

    private Set<UUID> resolveAllMatchingExamTypeIds(String rawGoal) {
        Set<UUID> ids = new LinkedHashSet<>();
        if (rawGoal == null || rawGoal.trim().isEmpty()) return ids;
        String goal = rawGoal.trim();
        String gUpper = goal.toUpperCase();

        examTypeRepository.findAllByNameIgnoreCase(goal).forEach(et -> ids.add(et.getId()));

        String slug = goal.toLowerCase().replaceAll("[^a-z0-9]+", "-").replaceAll("^-|-$", "");
        examTypeRepository.findBySlug(slug).ifPresent(et -> ids.add(et.getId()));

        List<String> aliasSlugs = new ArrayList<>();
        if (gUpper.contains("12")) aliasSlugs.addAll(List.of("class-12", "cbse-class-12"));
        else if (gUpper.contains("11")) aliasSlugs.addAll(List.of("class-11", "cbse-class-11"));
        else if (gUpper.contains("10")) aliasSlugs.addAll(List.of("class-10", "cbse-class-10"));
        else if (gUpper.contains("9")) aliasSlugs.addAll(List.of("class-9", "cbse-class-9"));
        else if (gUpper.contains("JEE") && (gUpper.contains("ADV") || gUpper.contains("IIT"))) aliasSlugs.add("jee-advanced");
        else if (gUpper.contains("JEE")) aliasSlugs.add("jee-mains");
        else if (gUpper.contains("NEET")) aliasSlugs.add("neet-ug");
        else if (gUpper.contains("SSC")) aliasSlugs.add("ssc-cgl");
        else if (gUpper.contains("UPSC")) aliasSlugs.add("upsc-cse");

        for (String alias : aliasSlugs) {
            examTypeRepository.findBySlug(alias).ifPresent(et -> ids.add(et.getId()));
        }

        if (ids.isEmpty()) {
            resolveExamTypeForGoal(goal).ifPresent(et -> ids.add(et.getId()));
        }
        return ids;
    }

    public List<com.devlens.learn.dto.MockTestSummaryDto> getMyTests(UUID userId) {
        return getMyTests(userId, null, null);
    }

    public List<com.devlens.learn.dto.MockTestSummaryDto> getMyTests(UUID userId, String subjectFilter, String typeFilter) {
        com.devlens.learn.entity.LearnUser user = userRepository.findById(userId).orElseThrow();
        if (user.getExamGoal() == null) return List.of();
        
        Set<UUID> examTypeIds = resolveAllMatchingExamTypeIds(user.getExamGoal());
        if (examTypeIds.isEmpty()) return List.of();
        
        List<LearnMockTest> tests;
        if (subjectFilter != null && !subjectFilter.trim().isEmpty() && !"ALL".equalsIgnoreCase(subjectFilter.trim())) {
            if (typeFilter != null && !typeFilter.trim().isEmpty() && !"ALL".equalsIgnoreCase(typeFilter.trim())) {
                tests = mockTestRepository.findByExamTypeIdInAndSubjectIgnoreCaseAndTestTypeIgnoreCase(examTypeIds, subjectFilter.trim(), typeFilter.trim());
            } else {
                tests = mockTestRepository.findByExamTypeIdInAndSubjectIgnoreCase(examTypeIds, subjectFilter.trim());
            }
        } else {
            tests = mockTestRepository.findByExamTypeIdIn(examTypeIds);
            if (typeFilter != null && !typeFilter.trim().isEmpty() && !"ALL".equalsIgnoreCase(typeFilter.trim())) {
                tests = tests.stream()
                        .filter(t -> t.getTestType() != null && t.getTestType().equalsIgnoreCase(typeFilter.trim()))
                        .collect(Collectors.toList());
            }
        }
        
        // Fallback: check title match if no tests were linked directly to matching examTypeIds
        if (tests.isEmpty()) {
            String gUpper = user.getExamGoal().toUpperCase();
            String token = null;
            if (gUpper.contains("12")) token = "Class 12";
            else if (gUpper.contains("11")) token = "Class 11";
            else if (gUpper.contains("10")) token = "Class 10";
            else if (gUpper.contains("9")) token = "Class 9";
            else if (gUpper.contains("JEE") && (gUpper.contains("ADV") || gUpper.contains("IIT"))) token = "JEE Advanced";
            else if (gUpper.contains("JEE")) token = "JEE Main";
            else if (gUpper.contains("NEET")) token = "NEET";
            if (token != null) {
                final String matchToken = token;
                tests = mockTestRepository.findAll().stream()
                        .filter(t -> t.getTitle() != null && t.getTitle().contains(matchToken))
                        .filter(t -> {
                            if (subjectFilter != null && !subjectFilter.trim().isEmpty() && !"ALL".equalsIgnoreCase(subjectFilter.trim())) {
                                return (t.getSubject() != null && t.getSubject().equalsIgnoreCase(subjectFilter.trim())) ||
                                       (t.getTitle() != null && t.getTitle().toLowerCase().contains(subjectFilter.trim().toLowerCase()));
                            }
                            return true;
                        })
                        .filter(t -> {
                            if (typeFilter != null && !typeFilter.trim().isEmpty() && !"ALL".equalsIgnoreCase(typeFilter.trim())) {
                                return t.getTestType() != null && t.getTestType().equalsIgnoreCase(typeFilter.trim());
                            }
                            return true;
                        })
                        .collect(Collectors.toList());
            }
        }

        tests.sort(Comparator
                .comparing(LearnMockTest::isFree).reversed()
                .thenComparing(t -> t.getId().toString()));

        List<LearnTestAttempt> userAttempts = attemptRepository.findByUserIdOrderByStartedAtDesc(userId);
        
        return tests.stream().map(test -> {
            com.devlens.learn.dto.MockTestSummaryDto dto = new com.devlens.learn.dto.MockTestSummaryDto();
            dto.setId(test.getId());
            dto.setTitle(test.getTitle());
            dto.setDurationMins(test.getDurationMins());
            dto.setTotalMarks(test.getTotalMarks());
            dto.setFree(test.isFree());
            dto.setSubject(test.getSubject());
            dto.setTestType(test.getTestType() != null ? test.getTestType() : "FULL");
            dto.setClassLevel(test.getClassLevel() != null ? test.getClassLevel() : "Class 9");
            dto.setPaperPairId(test.getPaperPairId());
            dto.setPaperNumber(test.getPaperNumber());
            
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
                .orElseThrow(() -> new com.devlens.api.exception.ResourceNotFoundException("Mock test not found: " + mockTestId));

        if (!mockTest.isFree()) {
            com.devlens.learn.entity.LearnUser user = userRepository.findById(userId)
                    .orElseThrow(() -> new com.devlens.api.exception.ResourceNotFoundException("User not found"));
            
            if (!user.isPaidUser()) {
                throw new ResponseStatusException(
                        HttpStatus.FORBIDDEN,
                        "Premium Mock Test! Please upgrade your Exam Pass to unlock all full-length papers."
                );
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
        LearnMockTest mockTest = mockTestRepository.findById(mockTestId).orElse(null);
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
                map.put("marks", tq.getMarks() != null ? tq.getMarks() : (q.getMarks() != null ? q.getMarks() : 1));
                map.put("negativeMarks", resolveEffectiveNegativeMarks(mockTest, tq, q));
                map.put("section", tq.getSectionName());
                map.put("subject", resolveEffectiveSubject(tq, q));
                map.put("questionType", q.getQuestionType() != null ? q.getQuestionType() : "MCQ");
                map.put("partialMarkingRule", q.getPartialMarkingRule());
                map.put("syllabusTag", q.getSyllabusTag());
                map.put("casePassage", q.getCasePassage());
                map.put("chapter", q.getChapter());
                map.put("internalChoiceGroup", tq.getInternalChoiceGroup());
                map.put("questionSubNum", tq.getQuestionSubNum());
                try {
                    if (q.getOptionsJson() != null && !q.getOptionsJson().trim().isEmpty()) {
                        map.put("options", objectMapper.readValue(q.getOptionsJson(), new TypeReference<Map<String, String>>() {}));
                    } else {
                        map.put("options", new HashMap<>());
                    }
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
            
            // Track topic-level & subject-level stats
            Map<UUID, int[]> topicCounts = new HashMap<>();
            // subjectStats: [correct, wrong, partial, total, maxMarksScaled100, netScoreScaled100]
            Map<String, java.math.BigDecimal[]> subjectStatsMap = new LinkedHashMap<>();

            for (LearnTestQuestion tq : testQuestions) {
                LearnQuestion q = questionMap.get(tq.getQuestionId());
                if (q != null) {
                    int qMarks = tq.getMarks() != null ? tq.getMarks() : (q.getMarks() != null ? q.getMarks() : 1);
                    String effSubject = resolveEffectiveSubject(tq, q);
                    subjectStatsMap.putIfAbsent(effSubject, new java.math.BigDecimal[] {
                        java.math.BigDecimal.ZERO, java.math.BigDecimal.ZERO, java.math.BigDecimal.ZERO,
                        java.math.BigDecimal.ZERO, java.math.BigDecimal.ZERO, java.math.BigDecimal.ZERO
                    });
                    java.math.BigDecimal[] sRow = subjectStatsMap.get(effSubject);
                    sRow[3] = sRow[3].add(java.math.BigDecimal.ONE); // total
                    sRow[4] = sRow[4].add(new java.math.BigDecimal(qMarks)); // maxMarks

                    UUID tId = q.getTopicId();
                    if (tId != null) {
                        topicCounts.putIfAbsent(tId, new int[2]);
                        topicCounts.get(tId)[1]++; // total questions in topic
                    }

                    String userAnswer = answers.get(q.getId().toString());
                    QuestionEvaluation eval = evaluateQuestion(mockTest, tq, q, userAnswer);
                    if (eval.evaluatable) {
                        score = score.add(eval.deltaScore);
                        sRow[5] = sRow[5].add(eval.deltaScore);
                        if (eval.correct) {
                            correctCount++;
                            sRow[0] = sRow[0].add(java.math.BigDecimal.ONE);
                            if (tId != null) topicCounts.get(tId)[0]++;
                        } else if (eval.partial) {
                            sRow[2] = sRow[2].add(java.math.BigDecimal.ONE);
                        } else if (eval.wrong) {
                            wrongCount++;
                            sRow[1] = sRow[1].add(java.math.BigDecimal.ONE);
                        }
                    }
                }
            }

            List<Map<String, Object>> subjectStatsList = new ArrayList<>();
            for (Map.Entry<String, java.math.BigDecimal[]> entry : subjectStatsMap.entrySet()) {
                java.math.BigDecimal[] v = entry.getValue();
                int c = v[0].intValue();
                int w = v[1].intValue();
                int p = v[2].intValue();
                int tot = v[3].intValue();
                int attempted = c + w + p;
                int acc = attempted > 0 ? (int) Math.round(((c + p * 0.5) * 100.0) / attempted) : 0;
                Map<String, Object> sMap = new HashMap<>();
                sMap.put("subject", entry.getKey());
                sMap.put("correct", c);
                sMap.put("wrong", w);
                sMap.put("partial", p);
                sMap.put("unattempted", Math.max(0, tot - attempted));
                sMap.put("total", tot);
                sMap.put("netScore", v[5]);
                sMap.put("maxMarks", v[4]);
                sMap.put("accuracy", acc);
                subjectStatsList.add(sMap);
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
                attempt.setSubjectStatsJson(objectMapper.writeValueAsString(subjectStatsList));
            } catch (Exception e) {
                log.warn("Failed to serialize topic/subject scores for attempt {}: {}", attemptId, e.getMessage());
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

    public Map<String, Object> getAttemptReview(UUID attemptId) {
        LearnTestAttempt attempt = attemptRepository.findById(attemptId)
                .orElseThrow(() -> new com.devlens.api.exception.ResourceNotFoundException("Attempt not found: " + attemptId));

        LearnMockTest test = mockTestRepository.findById(attempt.getMockTestId()).orElse(null);
        List<LearnTestQuestion> testQuestions = testQuestionRepository.findByMockTestIdOrderByOrderIndexAsc(attempt.getMockTestId());
        
        List<UUID> questionIds = testQuestions.stream().map(LearnTestQuestion::getQuestionId).collect(Collectors.toList());
        Map<UUID, LearnQuestion> questionMap = questionRepository.findAllById(questionIds).stream()
                .collect(Collectors.toMap(LearnQuestion::getId, q -> q));

        Map<String, String> userAnswers = new HashMap<>();
        if (attempt.getAnswersJson() != null) {
            try {
                userAnswers = objectMapper.readValue(attempt.getAnswersJson(), new TypeReference<Map<String, String>>() {});
            } catch (Exception ignored) {}
        }

        List<Map<String, Object>> questionsReview = new ArrayList<>();
        for (LearnTestQuestion tq : testQuestions) {
            LearnQuestion q = questionMap.get(tq.getQuestionId());
            if (q != null) {
                Map<String, Object> qMap = new HashMap<>();
                qMap.put("questionId", q.getId());
                qMap.put("text", q.getQuestionText());
                qMap.put("section", tq.getSectionName());
                qMap.put("subject", resolveEffectiveSubject(tq, q));
                qMap.put("marks", tq.getMarks() != null ? tq.getMarks() : q.getMarks());
                qMap.put("negativeMarks", resolveEffectiveNegativeMarks(test, tq, q));
                qMap.put("questionType", q.getQuestionType() != null ? q.getQuestionType() : "MCQ");
                qMap.put("partialMarkingRule", q.getPartialMarkingRule());
                qMap.put("syllabusTag", q.getSyllabusTag());
                qMap.put("casePassage", q.getCasePassage());
                qMap.put("chapter", q.getChapter());
                qMap.put("internalChoiceGroup", tq.getInternalChoiceGroup());
                qMap.put("questionSubNum", tq.getQuestionSubNum());
                qMap.put("explanation", q.getExplanation());
                qMap.put("modelAnswer", q.getModelAnswer());
                qMap.put("markingSchemeJson", q.getMarkingSchemeJson());
                qMap.put("correctAnswer", q.getCorrectAnswer());

                String uAns = userAnswers.get(q.getId().toString());
                qMap.put("userAnswer", uAns);

                QuestionEvaluation eval = evaluateQuestion(test, tq, q, uAns);
                if (eval.evaluatable) {
                    qMap.put("isCorrect", eval.correct);
                    qMap.put("isPartial", eval.partial);
                    qMap.put("earnedMarks", eval.deltaScore);
                }

                try {
                    if (q.getOptionsJson() != null && !q.getOptionsJson().trim().isEmpty()) {
                        qMap.put("options", objectMapper.readValue(q.getOptionsJson(), new TypeReference<Map<String, String>>() {}));
                    }
                } catch (Exception ignored) {}

                questionsReview.add(qMap);
            }
        }

        Map<String, Object> result = new HashMap<>();
        result.put("attempt", attempt);
        result.put("mockTest", test);
        result.put("questions", questionsReview);
        return result;
    }

    static final class QuestionEvaluation {
        final boolean evaluatable;
        final boolean correct;
        final boolean partial;
        final boolean wrong;
        final java.math.BigDecimal deltaScore;

        QuestionEvaluation(boolean evaluatable, boolean correct, boolean partial, boolean wrong, java.math.BigDecimal deltaScore) {
            this.evaluatable = evaluatable;
            this.correct = correct;
            this.partial = partial;
            this.wrong = wrong;
            this.deltaScore = deltaScore;
        }
    }

    private java.math.BigDecimal resolveEffectiveNegativeMarks(LearnMockTest mockTest, LearnTestQuestion tq, LearnQuestion q) {
        return resolveEffectiveNegativeMarksStatic(mockTest, tq, q);
    }

    static java.math.BigDecimal resolveEffectiveNegativeMarksStatic(LearnMockTest mockTest, LearnTestQuestion tq, LearnQuestion q) {
        if (tq != null && tq.getNegativeMarks() != null) {
            return tq.getNegativeMarks().max(java.math.BigDecimal.ZERO);
        }
        if (q != null && q.getNegativeMarks() != null) {
            return q.getNegativeMarks().max(java.math.BigDecimal.ZERO);
        }
        if (mockTest != null && mockTest.getNegativeMarking() != null) {
            return mockTest.getNegativeMarking().max(java.math.BigDecimal.ZERO);
        }
        return java.math.BigDecimal.ZERO;
    }

    private String resolveEffectiveSubject(LearnTestQuestion tq, LearnQuestion q) {
        if (tq != null && tq.getSubjectLabel() != null && !tq.getSubjectLabel().isBlank()) {
            return tq.getSubjectLabel().trim();
        }
        if (q != null && q.getSubject() != null && !q.getSubject().isBlank()) {
            return q.getSubject().trim();
        }
        if (tq != null && tq.getSectionName() != null) {
            String sec = tq.getSectionName().toLowerCase();
            if (sec.contains("phy")) return "Physics";
            if (sec.contains("chem")) return "Chemistry";
            if (sec.contains("math")) return "Mathematics";
            if (sec.contains("bot")) return "Botany";
            if (sec.contains("zoo")) return "Zoology";
            if (sec.contains("bio")) return "Biology";
        }
        return "General";
    }

    QuestionEvaluation evaluateQuestion(LearnMockTest mockTest, LearnTestQuestion tq, LearnQuestion q, String rawUserAnswer) {
        return evaluateQuestionStatic(mockTest, tq, q, rawUserAnswer);
    }

    static QuestionEvaluation evaluateQuestionStatic(LearnMockTest mockTest, LearnTestQuestion tq, LearnQuestion q, String rawUserAnswer) {
        if (q == null || rawUserAnswer == null || rawUserAnswer.trim().isEmpty()) {
            return new QuestionEvaluation(false, false, false, false, java.math.BigDecimal.ZERO);
        }
        String qType = q.getQuestionType() != null ? q.getQuestionType().trim().toUpperCase() : "MCQ";
        int qMarks = (tq != null && tq.getMarks() != null) ? tq.getMarks() : (q.getMarks() != null ? q.getMarks() : 1);
        java.math.BigDecimal posMarks = new java.math.BigDecimal(qMarks);
        java.math.BigDecimal negMarks = resolveEffectiveNegativeMarksStatic(mockTest, tq, q);
        String userAns = rawUserAnswer.trim();

        if ("MCQ".equals(qType) || "SCQ".equals(qType) || "ASSERTION_REASON".equals(qType)
                || "STATEMENT".equals(qType) || "PARAGRAPH".equals(qType) || "MATRIX_MATCH".equals(qType)) {
            if (q.getCorrectAnswer() != null && userAns.equalsIgnoreCase(q.getCorrectAnswer().trim())) {
                return new QuestionEvaluation(true, true, false, false, posMarks);
            }
            return new QuestionEvaluation(true, false, false, true, negMarks.negate());
        }

        if ("NUMERICAL".equals(qType) || "INTEGER".equals(qType)) {
            boolean matched = false;
            try {
                java.math.BigDecimal uVal = new java.math.BigDecimal(userAns.replace(",", ""));
                if (q.getToleranceMin() != null && q.getToleranceMax() != null) {
                    matched = uVal.compareTo(q.getToleranceMin()) >= 0 && uVal.compareTo(q.getToleranceMax()) <= 0;
                } else if (q.getCorrectAnswer() != null && !q.getCorrectAnswer().isBlank()) {
                    try {
                        java.math.BigDecimal eVal = new java.math.BigDecimal(q.getCorrectAnswer().trim().replace(",", ""));
                        matched = uVal.compareTo(eVal) == 0;
                    } catch (NumberFormatException nfe) {
                        matched = userAns.equalsIgnoreCase(q.getCorrectAnswer().trim());
                    }
                }
            } catch (NumberFormatException e) {
                matched = false;
            }
            if (matched) {
                return new QuestionEvaluation(true, true, false, false, posMarks);
            }
            return new QuestionEvaluation(true, false, false, true, negMarks.negate());
        }

        if ("MSQ".equals(qType)) {
            Set<String> expectedSet = parseOptionTokensStatic(q.getCorrectAnswer());
            Set<String> userSet = parseOptionTokensStatic(userAns);
            if (expectedSet.isEmpty() || userSet.isEmpty()) {
                return new QuestionEvaluation(false, false, false, false, java.math.BigDecimal.ZERO);
            }
            boolean hasWrongSelection = userSet.stream().anyMatch(opt -> !expectedSet.contains(opt));
            if (hasWrongSelection) {
                java.math.BigDecimal msqNeg = (q.getNegativeMarks() == null && "IIT_MSQ".equalsIgnoreCase(q.getPartialMarkingRule()) && negMarks.compareTo(java.math.BigDecimal.ZERO) == 0)
                        ? new java.math.BigDecimal("2")
                        : negMarks;
                return new QuestionEvaluation(true, false, false, true, msqNeg.negate());
            }
            if (userSet.equals(expectedSet)) {
                return new QuestionEvaluation(true, true, false, false, posMarks);
            }
            boolean allowPartial = "IIT_MSQ".equalsIgnoreCase(q.getPartialMarkingRule()) || qMarks == 4;
            if (allowPartial) {
                int matched = userSet.size();
                int totalExpected = expectedSet.size();
                int partialPts;
                if (totalExpected == 4 && matched == 3) partialPts = 3;
                else if (totalExpected >= 3 && matched == 2) partialPts = 2;
                else partialPts = 1;
                partialPts = Math.min(partialPts, Math.max(1, qMarks - 1));
                return new QuestionEvaluation(true, false, true, false, new java.math.BigDecimal(partialPts));
            }
            return new QuestionEvaluation(true, false, false, true, negMarks.negate());
        }

        return new QuestionEvaluation(false, false, false, false, java.math.BigDecimal.ZERO);
    }

    private static Set<String> parseOptionTokensStatic(String raw) {
        Set<String> tokens = new LinkedHashSet<>();
        if (raw == null || raw.isBlank()) return tokens;
        for (String part : raw.split("[,;|\\s]+")) {
            String trimmed = part.trim().toUpperCase();
            if (!trimmed.isEmpty()) tokens.add(trimmed);
        }
        return tokens;
    }
}
