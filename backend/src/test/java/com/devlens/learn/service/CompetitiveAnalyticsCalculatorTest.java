package com.devlens.learn.service;

import org.junit.jupiter.api.Test;

import java.math.BigDecimal;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.*;

class CompetitiveAnalyticsCalculatorTest {

    @Test
    void predictsJeeMainsHighPercentileAndNitTier() {
        Map<String, Object> res = CompetitiveAnalyticsCalculator.predictOutcome(
                "JEE Mains", new BigDecimal("240"), new BigDecimal("300")
        );
        assertEquals("JEE Mains", res.get("examTrack"));
        assertEquals(240L, ((Number) res.get("scaledScore")).longValue());
        assertEquals(300, res.get("officialMaxMarks"));
        assertTrue(String.valueOf(res.get("predictedPercentile")).contains("99.50"));
        assertTrue(String.valueOf(res.get("predictedRankBand")).contains("1,200"));
    }

    @Test
    void predictsNeetUgScalingFromPartTestTo720() {
        Map<String, Object> res = CompetitiveAnalyticsCalculator.predictOutcome(
                "NEET UG", new BigDecimal("160"), new BigDecimal("180")
        );
        assertEquals("NEET UG", res.get("examTrack"));
        // 160 / 180 * 720 = 640
        assertEquals(640L, ((Number) res.get("scaledScore")).longValue());
        assertEquals(720, res.get("officialMaxMarks"));
        assertTrue(String.valueOf(res.get("predictedPercentile")).contains("98.00"));
    }

    @Test
    void predictsJeeAdvancedDualPaperCrlCutoffAndIitTier() {
        Map<String, Object> elite = CompetitiveAnalyticsCalculator.predictOutcome(
                "JEE Advanced", new BigDecimal("140"), new BigDecimal("198")
        );
        assertEquals("JEE Advanced", elite.get("examTrack"));
        assertEquals(396, elite.get("officialMaxMarks"));
        assertTrue(String.valueOf(elite.get("predictedRankBand")).contains("AIR 1 - 500"));

        Map<String, Object> below = CompetitiveAnalyticsCalculator.predictOutcome(
                "JEE Advanced", new BigDecimal("50"), new BigDecimal("198")
        );
        assertEquals("Not Qualified Yet", below.get("predictedRankBand"));
    }
}
