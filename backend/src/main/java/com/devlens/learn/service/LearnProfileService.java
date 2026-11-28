package com.devlens.learn.service;

import com.devlens.learn.dto.LearnProfileResponse;
import com.devlens.learn.entity.LearnTestAttempt;
import com.devlens.learn.entity.LearnTransaction;
import com.devlens.learn.entity.LearnUser;
import com.devlens.learn.repository.LearnTestAttemptRepository;
import com.devlens.learn.repository.LearnTransactionRepository;
import com.devlens.learn.repository.LearnUserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.devlens.learn.entity.LearnQuestion;
import com.devlens.learn.entity.LearnTopic;
import com.devlens.learn.repository.LearnQuestionRepository;
import com.devlens.learn.repository.LearnTopicRepository;

import java.util.*;
import java.util.stream.Collectors;

@Slf4j
@Service
@RequiredArgsConstructor
public class LearnProfileService {

    private final LearnUserRepository userRepository;
    private final LearnTransactionRepository transactionRepository;
    private final LearnTestAttemptRepository testAttemptRepository;
    private final LearnQuestionRepository questionRepository;
    private final LearnTopicRepository topicRepository;
    private final com.devlens.learn.repository.LearnMockTestRepository mockTestRepository;
    private final LeaderboardService leaderboardService;
    private final com.devlens.learn.repository.LearnStudySessionRepository studySessionRepository;
    private final com.devlens.learn.repository.LearnXpLogRepository xpLogRepository;
    private final ObjectMapper objectMapper;

    public List<Map<String, Object>> getWeaknessHeatmap(UUID userId) {
        LearnUser user = userRepository.findById(userId).orElseThrow();
        if (!user.isPaidUser()) {
            throw new RuntimeException("PRO_ONLY");
        }

        List<LearnTestAttempt> attempts = testAttemptRepository.findByUserIdOrderByStartedAtDesc(userId).stream()
                .filter(a -> "COMPLETED".equalsIgnoreCase(a.getStatus()))
                .collect(Collectors.toList());

        if (attempts.isEmpty()) {
            return Collections.emptyList();
        }

        // Aggregate topic stats across all completed attempts: topicName -> [correctCount, totalCount]
        Map<String, int[]> cumulativeTopicStats = new HashMap<>();

        for (LearnTestAttempt attempt : attempts) {
            String topicScoresJson = attempt.getTopicScoresJson();
            if (topicScoresJson != null && !topicScoresJson.isBlank()) {
                try {
                    List<Map<String, Object>> list = objectMapper.readValue(
                        topicScoresJson,
                        new TypeReference<List<Map<String, Object>>>() {}
                    );
                    for (Map<String, Object> entry : list) {
                        String topic = (String) entry.get("topic");
                        int correct = ((Number) entry.getOrDefault("correct", 0)).intValue();
                        int total = ((Number) entry.getOrDefault("total", 0)).intValue();

                        if (topic != null && total > 0) {
                            cumulativeTopicStats.putIfAbsent(topic, new int[2]);
                            cumulativeTopicStats.get(topic)[0] += correct;
                            cumulativeTopicStats.get(topic)[1] += total;
                        }
                    }
                } catch (Exception e) {
                    log.warn("Failed to parse topicScoresJson for attempt {}: {}", attempt.getId(), e.getMessage());
                }
            } else if (attempt.getAnswersJson() != null && !attempt.getAnswersJson().isBlank()) {
                // Backward-compatibility: if an attempt was taken before topicScoresJson was populated,
                // we evaluate question topics from answersJson
                try {
                    Map<String, String> answers = objectMapper.readValue(
                        attempt.getAnswersJson(),
                        new TypeReference<Map<String, String>>() {}
                    );
                    List<UUID> qIds = answers.keySet().stream().map(UUID::fromString).collect(Collectors.toList());
                    List<LearnQuestion> questions = questionRepository.findAllById(qIds);
                    for (LearnQuestion q : questions) {
                        if (q.getTopicId() != null) {
                            String topicTitle = topicRepository.findById(q.getTopicId())
                                    .map(LearnTopic::getTitle)
                                    .orElse("General");
                            cumulativeTopicStats.putIfAbsent(topicTitle, new int[2]);
                            cumulativeTopicStats.get(topicTitle)[1]++;
                            String userAns = answers.get(q.getId().toString());
                            if (userAns != null && MockTestService.evaluateQuestionStatic(null, null, q, userAns).correct) {
                                cumulativeTopicStats.get(topicTitle)[0]++;
                            }
                        }
                    }
                } catch (Exception e) {
                    log.warn("Failed to compute backward-compatible topic scores for attempt {}: {}", attempt.getId(), e.getMessage());
                }
            }
        }

        if (cumulativeTopicStats.isEmpty()) {
            return Collections.emptyList();
        }

        // Build sorted heatmap: weakest topics first
        List<Map<String, Object>> heatmap = new ArrayList<>();
        for (Map.Entry<String, int[]> entry : cumulativeTopicStats.entrySet()) {
            String topic = entry.getKey();
            int correct = entry.getValue()[0];
            int total = entry.getValue()[1];
            int accuracy = total > 0 ? (int) Math.round((correct * 100.0) / total) : 0;

            String status;
            String color;
            if (accuracy < 40) {
                status = "CRITICAL";
                color = "#e11d48"; // Red
            } else if (accuracy < 60) {
                status = "WEAK";
                color = "#f43f5e"; // Rose
            } else if (accuracy < 80) {
                status = "GOOD";
                color = "#3b82f6"; // Blue
            } else {
                status = "STRONG";
                color = "#10b981"; // Emerald
            }

            Map<String, Object> map = new HashMap<>();
            map.put("topic", topic);
            map.put("accuracy", accuracy);
            map.put("status", status);
            map.put("color", color);
            map.put("totalQuestions", total);
            map.put("correctQuestions", correct);
            heatmap.add(map);
        }

        // Sort by accuracy ascending (weakest topics first so student knows what to improve)
        heatmap.sort((a, b) -> Integer.compare((int) a.get("accuracy"), (int) b.get("accuracy")));

        return heatmap;
    }

