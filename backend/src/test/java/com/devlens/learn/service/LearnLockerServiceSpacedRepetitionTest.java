package com.devlens.learn.service;

import com.devlens.learn.dto.LockerItemResponse;
import com.devlens.learn.entity.LearnUser;
import com.devlens.learn.entity.LearnUserLockerItem;
import com.devlens.learn.repository.LearnUserLockerItemRepository;
import com.devlens.learn.repository.LearnUserRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Spy;
import org.mockito.junit.jupiter.MockitoExtension;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.*;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class LearnLockerServiceSpacedRepetitionTest {

    @Mock private LearnUserLockerItemRepository repository;
    @Mock private LearnUserRepository userRepository;
    @Spy  private ObjectMapper objectMapper = new ObjectMapper();

    @InjectMocks
    private LearnLockerService lockerService;

    @Test
    void recordReviewOutcomeHealsAfterTwoConsecutiveCorrectAndResetsOnMiss() {
        UUID userId = UUID.randomUUID();
        UUID itemId = UUID.randomUUID();

        LearnUserLockerItem item = new LearnUserLockerItem();
        item.setId(itemId);
        item.setUserId(userId);
        item.setItemType("QUESTION");
        item.setTitle("[Mistake] Physics — Gauss Law");
        item.setContent("Question content");
        item.setReviewStage(0);
        item.setConsecutiveCorrect(0);

        when(repository.findByIdAndUserId(itemId, userId)).thenReturn(Optional.of(item));
        when(repository.save(any(LearnUserLockerItem.class))).thenAnswer(inv -> inv.getArgument(0));

        // 1st correct recall -> stage 1, consecutive 1
        LockerItemResponse afterFirst = lockerService.recordReviewOutcome(userId, itemId, true);
        assertEquals(1, afterFirst.getReviewStage());
        assertEquals(1, afterFirst.getConsecutiveCorrect());
        assertNotNull(afterFirst.getNextReviewAt());

        // Miss resets consecutive to 0 and schedules Day 1
        LockerItemResponse afterMiss = lockerService.recordReviewOutcome(userId, itemId, false);
        assertEquals(1, afterMiss.getReviewStage());
        assertEquals(0, afterMiss.getConsecutiveCorrect());

        // 2 consecutive hits heal it cleanly -> stage 4 (HEALED)
        lockerService.recordReviewOutcome(userId, itemId, true);
        LockerItemResponse afterSecond = lockerService.recordReviewOutcome(userId, itemId, true);
        assertEquals(4, afterSecond.getReviewStage());
        assertEquals(2, afterSecond.getConsecutiveCorrect());
    }

    @Test
    void freeUserGetsOneRedemptionDrillPerDayWhileProIsUnlimited() {
        UUID freeId = UUID.randomUUID();
        LearnUser freeUser = new LearnUser();
        freeUser.setId(freeId);
        freeUser.setSubscriptionPlan("FREE");
        freeUser.setDailyFreeDrillsUsed(0);

        when(userRepository.findById(freeId)).thenReturn(Optional.of(freeUser));
        when(userRepository.save(any(LearnUser.class))).thenAnswer(inv -> inv.getArgument(0));

        // 1st drill today allowed
        Map<String, Object> first = lockerService.startRedemptionDrill(freeId);
        assertEquals(true, first.get("allowed"));
        assertEquals(0, first.get("drillsRemaining"));

        // 2nd drill same day blocked for Pro upsell
        IllegalStateException ex = assertThrows(IllegalStateException.class,
                () -> lockerService.startRedemptionDrill(freeId));
        assertEquals("FREE_DRILL_LIMIT_REACHED", ex.getMessage());

        // Pro user gets unlimited drills
        UUID proId = UUID.randomUUID();
        LearnUser proUser = new LearnUser();
        proUser.setId(proId);
        proUser.setSubscriptionPlan("PRO");
        proUser.setSubscribedUntil(LocalDateTime.now().plusDays(30));
        proUser.setDailyFreeDrillsUsed(10);
        proUser.setLastDrillDate(LocalDate.now());

        when(userRepository.findById(proId)).thenReturn(Optional.of(proUser));
        Map<String, Object> proRes = lockerService.startRedemptionDrill(proId);
        assertEquals(true, proRes.get("allowed"));
        assertEquals(999, proRes.get("drillsRemaining"));
    }

    @Test
    void dueReviewsExcludesHealedAndFutureItems() {
        UUID userId = UUID.randomUUID();
        LocalDateTime now = LocalDateTime.now();

        LearnUserLockerItem dueMistake = new LearnUserLockerItem();
        dueMistake.setId(UUID.randomUUID());
        dueMistake.setUserId(userId);
        dueMistake.setItemType("QUESTION");
        dueMistake.setTitle("[Mistake] Chem");
        dueMistake.setContent("C");
        dueMistake.setMetaJson("{\"mistake\":true}");
        dueMistake.setReviewStage(1);
        dueMistake.setNextReviewAt(now.minusHours(2));

        LearnUserLockerItem futureFormula = new LearnUserLockerItem();
        futureFormula.setId(UUID.randomUUID());
        futureFormula.setUserId(userId);
        futureFormula.setItemType("FORMULA");
        futureFormula.setTitle("Ohm Law");
        futureFormula.setContent("V=IR");
        futureFormula.setReviewStage(2);
        futureFormula.setNextReviewAt(now.plusDays(2));

        LearnUserLockerItem healed = new LearnUserLockerItem();
        healed.setId(UUID.randomUUID());
        healed.setUserId(userId);
        healed.setItemType("QUESTION");
        healed.setTitle("Healed Q");
        healed.setContent("Done");
        healed.setReviewStage(4);
        healed.setNextReviewAt(now.plusDays(25));

        when(repository.findByUserIdOrderByCreatedAtDesc(userId))
                .thenReturn(List.of(dueMistake, futureFormula, healed));
        when(userRepository.findById(userId)).thenReturn(Optional.empty());

        Map<String, Object> summary = lockerService.getDueReviewSummary(userId);
        assertEquals(1, summary.get("dueCount"));
        assertEquals(1L, summary.get("healedCount"));
    }
}
