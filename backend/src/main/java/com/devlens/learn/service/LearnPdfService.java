package com.devlens.learn.service;

import com.devlens.learn.entity.LearnMockTest;
import com.devlens.learn.entity.LearnQuestion;
import com.devlens.learn.entity.LearnTestQuestion;
import com.devlens.learn.entity.LearnTopic;
import com.devlens.learn.entity.LearnUser;
import com.devlens.learn.repository.LearnMockTestRepository;
import com.devlens.learn.repository.LearnQuestionRepository;
import com.devlens.learn.repository.LearnTestQuestionRepository;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.lowagie.text.*;
import com.lowagie.text.pdf.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;

import java.awt.Color;
import java.io.ByteArrayOutputStream;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

@Slf4j
@Service
@RequiredArgsConstructor
public class LearnPdfService {

    private final LearnMockTestRepository mockTestRepository;
    private final LearnTestQuestionRepository testQuestionRepository;
    private final LearnQuestionRepository questionRepository;
    private final com.devlens.learn.repository.LearnUserRepository userRepository;
    private final com.devlens.learn.repository.LearnChapterRepository chapterRepository;
    private final com.devlens.learn.repository.LearnTopicRepository topicRepository;
    private final com.devlens.learn.repository.LearnSubjectRepository subjectRepository;
    private final com.devlens.learn.repository.LearnExamTypeRepository examTypeRepository;
    private final CompetitiveNotesRegistry competitiveNotesRegistry;
    private final ObjectMapper objectMapper;

    private static final Color NAVY_PRIMARY = new Color(15, 36, 84);
    private static final Color ACCENT_BLUE = new Color(37, 99, 235);
    private static final Color SUBTLE_BG = new Color(241, 245, 255);
    private static final Color CALLOUT_BG = new Color(248, 250, 252);
    private static final Color AMBER_BG = new Color(255, 251, 235);
    private static final Color AMBER_BORDER = new Color(217, 119, 6);
    private static final Color EMERALD_BG = new Color(236, 253, 245);
    private static final Color EMERALD_BORDER = new Color(5, 150, 105);
    private static final Color BORDER_GRAY = new Color(203, 213, 225);
    private static final Color TEXT_DARK = new Color(15, 23, 42);
    private static final Color TEXT_MUTED = new Color(71, 85, 105);

    private byte[] loadRoundLogoBytes() {
        try {
            ClassPathResource res = new ClassPathResource("images/preplens_round_logo.png");
            if (res.exists()) {
                try (InputStream is = res.getInputStream()) {
                    return is.readAllBytes();
                }
            }
        } catch (Exception e) {
            log.warn("Round logo resource not loaded: {}", e.getMessage());
        }
        return null;
    }