    @org.springframework.transaction.annotation.Transactional
    public LearnProfileResponse getProfile(UUID userId) {
        LearnUser user = userRepository.findById(userId)
                .orElseThrow(() -> new com.devlens.api.exception.ResourceNotFoundException("User not found"));

        List<LearnTransaction> txns = transactionRepository.findByUserIdOrderByCreatedAtDesc(userId);
        List<LearnTestAttempt> attempts = testAttemptRepository.findByUserIdOrderByStartedAtDesc(userId);

        LearnProfileResponse response = new LearnProfileResponse();
        response.setId(user.getId());
        response.setFullName(user.getFullName() != null ? user.getFullName() : "Student Name");
        response.setEmail(user.getEmail());
        response.setPhone(user.getPhone());
        response.setExamGoal(user.getExamGoal() != null ? user.getExamGoal() : "Not Set");
        response.setSubscriptionPlan(user.getSubscriptionPlan());
        response.setPaidUser(user.isPaidUser());
        response.setSubscribedUntil(user.getSubscribedUntil());
        response.setJoinedDate(user.getCreatedAt());

        // Unified completed stats calculation: ONLY completed attempts count as Tests Taken
        List<LearnTestAttempt> completedAttempts = attempts.stream()
                .filter(a -> "COMPLETED".equalsIgnoreCase(a.getStatus()))
                .collect(Collectors.toList());
        response.setTotalTestsTaken(completedAttempts.size());

        long totalCorrectAll = 0;
        long totalAttemptedAll = 0;
        long examTestSeconds = 0;
        for (LearnTestAttempt att : completedAttempts) {
            int correct = att.getCorrectAnswers() != null ? att.getCorrectAnswers() : 0;
            int wrong = att.getWrongAnswers() != null ? att.getWrongAnswers() : 0;
            totalCorrectAll += correct;
            totalAttemptedAll += (correct + wrong);

            if (att.getTimeTakenSeconds() != null && att.getTimeTakenSeconds() > 0) {
                examTestSeconds += att.getTimeTakenSeconds();
            } else if (att.getStartedAt() != null && att.getSubmittedAt() != null && !att.getSubmittedAt().isBefore(att.getStartedAt())) {
                long secs = java.time.Duration.between(att.getStartedAt(), att.getSubmittedAt()).getSeconds();
                examTestSeconds += Math.min(secs, 4 * 3600L);
            }
        }
        response.setAverageAccuracy(
                totalAttemptedAll > 0 ? Math.round(((totalCorrectAll * 100.0) / totalAttemptedAll) * 10.0) / 10.0 : 0.0
        );
        
        // Clean up any legacy PASSIVE sessions for this user so fake study time is cleared
        List<com.devlens.learn.entity.LearnStudySession> allSessions = studySessionRepository.findByUserId(userId);
        List<com.devlens.learn.entity.LearnStudySession> passiveSessions = allSessions.stream()
                .filter(s -> "PASSIVE".equalsIgnoreCase(s.getSessionType()))
                .collect(Collectors.toList());
        boolean userDirty = false;
        if (!passiveSessions.isEmpty()) {
            int passiveXpToRemove = passiveSessions.stream()
                    .mapToInt(s -> s.getEarnedXp() != null ? s.getEarnedXp() : 0)
                    .sum();
            studySessionRepository.deleteAll(passiveSessions);
            if (passiveXpToRemove > 0 && user.getTotalXp() != null) {
                user.setTotalXp(Math.max(0, user.getTotalXp() - passiveXpToRemove));
                userDirty = true;
            }
            List<com.devlens.learn.entity.LearnXpLog> passiveXpLogs = xpLogRepository.findByUserId(userId).stream()
                    .filter(l -> l.getActivityType() == com.devlens.learn.entity.LearnXpLog.ActivityType.STUDY_TIME && l.getPointsAwarded() == 5)
                    .collect(Collectors.toList());
            if (!passiveXpLogs.isEmpty()) {
                xpLogRepository.deleteAll(passiveXpLogs);
            }
        }

        // Real-time study minutes = Focus Timer sessions + completed Mock Test active minutes
        int focusMinutes = allSessions.stream()
                .filter(s -> "FOCUS_TIMER".equalsIgnoreCase(s.getSessionType()))
                .mapToInt(s -> s.getDurationMinutes() != null ? s.getDurationMinutes() : 0)
                .sum();
        int testMinutes = (int) Math.round(examTestSeconds / 60.0);
        if (testMinutes == 0 && examTestSeconds >= 20) {
            testMinutes = 1;
        }
        int studyMinutes = focusMinutes + testMinutes;
        if (!Objects.equals(user.getStudyMinutes(), studyMinutes)) {
            user.setStudyMinutes(studyMinutes);
            userDirty = true;
        }
        if (userDirty) {
            userRepository.save(user);
        }

        response.setStudyMinutes(studyMinutes);
        response.setStudyHours(studyMinutes / 60);

        if (studyMinutes <= 0) {
            response.setStudyTimeFormatted("0m");
        } else {
            int h = studyMinutes / 60;
            int m = studyMinutes % 60;
            if (h == 0) {
                response.setStudyTimeFormatted(m + "m");
            } else if (m == 0) {
                response.setStudyTimeFormatted(h + "h");
            } else {
                response.setStudyTimeFormatted(h + "h " + m + "m");
            }
        }
        
        // Authoritative XP & All-India Rank synchronized with Monthly Leaderboard
        try {
            java.time.LocalDate now = java.time.LocalDate.now();
            Map<String, Object> myRankData = leaderboardService.getMyRankForMonth(userId, now.getMonthValue(), now.getYear());
            int monthlyXp = ((Number) myRankData.getOrDefault("score", user.getTotalXp() != null ? user.getTotalXp() : 0)).intValue();
            response.setXpPoints(monthlyXp);

            Object myRank = myRankData.get("myRank");
            if (myRank instanceof Number && ((Number) myRank).intValue() > 0) {
                response.setGlobalRank("#" + myRank);
            } else {
                response.setGlobalRank("Unranked");
            }
        } catch (Exception e) {
            log.warn("Failed to fetch leaderboard rank for profile {}: {}", userId, e.getMessage());
            int xp = user.getTotalXp() != null ? user.getTotalXp() : 0;
            response.setXpPoints(xp);
            response.setGlobalRank("Unranked");
        }

        // Transactions mapping
        List<LearnProfileResponse.TransactionDto> txnDtos = txns.stream().map(txn -> {
            LearnProfileResponse.TransactionDto dto = new LearnProfileResponse.TransactionDto();
            dto.setId(txn.getRazorpayPaymentId() != null ? txn.getRazorpayPaymentId() : txn.getId().toString().substring(0, 8).toUpperCase());
            dto.setDate(txn.getCreatedAt());
            dto.setPlan(txn.getPlanName());
            dto.setAmount(txn.getAmount());
            dto.setStatus(txn.getStatus());
            return dto;
        }).collect(Collectors.toList());

        response.setTransactions(txnDtos);

        return response;
    }

