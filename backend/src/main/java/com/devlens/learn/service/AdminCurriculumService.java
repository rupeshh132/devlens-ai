package com.devlens.learn.service;

import com.devlens.learn.dto.*;
import com.devlens.learn.entity.*;
import com.devlens.learn.repository.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.UUID;

@Service
@RequiredArgsConstructor
@Slf4j
public class AdminCurriculumService {

    private final LearnExamTypeRepository examTypeRepository;
    private final LearnSubjectRepository subjectRepository;
    private final LearnChapterRepository chapterRepository;
    private final LearnTopicRepository topicRepository;

    // ─── 1. EXAM OPERATIONS ──────────────────────────────────────────────────
    @Transactional
    public LearnExamType createExam(AdminExamDto dto) {
        LearnExamType exam = new LearnExamType();
        exam.setName(dto.getName());
        exam.setFullName(dto.getFullName());
        exam.setCategory(dto.getCategory() != null ? dto.getCategory() : "SCHOOL");
        exam.setSubCategory(dto.getSubCategory());
        exam.setConductingBody(dto.getConductingBody());
        exam.setRequiredPlan(dto.getRequiredPlan() != null ? dto.getRequiredPlan() : "FREE");
        exam.setIconUrl(dto.getIconUrl());
        exam.setActive(dto.getIsActive() != null ? dto.getIsActive() : true);
        exam.setDisplayOrder(dto.getDisplayOrder() != null ? dto.getDisplayOrder() : 100);

        String slug = dto.getSlug();
        if (slug == null || slug.trim().isEmpty()) {
            slug = dto.getName().toLowerCase().replaceAll("[^a-z0-9]+", "-").replaceAll("^-|-$", "");
        }
        exam.setSlug(slug);

        LearnExamType saved = examTypeRepository.save(exam);
        log.info("Admin created Exam Type: [{}] ({})", saved.getName(), saved.getId());
        return saved;
    }

    @Transactional
    public LearnExamType updateExam(UUID id, AdminExamDto dto) {
        LearnExamType exam = examTypeRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Exam Type not found: " + id));

        if (dto.getName() != null) exam.setName(dto.getName());
        if (dto.getFullName() != null) exam.setFullName(dto.getFullName());
        if (dto.getCategory() != null) exam.setCategory(dto.getCategory());
        if (dto.getSubCategory() != null) exam.setSubCategory(dto.getSubCategory());
        if (dto.getConductingBody() != null) exam.setConductingBody(dto.getConductingBody());
        if (dto.getRequiredPlan() != null) exam.setRequiredPlan(dto.getRequiredPlan());
        if (dto.getIconUrl() != null) exam.setIconUrl(dto.getIconUrl());
        if (dto.getIsActive() != null) exam.setActive(dto.getIsActive());
        if (dto.getDisplayOrder() != null) exam.setDisplayOrder(dto.getDisplayOrder());
        if (dto.getSlug() != null && !dto.getSlug().isBlank()) exam.setSlug(dto.getSlug().trim().toLowerCase());

        return examTypeRepository.save(exam);
    }

    @Transactional
    public void deleteExam(UUID id) {
        LearnExamType exam = examTypeRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Exam Type not found: " + id));
        // Soft delete / deactivate to preserve student progress
        exam.setActive(false);
        examTypeRepository.save(exam);
        log.info("Deactivated Exam Type [{}]", id);
    }

    @Transactional
    public void reorderExam(UUID id, int newOrder) {
        LearnExamType exam = examTypeRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Exam Type not found: " + id));
        exam.setDisplayOrder(newOrder);
        examTypeRepository.save(exam);
    }

    // ─── 2. SUBJECT OPERATIONS ───────────────────────────────────────────────
    @Transactional
    public LearnSubject createSubject(AdminSubjectDto dto) {
        LearnSubject subject = new LearnSubject();
        subject.setExamTypeId(dto.getExamTypeId());
        subject.setName(dto.getName());
        subject.setCode(dto.getCode() != null ? dto.getCode() : dto.getName().toUpperCase().replaceAll("[^A-Z0-9]", "_"));
        subject.setOrderIndex(dto.getOrderIndex() != null ? dto.getOrderIndex() : 0);
        subject.setActive(dto.getIsActive() != null ? dto.getIsActive() : true);

        LearnSubject saved = subjectRepository.save(subject);
        log.info("Admin created Subject: [{}] for Exam [{}]", saved.getName(), saved.getExamTypeId());
        return saved;
    }

