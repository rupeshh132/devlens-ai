package com.devlens.learn.service;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Component;

import java.io.InputStream;
import java.util.*;
import java.util.concurrent.ConcurrentHashMap;

@Slf4j
@Component
@RequiredArgsConstructor
public class CompetitiveNotesRegistry {

    private final ObjectMapper objectMapper;
    private final Map<String, ChapterNotesModule> modules = new ConcurrentHashMap<>();
    private volatile boolean initialized = false;

    @Data
    public static class ConceptSection {
        private String heading;
        private String summary;
        private List<String> keyPoints = new ArrayList<>();
    }

    @Data
    public static class FormulaRow {
        private String concept;
        private String formula;
        private String note;
    }

    @Data
    public static class ComparisonTable {
        private String title;
        private List<String> headers = new ArrayList<>();
        private List<List<String>> rows = new ArrayList<>();
    }

    @Data
    public static class SolvedExample {
        private String tag;
        private String question;
        private List<String> steps = new ArrayList<>();
        private String answer;
        private String pitfall;
    }

    @Data
    public static class DerivationOrGraph {
        private String title;
        private String expressionOrCurve;
        private String keyTakeaway;
    }

    @Data
    public static class ChapterNotesModule {
        private String moduleId;
        private String weightageNote;
        private String syllabusAlert;
        private List<ConceptSection> sections = new ArrayList<>();
        private List<DerivationOrGraph> derivationsAndGraphs = new ArrayList<>();
        private List<FormulaRow> formulas = new ArrayList<>();
        private ComparisonTable comparison;
        private List<String> traps = new ArrayList<>();
        private List<String> revisionChecklist = new ArrayList<>();
        private List<SolvedExample> solvedExamples = new ArrayList<>();
    }

    private void ensureLoaded() {
        if (initialized) return;
        synchronized (this) {
            if (initialized) return;
            for (String file : List.of("notes/phy.json", "notes/chem.json", "notes/math.json", "notes/bio.json")) {
                try {
                    ClassPathResource res = new ClassPathResource(file);
                    if (res.exists()) {
                        try (InputStream is = res.getInputStream()) {
                            List<ChapterNotesModule> list = objectMapper.readValue(is, new TypeReference<>() {});
                            for (ChapterNotesModule m : list) {
                                if (m.getModuleId() != null) {
                                    modules.put(m.getModuleId(), m);
                                }
                            }
                        }
                    }
                } catch (Exception e) {
                    log.warn("Could not load notes module resource {}: {}", file, e.getMessage());
                }
            }
            initialized = true;
            log.info("Loaded {} competitive master study note modules", modules.size());
        }
    }

    public Optional<ChapterNotesModule> findForChapter(UUID chapterId, String chapterTitle, String subjectName) {
        ensureLoaded();
        if (chapterId != null) {
            String key = resolveModuleKeyFromUuid(chapterId.toString());
            if (key != null && modules.containsKey(key)) {
                return Optional.of(modules.get(key));
            }
        }
        return Optional.empty();
    }

    static String resolveModuleKeyFromUuid(String idStr) {
        if (idStr == null) return null;
        String lower = idStr.toLowerCase();
        // Pattern: 65d29b56-{track}{sub}-10{cc}-0000-000000000001
        if (!lower.startsWith("65d29b56-") || lower.length() < 18) return null;
        char track = lower.charAt(9);  // '1' JEE Main, '2' NEET, '3' JEE Adv
        char sub = lower.charAt(12);   // subject index 1..4
        String ccStr = lower.substring(16, 18);
        int cc;
        try {
            cc = Integer.parseInt(ccStr);
        } catch (NumberFormatException e) {
            return null;
        }
        String two = String.format("%02d", cc);
        if (track == '1') {
            if (sub == '1') return "phy_" + two;
            if (sub == '2') return "chem_" + two;
            if (sub == '3') return "math_" + two;
        } else if (track == '2') {
            if (sub == '1') return "bot_" + two;
            if (sub == '2') return "zoo_" + two;
            if (sub == '3') return "chem_" + two;
            if (sub == '4') return "phy_" + two;
        } else if (track == '3') {
            if (sub == '1') return cc <= 15 ? ("phy_" + two) : ("phy_adv" + (cc - 15));
            if (sub == '2') return cc <= 9 ? ("chem_" + two) : ("chem_adv" + (cc - 9));
            if (sub == '3') return cc <= 8 ? ("math_" + two) : ("math_adv" + (cc - 8));
        }
        return null;
    }
}
