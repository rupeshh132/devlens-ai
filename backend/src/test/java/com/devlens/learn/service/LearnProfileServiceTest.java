package com.devlens.learn.service;

import com.devlens.learn.dto.LearnProfileResponse;
import com.devlens.learn.entity.*;
import com.devlens.learn.repository.*;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Spy;
import org.mockito.junit.jupiter.MockitoExtension;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.*;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyInt;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class LearnProfileServiceTest {

    @Mock private LearnUserRepository userRepository;
    @Mock private LearnTransactionRepository transactionRepository;
    @Mock private LearnTestAttemptRepository testAttemptRepository;
    @Mock private LearnQuestionRepository questionRepository;
    @Mock private LearnTopicRepository topicRepository;
    @Mock private LearnMockTestRepository mockTestRepository;
    @Mock private LeaderboardService leaderboardService;
    @Mock private LearnStudySessionRepository studySessionRepository;
    @Mock private LearnXpLogRepository xpLogRepository;
    @Mock private LearnUserTopicProgressRepository topicProgressRepository;
    @Spy  private ObjectMapper objectMapper = new ObjectMapper();

    @InjectMocks
    private LearnProfileService learnProfileService;

    @Test
    void getProfileCountsOnlyCompletedTestsWeightedAccuracyAndCombinedStudyTime() {
        UUID userId = UUID.randomUUID();

        LearnUser user = new LearnUser();
        user.setId(userId);
        user.setFullName("Aarav Sharma");
        user.setEmail("aarav@example.com");
        user.setExamGoal("JEE Mains");
        user.setTotalXp(120);
        user.setSubscriptionPlan("FREE");
        user.setStudyMinutes(0);

        LearnTestAttempt inProgress = new LearnTestAttempt();
        inProgress.setId(UUID.randomUUID());
        inProgress.setUserId(userId);
        inProgress.setStatus("IN_PROGRESS");
        inProgress.setCorrectAnswers(1);
        inProgress.setWrongAnswers(0);

        LearnTestAttempt completed1 = new LearnTestAttempt();
        completed1.setId(UUID.randomUUID());
        completed1.setUserId(userId);
        completed1.setStatus("COMPLETED");
        completed1.setCorrectAnswers(1);
        completed1.setWrongAnswers(5);
        completed1.setTimeTakenSeconds(240L); // 4 min

        LearnTestAttempt completed2 = new LearnTestAttempt();
        completed2.setId(UUID.randomUUID());
        completed2.setUserId(userId);
        completed2.setStatus("COMPLETED");
        completed2.setCorrectAnswers(4);
        completed2.setWrongAnswers(0);
        completed2.setTimeTakenSeconds(360L); // 6 min

        LearnStudySession focus = new LearnStudySession();
        focus.setUserId(userId);
        focus.setSessionType("FOCUS_TIMER");
        focus.setDurationMinutes(15);
        focus.setCreatedAt(LocalDateTime.now());

        when(userRepository.findById(userId)).thenReturn(Optional.of(user));
        when(transactionRepository.findByUserIdOrderByCreatedAtDesc(userId)).thenReturn(List.of());
        when(testAttemptRepository.findByUserIdOrderByStartedAtDesc(userId))
                .thenReturn(List.of(inProgress, completed1, completed2));
        when(studySessionRepository.findByUserId(userId)).thenReturn(List.of(focus));
        lenient().when(leaderboardService.getLeaderboardForMonth(anyInt(), anyInt()))
                .thenReturn(List.of(Map.of("id", userId)));
        lenient().when(leaderboardService.getMyRankForMonth(eq(userId), anyInt(), anyInt()))
                .thenReturn(Map.of("myRank", 4));

        LearnProfileResponse profile = learnProfileService.getProfile(userId);

        // Only the 2 COMPLETED attempts count (IN_PROGRESS ignored)
        assertEquals(2, profile.getTotalTestsTaken());
        // Question-weighted: (1 + 4) / (6 + 4) = 5 / 10 = 50.0%
        assertEquals(50.0, profile.getAverageAccuracy());
        // 15m focus + (4m + 6m) mock time = 25m
        assertEquals(25, profile.getStudyMinutes());
        assertEquals("25m", profile.getStudyTimeFormatted());
        assertNotNull(profile.getGlobalRank());
    }

    @Test
    void matchesGoalTrackIsolatesCompetitiveAndSchoolTracks() {
        LearnMockTest jeeMainTest = new LearnMockTest();
        jeeMainTest.setTitle("JEE Main 2026 Full-Length NTA CBT Paper - Set 1");

        LearnMockTest jeeAdvTest = new LearnMockTest();
        jeeAdvTest.setTitle("JEE Advanced Paper 1 Mock");

        LearnMockTest neetTest = new LearnMockTest();
        neetTest.setTitle("NEET UG Full Biology & Physics Mock");

        assertTrue(LearnProfileService.matchesGoalTrack("JEE Mains", jeeMainTest));
        assertFalse(LearnProfileService.matchesGoalTrack("JEE Mains", jeeAdvTest));
        assertFalse(LearnProfileService.matchesGoalTrack("JEE Mains", neetTest));
        assertTrue(LearnProfileService.matchesGoalTrack("JEE Advanced", jeeAdvTest));
        assertTrue(LearnProfileService.matchesGoalTrack("NEET UG", neetTest));
    }

    @Test
    void competitiveAnalyticsSummaryFiltersTracksPreservesNegativeScoreAndDeduplicatesMistakes() throws Exception {
        UUID userId = UUID.randomUUID();
        UUID jeeTestId = UUID.randomUUID();
        UUID neetTestId = UUID.randomUUID();
        UUID q1Id = UUID.randomUUID();

        LearnUser user = new LearnUser();
        user.setId(userId);
        user.setExamGoal("JEE Mains");

        LearnMockTest jeeTest = new LearnMockTest();
        jeeTest.setId(jeeTestId);
        jeeTest.setTitle("JEE Main 2026 Full-Length NTA CBT Paper - Set 1");
        jeeTest.setTotalMarks(300);
        jeeTest.setNegativeMarking(new BigDecimal("1.00"));

        LearnMockTest neetTest = new LearnMockTest();
        neetTest.setId(neetTestId);
        neetTest.setTitle("NEET UG Mock 1");
        neetTest.setTotalMarks(720);

        LearnQuestion wrongQ = new LearnQuestion();
        wrongQ.setId(q1Id);
        wrongQ.setSubject("Physics");
        wrongQ.setChapter("Rotational Motion");
        wrongQ.setQuestionType("MCQ");
        wrongQ.setCorrectAnswer("A");
        wrongQ.setQuestionText("A ring, disc and solid sphere roll down an incline...");

        String answersJson = objectMapper.writeValueAsString(Map.of(q1Id.toString(), "B"));
        String timingsJson = objectMapper.writeValueAsString(Map.of(q1Id.toString(), 12));

        LearnTestAttempt jeeAttempt1 = new LearnTestAttempt();
        jeeAttempt1.setId(UUID.randomUUID());
        jeeAttempt1.setUserId(userId);
        jeeAttempt1.setMockTestId(jeeTestId);
        jeeAttempt1.setStatus("COMPLETED");
        jeeAttempt1.setScore(new BigDecimal("-1"));
        jeeAttempt1.setSubmittedAt(LocalDateTime.now());
        jeeAttempt1.setAnswersJson(answersJson);
        jeeAttempt1.setQuestionTimesJson(timingsJson);

        LearnTestAttempt jeeAttempt2 = new LearnTestAttempt();
        jeeAttempt2.setId(UUID.randomUUID());
        jeeAttempt2.setUserId(userId);
        jeeAttempt2.setMockTestId(jeeTestId);
        jeeAttempt2.setStatus("COMPLETED");
        jeeAttempt2.setScore(new BigDecimal("-1"));
        jeeAttempt2.setSubmittedAt(LocalDateTime.now().minusHours(1));
        jeeAttempt2.setAnswersJson(answersJson);

        LearnTestAttempt neetAttempt = new LearnTestAttempt();
        neetAttempt.setId(UUID.randomUUID());
        neetAttempt.setUserId(userId);
        neetAttempt.setMockTestId(neetTestId);
        neetAttempt.setStatus("COMPLETED");
        neetAttempt.setScore(new BigDecimal("650"));
        neetAttempt.setSubmittedAt(LocalDateTime.now().minusDays(1));

        when(userRepository.findById(userId)).thenReturn(Optional.of(user));
        when(testAttemptRepository.findByUserIdOrderByStartedAtDesc(userId))
                .thenReturn(List.of(jeeAttempt1, jeeAttempt2, neetAttempt));
        when(mockTestRepository.findAllById(any()))
                .thenReturn(List.of(jeeTest, neetTest));
        when(questionRepository.findAllById(any()))
                .thenReturn(List.of(wrongQ));

        Map<String, Object> summary = learnProfileService.getCompetitiveAnalyticsSummary(userId);

        // NEET attempt excluded from JEE Mains analytics
        assertEquals(2, summary.get("completedTests"));

        // Negative scaledScore (-1) is preserved cleanly
        @SuppressWarnings("unchecked")
        Map<String, Object> pred = (Map<String, Object>) summary.get("prediction");
        assertNotNull(pred);
        assertEquals(-1, ((Number) pred.get("scaledScore")).intValue());

        // Same wrong question across 2 attempts is deduplicated to 1 entry in recentMistakes
        @SuppressWarnings("unchecked")
        List<Map<String, Object>> mistakes = (List<Map<String, Object>>) summary.get("recentMistakes");
        assertEquals(1, mistakes.size());

        // Recent history includes maxMarks and calculated percentage matching summary
        @SuppressWarnings("unchecked")
        List<Map<String, Object>> history = (List<Map<String, Object>>) summary.get("recentHistory");
        assertEquals(2, history.size());
        assertEquals(300, ((Number) history.get(0).get("maxMarks")).intValue());
        assertEquals(-0.3, ((Number) history.get(0).get("percentage")).doubleValue(), 0.05);

        // Time Autopsy tracks fast wrong guesses (<25s) & recoverable negative marks
        @SuppressWarnings("unchecked")
        Map<String, Object> autopsy = (Map<String, Object>) summary.get("timeAutopsy");
        assertNotNull(autopsy);
        assertEquals(1, ((Number) autopsy.get("fastWrongCount")).intValue());
        assertEquals(1, ((Number) autopsy.get("whatIfRecoverableMarks")).intValue());
    }

    @Test
    void updateProfileDetailsUpdatesNameWithoutChangingEnrolledGoal() {
        UUID userId = UUID.randomUUID();
        LearnUser user = new LearnUser();
        user.setId(userId);
        user.setFullName("Old Name");
        user.setExamGoal("JEE Mains");
        user.setCurrentStudyPlanJson("{\"weeks\":[]}");
        user.setSubscriptionPlan("FREE");

        when(userRepository.findById(userId)).thenReturn(Optional.of(user));
        when(userRepository.save(any(LearnUser.class))).thenAnswer(inv -> inv.getArgument(0));
        when(transactionRepository.findByUserIdOrderByCreatedAtDesc(userId)).thenReturn(List.of());
        when(testAttemptRepository.findByUserIdOrderByStartedAtDesc(userId)).thenReturn(List.of());
        when(studySessionRepository.findByUserId(userId)).thenReturn(List.of());
        lenient().when(leaderboardService.getLeaderboardForMonth(anyInt(), anyInt()))
                .thenReturn(List.of(Map.of("id", userId)));
        lenient().when(leaderboardService.getMyRankForMonth(eq(userId), anyInt(), anyInt()))
                .thenReturn(Map.of());

        LearnProfileResponse updated = learnProfileService.updateProfileDetails(userId, "Aarav Verma");

        assertEquals("Aarav Verma", updated.getFullName());
        assertEquals("JEE Mains", updated.getExamGoal());
        assertEquals("{\"weeks\":[]}", user.getCurrentStudyPlanJson());
        verify(userRepository).save(user);
    }

    @Test
    void topicProgressSyncsLegacyIdsTogglesAndDeletesCleanly() {
        UUID userId = UUID.randomUUID();
        LearnUser user = new LearnUser();
        user.setId(userId);
        user.setExamGoal("JEE Mains");

        LearnUserTopicProgress existing = new LearnUserTopicProgress();
        existing.setId(UUID.randomUUID());
        existing.setUserId(userId);
        existing.setTopicId("phy-kin-1");
        existing.setExamGoal("JEE Mains");

        List<LearnUserTopicProgress> store = new ArrayList<>(List.of(existing));

        when(userRepository.findById(userId)).thenReturn(Optional.of(user));
        when(topicProgressRepository.findByUserId(userId)).thenAnswer(inv -> new ArrayList<>(store));
        when(topicProgressRepository.findByUserIdAndTopicId(eq(userId), anyString())).thenAnswer(inv -> {
            String tId = inv.getArgument(1);
            return store.stream().filter(p -> tId.equals(p.getTopicId())).findFirst();
        });
        when(topicProgressRepository.save(any(LearnUserTopicProgress.class))).thenAnswer(inv -> {
            LearnUserTopicProgress saved = inv.getArgument(0);
            store.add(saved);
            return saved;
        });
        doAnswer(inv -> {
            LearnUserTopicProgress del = inv.getArgument(0);
            store.remove(del);
            return null;
        }).when(topicProgressRepository).delete(any(LearnUserTopicProgress.class));

        // 1. Bulk merge deduplicates existing 'phy-kin-1' and adds 'chem-atom-2'
        List<String> afterMerge = learnProfileService.updateTopicProgress(
                userId, null, true, List.of("phy-kin-1", "chem-atom-2", "  "));
        assertEquals(List.of("phy-kin-1", "chem-atom-2"), afterMerge);

        // 2. Toggle 'phy-kin-1' off deletes it cleanly
        List<String> afterUncheck = learnProfileService.updateTopicProgress(userId, "phy-kin-1", false, null);
        assertEquals(List.of("chem-atom-2"), afterUncheck);

        // 3. Re-add 'math-calc-1'
        List<String> afterCheck = learnProfileService.updateTopicProgress(userId, "math-calc-1", true, null);
        assertEquals(List.of("chem-atom-2", "math-calc-1"), afterCheck);
    }
}
