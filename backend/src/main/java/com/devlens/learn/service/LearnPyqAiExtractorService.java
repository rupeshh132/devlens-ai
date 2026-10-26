package com.devlens.learn.service;

import com.devlens.api.service.GroqClientService;
import com.devlens.learn.entity.LearnPyqPaper;
import com.devlens.learn.entity.LearnPyqQuestion;
import com.devlens.learn.repository.LearnPyqPaperRepository;
import com.devlens.learn.repository.LearnPyqQuestionRepository;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.tika.Tika;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.ByteArrayInputStream;
import java.io.InputStream;
import java.net.URI;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Slf4j
@Service
@RequiredArgsConstructor
public class LearnPyqAiExtractorService {

    private final LearnPyqPaperRepository paperRepository;
    private final LearnPyqQuestionRepository questionRepository;
    private final GroqClientService groqClientService;
    private final ObjectMapper objectMapper;
    private final Tika tika = new Tika();

    /**
     * Extracts text from uploaded PDF bytes and generates structured CBSE questions via AI.
     * If the PDF is a scanned photocopy with no text layer, it gracefully falls back to generating
     * authentic CBSE questions based on the class and subject.
     */
    @Transactional
    public List<LearnPyqQuestion> extractAndSaveQuestionsFromPdf(UUID paperId, byte[] pdfBytes) {
        LearnPyqPaper paper = paperRepository.findById(paperId)
                .orElseThrow(() -> new RuntimeException("Question paper not found: " + paperId));

        String rawText = extractRawTextFromPdf(pdfBytes);
        if (rawText != null && rawText.trim().length() >= 30) {
            log.info("PDF contains readable text ({} chars). Extracting questions for paper: {}", rawText.length(), paperId);
            return generateAndPersistQuestions(paper, rawText);
        } else {
            log.info("PDF contains no readable text stream (scanned/photocopy PDF). Auto-generating standard CBSE questions for paper: {}", paperId);
            return generateAndPersistQuestionsForScannedPdf(paper);
        }
    }

    /**
     * Extracts text from an already saved paper using its public PDF URL.
     * If the PDF is scanned without digital text, falls back to generating syllabus questions.
     */
    @Transactional
    public List<LearnPyqQuestion> extractQuestionsForExistingPaper(UUID paperId) {
        LearnPyqPaper paper = paperRepository.findById(paperId)
                .orElseThrow(() -> new RuntimeException("Question paper not found: " + paperId));

        String pdfUrl = paper.getPdfUrl();
        if (pdfUrl == null || pdfUrl.trim().isEmpty()) {
            throw new IllegalArgumentException("No PDF file is attached to this paper. Please upload a PDF first.");
        }

        byte[] pdfBytes;
        if (pdfUrl.startsWith("http://") || pdfUrl.startsWith("https://")) {
            try (InputStream in = URI.create(pdfUrl).toURL().openStream()) {
                pdfBytes = in.readAllBytes();
            } catch (Exception e) {
                log.error("Failed to download PDF from URL: {}", pdfUrl, e);
                throw new RuntimeException("Failed to read PDF file from storage: " + e.getMessage());
            }
        } else {
            // Local file resolution for fallback storage
            try {
                Path localPath = resolveLocalPdfPath(pdfUrl);
                if (localPath != null && Files.exists(localPath)) {
                    log.info("Resolved local PDF file at: {}", localPath.toAbsolutePath());
                    pdfBytes = Files.readAllBytes(localPath);
                } else {
                    throw new RuntimeException("Local PDF file not found at: " + pdfUrl);
                }
            } catch (Exception e) {
                log.error("Failed to read local PDF file: {}", pdfUrl, e);
                throw new RuntimeException("Failed to read local PDF file: " + e.getMessage());
            }
        }

        String rawText = extractRawTextFromPdf(pdfBytes);
        if (rawText != null && rawText.trim().length() >= 30) {
            log.info("PDF contains readable text ({} chars). Extracting questions for paper: {}", rawText.length(), paperId);
            return generateAndPersistQuestions(paper, rawText);
        } else {
            log.info("PDF contains no readable text stream (scanned/photocopy PDF). Auto-generating standard CBSE questions for paper: {}", paperId);
            return generateAndPersistQuestionsForScannedPdf(paper);
        }
    }

    private String extractRawTextFromPdf(byte[] pdfBytes) {
        try {
            log.info("Parsing PDF text using Apache Tika ({} bytes)...", pdfBytes.length);
            String text = tika.parseToString(new ByteArrayInputStream(pdfBytes));
            if (text != null) {
                text = text.trim();
                log.info("Extracted {} characters of text from PDF.", text.length());
                // Truncate to 25,000 characters if paper is unusually long
                if (text.length() > 25000) {
                    text = text.substring(0, 25000);
                }
            }
            return text;
        } catch (Exception e) {
            log.error("Apache Tika error extracting PDF text: {}", e.getMessage(), e);
            return null;
        }
    }

