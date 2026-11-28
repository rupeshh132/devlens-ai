package com.devlens.learn.service;

import com.devlens.learn.entity.LearnMockTest;
import com.devlens.learn.entity.LearnQuestion;
import com.devlens.learn.entity.LearnTestAttempt;
import com.devlens.learn.entity.LearnTestQuestion;
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
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class MockTestCompetitiveEvaluatorTest {

    @Mock private LearnMockTestRepository mockTestRepository;
    @Mock private LearnTestQuestionRepository testQuestionRepository;
    @Mock private LearnQuestionRepository questionRepository;
    @Mock private LearnTestAttemptRepository attemptRepository;
    @Mock private LearnUserRepository userRepository;
    @Mock private LearnExamTypeRepository examTypeRepository;
    @Mock private LearnTopicRepository topicRepository;
    @Spy  private ObjectMapper objectMapper = new ObjectMapper();

    @InjectMocks
    private MockTestService mockTestService;

    @Test
    void jeeMainNumericalShouldAwardFourAndPenalizeMinusOne() {
        LearnMockTest test = new LearnMockTest();
        test.setNegativeMarking(new BigDecimal("1.00"));

        LearnTestQuestion tq = new LearnTestQuestion();
        tq.setMarks(4);

        LearnQuestion q = new LearnQuestion();
        q.setQuestionType("NUMERICAL");
        q.setCorrectAnswer("2.5");

        var right = mockTestService.evaluateQuestion(test, tq, q, "2.50");
        assertTrue(right.evaluatable && right.correct && !right.wrong);
        assertEquals(0, new BigDecimal("4").compareTo(right.deltaScore));

        var wrong = mockTestService.evaluateQuestion(test, tq, q, "3");
        assertTrue(wrong.evaluatable && wrong.wrong && !wrong.correct);
        assertEquals(0, new BigDecimal("-1.00").compareTo(wrong.deltaScore));

        var skipped = mockTestService.evaluateQuestion(test, tq, q, "   ");
        assertFalse(skipped.evaluatable);
        assertEquals(0, BigDecimal.ZERO.compareTo(skipped.deltaScore));
    }

    @Test
    void jeeAdvancedNumericalRangeAndZeroNegativeShouldWork() {
        LearnMockTest test = new LearnMockTest();
        test.setNegativeMarking(new BigDecimal("1.00"));

        LearnTestQuestion tq = new LearnTestQuestion();
        tq.setMarks(4);

        LearnQuestion q = new LearnQuestion();
        q.setQuestionType("NUMERICAL");
        q.setToleranceMin(new BigDecimal("2.48"));
        q.setToleranceMax(new BigDecimal("2.52"));
        q.setNegativeMarks(BigDecimal.ZERO);

        var inRange = mockTestService.evaluateQuestion(test, tq, q, "2.5");
        assertTrue(inRange.correct);
        assertEquals(0, new BigDecimal("4").compareTo(inRange.deltaScore));

        var outOfRange = mockTestService.evaluateQuestion(test, tq, q, "2.60");
        assertTrue(outOfRange.wrong);
        assertEquals(0, BigDecimal.ZERO.compareTo(outOfRange.deltaScore));
    }

    @Test
    void jeeAdvancedMsqPartialMarkingAndPenaltyShouldFollowIitRubric() {
        LearnMockTest test = new LearnMockTest();
        test.setNegativeMarking(new BigDecimal("1.00"));

        LearnTestQuestion tq = new LearnTestQuestion();
        tq.setMarks(4);

        LearnQuestion q = new LearnQuestion();
        q.setQuestionType("MSQ");
        q.setCorrectAnswer("A,C,D");
        q.setPartialMarkingRule("IIT_MSQ");
        q.setNegativeMarks(new BigDecimal("2.00"));

        var full = mockTestService.evaluateQuestion(test, tq, q, "D, A, C");
        assertTrue(full.correct && !full.partial);
        assertEquals(0, new BigDecimal("4").compareTo(full.deltaScore));

        var twoOfThree = mockTestService.evaluateQuestion(test, tq, q, "A,C");
        assertTrue(!twoOfThree.correct && twoOfThree.partial && !twoOfThree.wrong);
        assertEquals(0, new BigDecimal("2").compareTo(twoOfThree.deltaScore));

        var oneOfThree = mockTestService.evaluateQuestion(test, tq, q, "C");
        assertTrue(oneOfThree.partial);
        assertEquals(0, new BigDecimal("1").compareTo(oneOfThree.deltaScore));

        var wrongChoice = mockTestService.evaluateQuestion(test, tq, q, "A,B");
        assertTrue(wrongChoice.wrong && !wrongChoice.partial);
        assertEquals(0, new BigDecimal("-2.00").compareTo(wrongChoice.deltaScore));
    }

    @Test
    void neetStatementQuestionShouldScorePlusFourMinusOne() {
        LearnMockTest test = new LearnMockTest();
        test.setNegativeMarking(new BigDecimal("1.00"));

        LearnTestQuestion tq = new LearnTestQuestion();
        tq.setMarks(4);

        LearnQuestion q = new LearnQuestion();
        q.setQuestionType("STATEMENT");
        q.setCorrectAnswer("C");

        var pass = mockTestService.evaluateQuestion(test, tq, q, "c");
        assertTrue(pass.correct);
        assertEquals(0, new BigDecimal("4").compareTo(pass.deltaScore));

        var fail = mockTestService.evaluateQuestion(test, tq, q, "A");
        assertTrue(fail.wrong);
        assertEquals(0, new BigDecimal("-1.00").compareTo(fail.deltaScore));
    }

    @Test
    void submitTestPersistsQuestionTimingsAndReviewReturnsPerQuestionSeconds() throws Exception {
        UUID attemptId = UUID.randomUUID();
        UUID mockTestId = UUID.randomUUID();
        UUID qId = UUID.randomUUID();

        LearnMockTest test = new LearnMockTest();
        test.setId(mockTestId);
        test.setDurationMins(60);
        test.setNegativeMarking(new BigDecimal("1.00"));

        LearnTestAttempt attempt = new LearnTestAttempt();
        attempt.setId(attemptId);
        attempt.setMockTestId(mockTestId);
        attempt.setStatus("IN_PROGRESS");
        attempt.setStartedAt(LocalDateTime.now().minusMinutes(5));

        when(attemptRepository.findById(attemptId)).thenReturn(Optional.of(attempt));
        when(mockTestRepository.findById(mockTestId)).thenReturn(Optional.of(test));
        when(attemptRepository.save(any(LearnTestAttempt.class))).thenAnswer(inv -> inv.getArgument(0));

        mockTestService.submitTest(attemptId, Map.of(qId.toString(), "B"), Map.of(qId.toString(), 42));
        assertNotNull(attempt.getQuestionTimesJson());
        assertTrue(attempt.getQuestionTimesJson().contains("42"));

        LearnTestQuestion tq = new LearnTestQuestion();
        tq.setMockTestId(mockTestId);
        tq.setQuestionId(qId);
        tq.setMarks(4);

        LearnQuestion q = new LearnQuestion();
        q.setId(qId);
        q.setQuestionType("MCQ");
        q.setCorrectAnswer("A");
        q.setQuestionText("Q1 text");

        when(testQuestionRepository.findByMockTestIdOrderByOrderIndexAsc(mockTestId)).thenReturn(List.of(tq));
        when(questionRepository.findAllById(List.of(qId))).thenReturn(List.of(q));

        Map<String, Object> review = mockTestService.getAttemptReview(attemptId);
        @SuppressWarnings("unchecked")
        List<Map<String, Object>> revQuestions = (List<Map<String, Object>>) review.get("questions");
        assertEquals(1, revQuestions.size());
        assertEquals(42, revQuestions.get(0).get("timeSpentSeconds"));
    }
}
