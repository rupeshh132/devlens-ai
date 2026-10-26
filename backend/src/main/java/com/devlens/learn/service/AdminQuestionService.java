package com.devlens.learn.service;

import com.devlens.learn.dto.AdminQuestionCreateUpdateDto;
import com.devlens.learn.dto.AdminQuestionDto;
import com.devlens.learn.dto.AdminQuestionStatsDto;
import com.devlens.learn.entity.LearnQuestion;
import com.devlens.learn.repository.LearnQuestionRepository;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;

@Service
@RequiredArgsConstructor
@Slf4j
public class AdminQuestionService {

    private final LearnQuestionRepository questionRepository;
    private final JdbcTemplate jdbcTemplate;
    private final ObjectMapper objectMapper;

    public AdminQuestionStatsDto getStats() {
        String sql = """
            SELECT 
                COUNT(*) AS total_count,
                COUNT(CASE WHEN UPPER(difficulty) = 'EASY' THEN 1 END) AS easy_count,
                COUNT(CASE WHEN UPPER(difficulty) = 'MEDIUM' THEN 1 END) AS medium_count,
                COUNT(CASE WHEN UPPER(difficulty) = 'HARD' THEN 1 END) AS hard_count,
                COUNT(DISTINCT topic_id) AS covered_topics
            FROM learn_questions
        """;

        Map<String, Object> map = jdbcTemplate.queryForMap(sql);
        return AdminQuestionStatsDto.builder()
                .totalQuestions(((Number) map.getOrDefault("total_count", 0)).longValue())
                .easyCount(((Number) map.getOrDefault("easy_count", 0)).longValue())
                .mediumCount(((Number) map.getOrDefault("medium_count", 0)).longValue())
                .hardCount(((Number) map.getOrDefault("hard_count", 0)).longValue())
                .totalTopicsCovered(((Number) map.getOrDefault("covered_topics", 0)).longValue())
                .build();
    }

    public Map<String, Object> getQuestions(
            UUID examId, 
            UUID subjectId, 
            UUID chapterId, 
            UUID topicId, 
            String difficulty, 
            Boolean isVerified,
            String sort,
            String search, 
            int page, 
            int size
    ) {
        StringBuilder where = new StringBuilder(" WHERE 1=1 ");
        List<Object> params = new ArrayList<>();

        if (examId != null) {
            where.append(" AND e.id = ? ");
            params.add(examId);
        }

        if (subjectId != null) {
            where.append(" AND s.id = ? ");
            params.add(subjectId);
        }

        if (chapterId != null) {
            where.append(" AND c.id = ? ");
            params.add(chapterId);
        }

        if (topicId != null) {
            where.append(" AND q.topic_id = ? ");
            params.add(topicId);
        }

        if (difficulty != null && !"ALL".equalsIgnoreCase(difficulty)) {
            where.append(" AND UPPER(q.difficulty) = ? ");
            params.add(difficulty.toUpperCase());
        }

        if (isVerified != null) {
            where.append(" AND q.is_verified = ? ");
            params.add(isVerified);
        }

        if (search != null && !search.trim().isEmpty()) {
            where.append(" AND (LOWER(q.question_text) LIKE ? OR LOWER(COALESCE(q.explanation, '')) LIKE ?) ");
            String term = "%" + search.trim().toLowerCase() + "%";
            params.add(term);
            params.add(term);
        }

        String baseFrom = """
            FROM learn_questions q
            JOIN learn_topics t ON t.id = q.topic_id
            JOIN learn_chapters c ON c.id = t.chapter_id
            JOIN learn_subjects s ON s.id = c.subject_id
            JOIN learn_exam_types e ON e.id = s.exam_type_id
        """;

        String countSql = "SELECT COUNT(*) " + baseFrom + where;
        Long totalElements = jdbcTemplate.queryForObject(countSql, Long.class, params.toArray());
        if (totalElements == null) totalElements = 0L;

        String orderBy = " ORDER BY q.created_at DESC ";
        if ("oldest".equalsIgnoreCase(sort)) {
            orderBy = " ORDER BY q.created_at ASC ";
        }

        String querySql = """
            SELECT 
                q.id, q.topic_id, t.title AS topic_title,
                c.id AS chapter_id, c.title AS chapter_title,
                s.id AS subject_id, s.name AS subject_name,
                e.id AS exam_type_id, e.name AS exam_name,
                q.question_text, q.options_json, q.correct_answer,
                q.explanation, q.difficulty, q.source_year, q.is_verified,
                TO_CHAR(q.created_at, 'YYYY-MM-DD"T"HH24:MI:SS') AS created_at
        """ + baseFrom + where + orderBy + "LIMIT ? OFFSET ?";

        List<Object> dataParams = new ArrayList<>(params);
        dataParams.add(size);
        dataParams.add(page * size);

        List<AdminQuestionDto> content = jdbcTemplate.query(querySql, (rs, rowNum) -> {
            String optJson = rs.getString("options_json");
            Map<String, String> opts = new HashMap<>();
            if (optJson != null && !optJson.isBlank()) {
                try {
                    opts = objectMapper.readValue(optJson, new TypeReference<Map<String, String>>() {});
                } catch (Exception ignored) {}
            }

            return AdminQuestionDto.builder()
                    .id(UUID.fromString(rs.getString("id")))
                    .topicId(UUID.fromString(rs.getString("topic_id")))
                    .topicTitle(rs.getString("topic_title"))
                    .chapterId(UUID.fromString(rs.getString("chapter_id")))
                    .chapterTitle(rs.getString("chapter_title"))
                    .subjectId(UUID.fromString(rs.getString("subject_id")))
                    .subjectName(rs.getString("subject_name"))
                    .examTypeId(UUID.fromString(rs.getString("exam_type_id")))
                    .examName(rs.getString("exam_name"))
                    .questionText(rs.getString("question_text"))
                    .optionA(opts.getOrDefault("A", ""))
                    .optionB(opts.getOrDefault("B", ""))
                    .optionC(opts.getOrDefault("C", ""))
                    .optionD(opts.getOrDefault("D", ""))
                    .correctAnswer(rs.getString("correct_answer"))
                    .explanation(rs.getString("explanation"))
                    .difficulty(rs.getString("difficulty"))
                    .sourceYear(rs.getString("source_year"))
                    .isVerified(rs.getBoolean("is_verified"))
                    .createdAt(rs.getString("created_at"))
                    .build();
        }, dataParams.toArray());

        Map<String, Object> result = new HashMap<>();
        result.put("content", content);
        result.put("totalElements", totalElements);
        result.put("totalPages", (int) Math.ceil((double) totalElements / size));
        result.put("page", page);
        result.put("size", size);
        return result;
    }