    /**
     * Transliterates Greek letters, superscripts, subscripts, arrows, and math operators cleanly
     * into WINANSI-safe characters so OpenPDF Helvetica never silently drops symbols in formulas.
     */
    static String formatMathText(String input) {
        if (input == null) return "";
        return input
                .replace("ε₀", "eps_0").replace("ε0", "eps_0").replace("ε", "epsilon")
                .replace("μ₀", "mu_0").replace("μ", "mu")
                .replace("Δ", "Delta ").replace("∆", "Delta ").replace("δ", "delta")
                .replace("π", "pi").replace("θ", "theta").replace("φ", "phi").replace("Φ", "Phi")
                .replace("λ", "lambda").replace("ω", "omega").replace("Ω", "Ohm")
                .replace("σ", "sigma").replace("ρ", "rho").replace("α", "alpha")
                .replace("β", "beta").replace("γ", "gamma").replace("η", "eta")
                .replace("τ", "tau").replace("ν", "nu").replace("Ψ", "Psi").replace("ψ", "psi")
                .replace("→", " -> ").replace("←", " <- ").replace("⇌", " <=> ").replace("↔", " <-> ")
                .replace("⇒", " => ").replace("⇔", " <=> ")
                .replace("↑", "(gas)").replace("↓", "(ppt)")
                .replace("×", " x ").replace("·", ".").replace("⋅", ".").replace("÷", "/")
                .replace("±", "+/-").replace("∓", "-/+").replace("≤", "<=").replace("≥", ">=")
                .replace("≠", "!=").replace("≈", "~=").replace("≡", "===").replace("∝", " ~ ")
                .replace("√", "sqrt").replace("∫", "Integral ").replace("Σ", "Sum ").replace("∏", "Prod ")
                .replace("∞", "infinity").replace("°", " deg").replace("∈", " in ").replace("∉", " not in ")
                .replace("∪", " U ").replace("∩", " intersect ").replace("⊂", " subset ").replace("⊆", " subseteq ")
                .replace("∀", "for all ").replace("∃", "exists ").replace("∴", "therefore ").replace("∵", "since ")
                .replace("⊥", "perp").replace("∥", "||").replace("∠", "angle ")
                .replace("½", "1/2").replace("¼", "1/4").replace("¾", "3/4").replace("⅓", "1/3").replace("⅔", "2/3")
                .replace("⁻¹", "^(-1)").replace("⁻²", "^(-2)").replace("⁻³", "^(-3)")
                .replace("⁻⁴", "^(-4)").replace("⁻⁵", "^(-5)").replace("⁻⁶", "^(-6)")
                .replace("⁺", "^(+)").replace("⁻", "^(-)")
                .replace("⁰", "^0").replace("¹", "^1").replace("²", "^2").replace("³", "^3")
                .replace("⁴", "^4").replace("⁵", "^5").replace("⁶", "^6").replace("⁷", "^7")
                .replace("⁸", "^8").replace("⁹", "^9").replace("ⁿ", "^n")
                .replace("₀", "0").replace("₁", "1").replace("₂", "2").replace("₃", "3")
                .replace("₄", "4").replace("₅", "5").replace("₆", "6").replace("₇", "7")
                .replace("₈", "8").replace("₉", "9")
                .replace("’", "'").replace("‘", "'").replace("′", "'").replace("″", "\"")
                .replace("“", "\"").replace("”", "\"")
                .replace("—", " - ").replace("–", "-").replace("•", "*")
                .replace("✓", "[OK]").replace("✗", "[X]").replace("☑", "[x]")
                .replaceAll("[^\\x20-\\x7E\\n\\r\\t]", " ")
                .replaceAll(" {2,}", " ")
                .trim();
    }

