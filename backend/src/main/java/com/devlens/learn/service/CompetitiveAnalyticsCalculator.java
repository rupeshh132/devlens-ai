package com.devlens.learn.service;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.LinkedHashMap;
import java.util.Map;

/**
 * Computes calibrated NTA JEE Mains, IIT JEE Advanced, and NMC NEET UG
 * score-vs-percentile and predicted AIR bands from mock test performance.
 */
public final class CompetitiveAnalyticsCalculator {

    private CompetitiveAnalyticsCalculator() {}

    public static Map<String, Object> predictOutcome(String examGoal, BigDecimal rawScore, BigDecimal maxMarks) {
        Map<String, Object> result = new LinkedHashMap<>();
        String goal = examGoal != null ? examGoal.toLowerCase() : "";
        double max = (maxMarks != null && maxMarks.doubleValue() > 0) ? maxMarks.doubleValue() : 100.0;
        double score = rawScore != null ? rawScore.doubleValue() : 0.0;
        double pct = Math.max(-25.0, Math.min(100.0, (score / max) * 100.0));

        if (goal.contains("neet")) {
            double scaled = Math.max(0.0, Math.min(720.0, (pct / 100.0) * 720.0));
            String percentile;
            String rankBand;
            String zone;
            if (scaled >= 680) {
                percentile = "99.95+ %ile";
                rankBand = "AIR 1 - 1,200";
                zone = "AIIMS Delhi / Top Central Govt Medical";
            } else if (scaled >= 645) {
                percentile = "99.40 - 99.94 %ile";
                rankBand = "AIR 1,200 - 12,000";
                zone = "Top State Govt MBBS Guarantee";
            } else if (scaled >= 605) {
                percentile = "98.00 - 99.39 %ile";
                rankBand = "AIR 12,000 - 45,000";
                zone = "All India Quota (AIQ) MBBS Cutoff Zone";
            } else if (scaled >= 540) {
                percentile = "94.00 - 97.99 %ile";
                rankBand = "AIR 45,000 - 1,35,000";
                zone = "State Quota Borderline / BDS";
            } else if (scaled >= 420) {
                percentile = "82.00 - 93.99 %ile";
                rankBand = "AIR 1.35L - 4.0L";
                zone = "Qualifying Cutoff Cleared - NCERT Boost Needed";
            } else {
                double estPct = Math.max(10.0, Math.min(81.9, (scaled / 420.0) * 81.5));
                percentile = String.format("%.1f %%ile", estPct);
                rankBand = "AIR > 4.0 Lakh";
                zone = "Focus on NCERT Line Recall & Zero Negatives";
            }
            result.put("examTrack", "NEET UG");
            result.put("scaledScore", Math.round(scaled));
            result.put("officialMaxMarks", 720);
            result.put("predictedPercentile", percentile);
            result.put("predictedRankBand", rankBand);
            result.put("targetZone", zone);
            return result;
        }

        if (goal.contains("jee") && (goal.contains("adv") || goal.contains("iit"))) {
            double scaled = Math.max(0.0, Math.min(396.0, (pct / 100.0) * 396.0));
            String percentile;
            String rankBand;
            String zone;
            if (pct >= 68.0) {
                percentile = "Top 0.3% (IIT Elite)";
                rankBand = "AIR 1 - 500";
                zone = "Old IIT CSE / Electrical Zone";
            } else if (pct >= 55.0) {
                percentile = "Top 1.5% IIT";
                rankBand = "AIR 500 - 2,500";
                zone = "Top-7 IIT Circuital Branches";
            } else if (pct >= 42.0) {
                percentile = "Top 4.5% IIT";
                rankBand = "AIR 2,500 - 7,500";
                zone = "IIT B.Tech Confirmed Band";
            } else if (pct >= 32.0) {
                percentile = "CRL Qualified";
                rankBand = "AIR 7,500 - 16,000";
                zone = "IIT CRL Safe Merit Cutoff";
            } else {
                percentile = "Below CRL Cutoff";
                rankBand = "Not Qualified Yet";
                zone = "Eliminate -2 MSQ Traps & Target 35%+";
            }
            result.put("examTrack", "JEE Advanced");
            result.put("scaledScore", Math.round(scaled));
            result.put("officialMaxMarks", 396);
            result.put("predictedPercentile", percentile);
            result.put("predictedRankBand", rankBand);
            result.put("targetZone", zone);
            return result;
        }

        if (goal.contains("jee")) {
            double scaled = Math.max(0.0, Math.min(300.0, (pct / 100.0) * 300.0));
            String percentile;
            String rankBand;
            String zone;
            if (scaled >= 260) {
                percentile = "99.92+ %ile";
                rankBand = "AIR 1 - 1,200";
                zone = "Top NIT CSE / IIIT-H Tier";
            } else if (scaled >= 220) {
                percentile = "99.50 - 99.91 %ile";
                rankBand = "AIR 1,200 - 7,500";
                zone = "NIT Trichy/Surathkal/Warangal CSE";
            } else if (scaled >= 185) {
                percentile = "98.80 - 99.49 %ile";
                rankBand = "AIR 7,500 - 18,000";
                zone = "Core NIT + JEE Advanced Safe";
            } else if (scaled >= 150) {
                percentile = "96.50 - 98.79 %ile";
                rankBand = "AIR 18,000 - 52,000";
                zone = "NIT / IIIT Seat + Advanced Qualifier";
            } else if (scaled >= 115) {
                percentile = "92.00 - 96.49 %ile";
                rankBand = "AIR 52,000 - 1,20,000";
                zone = "General JEE Adv Cutoff Zone (~93%ile)";
            } else {
                double estPct = Math.max(10.0, Math.min(91.9, (scaled / 115.0) * 91.5));
                percentile = String.format("%.2f %%ile", estPct);
                rankBand = "AIR > 1.2 Lakh";
                zone = "Push Physics + Chem Easy Qs to Cross 120/300";
            }
            result.put("examTrack", "JEE Mains");
            result.put("scaledScore", Math.round(scaled));
            result.put("officialMaxMarks", 300);
            result.put("predictedPercentile", percentile);
            result.put("predictedRankBand", rankBand);
            result.put("targetZone", zone);
            return result;
        }

        // Standard CBSE / Board scale (percentage-based)
        BigDecimal roundedPct = BigDecimal.valueOf(Math.max(0.0, pct)).setScale(1, RoundingMode.HALF_UP);
        result.put("examTrack", examGoal != null ? examGoal : "Board Exam");
        result.put("scaledScore", roundedPct);
        result.put("officialMaxMarks", 100);
        result.put("predictedPercentile", roundedPct + "%");
        result.put("predictedRankBand", pct >= 90 ? "Distinction Band (90%+)" : pct >= 75 ? "Merit Band (75%+)" : "Building Foundation");
        result.put("targetZone", pct >= 90 ? "Board Topper Zone" : "Target 90%+ with Marking Scheme Revision");
        return result;
    }
}
