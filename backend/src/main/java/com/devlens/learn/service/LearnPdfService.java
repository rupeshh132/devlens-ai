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
                    
                    // Decode options JSON (simple string replace for prototype)
                    String optionsStr = q.getOptionsJson()
                            .replace("{", "")
                            .replace("}", "")
                            .replace("\"", "");
                            
                    for (String opt : optionsStr.split(",")) {
                        Paragraph optP = new Paragraph("    " + opt.trim(), optionFont);
                        document.add(optP);
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
