package com.devlens.learn.service;

import com.devlens.learn.entity.LearnQuestion;
import com.devlens.learn.repository.LearnQuestionRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;
import com.opencsv.CSVReader;
import com.opencsv.CSVReaderBuilder;
import com.opencsv.CSVParserBuilder;
import com.opencsv.CSVParser;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import java.util.Set;
import java.util.stream.Collectors;

@Slf4j
@Service
@RequiredArgsConstructor
public class AdminImportService {

    private final LearnQuestionRepository learnQuestionRepository;
    private final ObjectMapper objectMapper;

    public record QuestionImportResult(int importedCount, int skippedCount, int totalCount) {}

    @Transactional
    public QuestionImportResult importQuestionsFromCsv(UUID topicId, MultipartFile file) {
        return importQuestionsFromCsv(topicId, file, true);
    }

    @Transactional
    public QuestionImportResult importQuestionsFromCsv(UUID topicId, MultipartFile file, boolean skipDuplicates) {
        List<LearnQuestion> questions = new ArrayList<>();
        int skippedCount = 0;
        int totalRows = 0;

        Set<String> existingQuestions = new java.util.HashSet<>();
        if (skipDuplicates) {
            existingQuestions = learnQuestionRepository.findByTopicId(topicId).stream()
                    .map(q -> q.getQuestionText().trim().toLowerCase())
                    .collect(Collectors.toSet());
        }
        
        try (BufferedReader reader = new BufferedReader(new InputStreamReader(file.getInputStream(), StandardCharsets.UTF_8))) {
            CSVParser parser = new CSVParserBuilder().withSeparator('|').build();
            CSVReader csvReader = new CSVReaderBuilder(reader)
                    .withSkipLines(1) // Skip header
                    .withCSVParser(parser)
                    .build();
            
            String[] cols;
            while ((cols = csvReader.readNext()) != null) {
                if (cols.length < 6) continue;

                String qText = cols[0].trim();
                if (qText.isEmpty()) continue;

                totalRows++;

                if (skipDuplicates && existingQuestions.contains(qText.toLowerCase())) {
                    log.debug("Skipping duplicate CSV question: {}", qText);
                    skippedCount++;
                    continue;
                }
                
                LearnQuestion q = new LearnQuestion();
                q.setTopicId(topicId);
                q.setQuestionText(qText);
                
                Map<String, String> options = new HashMap<>();
                options.put("A", cols[1].trim());
                options.put("B", cols[2].trim());
                options.put("C", cols[3].trim());
                options.put("D", cols[4].trim());
                
                q.setOptionsJson(objectMapper.writeValueAsString(options));
                q.setCorrectAnswer(cols[5].trim().toUpperCase());
                
                if (cols.length > 6 && !cols[6].trim().isEmpty()) {
                    q.setExplanation(cols[6].trim());
                }
                if (cols.length > 7 && !cols[7].trim().isEmpty()) {
                    q.setDifficulty(cols[7].trim().toUpperCase());
                }
                if (cols.length > 8 && !cols[8].trim().isEmpty()) {
                    q.setSourceYear(cols[8].trim());
                }
                
                q.setVerified(true);
                questions.add(q);
                if (skipDuplicates) {
                    existingQuestions.add(qText.toLowerCase());
                }
            }
            
            if (!questions.isEmpty()) {
                learnQuestionRepository.saveAll(questions);
            }
            log.info("Successfully imported {} questions for topic {} (skippedDuplicates={}, skipDuplicates={})", questions.size(), topicId, skippedCount, skipDuplicates);
            return new QuestionImportResult(questions.size(), skippedCount, totalRows);
            
        } catch (Exception e) {
            log.error("Error parsing CSV", e);
            throw new RuntimeException("Failed to import CSV: " + e.getMessage());
        }
    }

    @Transactional
    public QuestionImportResult importQuestionsFromJson(UUID topicId, List<Map<String, Object>> questionsList) {
        return importQuestionsFromJson(topicId, questionsList, true);
    }

    @Transactional
    public QuestionImportResult importQuestionsFromJson(UUID topicId, List<Map<String, Object>> questionsList, boolean skipDuplicates) {
        List<LearnQuestion> questions = new ArrayList<>();
        int skippedCount = 0;
        int totalItems = 0;

        Set<String> existingQuestions = new java.util.HashSet<>();
        if (skipDuplicates) {
            existingQuestions = learnQuestionRepository.findByTopicId(topicId).stream()
                    .map(q -> q.getQuestionText().trim().toLowerCase())
                    .collect(Collectors.toSet());
        }

        try {
            for (Map<String, Object> item : questionsList) {
                String qText = null;
                if (item.containsKey("questionText") && item.get("questionText") != null) {
                    qText = item.get("questionText").toString().trim();
                } else if (item.containsKey("question") && item.get("question") != null) {
                    qText = item.get("question").toString().trim();
                }

                if (qText == null || qText.isEmpty()) continue;

                totalItems++;

                if (skipDuplicates && existingQuestions.contains(qText.toLowerCase())) {
                    log.debug("Skipping duplicate JSON question: {}", qText);
                    skippedCount++;
                    continue;
                }

                Map<String, String> options = new HashMap<>();
                if (item.get("options") instanceof Map<?, ?> rawMap) {
                    for (Map.Entry<?, ?> entry : rawMap.entrySet()) {
                        options.put(entry.getKey().toString().toUpperCase(), entry.getValue().toString().trim());
                    }
                } else if (item.get("options") instanceof List<?> rawList) {
                    String[] keys = {"A", "B", "C", "D"};
                    for (int i = 0; i < Math.min(rawList.size(), 4); i++) {
                        options.put(keys[i], rawList.get(i).toString().trim());
                    }
                }

                if (options.size() < 2) continue;

                String correctAnswer = "A";
                if (item.containsKey("correctAnswer") && item.get("correctAnswer") != null) {
                    correctAnswer = item.get("correctAnswer").toString().trim().toUpperCase();
                } else if (item.containsKey("correct") && item.get("correct") != null) {
                    correctAnswer = item.get("correct").toString().trim().toUpperCase();
                }

                LearnQuestion q = new LearnQuestion();
                q.setTopicId(topicId);
                q.setQuestionText(qText);
                q.setOptionsJson(objectMapper.writeValueAsString(options));
                q.setCorrectAnswer(correctAnswer);

                if (item.containsKey("explanation") && item.get("explanation") != null) {
                    q.setExplanation(item.get("explanation").toString().trim());
                }
                if (item.containsKey("difficulty") && item.get("difficulty") != null) {
                    q.setDifficulty(item.get("difficulty").toString().trim().toUpperCase());
                }
                if (item.containsKey("sourceYear") && item.get("sourceYear") != null) {
                    q.setSourceYear(item.get("sourceYear").toString().trim());
                }

                q.setVerified(true);
                questions.add(q);
                if (skipDuplicates) {
                    existingQuestions.add(qText.toLowerCase());
                }
            }

            if (!questions.isEmpty()) {
                learnQuestionRepository.saveAll(questions);
            }
            log.info("Successfully imported {} questions from JSON for topic {} (skippedDuplicates={}, skipDuplicates={})", questions.size(), topicId, skippedCount, skipDuplicates);
            return new QuestionImportResult(questions.size(), skippedCount, totalItems);

        } catch (Exception e) {
            log.error("Error parsing JSON questions", e);
            throw new RuntimeException("Failed to import JSON: " + e.getMessage());
        }
    }
}
