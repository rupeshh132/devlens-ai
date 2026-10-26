package com.devlens.learn.repository;

import com.devlens.learn.entity.LearnAiDoubt;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Repository
public interface LearnAiDoubtRepository extends JpaRepository<LearnAiDoubt, UUID> {

    interface TopicCountProjection {
        String getTopic();
        Long getCount();
    }

    interface ModelCountProjection {
        String getModel();
        Long getCount();
    }

    long countByCreatedAtAfter(LocalDateTime since);

    long countByStatus(String status);

    @Query("SELECT coalesce(sum(d.promptTokens), 0) FROM LearnAiDoubt d")
    Long sumPromptTokens();

    @Query("SELECT coalesce(sum(d.completionTokens), 0) FROM LearnAiDoubt d")
    Long sumCompletionTokens();

    @Query("SELECT coalesce(sum(d.totalTokens), 0) FROM LearnAiDoubt d")
    Long sumTotalTokens();

    @Query("SELECT coalesce(sum(d.estimatedCostUsd), 0) FROM LearnAiDoubt d")
    BigDecimal sumEstimatedCostUsd();

    @Query("SELECT coalesce(sum(d.estimatedCostInr), 0) FROM LearnAiDoubt d")
    BigDecimal sumEstimatedCostInr();

    @Query("SELECT coalesce(avg(d.latencyMs), 0.0) FROM LearnAiDoubt d WHERE d.latencyMs > 0")
    Double averageLatencyMs();

    @Query("SELECT d.topic AS topic, COUNT(d) AS count FROM LearnAiDoubt d " +
           "WHERE d.topic IS NOT NULL AND d.topic != '' " +
           "GROUP BY d.topic ORDER BY COUNT(d) DESC")
    List<TopicCountProjection> getTopTopics();

    @Query("SELECT d.model AS model, COUNT(d) AS count FROM LearnAiDoubt d " +
           "WHERE d.model IS NOT NULL AND d.model != '' " +
           "GROUP BY d.model ORDER BY COUNT(d) DESC")
    List<ModelCountProjection> getModelBreakdown();

    @Query("SELECT DISTINCT d.topic FROM LearnAiDoubt d " +
           "WHERE d.topic IS NOT NULL AND d.topic != '' ORDER BY d.topic ASC")
    List<String> findDistinctTopics();

    @Query("SELECT d FROM LearnAiDoubt d WHERE " +
           "(:query IS NULL OR :query = '' OR LOWER(d.questionText) LIKE LOWER(CONCAT('%', :query, '%')) OR LOWER(d.userEmail) LIKE LOWER(CONCAT('%', :query, '%'))) AND " +
           "(:topic IS NULL OR :topic = '' OR LOWER(d.topic) = LOWER(:topic)) AND " +
           "(:isFlagged IS NULL OR d.isFlagged = :isFlagged) AND " +
           "(:status IS NULL OR :status = '' OR UPPER(d.status) = UPPER(:status)) " +
           "ORDER BY d.createdAt DESC")
    Page<LearnAiDoubt> searchDoubts(
            @Param("query") String query,
            @Param("topic") String topic,
            @Param("isFlagged") Boolean isFlagged,
            @Param("status") String status,
            Pageable pageable);
}
