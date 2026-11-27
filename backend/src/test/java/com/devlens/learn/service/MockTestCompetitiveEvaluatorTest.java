package com.devlens.learn.service;

import com.devlens.learn.entity.LearnMockTest;
import com.devlens.learn.entity.LearnQuestion;
import com.devlens.learn.entity.LearnTestQuestion;
import com.devlens.learn.repository.*;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.math.BigDecimal;

import static org.junit.jupiter.api.Assertions.*;

@ExtendWith(MockitoExtension.class)
class MockTestCompetitiveEvaluatorTest {

    @Mock private LearnMockTestRepository mockTestRepository;
    @Mock private LearnTestQuestionRepository testQuestionRepository;
    @Mock private LearnQuestionRepository questionRepository;
    @Mock private LearnTestAttemptRepository attemptRepository;
    @Mock private LearnUserRepository userRepository;
    @Mock private LearnExamTypeRepository examTypeRepository;
    @Mock private LearnTopicRepository topicRepository;
    @Mock private ObjectMapper objectMapper;

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
}
