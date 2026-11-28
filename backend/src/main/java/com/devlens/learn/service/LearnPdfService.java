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
                .replace("Δ", "Delta ").replace("δ", "delta")
                .replace("π", "pi").replace("θ", "theta").replace("φ", "phi")
                .replace("λ", "lambda").replace("ω", "omega").replace("Ω", "Ohm")
                .replace("σ", "sigma").replace("ρ", "rho").replace("α", "alpha")
                .replace("β", "beta").replace("γ", "gamma").replace("η", "eta")
                .replace("τ", "tau").replace("ν", "nu").replace("Ψ", "Psi")
                .replace("→", " -> ").replace("←", " <- ").replace("⇌", " <=> ").replace("↔", " <-> ")
                .replace("↑", "(gas)").replace("↓", "(ppt)")
                .replace("×", " x ").replace("·", ".").replace("⋅", ".").replace("÷", "/")
                .replace("±", "+/-").replace("≤", "<=").replace("≥", ">=")
                .replace("≠", "!=").replace("≈", "~=").replace("∝", " ~ ")
                .replace("√", "sqrt").replace("∫", "Integral ").replace("Σ", "Sum ")
                .replace("∞", "infinity").replace("°", " deg").replace("∈", " in ")
                .replace("⁻¹", "^(-1)").replace("⁻²", "^(-2)").replace("⁻³", "^(-3)")
                .replace("⁻⁴", "^(-4)").replace("⁻⁵", "^(-5)").replace("⁻⁶", "^(-6)")
                .replace("⁺", "^(+)").replace("⁻", "^(-)")
                .replace("⁰", "^0").replace("¹", "^1").replace("²", "^2").replace("³", "^3")
                .replace("⁴", "^4").replace("⁵", "^5").replace("⁶", "^6").replace("⁷", "^7")
                .replace("⁸", "^8").replace("⁹", "^9").replace("ⁿ", "^n")
                .replace("₀", "0").replace("₁", "1").replace("₂", "2").replace("₃", "3")
                .replace("₄", "4").replace("₅", "5").replace("₆", "6").replace("₇", "7")
                .replace("₈", "8").replace("₉", "9")
                .replace("’", "'").replace("‘", "'").replace("“", "\"").replace("”", "\"")
                .replace("—", " - ").replace("–", "-").replace("•", "*")
                .replace("✓", "[Correct]").replace("✗", "[Wrong]")
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
                addCalloutBox(document,
                        "SYLLABUS SCOPE & EXAM WEIGHTAGE (" + trackName.toUpperCase() + ")",
                        formatMathText(mod.getWeightageNote() + "\n" + mod.getSyllabusAlert()),
                        SUBTLE_BG, ACCENT_BLUE, bodyBold, bodyFont);

                // Section 1: Deep Conceptual Breakdown
                addSectionHeading(document, "1. Detailed Concept Architecture & Core Theory", sectionFont);
                int secIdx = 1;
                for (var sec : mod.getSections()) {
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

                // Section 2: Synchronized Syllabus Subtopic Map
                addSectionHeading(document, "2. Synchronized Subtopic Coverage Map", sectionFont);
                int tNum = 1;
                for (LearnTopic topic : topics) {
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

                // Section 3: Master Formula & Laws Table
                if (mod.getFormulas() != null && !mod.getFormulas().isEmpty()) {
                    addSectionHeading(document, "3. High-Yield Formula, Constants & Laws Sheet", sectionFont);
                    PdfPTable fTable = new PdfPTable(new float[]{2.3f, 3.3f, 3.0f});
                    fTable.setWidthPercentage(100);
                    fTable.setSpacingBefore(4);
                    fTable.setSpacingAfter(8);
                    fTable.setHeaderRows(1);
                    addStyledHeaderRow(fTable, List.of("Concept / Law", "Mathematical Formula / Equation", "Conditions & Exam Shortcut"), tableHeadFont);
                    for (var f : mod.getFormulas()) {
                        addStyledCell(fTable, formatMathText(f.getConcept()), bodyBold, false);
                        addStyledCell(fTable, formatMathText(f.getFormula()), formulaFont, false);
                        addStyledCell(fTable, formatMathText(f.getNote()), tableCellFont, false);
                    }
                    document.add(fTable);
                }

                // Section 4: Comparison / Exception Matrix Table
                if (mod.getComparison() != null && !mod.getComparison().getRows().isEmpty()) {
                    addSectionHeading(document, "4. " + formatMathText(mod.getComparison().getTitle()), sectionFont);
                    List<String> hdrs = mod.getComparison().getHeaders();
                    float[] widths = new float[hdrs.size()];
                    for (int i = 0; i < widths.length; i++) widths[i] = 1f;
                    PdfPTable cTable = new PdfPTable(widths);
                    cTable.setWidthPercentage(100);
                    cTable.setSpacingBefore(4);
                    cTable.setSpacingAfter(8);
                    cTable.setHeaderRows(1);
                    addStyledHeaderRow(cTable, hdrs.stream().map(LearnPdfService::formatMathText).toList(), tableHeadFont);
                    for (List<String> row : mod.getComparison().getRows()) {
                        for (int ci = 0; ci < hdrs.size(); ci++) {
                            String val = ci < row.size() ? row.get(ci) : "-";
                            addStyledCell(cTable, formatMathText(val), ci == 0 ? bodyBold : tableCellFont, false);
                        }
                    }
                    document.add(cTable);
                }

                // Section 5: Examiner Traps & Negative-Marking Alerts
                if (mod.getTraps() != null && !mod.getTraps().isEmpty()) {
                    addSectionHeading(document, "5. Examiner Pitfalls, Negative-Marking Traps & Mnemonics", sectionFont);
                    StringBuilder trapText = new StringBuilder();
                    for (int ti = 0; ti < mod.getTraps().size(); ti++) {
                        trapText.append(ti + 1).append(". ").append(formatMathText(mod.getTraps().get(ti)));
                        if (ti < mod.getTraps().size() - 1) trapText.append("\n");
                    }
                    addCalloutBox(document, "AVOID THESE EXAM-DAY MISTAKES", trapText.toString(),
                            AMBER_BG, AMBER_BORDER, bodyBold, tableCellFont);
                }

                // Section 6: Step-by-Step Solved Exemplars
                if (mod.getSolvedExamples() != null && !mod.getSolvedExamples().isEmpty()) {
                    addSectionHeading(document, "6. Solved Exemplars (Step-by-Step Exam Problems)", sectionFont);
                    int exIdx = 1;
                    for (var ex : mod.getSolvedExamples()) {
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
            } else {
                // Standard structured notes fallback for non-JSON chapters (keeps Class 9-12 aesthetic + clean symbol rendering)
                addSectionHeading(document, "1. Synchronized Topic Breakdown & Core Coverage", sectionFont);
                int tNum = 1;
                for (LearnTopic topic : topics) {
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
            }

            // Section 7: Live Database Verified Practice Bank
            addSectionHeading(document, "7. Chapter Practice Bank & Verified Solutions", sectionFont);
            int qNum = 1;
            for (LearnTopic topic : topics) {
                List<LearnQuestion> qList = questionRepository.findByTopicId(topic.getId());
                for (LearnQuestion q : qList) {
                    Paragraph qp = new Paragraph(
                            "Q" + qNum + ". [" + formatMathText(q.getQuestionType() != null ? q.getQuestionType() : "MCQ") + "] "
                                    + formatMathText(q.getQuestionText()),
                            bodyBold);
                    qp.setSpacingBefore(6);
                    qp.setSpacingAfter(2);
                    document.add(qp);

                    if (q.getOptionsJson() != null && q.getOptionsJson().contains("\"")) {
                        try {
                            Map<String, String> opts = objectMapper.readValue(q.getOptionsJson(), new TypeReference<>() {});
                            for (Map.Entry<String, String> oe : opts.entrySet()) {
                                Paragraph op = new Paragraph("    (" + oe.getKey() + ") " + formatMathText(oe.getValue()), tableCellFont);
                                document.add(op);
                            }
                        } catch (Exception ignored) {}
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

    private void addSectionHeading(Document doc, String heading, Font sectionFont) throws DocumentException {
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
            Document document = new Document(PageSize.A4, 46, 46, 46, 52);
            PdfWriter writer = PdfWriter.getInstance(document, out);

            String watermarkText = user.getEmail() + " | " + (user.getPhone() != null ? user.getPhone() : "PREPLENS");
            writer.setPageEvent(new BrandedWatermarkEvent(logoBytes, watermarkText, mockTest.getSubject()));

            document.open();

            Font titleFont = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 16, NAVY_PRIMARY);
            Paragraph title = new Paragraph(formatMathText(mockTest.getTitle()), titleFont);
            title.setAlignment(Element.ALIGN_CENTER);
            document.add(title);
            document.add(new Paragraph(" "));

            Font questionFont = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 11, TEXT_DARK);
            Font optionFont = FontFactory.getFont(FontFactory.HELVETICA, 10, TEXT_MUTED);

            int qNum = 1;
            for (LearnTestQuestion tq : testQuestions) {
                LearnQuestion q = questionMap.get(tq.getQuestionId());
                if (q != null) {
                    Paragraph qP = new Paragraph("Q" + qNum + ". " + formatMathText(q.getQuestionText()), questionFont);
                    document.add(qP);

                    if (q.getOptionsJson() != null && !q.getOptionsJson().trim().isEmpty()) {
                        try {
                            Map<String, String> opts = objectMapper.readValue(q.getOptionsJson(), new TypeReference<>() {});
                            for (Map.Entry<String, String> oe : opts.entrySet()) {
                                Paragraph optP = new Paragraph("    (" + oe.getKey() + ") " + formatMathText(oe.getValue()), optionFont);
                                document.add(optP);
                            }
                        } catch (Exception ignored) {}
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