    private int calculatePaidUserRank(UUID userId) {
        try {
            List<LearnUser> users = userRepository.findAll().stream()
                .filter(LearnUser::isPaidUser)
                .filter(u -> (u.getTotalXp() != null && u.getTotalXp() > 0))
                .collect(Collectors.toList());
            users.sort((u1, u2) -> Integer.compare(
                u2.getTotalXp() != null ? u2.getTotalXp() : 0,
                u1.getTotalXp() != null ? u1.getTotalXp() : 0
            ));
            for (int i = 0; i < users.size(); i++) {
                if (users.get(i).getId().equals(userId)) {
                    return i + 1;
                }
            }
        } catch (Exception ignored) {}
        return 1;
    }

    public String getStudyPlan(UUID userId) {
        LearnUser user = userRepository.findById(userId)
                .orElseThrow(() -> new com.devlens.api.exception.ResourceNotFoundException("User not found"));
        
        boolean isPaidUser = user.isPaidUser();
                
        if (!isPaidUser) {
            throw new org.springframework.web.server.ResponseStatusException(org.springframework.http.HttpStatus.FORBIDDEN, "Study Plan is available on Pro");
        }
        
        String plan = user.getCurrentStudyPlanJson();
        String goal = user.getExamGoal();
        
        // Auto-invalidate old plan if the user changed their goal class or competitive exam track
        if (plan != null && goal != null) {
            String gUpper = goal.toUpperCase();
            String planHeader = (plan.length() > 220 ? plan.substring(0, 220) : plan).toUpperCase();
            String goalNum = goal.replaceAll("[^0-9]", "");
            boolean mismatch = false;
            if (!goalNum.isEmpty() && !planHeader.contains(goalNum)) {
                mismatch = true;
            } else if (gUpper.contains("NEET") && !planHeader.contains("NEET")) {
                mismatch = true;
            } else if (gUpper.contains("JEE") && gUpper.contains("ADV") && !planHeader.contains("ADVANCED")) {
                mismatch = true;
            } else if (gUpper.contains("JEE") && !gUpper.contains("ADV") && (!planHeader.contains("JEE") || planHeader.contains("ADVANCED"))) {
                mismatch = true;
            }
            if (mismatch) {
                user.setCurrentStudyPlanJson(null);
                userRepository.save(user);
                return null;
            }
        }
        return plan;
    }