    public byte[] generateChapterNotesPdf(UUID chapterId) {
        var chapter = chapterRepository.findById(chapterId)
                .orElseThrow(() -> new RuntimeException("Chapter not found: " + chapterId));
        var subject = subjectRepository.findById(chapter.getSubjectId()).orElse(null);
        var examType = (subject != null) ? examTypeRepository.findById(subject.getExamTypeId()).orElse(null) : null;
        List<LearnTopic> topics = topicRepository.findByChapterIdOrderByOrderIndexAsc(chapterId);

        String trackName = examType != null ? examType.getName() : "Competitive Prep";
        String subjectName = subject != null ? subject.getName() : "Core";
        String chapterTitle = formatMathText(chapter.getTitle());
        Optional<CompetitiveNotesRegistry.ChapterNotesModule> moduleOpt =
                competitiveNotesRegistry.findForChapter(chapterId, chapter.getTitle(), subjectName);

        byte[] logoBytes = loadRoundLogoBytes();
        ByteArrayOutputStream out = new ByteArrayOutputStream();

        try {
            Document document = new Document(PageSize.A4, 42, 42, 40, 52);
            PdfWriter writer = PdfWriter.getInstance(document, out);
            writer.setPageEvent(new BrandedWatermarkEvent(
                    logoBytes,
                    "PrepLens - Achieve Your Dreams",
                    trackName + " " + subjectName
            ));
            document.open();

            Font heroTitleFont = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 16, Color.WHITE);
            Font heroSubFont = FontFactory.getFont(FontFactory.HELVETICA, 9.5f, new Color(219, 234, 254));
            Font chapterTitleFont = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 15.5f, NAVY_PRIMARY);
            Font sectionFont = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 12.5f, NAVY_PRIMARY);
            Font subHeadFont = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 10.5f, ACCENT_BLUE);
            Font bodyBold = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 9.8f, TEXT_DARK);
            Font bodyFont = FontFactory.getFont(FontFactory.HELVETICA, 9.5f, TEXT_MUTED);
            Font formulaFont = FontFactory.getFont(FontFactory.COURIER_BOLD, 9.2f, NAVY_PRIMARY);
            Font tableHeadFont = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 9.2f, NAVY_PRIMARY);
            Font tableCellFont = FontFactory.getFont(FontFactory.HELVETICA, 8.8f, TEXT_DARK);

            // 1. Navy Top Branded Banner (Matching Class 9-12 Master Notes)
            addHeroBanner(document, logoBytes, trackName + " " + subjectName + " - Master Notes",
                    chapterTitle + "  |  PrepLens Academic Curriculum & Examination Prep",
                    heroTitleFont, heroSubFont);

            Paragraph chHeading = new Paragraph(chapterTitle, chapterTitleFont);
            chHeading.setSpacingBefore(12);
            chHeading.setSpacingAfter(6);
            document.add(chHeading);

            if (moduleOpt.isPresent()) {
                var mod = moduleOpt.get();
                addCoverageMetaStrip(document, trackName, subjectName, mod, bodyBold, tableCellFont);

                addCalloutBox(document,
                        "SYLLABUS SCOPE & EXAM WEIGHTAGE (" + trackName.toUpperCase() + ")",
                        formatMathText(mod.getWeightageNote() + "\n" + mod.getSyllabusAlert()),
                        SUBTLE_BG, ACCENT_BLUE, bodyBold, bodyFont);

                // Section 1: Deep Conceptual Breakdown
                addSectionHeading(writer, document, "1. Detailed Concept Architecture & Core Theory", sectionFont);
                int secIdx = 1;
                for (var sec : mod.getSections()) {
                    ensureSpace(writer, document, 90f);
                    Paragraph sh = new Paragraph("1." + secIdx + " " + formatMathText(sec.getHeading()), subHeadFont);
                    sh.setSpacingBefore(7);
                    sh.setSpacingAfter(3);
                    document.add(sh);

                    if (sec.getSummary() != null && !sec.getSummary().isBlank()) {
                        Paragraph sum = new Paragraph(formatMathText(sec.getSummary()), bodyFont);
                        sum.setLeading(13.5f);
                        sum.setSpacingAfter(4);
                        document.add(sum);
                    }
                    for (String pt : sec.getKeyPoints()) {
                        Paragraph bp = new Paragraph("  *  " + formatMathText(pt), bodyFont);
                        bp.setLeading(13f);
                        bp.setIndentationLeft(8);
                        bp.setSpacingAfter(2.5f);
                        document.add(bp);
                    }
                    secIdx++;
                }

                // Section 2: Core Derivations, Graphical Trends & Behaviour Maps
                int secNo = 2;
                if (mod.getDerivationsAndGraphs() != null && !mod.getDerivationsAndGraphs().isEmpty()) {
                    addSectionHeading(writer, document, secNo++ + ". Key Derivations, Graph Trends & Conceptual Proofs", sectionFont);
                    PdfPTable dTable = new PdfPTable(new float[]{2.4f, 3.2f, 3.2f});
                    dTable.setWidthPercentage(100);
                    dTable.setSpacingBefore(4);
                    dTable.setSpacingAfter(8);
                    dTable.setHeaderRows(1);
                    addStyledHeaderRow(dTable, List.of("Derivation / Graph", "Key Expression / Curve Slope-Area", "Exam Interpretation & Special Limits"), tableHeadFont);
                    int rIdx = 0;
                    for (var dg : mod.getDerivationsAndGraphs()) {
                        boolean shaded = (rIdx % 2 == 1);
                        addStyledCell(dTable, formatMathText(dg.getTitle()), bodyBold, shaded);
                        addStyledCell(dTable, formatMathText(dg.getExpressionOrCurve()), formulaFont, shaded);
                        addStyledCell(dTable, formatMathText(dg.getKeyTakeaway()), tableCellFont, shaded);
                        rIdx++;
                    }
                    document.add(dTable);
                }

                // Section 3: Synchronized Syllabus Subtopic Map
                addSectionHeading(writer, document, secNo++ + ". Synchronized Subtopic Coverage Map", sectionFont);
                int tNum = 1;
                for (LearnTopic topic : topics) {
                    ensureSpace(writer, document, 65f);
                    Paragraph tp = new Paragraph(tNum + ". " + formatMathText(topic.getTitle()), bodyBold);
                    tp.setSpacingBefore(3);
                    document.add(tp);
                    if (topic.getDescription() != null && !topic.getDescription().isBlank()) {
                        Paragraph desc = new Paragraph("   " + formatMathText(topic.getDescription()), bodyFont);
                        desc.setSpacingAfter(3);
                        document.add(desc);
                    }
                    tNum++;
                }

                // Section 4: Master Formula & Laws Table
                if (mod.getFormulas() != null && !mod.getFormulas().isEmpty()) {
                    addSectionHeading(writer, document, secNo++ + ". Exhaustive Formula, Constants & Laws Sheet", sectionFont);
                    PdfPTable fTable = new PdfPTable(new float[]{2.3f, 3.3f, 3.0f});
                    fTable.setWidthPercentage(100);
                    fTable.setSpacingBefore(4);
                    fTable.setSpacingAfter(8);
                    fTable.setHeaderRows(1);
                    addStyledHeaderRow(fTable, List.of("Concept / Law", "Mathematical Formula / Equation", "Conditions & Exam Shortcut"), tableHeadFont);
                    int rIdx = 0;
                    for (var f : mod.getFormulas()) {
                        boolean shaded = (rIdx % 2 == 1);
                        addStyledCell(fTable, formatMathText(f.getConcept()), bodyBold, shaded);
                        addStyledCell(fTable, formatMathText(f.getFormula()), formulaFont, shaded);
                        addStyledCell(fTable, formatMathText(f.getNote()), tableCellFont, shaded);
                        rIdx++;
                    }
                    document.add(fTable);
                }

                // Section 5: Comparison / Exception Matrix Table
                if (mod.getComparison() != null && !mod.getComparison().getRows().isEmpty()) {
                    addSectionHeading(writer, document, secNo++ + ". " + formatMathText(mod.getComparison().getTitle()), sectionFont);
                    List<String> hdrs = mod.getComparison().getHeaders();
                    float[] widths = new float[hdrs.size()];
                    for (int i = 0; i < widths.length; i++) widths[i] = 1f;
                    PdfPTable cTable = new PdfPTable(widths);
                    cTable.setWidthPercentage(100);
                    cTable.setSpacingBefore(4);
                    cTable.setSpacingAfter(8);
                    cTable.setHeaderRows(1);
                    addStyledHeaderRow(cTable, hdrs.stream().map(LearnPdfService::formatMathText).toList(), tableHeadFont);
                    int rIdx = 0;
                    for (List<String> row : mod.getComparison().getRows()) {
                        boolean shaded = (rIdx % 2 == 1);
                        for (int ci = 0; ci < hdrs.size(); ci++) {
                            String val = ci < row.size() ? row.get(ci) : "-";
                            addStyledCell(cTable, formatMathText(val), ci == 0 ? bodyBold : tableCellFont, shaded);
                        }
                        rIdx++;
                    }
                    document.add(cTable);
                }

                // Section 6: Examiner Traps & Negative-Marking Alerts
                if (mod.getTraps() != null && !mod.getTraps().isEmpty()) {
                    addSectionHeading(writer, document, secNo++ + ". Examiner Pitfalls, Negative-Marking Traps & Mnemonics", sectionFont);
                    StringBuilder trapText = new StringBuilder();
                    for (int ti = 0; ti < mod.getTraps().size(); ti++) {
                        trapText.append(ti + 1).append(". ").append(formatMathText(mod.getTraps().get(ti)));
                        if (ti < mod.getTraps().size() - 1) trapText.append("\n");
                    }
                    addCalloutBox(document, "AVOID THESE EXAM-DAY MISTAKES", trapText.toString(),
                            AMBER_BG, AMBER_BORDER, bodyBold, tableCellFont);
                }

                // Section 7: Zero-Gap Quick Revision Checklist
                if (mod.getRevisionChecklist() != null && !mod.getRevisionChecklist().isEmpty()) {
                    addSectionHeading(writer, document, secNo++ + ". Zero-Gap Rapid Revision & Recall Checklist", sectionFont);
                    StringBuilder chkText = new StringBuilder();
                    for (int ci = 0; ci < mod.getRevisionChecklist().size(); ci++) {
                        chkText.append("[ ] ").append(formatMathText(mod.getRevisionChecklist().get(ci)));
                        if (ci < mod.getRevisionChecklist().size() - 1) chkText.append("\n");
                    }
                    addCalloutBox(document, "PRE-EXAM FINAL AUDIT CHECKPOINTS", chkText.toString(),
                            EMERALD_BG, EMERALD_BORDER, bodyBold, tableCellFont);
                }

                // Section 8: Step-by-Step Solved Exemplars
                if (mod.getSolvedExamples() != null && !mod.getSolvedExamples().isEmpty()) {
                    addSectionHeading(writer, document, secNo++ + ". Graded Solved Exemplars (Concept -> Mains/NEET -> Advanced)", sectionFont);
                    int exIdx = 1;
                    for (var ex : mod.getSolvedExamples()) {
                        ensureSpace(writer, document, 100f);
                        Paragraph qHead = new Paragraph(
                                "Example " + exIdx + " [" + formatMathText(ex.getTag()) + "]: " + formatMathText(ex.getQuestion()),
                                bodyBold);
                        qHead.setSpacingBefore(6);
                        qHead.setSpacingAfter(3);
                        document.add(qHead);

                        for (String step : ex.getSteps()) {
                            Paragraph sp = new Paragraph("   -> " + formatMathText(step), bodyFont);
                            sp.setLeading(13f);
                            document.add(sp);
                        }
                        Paragraph ansP = new Paragraph("   Final Answer: " + formatMathText(ex.getAnswer()), subHeadFont);
                        ansP.setSpacingBefore(2);
                        document.add(ansP);
                        if (ex.getPitfall() != null && !ex.getPitfall().isBlank()) {
                            Paragraph pf = new Paragraph("   Examiner Tip: " + formatMathText(ex.getPitfall()), tableCellFont);
                            pf.setSpacingAfter(5);
                            document.add(pf);
                        }
                        exIdx++;
                    }
                }

                // Final Section: Live Database Verified Practice Bank
                addSectionHeading(writer, document, secNo + ". Chapter Practice Bank & Verified Solutions", sectionFont);
            } else {
                // Standard structured notes fallback for non-JSON chapters (keeps Class 9-12 aesthetic + clean symbol rendering)
                addSectionHeading(writer, document, "1. Synchronized Topic Breakdown & Core Coverage", sectionFont);
                int tNum = 1;
                for (LearnTopic topic : topics) {
                    ensureSpace(writer, document, 65f);
                    Paragraph tp = new Paragraph(tNum + ". " + formatMathText(topic.getTitle()), bodyBold);
                    tp.setSpacingBefore(4);
                    document.add(tp);
                    if (topic.getDescription() != null && !topic.getDescription().isBlank()) {
                        Paragraph desc = new Paragraph("   " + formatMathText(topic.getDescription()), bodyFont);
                        desc.setSpacingAfter(4);
                        document.add(desc);
                    }
                    tNum++;
                }
                addSectionHeading(writer, document, "2. Chapter Practice Bank & Verified Solutions", sectionFont);
            }

            int qNum = 1;
            for (LearnTopic topic : topics) {
                List<LearnQuestion> qList = questionRepository.findByTopicId(topic.getId());
                for (LearnQuestion q : qList) {
                    ensureSpace(writer, document, 85f);
                    Paragraph qp = new Paragraph(
                            "Q" + qNum + ". [" + formatMathText(q.getQuestionType() != null ? q.getQuestionType() : "MCQ") + "] "
                                    + formatMathText(q.getQuestionText()),
                            bodyBold);
                    qp.setSpacingBefore(6);
                    qp.setSpacingAfter(2);
                    document.add(qp);

                    for (String optLine : parseOptionsList(q.getOptionsJson())) {
                        Paragraph op = new Paragraph("    " + formatMathText(optLine), tableCellFont);
                        document.add(op);
                    }

                    Paragraph ansP = new Paragraph("   Answer Key: " + formatMathText(q.getCorrectAnswer() != null ? q.getCorrectAnswer() : "-"), subHeadFont);
                    document.add(ansP);
                    if (q.getExplanation() != null && !q.getExplanation().isBlank()) {
                        Paragraph expP = new Paragraph("   Solution & Trap Note: " + formatMathText(q.getExplanation()), bodyFont);
                        expP.setSpacingAfter(5);
                        document.add(expP);
                    }
                    qNum++;
                }
            }
            if (qNum == 1) {
                document.add(new Paragraph("Practice this chapter's Live DPPs, Chapter Drills & Full CBT Papers inside PrepLens Mock Tests.", bodyFont));
            }

            document.close();
        } catch (Exception e) {
            throw new RuntimeException("Error generating chapter notes PDF", e);
        }
        return out.toByteArray();
    }

    private void addHeroBanner(Document doc, byte[] logoBytes, String titleText, String subtitleText,
                               Font titleFont, Font subFont) throws DocumentException {
        PdfPTable banner = new PdfPTable(logoBytes != null ? new float[]{1.1f, 6.9f} : new float[]{1f});
        banner.setWidthPercentage(100);

        if (logoBytes != null) {
            PdfPCell logoCell = new PdfPCell();
            logoCell.setBackgroundColor(NAVY_PRIMARY);
            logoCell.setBorder(Rectangle.NO_BORDER);
            logoCell.setPadding(12);
            logoCell.setVerticalAlignment(Element.ALIGN_MIDDLE);
            logoCell.setHorizontalAlignment(Element.ALIGN_CENTER);
            try {
                Image img = Image.getInstance(logoBytes);
                img.scaleToFit(42, 42);
                logoCell.addElement(img);
            } catch (Exception ignored) {}
            banner.addCell(logoCell);
        }

        PdfPCell textCell = new PdfPCell();
        textCell.setBackgroundColor(NAVY_PRIMARY);
        textCell.setBorder(Rectangle.NO_BORDER);
        textCell.setPaddingTop(12);
        textCell.setPaddingBottom(12);
        textCell.setPaddingRight(14);
        textCell.setPaddingLeft(logoBytes != null ? 4 : 14);
        textCell.setVerticalAlignment(Element.ALIGN_MIDDLE);

        Paragraph t = new Paragraph(formatMathText(titleText), titleFont);
        Paragraph s = new Paragraph(formatMathText(subtitleText), subFont);
        s.setSpacingBefore(3);
        textCell.addElement(t);
        textCell.addElement(s);
        banner.addCell(textCell);

        doc.add(banner);
    }

    private void ensureSpace(PdfWriter writer, Document doc, float minPoints) {
        if (writer != null && writer.getVerticalPosition(true) - doc.bottom() < minPoints) {
            doc.newPage();
        }
    }

    private List<String> parseOptionsList(String optionsJson) {
        List<String> out = new ArrayList<>();
        if (optionsJson == null || optionsJson.isBlank()) return out;
        String trimmed = optionsJson.trim();
        try {
            if (trimmed.startsWith("{")) {
                Map<String, String> opts = objectMapper.readValue(trimmed, new TypeReference<>() {});
                for (Map.Entry<String, String> oe : opts.entrySet()) {
                    out.add("(" + oe.getKey() + ") " + oe.getValue());
                }
            } else if (trimmed.startsWith("[")) {
                List<String> list = objectMapper.readValue(trimmed, new TypeReference<>() {});
                char label = 'A';
                for (String item : list) {
                    out.add("(" + label + ") " + item);
                    label++;
                }
            }
        } catch (Exception ignored) {}
        return out;
    }

    private void addCoverageMetaStrip(Document doc, String trackName, String subjectName,
                                      CompetitiveNotesRegistry.ChapterNotesModule mod,
                                      Font keyFont, Font valFont) throws DocumentException {
        PdfPTable strip = new PdfPTable(4);
        strip.setWidthPercentage(100);
        strip.setSpacingBefore(2);
        strip.setSpacingAfter(8);
        String[][] cells = {
                {"Exam Track", trackName + " (" + subjectName + ")"},
                {"Concept Modules", mod.getSections().size() + " Deep Units"},
                {"Formula Sheet", mod.getFormulas().size() + " Key Laws"},
                {"Solved Exemplars", mod.getSolvedExamples().size() + " Graded Problems"}
        };
        for (String[] pair : cells) {
            PdfPCell c = new PdfPCell();
            c.setBackgroundColor(CALLOUT_BG);
            c.setBorderColor(BORDER_GRAY);
            c.setPadding(6);
            Paragraph p1 = new Paragraph(formatMathText(pair[0]), valFont);
            Paragraph p2 = new Paragraph(formatMathText(pair[1]), keyFont);
            c.addElement(p1);
            c.addElement(p2);
            strip.addCell(c);
        }
        doc.add(strip);
    }

    private void addSectionHeading(PdfWriter writer, Document doc, String heading, Font sectionFont) throws DocumentException {
        ensureSpace(writer, doc, 115f);
        PdfPTable bar = new PdfPTable(new float[]{0.14f, 9.86f});
        bar.setWidthPercentage(100);
        bar.setSpacingBefore(12);
        bar.setSpacingAfter(5);

        PdfPCell accent = new PdfPCell();
        accent.setBackgroundColor(ACCENT_BLUE);
        accent.setBorder(Rectangle.NO_BORDER);
        bar.addCell(accent);

        PdfPCell titleCell = new PdfPCell(new Phrase(formatMathText(heading), sectionFont));
        titleCell.setBorder(Rectangle.NO_BORDER);
        titleCell.setPaddingLeft(8);
        titleCell.setPaddingTop(2);
        titleCell.setPaddingBottom(3);
        bar.addCell(titleCell);

        doc.add(bar);
    }

    private void addCalloutBox(Document doc, String title, String body, Color bg, Color borderColor,
                               Font titleFont, Font bodyFont) throws DocumentException {
        PdfPTable box = new PdfPTable(1);
        box.setWidthPercentage(100);
        box.setSpacingBefore(4);
        box.setSpacingAfter(8);

        PdfPCell cell = new PdfPCell();
        cell.setBackgroundColor(bg);
        cell.setBorderColor(BORDER_GRAY);
        cell.setBorderWidth(0.6f);
        cell.setBorderColorLeft(borderColor);
        cell.setBorderWidthLeft(3f);
        cell.setPadding(10);

        Paragraph h = new Paragraph(formatMathText(title), titleFont);
        h.setSpacingAfter(3);
        Paragraph b = new Paragraph(formatMathText(body), bodyFont);
        b.setLeading(13.5f);
        cell.addElement(h);
        cell.addElement(b);
        box.addCell(cell);
        doc.add(box);
    }

    private void addStyledHeaderRow(PdfPTable table, List<String> headers, Font font) {
        for (String h : headers) {
            PdfPCell c = new PdfPCell(new Phrase(h, font));
            c.setBackgroundColor(SUBTLE_BG);
            c.setBorderColor(BORDER_GRAY);
            c.setPadding(6);
            table.addCell(c);
        }
    }

    private void addStyledCell(PdfPTable table, String text, Font font, boolean shaded) {
        PdfPCell c = new PdfPCell(new Phrase(text, font));
        if (shaded) c.setBackgroundColor(CALLOUT_BG);
        c.setBorderColor(BORDER_GRAY);
        c.setPadding(5.5f);
        table.addCell(c);
    }

    public byte[] generateWatermarkedMockTestPdf(UUID mockTestId, UUID userId) {
        LearnMockTest mockTest = mockTestRepository.findById(mockTestId)
                .orElseThrow(() -> new RuntimeException("Mock test not found"));

        LearnUser user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        List<LearnTestQuestion> testQuestions = testQuestionRepository.findByMockTestIdOrderByOrderIndexAsc(mockTestId);
        List<UUID> questionIds = testQuestions.stream().map(LearnTestQuestion::getQuestionId).collect(Collectors.toList());
        Map<UUID, LearnQuestion> questionMap = questionRepository.findAllById(questionIds).stream()
                .collect(Collectors.toMap(LearnQuestion::getId, q -> q));

        byte[] logoBytes = loadRoundLogoBytes();
        ByteArrayOutputStream out = new ByteArrayOutputStream();

        try {
            Document document = new Document(PageSize.A4, 42, 42, 40, 52);
            PdfWriter writer = PdfWriter.getInstance(document, out);

            String watermarkText = "PrepLens - Achieve Your Dreams | " + user.getEmail();
            writer.setPageEvent(new BrandedWatermarkEvent(logoBytes, watermarkText, mockTest.getSubject()));

            document.open();

            Font heroTitleFont = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 15, Color.WHITE);
            Font heroSubFont = FontFactory.getFont(FontFactory.HELVETICA, 9.2f, new Color(219, 234, 254));
            Font questionFont = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 10.2f, TEXT_DARK);
            Font metaFont = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 8.8f, ACCENT_BLUE);
            Font optionFont = FontFactory.getFont(FontFactory.HELVETICA, 9.5f, TEXT_MUTED);

            addHeroBanner(document, logoBytes, formatMathText(mockTest.getTitle()),
                    "Subject: " + formatMathText(mockTest.getSubject() != null ? mockTest.getSubject() : "Full Syllabus")
                            + "  |  Total Questions: " + testQuestions.size()
                            + "  |  Prepared for " + formatMathText(user.getEmail()),
                    heroTitleFont, heroSubFont);
            document.add(new Paragraph(" "));

            int qNum = 1;
            for (LearnTestQuestion tq : testQuestions) {
                LearnQuestion q = questionMap.get(tq.getQuestionId());
                if (q != null) {
                    ensureSpace(writer, document, 85f);
                    String qTypeTag = q.getQuestionType() != null ? q.getQuestionType() : "MCQ";
                    String marksTag = tq.getMarks() != null ? ("+" + tq.getMarks() + "M") : "";
                    Paragraph metaP = new Paragraph(
                            "Question " + qNum + "  [" + formatMathText(qTypeTag)
                                    + (marksTag.isEmpty() ? "" : " | " + marksTag) + "]",
                            metaFont);
                    metaP.setSpacingBefore(6);
                    document.add(metaP);

                    Paragraph qP = new Paragraph(formatMathText(q.getQuestionText()), questionFont);
                    qP.setLeading(13.5f);
                    qP.setSpacingAfter(3);
                    document.add(qP);

                    for (String optLine : parseOptionsList(q.getOptionsJson())) {
                        Paragraph op = new Paragraph("    " + formatMathText(optLine), optionFont);
                        op.setLeading(12.5f);
                        document.add(op);
                    }
                    document.add(new Paragraph(" "));
                    qNum++;
                }
            }

            document.close();
        } catch (Exception e) {
            throw new RuntimeException("Error generating PDF", e);
        }

        return out.toByteArray();
    }

    /**
     * Draws the centered translucent PrepLens round emblem watermark and crisp Class 9-12 footer on every page.
     */
    static class BrandedWatermarkEvent extends PdfPageEventHelper {
        private final byte[] logoBytes;
        private final String footerLeft;
        private final String headerTag;
        private Image cachedLogo;

        public BrandedWatermarkEvent(byte[] logoBytes, String footerLeft, String headerTag) {
            this.logoBytes = logoBytes;
            this.footerLeft = formatMathText(footerLeft);
            this.headerTag = formatMathText(headerTag);
        }

        @Override
        public void onEndPage(PdfWriter writer, Document document) {
            Rectangle page = document.getPageSize();
            float cx = (page.getLeft() + page.getRight()) / 2f;
            float cy = (page.getBottom() + page.getTop()) / 2f;

            // 1. Center Round PrepLens Emblem Watermark behind text
            PdfContentByte under = writer.getDirectContentUnder();
            under.saveState();
            try {
                PdfGState gs = new PdfGState();
                gs.setFillOpacity(0.16f);
                gs.setStrokeOpacity(0.16f);
                under.setGState(gs);

                if (logoBytes != null) {
                    if (cachedLogo == null) {
                        cachedLogo = Image.getInstance(logoBytes);
                    }
                    float size = 215f;
                    cachedLogo.scaleAbsolute(size, size);
                    cachedLogo.setAbsolutePosition(cx - size / 2f, cy - size / 2f);
                    under.addImage(cachedLogo);
                } else {
                    under.beginText();
                    BaseFont bf = BaseFont.createFont(BaseFont.HELVETICA_BOLD, BaseFont.WINANSI, BaseFont.EMBEDDED);
                    under.setFontAndSize(bf, 34);
                    under.setColorFill(new Color(148, 163, 184));
                    under.showTextAligned(Element.ALIGN_CENTER, "PREPLENS - " + headerTag, cx, cy, 42);
                    under.endText();
                }
            } catch (Exception ignored) {}
            under.restoreState();

            // 2. Class 9-12 Matching Page Footer ("PrepLens - Achieve Your Dreams" | "Page X")
            PdfContentByte over = writer.getDirectContent();
            over.saveState();
            try {
                float left = document.left();
                float right = document.right();
                float footerY = document.bottom() - 18f;

                over.setColorStroke(BORDER_GRAY);
                over.setLineWidth(0.6f);
                over.moveTo(left, footerY + 12f);
                over.lineTo(right, footerY + 12f);
                over.stroke();

                BaseFont bfFooter = BaseFont.createFont(BaseFont.HELVETICA, BaseFont.WINANSI, BaseFont.EMBEDDED);
                over.beginText();
                over.setFontAndSize(bfFooter, 9f);
                over.setColorFill(new Color(100, 116, 139));
                over.showTextAligned(Element.ALIGN_LEFT, footerLeft, left, footerY, 0);
                over.showTextAligned(Element.ALIGN_RIGHT, "Page " + writer.getPageNumber(), right, footerY, 0);
                over.endText();
            } catch (Exception ignored) {}
            over.restoreState();
        }
    }
}