    @Transactional
    public LearnSubject updateSubject(UUID id, AdminSubjectDto dto) {
        LearnSubject subject = subjectRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Subject not found: " + id));

        if (dto.getName() != null) subject.setName(dto.getName());
        if (dto.getCode() != null) subject.setCode(dto.getCode());
        if (dto.getOrderIndex() != null) subject.setOrderIndex(dto.getOrderIndex());
        if (dto.getIsActive() != null) subject.setActive(dto.getIsActive());
        if (dto.getExamTypeId() != null) subject.setExamTypeId(dto.getExamTypeId());

        return subjectRepository.save(subject);
    }

    @Transactional
    public void deleteSubject(UUID id) {
        subjectRepository.deleteById(id);
        log.info("Deleted Subject [{}]", id);
    }

    @Transactional
    public void reorderSubject(UUID id, int newOrder) {
        LearnSubject subject = subjectRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Subject not found: " + id));
        subject.setOrderIndex(newOrder);
        subjectRepository.save(subject);
    }

    // ─── 3. CHAPTER OPERATIONS ───────────────────────────────────────────────
    @Transactional
    public LearnChapter createChapter(AdminChapterDto dto) {
        LearnChapter chapter = new LearnChapter();
        chapter.setSubjectId(dto.getSubjectId());
        chapter.setTitle(dto.getTitle());
        chapter.setOrderIndex(dto.getOrderIndex() != null ? dto.getOrderIndex() : 0);
        chapter.setActive(dto.getIsActive() != null ? dto.getIsActive() : true);

        LearnChapter saved = chapterRepository.save(chapter);
        log.info("Admin created Chapter: [{}] for Subject [{}]", saved.getTitle(), saved.getSubjectId());
        return saved;
    }

    @Transactional
    public LearnChapter updateChapter(UUID id, AdminChapterDto dto) {
        LearnChapter chapter = chapterRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Chapter not found: " + id));

        if (dto.getTitle() != null) chapter.setTitle(dto.getTitle());
        if (dto.getOrderIndex() != null) chapter.setOrderIndex(dto.getOrderIndex());
        if (dto.getIsActive() != null) chapter.setActive(dto.getIsActive());
        if (dto.getSubjectId() != null) chapter.setSubjectId(dto.getSubjectId());

        return chapterRepository.save(chapter);
    }

    @Transactional
    public void deleteChapter(UUID id) {
        chapterRepository.deleteById(id);
        log.info("Deleted Chapter [{}]", id);
    }

    @Transactional
    public void reorderChapter(UUID id, int newOrder) {
        LearnChapter chapter = chapterRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Chapter not found: " + id));
        chapter.setOrderIndex(newOrder);
        chapterRepository.save(chapter);
    }

    // ─── 4. TOPIC OPERATIONS ─────────────────────────────────────────────────
    @Transactional
    public LearnTopic createTopic(AdminTopicDto dto) {
        LearnTopic topic = new LearnTopic();
        topic.setChapterId(dto.getChapterId());
        topic.setTitle(dto.getTitle());
        topic.setDescription(dto.getDescription());
        topic.setOrderIndex(dto.getOrderIndex() != null ? dto.getOrderIndex() : 0);
        topic.setActive(dto.getIsActive() != null ? dto.getIsActive() : true);

        LearnTopic saved = topicRepository.save(topic);
        log.info("Admin created Topic: [{}] for Chapter [{}]", saved.getTitle(), saved.getChapterId());
        return saved;
    }

    @Transactional
    public LearnTopic updateTopic(UUID id, AdminTopicDto dto) {
        LearnTopic topic = topicRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Topic not found: " + id));

        if (dto.getTitle() != null) topic.setTitle(dto.getTitle());
        if (dto.getDescription() != null) topic.setDescription(dto.getDescription());
        if (dto.getOrderIndex() != null) topic.setOrderIndex(dto.getOrderIndex());
        if (dto.getIsActive() != null) topic.setActive(dto.getIsActive());
        if (dto.getChapterId() != null) topic.setChapterId(dto.getChapterId());

        return topicRepository.save(topic);
    }

    @Transactional
    public void deleteTopic(UUID id) {
        topicRepository.deleteById(id);
        log.info("Deleted Topic [{}]", id);
    }

    @Transactional
    public void reorderTopic(UUID id, int newOrder) {
        LearnTopic topic = topicRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Topic not found: " + id));
        topic.setOrderIndex(newOrder);
        topicRepository.save(topic);
    }
}