    public void updateStudyPlanTask(UUID userId, String taskId, Boolean completed) {
        if (taskId == null || taskId.trim().isEmpty() || completed == null) {
            throw new org.springframework.web.server.ResponseStatusException(org.springframework.http.HttpStatus.BAD_REQUEST, "taskId and completed status are required");
        }

        LearnUser user = userRepository.findById(userId)
                .orElseThrow(() -> new com.devlens.api.exception.ResourceNotFoundException("User not found"));
        
        boolean isPaidUser = user.getSubscriptionPlan() != null &&
                !user.getSubscriptionPlan().equalsIgnoreCase("FREE") &&
                (user.getSubscribedUntil() == null || user.getSubscribedUntil().isAfter(java.time.LocalDateTime.now()));
                
        if (!isPaidUser) {
            throw new org.springframework.web.server.ResponseStatusException(org.springframework.http.HttpStatus.FORBIDDEN, "Study Plan is available on Pro");
        }

        String planJson = user.getCurrentStudyPlanJson();
        if (planJson == null || planJson.isEmpty()) {
            throw new org.springframework.web.server.ResponseStatusException(org.springframework.http.HttpStatus.NOT_FOUND, "No active study plan found");
        }

        try {
            com.fasterxml.jackson.databind.node.ObjectNode plan = (com.fasterxml.jackson.databind.node.ObjectNode) objectMapper.readTree(planJson);
            com.fasterxml.jackson.databind.JsonNode modules = plan.get("modules");
            boolean found = false;

            if (modules != null && modules.isArray()) {
                for (com.fasterxml.jackson.databind.JsonNode module : modules) {
                    com.fasterxml.jackson.databind.JsonNode tasks = module.get("tasks");
                    if (tasks != null && tasks.isArray()) {
                        for (com.fasterxml.jackson.databind.JsonNode task : tasks) {
                            if (task.has("id") && task.get("id").asText().equals(taskId)) {
                                ((com.fasterxml.jackson.databind.node.ObjectNode) task).put("completed", completed);
                                found = true;
                                break;
                            }
                        }
                    }
                    if (found) break;
                }
            }

            if (!found) {
                throw new org.springframework.web.server.ResponseStatusException(org.springframework.http.HttpStatus.NOT_FOUND, "Task " + taskId + " not found in user's study plan");
            }

            user.setCurrentStudyPlanJson(objectMapper.writeValueAsString(plan));
            userRepository.save(user);
        } catch (org.springframework.web.server.ResponseStatusException e) {
            throw e;
        } catch (Exception e) {
            throw new org.springframework.web.server.ResponseStatusException(org.springframework.http.HttpStatus.INTERNAL_SERVER_ERROR, "Failed to update study plan");
        }
    }

