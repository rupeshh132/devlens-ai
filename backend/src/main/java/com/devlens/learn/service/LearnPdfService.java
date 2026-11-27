package com.devlens.learn.service;

import com.devlens.learn.entity.LearnMockTest;
import com.devlens.learn.entity.LearnQuestion;
import com.devlens.learn.entity.LearnTestQuestion;
import com.devlens.learn.entity.LearnUser;
import com.devlens.learn.repository.LearnMockTestRepository;
import com.devlens.learn.repository.LearnQuestionRepository;
import com.devlens.learn.repository.LearnTestQuestionRepository;
import com.lowagie.text.*;
import com.lowagie.text.pdf.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.io.ByteArrayOutputStream;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import java.util.stream.Collectors;
import java.awt.Color;

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

    public byte[] generateChapterNotesPdf(UUID chapterId) {
        var chapter = chapterRepository.findById(chapterId)
                .orElseThrow(() -> new RuntimeException("Chapter not found: " + chapterId));
        var subject = subjectRepository.findById(chapter.getSubjectId()).orElse(null);
        var examType = (subject != null) ? examTypeRepository.findById(subject.getExamTypeId()).orElse(null) : null;
        var topics = topicRepository.findByChapterIdOrderByOrderIndexAsc(chapterId);

        ByteArrayOutputStream out = new ByteArrayOutputStream();
        try {
            Document document = new Document(PageSize.A4, 45, 45, 48, 48);
            PdfWriter writer = PdfWriter.getInstance(document, out);
            writer.setPageEvent(new WatermarkPageEvent("PREPLENS LEARN  |  SYNCED NOTES"));
            document.open();

            Font brandFont = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 10, new Color(79, 70, 229));
            Font titleFont = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 17, Color.BLACK);
            Font metaFont = FontFactory.getFont(FontFactory.HELVETICA, 10, Color.DARK_GRAY);
            Font sectionFont = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 13, new Color(30, 41, 59));
            Font bodyBold = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 10.5f, Color.BLACK);
            Font bodyFont = FontFactory.getFont(FontFactory.HELVETICA, 10, Color.DARK_GRAY);

            Paragraph brand = new Paragraph("PREPLENS LEARN — CHAPTER MASTER STUDY NOTES", brandFont);
            document.add(brand);

            Paragraph chTitle = new Paragraph(chapter.getTitle(), titleFont);
            chTitle.setSpacingBefore(4);
            chTitle.setSpacingAfter(4);
            document.add(chTitle);

            String trackInfo = (examType != null ? examType.getName() : "Competitive / Board")
                    + "  |  Subject: " + (subject != null ? subject.getName() : "Core");
            Paragraph meta = new Paragraph(trackInfo + "  |  Official Syllabus Synchronized Edition", metaFont);
            meta.setSpacingAfter(14);
            document.add(meta);

            Paragraph topicsHeading = new Paragraph("1. Synchronized Topic Breakdown & Core Coverage", sectionFont);
            topicsHeading.setSpacingAfter(6);
            document.add(topicsHeading);

            int tNum = 1;
            for (var topic : topics) {
                Paragraph tp = new Paragraph(tNum + ". " + topic.getTitle(), bodyBold);
                tp.setSpacingBefore(4);
                document.add(tp);
                if (topic.getDescription() != null && !topic.getDescription().isBlank()) {
                    Paragraph desc = new Paragraph("   " + topic.getDescription(), bodyFont);
                    desc.setSpacingAfter(4);
                    document.add(desc);
                }
                tNum++;
            }

            Paragraph practiceHeading = new Paragraph("2. High-Yield Concept Drills & Solved Reference", sectionFont);
            practiceHeading.setSpacingBefore(14);
            practiceHeading.setSpacingAfter(6);
            document.add(practiceHeading);

            int qNum = 1;
            for (var topic : topics) {
                List<LearnQuestion> qList = questionRepository.findByTopicId(topic.getId());
                for (LearnQuestion q : qList) {
                    Paragraph qp = new Paragraph("Q" + qNum + ". [" + (q.getQuestionType() != null ? q.getQuestionType() : "MCQ") + "] " + q.getQuestionText(), bodyBold);
                    qp.setSpacingBefore(6);
                    document.add(qp);
                    Paragraph ansP = new Paragraph("   Answer Key: " + (q.getCorrectAnswer() != null ? q.getCorrectAnswer() : "-"), bodyFont);
                    document.add(ansP);
                    if (q.getExplanation() != null && !q.getExplanation().isBlank()) {
                        Paragraph expP = new Paragraph("   Solution & Trap Note: " + q.getExplanation(), bodyFont);
                        expP.setSpacingAfter(4);
                        document.add(expP);
                    }
                    qNum++;
                }
            }
            if (qNum == 1) {
                document.add(new Paragraph("Practice this chapter's Live DPPs, Chapter Drills & Full CBT Papers in Mock Tests for step-by-step solutions.", bodyFont));
            }

            document.close();
        } catch (Exception e) {
            throw new RuntimeException("Error generating chapter notes PDF", e);
        }
        return out.toByteArray();
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

        ByteArrayOutputStream out = new ByteArrayOutputStream();

        try {
            Document document = new Document(PageSize.A4, 50, 50, 50, 50);
            PdfWriter writer = PdfWriter.getInstance(document, out);
            
            // Set up Watermark Event
            String watermarkText = user.getEmail() + " | " + (user.getPhone() != null ? user.getPhone() : "DEV-LENS");
            writer.setPageEvent(new WatermarkPageEvent(watermarkText));

            document.open();

            // Title
            Font titleFont = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 18, Color.BLACK);
            Paragraph title = new Paragraph(mockTest.getTitle(), titleFont);
            title.setAlignment(Element.ALIGN_CENTER);
            document.add(title);
            document.add(new Paragraph(" ")); // empty line

            // Questions
            Font questionFont = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 12, Color.BLACK);
            Font optionFont = FontFactory.getFont(FontFactory.HELVETICA, 11, Color.DARK_GRAY);

            int qNum = 1;
            for (LearnTestQuestion tq : testQuestions) {
                LearnQuestion q = questionMap.get(tq.getQuestionId());
                if (q != null) {
                    Paragraph qP = new Paragraph("Q" + qNum + ". " + q.getQuestionText(), questionFont);
                    document.add(qP);
                    
                    // Decode options JSON safely (null for subjective CBSE questions)
                    if (q.getOptionsJson() != null && !q.getOptionsJson().trim().isEmpty()) {
                        String optionsStr = q.getOptionsJson()
                                .replace("{", "")
                                .replace("}", "")
                                .replace("\"", "");
                                
                        for (String opt : optionsStr.split(",")) {
                            Paragraph optP = new Paragraph("    " + opt.trim(), optionFont);
                            document.add(optP);
                        }
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

    // Inner class for watermark
    static class WatermarkPageEvent extends PdfPageEventHelper {
        private final String watermarkText;

        public WatermarkPageEvent(String watermarkText) {
            this.watermarkText = watermarkText;
        }

        @Override
        public void onEndPage(PdfWriter writer, Document document) {
            PdfContentByte canvas = writer.getDirectContentUnder();
            canvas.saveState();
            canvas.beginText();
            canvas.setColorFill(new Color(200, 200, 200, 100)); // Light gray, slightly transparent
            
            try {
                BaseFont bf = BaseFont.createFont(BaseFont.HELVETICA, BaseFont.WINANSI, BaseFont.EMBEDDED);
                canvas.setFontAndSize(bf, 40);
                
                // Draw diagonal text in the center
                float x = (document.getPageSize().getLeft() + document.getPageSize().getRight()) / 2;
                float y = (document.getPageSize().getBottom() + document.getPageSize().getTop()) / 2;
                
                canvas.showTextAligned(Element.ALIGN_CENTER, watermarkText, x, y, 45);
                
                // Add a second watermark slightly offset
                canvas.showTextAligned(Element.ALIGN_CENTER, watermarkText, x, y - 200, 45);
                canvas.showTextAligned(Element.ALIGN_CENTER, watermarkText, x, y + 200, 45);
                
            } catch (Exception e) {
                e.printStackTrace();
            }
            
            canvas.endText();
            canvas.restoreState();
        }
    }
}
