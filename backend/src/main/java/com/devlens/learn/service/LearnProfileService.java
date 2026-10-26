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
                            if (userAns != null && userAns.equalsIgnoreCase(q.getCorrectAnswer())) {
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

        // Stats calculation
        response.setTotalTestsTaken(attempts.size());
        
        if (!attempts.isEmpty()) {
            double totalAcc = 0;
            int validAttempts = 0;
            for (LearnTestAttempt att : attempts) {
                if ("COMPLETED".equals(att.getStatus())) {
                    int correct = att.getCorrectAnswers() != null ? att.getCorrectAnswers() : 0;
                    int wrong = att.getWrongAnswers() != null ? att.getWrongAnswers() : 0;
                    int total = correct + wrong;
                    if (total > 0) {
                        totalAcc += ((double) correct / total) * 100;
                        validAttempts++;
                    }
                }
            }
            response.setAverageAccuracy(validAttempts > 0 ? (totalAcc / validAttempts) : 0.0);
        } else {
            response.setAverageAccuracy(0.0);
        }
        
        // Clean up any legacy PASSIVE sessions for this user so fake study time is cleared
        List<com.devlens.learn.entity.LearnStudySession> passiveSessions = studySessionRepository.findByUserId(userId).stream()
                .filter(s -> "PASSIVE".equalsIgnoreCase(s.getSessionType()))
                .collect(Collectors.toList());
        if (!passiveSessions.isEmpty()) {
            int passiveXpToRemove = passiveSessions.stream()
                    .mapToInt(s -> s.getEarnedXp() != null ? s.getEarnedXp() : 0)
                    .sum();
            studySessionRepository.deleteAll(passiveSessions);
            if (passiveXpToRemove > 0 && user.getTotalXp() != null) {
                user.setTotalXp(Math.max(0, user.getTotalXp() - passiveXpToRemove));
            }
            List<com.devlens.learn.entity.LearnXpLog> passiveXpLogs = xpLogRepository.findByUserId(userId).stream()
                    .filter(l -> l.getActivityType() == com.devlens.learn.entity.LearnXpLog.ActivityType.STUDY_TIME && l.getPointsAwarded() == 5)
                    .collect(Collectors.toList());
            if (!passiveXpLogs.isEmpty()) {
                xpLogRepository.deleteAll(passiveXpLogs);
            }
        }

        // Real-time study hours & minutes calculation strictly from active FOCUS_TIMER sessions
        int studyMinutes = studySessionRepository.findByUserId(userId).stream()
                .filter(s -> "FOCUS_TIMER".equalsIgnoreCase(s.getSessionType()))
                .mapToInt(s -> s.getDurationMinutes() != null ? s.getDurationMinutes() : 0)
                .sum();
        user.setStudyMinutes(studyMinutes);
        userRepository.save(user);

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
        
        // Auto-invalidate old plan if the user changed their goal class
        if (plan != null && goal != null) {
            String goalNum = goal.replaceAll("[^0-9]", "");
            String planHeader = plan.length() > 150 ? plan.substring(0, 150) : plan;
            if (!goalNum.isEmpty() && !planHeader.contains(goalNum)) {
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
}
