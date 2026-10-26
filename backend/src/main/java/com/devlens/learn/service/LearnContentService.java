package com.devlens.learn.service;

import com.devlens.learn.entity.*;
import com.devlens.learn.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class LearnContentService {

    private final LearnExamTypeRepository examTypeRepository;
    private final LearnSubjectRepository subjectRepository;
    private final LearnChapterRepository chapterRepository;
    private final LearnTopicRepository topicRepository;
    private final LearnContentItemRepository contentItemRepository;
    private final LearnQuestionRepository questionRepository;
    private final LearnContentRatingRepository contentRatingRepository;

    public List<LearnExamType> getAllExamTypes() {
        return examTypeRepository.findByIsActiveTrueOrderByDisplayOrderAsc();
    }

    public List<LearnSubject> getSubjectsByExamType(UUID examTypeId) {
        return subjectRepository.findByExamTypeIdOrderByOrderIndexAsc(examTypeId);
    }

    public List<LearnChapter> getChaptersBySubject(UUID subjectId) {
        return chapterRepository.findBySubjectIdOrderByOrderIndexAsc(subjectId);
    }

    public List<LearnTopic> getTopicsByChapter(UUID chapterId) {
        return topicRepository.findByChapterIdOrderByOrderIndexAsc(chapterId);
    }

    public List<LearnContentItem> getContentItemsByTopic(UUID topicId) {
        return contentItemRepository.findByTopicIdOrderByOrderIndexAsc(topicId);
    }

    public List<LearnQuestion> getQuestionsByTopic(UUID topicId) {
        return questionRepository.findByTopicId(topicId);
    }

    public void rateContentItem(UUID userId, UUID contentId, boolean isHelpful, String feedbackText) {
        LearnContentRating rating = contentRatingRepository.findByUserIdAndContentId(userId, contentId)
                .orElseGet(() -> {
                    LearnContentRating r = new LearnContentRating();
                    r.setUserId(userId);
                    r.setContentId(contentId);
                    return r;
                });
        rating.setHelpful(isHelpful);
        rating.setFeedbackText(feedbackText);
        contentRatingRepository.save(rating);
    }

    public java.util.Map<String, Object> getContentRating(UUID userId, UUID contentId) {
        java.util.Optional<LearnContentRating> userRating = contentRatingRepository.findByUserIdAndContentId(userId, contentId);
        long helpfulCount = contentRatingRepository.countByContentIdAndIsHelpfulTrue(contentId);
        long doubtCount = contentRatingRepository.countByContentIdAndIsHelpfulFalse(contentId);

        java.util.Map<String, Object> res = new java.util.HashMap<>();
        res.put("rated", userRating.isPresent());
        res.put("userRating", userRating.map(LearnContentRating::isHelpful).orElse(null));
        res.put("feedbackText", userRating.map(LearnContentRating::getFeedbackText).orElse(null));
        res.put("helpfulCount", helpfulCount);
        res.put("doubtCount", doubtCount);
        return res;
    }
}
