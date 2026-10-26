package com.devlens.learn.service;

import com.devlens.api.service.storage.StorageService;
import com.devlens.learn.dto.CreatePyqPaperRequest;
import com.devlens.learn.entity.LearnPyqPaper;
import com.devlens.learn.entity.LearnPyqQuestion;
import com.devlens.learn.repository.LearnPyqPaperRepository;
import com.devlens.learn.repository.LearnPyqQuestionRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Map;
import java.util.UUID;

@Slf4j
@Service
@RequiredArgsConstructor
public class LearnPyqService {

    private final LearnPyqPaperRepository paperRepository;
    private final LearnPyqQuestionRepository questionRepository;
    private final StorageService storageService;
    private final ObjectMapper objectMapper;

    @Transactional(readOnly = true)
    public List<LearnPyqPaper> getPapers(String targetClass, String subject, Integer year) {
        if (targetClass != null && !targetClass.trim().isEmpty() && !targetClass.equalsIgnoreCase("ALL")) {
            if (subject != null && !subject.trim().isEmpty() && !subject.equalsIgnoreCase("ALL")) {
                if (year != null && year > 0) {
                    return paperRepository.findByTargetClassAndSubjectAndYearOrderByCreatedAtDesc(targetClass.trim(), subject.trim(), year);
                }
                return paperRepository.findByTargetClassAndSubjectOrderByYearDescCreatedAtDesc(targetClass.trim(), subject.trim());
            }
            if (year != null && year > 0) {
                return paperRepository.findByTargetClassAndYearOrderByCreatedAtDesc(targetClass.trim(), year);
            }
            return paperRepository.findByTargetClassOrderByYearDescCreatedAtDesc(targetClass.trim());
        }
        return paperRepository.findAllByOrderByYearDescCreatedAtDesc();
    }

    @Transactional(readOnly = true)
    public LearnPyqPaper getPaperById(UUID id) {
        return paperRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Question paper not found with ID: " + id));
    }

    @Transactional(readOnly = true)
    public Map<String, Object> getPaperWithQuestions(UUID id) {
        LearnPyqPaper paper = getPaperById(id);
        List<LearnPyqQuestion> questions = questionRepository.findByPaperIdOrderByQuestionNumberAsc(id);
        return Map.of(
                "paper", paper,
                "questions", questions
        );
    }

    @Transactional
    public LearnPyqPaper createPaper(CreatePyqPaperRequest request) {
        if (request.getTitle() == null || request.getTitle().trim().isEmpty()) {
            throw new IllegalArgumentException("Paper title is required");
        }
        if (request.getTargetClass() == null || request.getTargetClass().trim().isEmpty()) {
            throw new IllegalArgumentException("Target class is required");
        }
        if (request.getSubject() == null || request.getSubject().trim().isEmpty()) {
            throw new IllegalArgumentException("Subject is required");
        }

        LearnPyqPaper paper = new LearnPyqPaper();
        paper.setTitle(request.getTitle().trim());
        paper.setTargetClass(request.getTargetClass().trim());
        paper.setSubject(request.getSubject().trim());
        paper.setYear(request.getYear() != null ? request.getYear() : 2024);
        paper.setPaperType(request.getPaperType() != null ? request.getPaperType() : "BOARD_EXAM");
        paper.setPaperCode(request.getPaperCode() != null ? request.getPaperCode().trim() : "");
        paper.setTotalMarks(request.getTotalMarks() != null ? request.getTotalMarks() : 80);
        paper.setDurationMins(request.getDurationMins() != null ? request.getDurationMins() : 180);
        paper.setDifficulty(request.getDifficulty() != null ? request.getDifficulty() : "MODERATE");
        paper.setFree(request.getIsFree() == null || request.getIsFree());
        paper.setTotalQuestions(request.getTotalQuestions() != null ? request.getTotalQuestions() : 0);
        paper.setPdfUrl(request.getPdfUrl());
        paper.setSolutionPdfUrl(request.getSolutionPdfUrl());

        if (request.getGeneralInstructions() != null && !request.getGeneralInstructions().isEmpty()) {
            try {
                paper.setGeneralInstructions(objectMapper.writeValueAsString(request.getGeneralInstructions()));
            } catch (Exception e) {
                paper.setGeneralInstructions("[]");
            }
        }

        return paperRepository.save(paper);
    }

    @Transactional
    public LearnPyqPaper uploadPaperPdf(UUID paperId, MultipartFile file) {
        LearnPyqPaper paper = getPaperById(paperId);
        String url = storePdfFile(paperId, "question-paper", file);
        paper.setPdfUrl(url);
        return paperRepository.save(paper);
    }

    @Transactional
    public LearnPyqPaper uploadSolutionPdf(UUID paperId, MultipartFile file) {
        LearnPyqPaper paper = getPaperById(paperId);
        String url = storePdfFile(paperId, "solution", file);
        paper.setSolutionPdfUrl(url);
        return paperRepository.save(paper);
    }

    @Transactional
    public void deletePaper(UUID paperId) {
        if (!paperRepository.existsById(paperId)) {
            throw new RuntimeException("Paper not found: " + paperId);
        }
        questionRepository.deleteByPaperId(paperId);
        paperRepository.deleteById(paperId);
    }

