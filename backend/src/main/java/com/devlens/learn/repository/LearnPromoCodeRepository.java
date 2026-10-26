package com.devlens.learn.repository;

import com.devlens.learn.entity.LearnPromoCode;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface LearnPromoCodeRepository extends JpaRepository<LearnPromoCode, UUID> {

    Optional<LearnPromoCode> findByCodeIgnoreCase(String code);

    Optional<LearnPromoCode> findByCodeIgnoreCaseAndIsActiveTrue(String code);

    boolean existsByCodeIgnoreCase(String code);

    long countByIsActiveTrue();

    @Query("SELECT coalesce(sum(p.currentRedemptions), 0) FROM LearnPromoCode p")
    Long sumTotalRedemptions();

    @Query("SELECT p FROM LearnPromoCode p WHERE " +
           "(:query IS NULL OR :query = '' OR LOWER(p.code) LIKE LOWER(CONCAT('%', :query, '%')) " +
           " OR LOWER(p.partnerName) LIKE LOWER(CONCAT('%', :query, '%')) " +
           " OR LOWER(p.partnerEmail) LIKE LOWER(CONCAT('%', :query, '%')) " +
           " OR LOWER(p.description) LIKE LOWER(CONCAT('%', :query, '%'))) AND " +
           "(:isActive IS NULL OR p.isActive = :isActive) " +
           "ORDER BY p.createdAt DESC")
    Page<LearnPromoCode> searchPromoCodes(
            @Param("query") String query,
            @Param("isActive") Boolean isActive,
            Pageable pageable);
}