    private List<LearnPyqQuestion> generateAndPersistQuestions(LearnPyqPaper paper, String rawText) {
        log.info("Calling Groq AI to structure questions for Paper [{} - {} {}]...",
                paper.getTitle(), paper.getTargetClass(), paper.getSubject());

        String aiResponse = groqClientService.extractPyqQuestions(
                rawText,
                paper.getTargetClass() != null ? paper.getTargetClass() : "Class 11",
                paper.getSubject() != null ? paper.getSubject() : "Physics",
                paper.getYear() != null ? paper.getYear() : 2024
        );

        return parseAndSaveQuestions(paper, aiResponse);
    }

    private List<LearnPyqQuestion> generateAndPersistQuestionsForScannedPdf(LearnPyqPaper paper) {
        log.info("Calling Groq AI to auto-generate authentic CBSE questions for Paper [{} - {} {}]...",
                paper.getTitle(), paper.getTargetClass(), paper.getSubject());

        String aiResponse = groqClientService.generateSamplePaperQuestions(
                paper.getTargetClass() != null ? paper.getTargetClass() : "Class 11",
                paper.getSubject() != null ? paper.getSubject() : "Physics",
                paper.getYear() != null ? paper.getYear() : 2024
        );

        return parseAndSaveQuestions(paper, aiResponse);
    }

    private List<LearnPyqQuestion> parseAndSaveQuestions(LearnPyqPaper paper, String aiResponse) {
        List<LearnPyqQuestion> savedQuestions = new ArrayList<>();
        try {
            JsonNode root = objectMapper.readTree(aiResponse);
            if (!root.isArray()) {
                log.warn("AI response was not a JSON array: {}", aiResponse);
                return List.of();
            }

            // Remove previous questions for this paper to avoid duplication
            questionRepository.deleteByPaperId(paper.getId());

            int qIndex = 1;
            for (JsonNode qNode : root) {
                LearnPyqQuestion q = new LearnPyqQuestion();
                q.setPaperId(paper.getId());
                q.setQuestionNumber(qNode.has("qNum") ? qNode.get("qNum").asInt(qIndex) : qIndex);
                q.setSection(qNode.has("section") ? qNode.get("section").asText("A") : "A");
                q.setMarks(qNode.has("marks") ? qNode.get("marks").asInt(1) : 1);
                q.setTopic(qNode.has("topic") ? qNode.get("topic").asText(paper.getSubject()) : paper.getSubject());
                q.setQuestionText(qNode.has("questionText") ? qNode.get("questionText").asText("") : "");

                if (qNode.has("options") && qNode.get("options").isArray()) {
                    q.setOptionsJson(objectMapper.writeValueAsString(qNode.get("options")));
                } else {
                    q.setOptionsJson("[]");
                }

                q.setCorrectOption(qNode.has("correctOption") && !qNode.get("correctOption").isNull()
                        ? qNode.get("correctOption").asText() : null);
                q.setModelAnswer(qNode.has("modelAnswer") ? qNode.get("modelAnswer").asText("") : "");

                if (qNode.has("stepMarking") && qNode.get("stepMarking").isArray()) {
                    q.setStepMarkingJson(objectMapper.writeValueAsString(qNode.get("stepMarking")));
                } else {
                    q.setStepMarkingJson("[]");
                }

                q.setExaminerTip(qNode.has("examinerTip") ? qNode.get("examinerTip").asText("") : "");
                q.setCommonPitfall(qNode.has("commonPitfall") ? qNode.get("commonPitfall").asText("") : "");

                if (!q.getQuestionText().isBlank()) {
                    savedQuestions.add(questionRepository.save(q));
                    qIndex++;
                }
            }

            // Update total questions on paper
            paper.setTotalQuestions(savedQuestions.size());
            paperRepository.save(paper);
            log.info("Successfully persisted {} structured questions for paper: {}",
                    savedQuestions.size(), paper.getId());

        } catch (Exception e) {
            log.error("Failed to parse AI question response: {}", e.getMessage(), e);
            throw new RuntimeException("Failed to structure questions from AI: " + e.getMessage());
        }

        return savedQuestions;
    }

    private Path resolveLocalPdfPath(String relativeUrl) {
        String cleanPath = relativeUrl.startsWith("/") ? relativeUrl.substring(1) : relativeUrl;
        Path[] candidateBases = new Path[] {
            Paths.get("..", "frontend", "public"),
            Paths.get("frontend", "public"),
            Paths.get("devlens-ai", "frontend", "public"),
            Paths.get("public"),
            Paths.get(".")
        };
        for (Path base : candidateBases) {
            Path candidate = base.resolve(cleanPath);
            if (Files.exists(candidate)) {
                return candidate.toAbsolutePath();
            }
        }
        return Paths.get(cleanPath);
    }
}