    @Transactional
    public LearnQuestion createQuestion(AdminQuestionCreateUpdateDto dto) {
        if (dto.getTopicId() == null) {
            throw new IllegalArgumentException("Topic ID is mandatory");
        }
        if (dto.getQuestionText() == null || dto.getQuestionText().isBlank()) {
            throw new IllegalArgumentException("Question text is mandatory");
        }

        LearnQuestion q = new LearnQuestion();
        q.setTopicId(dto.getTopicId());
        q.setQuestionText(dto.getQuestionText().trim());
        q.setCorrectAnswer(dto.getCorrectAnswer() != null ? dto.getCorrectAnswer().trim().toUpperCase() : "A");
        q.setExplanation(dto.getExplanation() != null ? dto.getExplanation().trim() : null);
        q.setDifficulty(dto.getDifficulty() != null ? dto.getDifficulty().trim().toUpperCase() : "MEDIUM");
        q.setSourceYear(dto.getSourceYear() != null && !dto.getSourceYear().isBlank() ? dto.getSourceYear().trim() : null);
        q.setVerified(dto.getIsVerified() != null ? dto.getIsVerified() : true);

        Map<String, String> options = new HashMap<>();
        options.put("A", dto.getOptionA() != null ? dto.getOptionA().trim() : "");
        options.put("B", dto.getOptionB() != null ? dto.getOptionB().trim() : "");
        options.put("C", dto.getOptionC() != null ? dto.getOptionC().trim() : "");
        options.put("D", dto.getOptionD() != null ? dto.getOptionD().trim() : "");

        try {
            q.setOptionsJson(objectMapper.writeValueAsString(options));
        } catch (Exception e) {
            throw new RuntimeException("Failed to serialize options JSON", e);
        }

        LearnQuestion saved = questionRepository.save(q);
        log.info("Admin created question [{}] under topic [{}]", saved.getId(), saved.getTopicId());
        return saved;
    }

    @Transactional
    public LearnQuestion updateQuestion(UUID id, AdminQuestionCreateUpdateDto dto) {
        LearnQuestion q = questionRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Question not found: " + id));

        if (dto.getTopicId() != null) q.setTopicId(dto.getTopicId());
        if (dto.getQuestionText() != null) q.setQuestionText(dto.getQuestionText().trim());
        if (dto.getCorrectAnswer() != null) q.setCorrectAnswer(dto.getCorrectAnswer().trim().toUpperCase());
        if (dto.getExplanation() != null) q.setExplanation(dto.getExplanation().trim());
        if (dto.getDifficulty() != null) q.setDifficulty(dto.getDifficulty().trim().toUpperCase());
        if (dto.getSourceYear() != null) q.setSourceYear(dto.getSourceYear().trim());
        if (dto.getIsVerified() != null) q.setVerified(dto.getIsVerified());

        if (dto.getOptionA() != null || dto.getOptionB() != null || dto.getOptionC() != null || dto.getOptionD() != null) {
            Map<String, String> options = new HashMap<>();
            options.put("A", dto.getOptionA() != null ? dto.getOptionA().trim() : "");
            options.put("B", dto.getOptionB() != null ? dto.getOptionB().trim() : "");
            options.put("C", dto.getOptionC() != null ? dto.getOptionC().trim() : "");
            options.put("D", dto.getOptionD() != null ? dto.getOptionD().trim() : "");

            try {
                q.setOptionsJson(objectMapper.writeValueAsString(options));
            } catch (Exception e) {
                throw new RuntimeException("Failed to serialize options JSON", e);
            }
        }

        return questionRepository.save(q);
    }

    @Transactional
    public void deleteQuestion(UUID id) {
        questionRepository.deleteById(id);
        log.info("Admin deleted question [{}]", id);
    }

    @Transactional
    public void deleteQuestionsBatch(List<UUID> ids) {
        if (ids == null || ids.isEmpty()) {
            return;
        }
        questionRepository.deleteAllById(ids);
        log.info("Admin bulk deleted [{}] questions: {}", ids.size(), ids);
    }
}