    @Transactional
    public LearnPyqQuestion updateQuestion(UUID questionId, Map<String, Object> updates) {
        LearnPyqQuestion q = questionRepository.findById(questionId)
                .orElseThrow(() -> new RuntimeException("Question not found with ID: " + questionId));

        if (updates.containsKey("questionText") && updates.get("questionText") != null) {
            q.setQuestionText(updates.get("questionText").toString());
        }
        if (updates.containsKey("questionNumber") && updates.get("questionNumber") != null) {
            q.setQuestionNumber(Integer.parseInt(updates.get("questionNumber").toString()));
        }
        if (updates.containsKey("section") && updates.get("section") != null) {
            q.setSection(updates.get("section").toString());
        }
        if (updates.containsKey("marks") && updates.get("marks") != null) {
            q.setMarks(Integer.parseInt(updates.get("marks").toString()));
        }
        if (updates.containsKey("topic") && updates.get("topic") != null) {
            q.setTopic(updates.get("topic").toString());
        }
        if (updates.containsKey("correctOption")) {
            Object opt = updates.get("correctOption");
            q.setCorrectOption(opt != null ? opt.toString() : null);
        }
        if (updates.containsKey("options")) {
            try {
                Object opts = updates.get("options");
                if (opts instanceof String) {
                    q.setOptionsJson((String) opts);
                } else {
                    q.setOptionsJson(objectMapper.writeValueAsString(opts));
                }
            } catch (Exception e) {
                log.warn("Failed to serialize options: {}", e.getMessage());
            }
        }
        if (updates.containsKey("modelAnswer") && updates.get("modelAnswer") != null) {
            q.setModelAnswer(updates.get("modelAnswer").toString());
        }
        if (updates.containsKey("stepMarking")) {
            try {
                Object steps = updates.get("stepMarking");
                if (steps instanceof String) {
                    q.setStepMarkingJson((String) steps);
                } else {
                    q.setStepMarkingJson(objectMapper.writeValueAsString(steps));
                }
            } catch (Exception e) {
                log.warn("Failed to serialize step marking: {}", e.getMessage());
            }
        }
        if (updates.containsKey("examinerTip")) {
            Object tip = updates.get("examinerTip");
            q.setExaminerTip(tip != null ? tip.toString() : "");
        }
        if (updates.containsKey("commonPitfall")) {
            Object pit = updates.get("commonPitfall");
            q.setCommonPitfall(pit != null ? pit.toString() : "");
        }

        return questionRepository.save(q);
    }

    @Transactional
    public void deleteQuestion(UUID questionId) {
        LearnPyqQuestion q = questionRepository.findById(questionId)
                .orElseThrow(() -> new RuntimeException("Question not found with ID: " + questionId));
        UUID paperId = q.getPaperId();
        questionRepository.delete(q);

        paperRepository.findById(paperId).ifPresent(p -> {
            long remaining = questionRepository.countByPaperId(paperId);
            p.setTotalQuestions((int) remaining);
            paperRepository.save(p);
        });
    }

    private String storePdfFile(UUID paperId, String prefix, MultipartFile file) {
        String filename = file.getOriginalFilename();
        if (filename == null || filename.trim().isEmpty()) {
            filename = prefix + ".pdf";
        }
        String path = "pyq-papers/" + paperId + "/" + prefix + "_" + filename;

        try {
            // Attempt Supabase storage
            log.info("Uploading PDF to Supabase Storage bucket 'devlens-storage': path={}", path);
            String supabaseUrl = storageService.uploadFile("devlens-storage", path, file.getBytes(), file.getContentType());
            log.info("PDF successfully stored on Supabase: {}", supabaseUrl);
            return supabaseUrl;
        } catch (Exception e) {
            log.warn("Supabase upload failed ({}). Storing locally as fallback", e.getMessage(), e);
            return saveLocally(paperId, prefix, filename, file);
        }
    }

    private String saveLocally(UUID paperId, String prefix, String originalFilename, MultipartFile file) {
        try {
            // Check potential paths for frontend/public/pyq-papers/uploads/
            Path uploadDir = Paths.get("devlens-ai", "frontend", "public", "pyq-papers", "uploads", paperId.toString());
            if (!Files.exists(Paths.get("devlens-ai")) && Files.exists(Paths.get("..", "frontend", "public"))) {
                uploadDir = Paths.get("..", "frontend", "public", "pyq-papers", "uploads", paperId.toString());
            } else if (!Files.exists(uploadDir.getParent()) && Files.exists(Paths.get("frontend", "public"))) {
                uploadDir = Paths.get("frontend", "public", "pyq-papers", "uploads", paperId.toString());
            }
            Files.createDirectories(uploadDir);

            String safeName = prefix + "_" + originalFilename.replaceAll("[^a-zA-Z0-9._-]", "_");
            Path targetFile = uploadDir.resolve(safeName);
            Files.write(targetFile.toAbsolutePath(), file.getBytes());

            log.info("Saved PDF locally to: {}", targetFile.toAbsolutePath());
            return "/pyq-papers/uploads/" + paperId + "/" + safeName;
        } catch (IOException ex) {
            log.error("Failed to save PDF locally: {}", ex.getMessage(), ex);
            throw new RuntimeException("Failed to store PDF file: " + ex.getMessage());
        }
    }
}
