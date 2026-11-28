package com.devlens.learn.service;

import com.devlens.learn.entity.LearnChapter;
import com.devlens.learn.entity.LearnExamType;
import com.devlens.learn.entity.LearnQuestion;
import com.devlens.learn.entity.LearnSubject;
import com.devlens.learn.entity.LearnTopic;
import com.devlens.learn.repository.*;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.lowagie.text.pdf.PdfReader;
import com.lowagie.text.pdf.parser.PdfTextExtractor;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.lenient;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class LearnPdfServiceTest {

    @Mock private LearnMockTestRepository mockTestRepository;
    @Mock private LearnTestQuestionRepository testQuestionRepository;
    @Mock private LearnQuestionRepository questionRepository;
    @Mock private LearnUserRepository userRepository;
    @Mock private LearnChapterRepository chapterRepository;
    @Mock private LearnTopicRepository topicRepository;
    @Mock private LearnSubjectRepository subjectRepository;
    @Mock private LearnExamTypeRepository examTypeRepository;

    private ObjectMapper objectMapper;
    private CompetitiveNotesRegistry notesRegistry;
    private LearnPdfService learnPdfService;

    @BeforeEach
    void setUp() {
        objectMapper = new ObjectMapper();
        notesRegistry = new CompetitiveNotesRegistry(objectMapper);
        learnPdfService = new LearnPdfService(
                mockTestRepository,
                testQuestionRepository,
                questionRepository,
                userRepository,
                chapterRepository,
                topicRepository,
                subjectRepository,
                examTypeRepository,
                notesRegistry,
                objectMapper
        );
    }

    @Test
    void all54CompetitiveModulesLoadAndMapDeterministically() {
        // JEE Mains Physics 01 -> phy_01
        UUID jeePhy01 = UUID.fromString("65d29b56-1011-1001-0000-000000000001");
        assertEquals("phy_01", CompetitiveNotesRegistry.resolveModuleKeyFromUuid(jeePhy01.toString()));
        var phy01 = notesRegistry.findForChapter(jeePhy01, "Units, Measurements & Experimental Skills (Unit 20)", "Physics");
        assertTrue(phy01.isPresent());
        assertFalse(phy01.get().getSections().isEmpty());
        assertFalse(phy01.get().getFormulas().isEmpty());
        assertFalse(phy01.get().getSolvedExamples().isEmpty());

        // NEET UG Botany 02 -> bot_02 & Zoology 05 -> zoo_05 & Physics 15 -> phy_15
        UUID neetBot02 = UUID.fromString("65d29b56-2011-1002-0000-000000000001");
        assertEquals("bot_02", CompetitiveNotesRegistry.resolveModuleKeyFromUuid(neetBot02.toString()));
        assertTrue(notesRegistry.findForChapter(neetBot02, "Biological Classification", "Botany").isPresent());

        UUID neetZoo05 = UUID.fromString("65d29b56-2012-1005-0000-000000000001");
        assertEquals("zoo_05", CompetitiveNotesRegistry.resolveModuleKeyFromUuid(neetZoo05.toString()));
        assertTrue(notesRegistry.findForChapter(neetZoo05, "Neural & Chemical Control", "Zoology").isPresent());

        UUID neetPhy15 = UUID.fromString("65d29b56-2014-1015-0000-000000000001");
        assertEquals("phy_15", CompetitiveNotesRegistry.resolveModuleKeyFromUuid(neetPhy15.toString()));
        assertTrue(notesRegistry.findForChapter(neetPhy15, "Semiconductors", "Physics").isPresent());

        // JEE Advanced extensions: phy_adv1..3, chem_adv1..4, math_adv1..2
        assertTrue(notesRegistry.findForChapter(UUID.fromString("65d29b56-3011-1016-0000-000000000001"), "Moment of Inertia", "Physics").isPresent());
        assertTrue(notesRegistry.findForChapter(UUID.fromString("65d29b56-3011-1018-0000-000000000001"), "X-rays", "Physics").isPresent());
        assertTrue(notesRegistry.findForChapter(UUID.fromString("65d29b56-3012-1010-0000-000000000001"), "Nuclear", "Chemistry").isPresent());
        assertTrue(notesRegistry.findForChapter(UUID.fromString("65d29b56-3012-1013-0000-000000000001"), "Metallurgy", "Chemistry").isPresent());
        assertTrue(notesRegistry.findForChapter(UUID.fromString("65d29b56-3013-1009-0000-000000000001"), "3D & Vectors", "Mathematics").isPresent());
        assertTrue(notesRegistry.findForChapter(UUID.fromString("65d29b56-3013-1010-0000-000000000001"), "Probability", "Mathematics").isPresent());

        // Verify full count across all 4 domains = 18 + 13 + 10 + 13 = 54 modules AND verify zero-gap exhaustive depth!
        List<UUID> allModuleSamples = new java.util.ArrayList<>();
        for (int i = 1; i <= 15; i++) allModuleSamples.add(UUID.fromString(String.format("65d29b56-1011-10%02d-0000-000000000001", i)));
        for (int i = 16; i <= 18; i++) allModuleSamples.add(UUID.fromString(String.format("65d29b56-3011-10%02d-0000-000000000001", i)));
        for (int i = 1; i <= 9; i++) allModuleSamples.add(UUID.fromString(String.format("65d29b56-1012-10%02d-0000-000000000001", i)));
        for (int i = 10; i <= 13; i++) allModuleSamples.add(UUID.fromString(String.format("65d29b56-3012-10%02d-0000-000000000001", i)));
        for (int i = 1; i <= 8; i++) allModuleSamples.add(UUID.fromString(String.format("65d29b56-1013-10%02d-0000-000000000001", i)));
        for (int i = 9; i <= 10; i++) allModuleSamples.add(UUID.fromString(String.format("65d29b56-3013-10%02d-0000-000000000001", i)));
        for (int i = 1; i <= 7; i++) allModuleSamples.add(UUID.fromString(String.format("65d29b56-2011-10%02d-0000-000000000001", i)));
        for (int i = 1; i <= 6; i++) allModuleSamples.add(UUID.fromString(String.format("65d29b56-2012-10%02d-0000-000000000001", i)));

        int found = 0;
        for (UUID id : allModuleSamples) {
            var modOpt = notesRegistry.findForChapter(id, "", "");
            assertTrue(modOpt.isPresent(), "Missing module for " + id);
            var mod = modOpt.get();
            assertTrue(mod.getSections().size() >= 5, mod.getModuleId() + " sections < 5");
            assertTrue(mod.getDerivationsAndGraphs().size() >= 3, mod.getModuleId() + " derivationsAndGraphs < 3");
            assertTrue(mod.getFormulas().size() >= 9, mod.getModuleId() + " formulas < 9");
            assertNotNull(mod.getComparison(), mod.getModuleId() + " missing comparison");
            assertTrue(mod.getComparison().getRows().size() >= 5, mod.getModuleId() + " comparison rows < 5");
            assertTrue(mod.getTraps().size() >= 5, mod.getModuleId() + " traps < 5");
            assertTrue(mod.getRevisionChecklist().size() >= 6, mod.getModuleId() + " revisionChecklist < 6");
            assertTrue(mod.getSolvedExamples().size() >= 4, mod.getModuleId() + " solvedExamples < 4");
            found++;
        }
        assertEquals(54, found);
    }

    @Test
    void formatMathTextTransliteratesUnicodeWithoutDrops() {
        String raw = "The dimensions of ½ ε₀ E² [M L⁻¹ T⁻²] → ∆x ≥ h/(4π) × 10⁻³⁴ ; A ∪ B ≠ ∅";
        String safe = LearnPdfService.formatMathText(raw);
        assertFalse(safe.contains("ε"));
        assertFalse(safe.contains("₀"));
        assertFalse(safe.contains("⁻¹"));
        assertFalse(safe.contains("→"));
        assertFalse(safe.contains("½"));
        assertTrue(safe.contains("1/2"));
        assertTrue(safe.contains("eps_0"));
        assertTrue(safe.contains("E^2"));
        assertTrue(safe.contains("L^(-1)"));
        assertTrue(safe.contains("->"));
        assertTrue(safe.contains("pi"));
        assertTrue(safe.contains("U"));
    }

    @Test
    void generateChapterNotesPdfProducesMultiPageWatermarkedMasterNotes() throws Exception {
        UUID chapterId = UUID.fromString("65d29b56-1011-1001-0000-000000000001");
        UUID subjectId = UUID.randomUUID();
        UUID examTypeId = UUID.randomUUID();
        UUID topicId = UUID.randomUUID();

        LearnExamType examType = new LearnExamType();
        examType.setId(examTypeId);
        examType.setName("JEE Mains");

        LearnSubject subject = new LearnSubject();
        subject.setId(subjectId);
        subject.setExamTypeId(examTypeId);
        subject.setName("Physics");

        LearnChapter chapter = new LearnChapter();
        chapter.setId(chapterId);
        chapter.setSubjectId(subjectId);
        chapter.setTitle("Units, Measurements & Experimental Skills (Unit 20)");

        LearnTopic topic = new LearnTopic();
        topic.setId(topicId);
        topic.setChapterId(chapterId);
        topic.setTitle("SI Units, Dimensional Analysis & Limiting Error Propagation");
        topic.setDescription("Apply homogeneity checks and percentage error laws to derive physical exponents quickly.");

        LearnQuestion q = new LearnQuestion();
        q.setId(UUID.randomUUID());
        q.setTopicId(topicId);
        q.setQuestionType("MCQ");
        q.setQuestionText("The dimensions of (1/2) ε₀ E² (where ε₀ is permittivity of free space and E is electric field) match those of:");
        q.setOptionsJson("[\"Energy density\", \"Surface tension\", \"Electric potential\", \"Magnetic flux\"]");
        q.setCorrectAnswer("A");
        q.setExplanation("Electrostatic energy per unit volume u = (1/2) ε₀ E² has units J/m³ = [M L⁻¹ T⁻²].");

        when(chapterRepository.findById(chapterId)).thenReturn(Optional.of(chapter));
        when(subjectRepository.findById(subjectId)).thenReturn(Optional.of(subject));
        when(examTypeRepository.findById(examTypeId)).thenReturn(Optional.of(examType));
        when(topicRepository.findByChapterIdOrderByOrderIndexAsc(chapterId)).thenReturn(List.of(topic));
        lenient().when(questionRepository.findByTopicId(topicId)).thenReturn(List.of(q));

        byte[] pdfBytes = learnPdfService.generateChapterNotesPdf(chapterId);
        assertNotNull(pdfBytes);
        assertTrue(pdfBytes.length > 5000, "Master Notes PDF should be substantial with watermark + content");

        String previewOut = System.getProperty("pdf.preview.out");
        if (previewOut != null && !previewOut.isBlank()) {
            Path outPath = Path.of(previewOut);
            if (outPath.getParent() != null) {
                Files.createDirectories(outPath.getParent());
            }
            Files.write(outPath, pdfBytes);
        }

        try (PdfReader reader = new PdfReader(pdfBytes)) {
            int pages = reader.getNumberOfPages();
            assertTrue(pages >= 5, "Expected exhaustive multi-page master notes (>= 5 pages), got " + pages);

            PdfTextExtractor extractor = new PdfTextExtractor(reader);
            StringBuilder allText = new StringBuilder();
            for (int p = 1; p <= pages; p++) {
                String pageText = extractor.getTextFromPage(p);
                assertTrue(pageText.contains("PrepLens - Achieve Your Dreams"), "Footer missing on page " + p);
                assertTrue(pageText.contains("Page " + p), "Page number missing on page " + p);
                allText.append(pageText).append('\n');
            }
            String fullText = allText.toString();
            assertTrue(fullText.contains("Master Notes"));
            assertTrue(fullText.contains("Key Derivations, Graph Trends & Conceptual Proofs"));
            assertTrue(fullText.contains("Zero-Gap Rapid Revision & Recall Checklist"));
            assertTrue(fullText.contains("(A) Energy density"), "List-formatted MCQ options should render cleanly");
            assertTrue(fullText.contains("eps_0"), "Unicode epsilon should be cleanly transliterated");
            assertTrue(fullText.contains("L^(-1)"), "Unicode negative superscript should be cleanly transliterated");
        }
    }
}