    public void updatePhone(UUID userId, String phone) {
        LearnUser user = userRepository.findById(userId)
                .orElseThrow(() -> new com.devlens.api.exception.ResourceNotFoundException("User not found"));
        String cleanPhone = phone != null ? phone.replaceAll("\\D", "") : null;
        if (cleanPhone != null && cleanPhone.length() == 10) {
            user.setPhone(cleanPhone);
            userRepository.save(user);
        } else if (cleanPhone == null || cleanPhone.isEmpty()) {
            user.setPhone(null);
            userRepository.save(user);
        } else {
            throw new org.springframework.web.server.ResponseStatusException(
                    org.springframework.http.HttpStatus.BAD_REQUEST, "Phone number must be a valid 10-digit number");
        }
    }

    public void recordPaywallHit(UUID userId) {
        userRepository.findById(userId).ifPresent(user -> {
            user.setPaywallHitCount((user.getPaywallHitCount() != null ? user.getPaywallHitCount() : 0) + 1);
            userRepository.save(user);
        });
    }

    public LearnProfileResponse updateProfileDetails(UUID userId, String fullName, String examGoal) {
        LearnUser user = userRepository.findById(userId)
                .orElseThrow(() -> new com.devlens.api.exception.ResourceNotFoundException("User not found"));
        if (fullName != null && !fullName.trim().isEmpty()) {
            user.setFullName(fullName.trim());
        }
        if (examGoal != null && !examGoal.trim().isEmpty()) {
            String trimmedGoal = examGoal.trim();
            if (!trimmedGoal.equalsIgnoreCase(user.getExamGoal())) {
                user.setExamGoal(trimmedGoal);
                user.setCurrentStudyPlanJson(null);
            }
        }
        userRepository.save(user);
        return getProfile(userId);
    }

    static boolean matchesGoalTrack(String examGoal, com.devlens.learn.entity.LearnMockTest test) {
        if (examGoal == null || examGoal.isBlank() || test == null) return true;
        String g = examGoal.toLowerCase();
        String tInfo = ((test.getClassLevel() != null ? test.getClassLevel() : "") + " "
                + (test.getTitle() != null ? test.getTitle() : "")).toLowerCase();
        if (g.contains("neet")) {
            return tInfo.contains("neet");
        }
        if (g.contains("jee") && (g.contains("adv") || g.contains("iit"))) {
            return tInfo.contains("adv") || tInfo.contains("iit");
        }
        if (g.contains("jee")) {
            return tInfo.contains("jee") && !tInfo.contains("adv") && !tInfo.contains("iit");
        }
        String classNum = g.replaceAll("[^0-9]", "");
        if (!classNum.isEmpty() && test.getClassLevel() != null) {
            return test.getClassLevel().replaceAll("[^0-9]", "").equals(classNum);
        }
        return true;
    }

    public Map<String, Object> getCompetitiveAnalyticsSummary(UUID userId) {
        LearnUser user = userRepository.findById(userId)
                .orElseThrow(() -> new com.devlens.api.exception.ResourceNotFoundException("User not found"));

        String examGoal = user.getExamGoal() != null ? user.getExamGoal() : "JEE Mains";
        List<LearnTestAttempt> allCompleted = testAttemptRepository.findByUserIdOrderByStartedAtDesc(userId).stream()
                .filter(a -> "COMPLETED".equalsIgnoreCase(a.getStatus()))
                .collect(Collectors.toList());

        Map<UUID, com.devlens.learn.entity.LearnMockTest> testMap = Collections.emptyMap();
        if (!allCompleted.isEmpty()) {
            Set<UUID> testIds = allCompleted.stream().map(LearnTestAttempt::getMockTestId).collect(Collectors.toSet());
            testMap = mockTestRepository.findAllById(testIds).stream()
                    .collect(Collectors.toMap(com.devlens.learn.entity.LearnMockTest::getId, t -> t));
        }

        // Scope competitive analytics cleanly to the active examGoal track
        final Map<UUID, com.devlens.learn.entity.LearnMockTest> lookup = testMap;
        List<LearnTestAttempt> completed = allCompleted.stream()
                .filter(a -> matchesGoalTrack(examGoal, lookup.get(a.getMockTestId())))
                .collect(Collectors.toList());

        // Aggregate subject stats (correct, wrong, partial, total, netScore, maxMarks)
        Map<String, java.math.BigDecimal[]> subjectAgg = new LinkedHashMap<>();
        List<Map<String, Object>> recentHistory = new ArrayList<>();
        double totalPctSum = 0.0;
        int pctCount = 0;
        java.math.BigDecimal bestRaw = java.math.BigDecimal.ZERO;
        java.math.BigDecimal bestMax = java.math.BigDecimal.valueOf(100);
        double bestPct = -100.0;

        for (LearnTestAttempt att : completed) {
            com.devlens.learn.entity.LearnMockTest test = testMap.get(att.getMockTestId());
            int totalMarks = (test != null && test.getTotalMarks() != null && test.getTotalMarks() > 0)
                    ? test.getTotalMarks() : 100;
            java.math.BigDecimal rawScore = att.getScore() != null ? att.getScore() : java.math.BigDecimal.ZERO;
            double pct = (rawScore.doubleValue() / totalMarks) * 100.0;
            totalPctSum += pct;
            pctCount++;
            if (pct > bestPct) {
                bestPct = pct;
                bestRaw = rawScore;
                bestMax = java.math.BigDecimal.valueOf(totalMarks);
            }

            if (recentHistory.size() < 8) {
                Map<String, Object> h = new LinkedHashMap<>();
                h.put("attemptId", att.getId());
                h.put("testId", att.getMockTestId());
                h.put("title", test != null ? test.getTitle() : "Mock Test");
                h.put("score", rawScore);
                h.put("totalMarks", totalMarks);
                h.put("correctAnswers", att.getCorrectAnswers() != null ? att.getCorrectAnswers() : 0);
                h.put("wrongAnswers", att.getWrongAnswers() != null ? att.getWrongAnswers() : 0);
                h.put("submittedAt", att.getSubmittedAt());
                recentHistory.add(h);
            }

            if (att.getSubjectStatsJson() != null && !att.getSubjectStatsJson().isBlank()) {
                try {
                    List<Map<String, Object>> stats = objectMapper.readValue(
                            att.getSubjectStatsJson(),
                            new TypeReference<List<Map<String, Object>>>() {}
                    );
                    for (Map<String, Object> row : stats) {
                        String sub = String.valueOf(row.getOrDefault("subject", "General"));
                        subjectAgg.putIfAbsent(sub, new java.math.BigDecimal[] {
                            java.math.BigDecimal.ZERO, java.math.BigDecimal.ZERO, java.math.BigDecimal.ZERO,
                            java.math.BigDecimal.ZERO, java.math.BigDecimal.ZERO, java.math.BigDecimal.ZERO
                        });
                        java.math.BigDecimal[] acc = subjectAgg.get(sub);
                        acc[0] = acc[0].add(new java.math.BigDecimal(String.valueOf(row.getOrDefault("correct", 0))));
                        acc[1] = acc[1].add(new java.math.BigDecimal(String.valueOf(row.getOrDefault("wrong", 0))));
                        acc[2] = acc[2].add(new java.math.BigDecimal(String.valueOf(row.getOrDefault("partial", 0))));
                        acc[3] = acc[3].add(new java.math.BigDecimal(String.valueOf(row.getOrDefault("total", 0))));
                        acc[4] = acc[4].add(new java.math.BigDecimal(String.valueOf(row.getOrDefault("netScore", 0))));
                        acc[5] = acc[5].add(new java.math.BigDecimal(String.valueOf(row.getOrDefault("maxMarks", 0))));
                    }
                } catch (Exception ignored) {}
            }
        }

        List<Map<String, Object>> subjectBreakdown = new ArrayList<>();
        for (Map.Entry<String, java.math.BigDecimal[]> e : subjectAgg.entrySet()) {
            java.math.BigDecimal[] v = e.getValue();
            int c = v[0].intValue();
            int w = v[1].intValue();
            int p = v[2].intValue();
            int tot = v[3].intValue();
            int att = c + w + p;
            int accPct = att > 0 ? (int) Math.round(((c + p * 0.5) * 100.0) / att) : 0;
            Map<String, Object> sMap = new LinkedHashMap<>();
            sMap.put("subject", e.getKey());
            sMap.put("correct", c);
            sMap.put("wrong", w);
            sMap.put("partial", p);
            sMap.put("total", tot);
            sMap.put("netScore", v[4]);
            sMap.put("maxMarks", v[5]);
            sMap.put("accuracy", accPct);
            subjectBreakdown.add(sMap);
        }

        // Extract deduplicated top recent mistakes for Auto-Healing Mistake Notebook
        List<Map<String, Object>> recentMistakes = new ArrayList<>();
        Set<String> seenMistakeIds = new HashSet<>();
        Map<String, Integer> weakChapters = new LinkedHashMap<>();
        int scannedAttempts = 0;
        for (LearnTestAttempt att : completed) {
            if (scannedAttempts >= 5 || recentMistakes.size() >= 12) break;
            if (att.getAnswersJson() == null || att.getAnswersJson().isBlank()) continue;
            scannedAttempts++;
            com.devlens.learn.entity.LearnMockTest mockTest = testMap.get(att.getMockTestId());
            try {
                Map<String, String> ansMap = objectMapper.readValue(att.getAnswersJson(), new TypeReference<Map<String, String>>() {});
                if (ansMap.isEmpty()) continue;
                List<UUID> qIds = new ArrayList<>();
                for (String k : ansMap.keySet()) {
                    try { qIds.add(UUID.fromString(k)); } catch (Exception ignored) {}
                }
                if (qIds.isEmpty()) continue;
                for (LearnQuestion q : questionRepository.findAllById(qIds)) {
                    String qIdStr = q.getId().toString();
                    String uAns = ansMap.get(qIdStr);
                    if (uAns == null || uAns.isBlank()) continue;
                    MockTestService.QuestionEvaluation ev = MockTestService.evaluateQuestionStatic(mockTest, null, q, uAns);
                    if (ev.evaluatable && !ev.correct) {
                        String ch = q.getChapter() != null && !q.getChapter().isBlank() ? q.getChapter() : (q.getSubject() != null ? q.getSubject() : "General");
                        weakChapters.put(ch, weakChapters.getOrDefault(ch, 0) + 1);
                        if (recentMistakes.size() < 12 && seenMistakeIds.add(qIdStr)) {
                            Map<String, Object> m = new LinkedHashMap<>();
                            m.put("questionId", qIdStr);
                            m.put("subject", q.getSubject() != null ? q.getSubject() : "General");
                            m.put("chapter", ch);
                            m.put("questionText", q.getQuestionText());
                            m.put("userAnswer", uAns);
                            m.put("correctAnswer", q.getCorrectAnswer());
                            m.put("explanation", q.getExplanation());
                            recentMistakes.add(m);
                        }
                    }
                }
            } catch (Exception ignored) {}
        }

        double avgPct = pctCount > 0 ? (totalPctSum / pctCount) : 0.0;
        Map<String, Object> prediction = CompetitiveAnalyticsCalculator.predictOutcome(
                examGoal,
                pctCount > 0 ? java.math.BigDecimal.valueOf(avgPct) : java.math.BigDecimal.ZERO,
                java.math.BigDecimal.valueOf(100)
        );
        Map<String, Object> bestPrediction = CompetitiveAnalyticsCalculator.predictOutcome(examGoal, bestRaw, bestMax);

        Map<String, Object> resp = new LinkedHashMap<>();
        resp.put("examGoal", examGoal);
        resp.put("completedTests", completed.size());
        resp.put("averagePercentage", Math.round(avgPct * 10.0) / 10.0);
        resp.put("prediction", prediction);
        resp.put("bestPrediction", bestPrediction);
        resp.put("subjectBreakdown", subjectBreakdown);
        resp.put("recentMistakes", recentMistakes);
        resp.put("weakChapters", weakChapters);
        resp.put("recentHistory", recentHistory);
        return resp;
    }
}
