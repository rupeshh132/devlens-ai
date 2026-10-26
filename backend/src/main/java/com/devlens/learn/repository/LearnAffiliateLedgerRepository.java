package com.devlens.learn.repository;

import com.devlens.learn.entity.LearnAffiliateLedger;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.math.BigDecimal;
import java.util.List;
import java.util.UUID;

@Repository
public interface LearnAffiliateLedgerRepository extends JpaRepository<LearnAffiliateLedger, UUID> {

    long countByStatus(String status);

    @Query("SELECT coalesce(sum(l.grossCommission), 0) FROM LearnAffiliateLedger l")
    BigDecimal getTotalCommission();

    List<LearnAffiliateLedger> findByAffiliateUserIdOrderByCreatedAtDesc(UUID affiliateUserId);

    @Query("SELECT coalesce(sum(l.grossCommission), 0) FROM LearnAffiliateLedger l")
    BigDecimal sumTotalGrossCommission();

    @Query("SELECT coalesce(sum(l.saleAmount), 0) FROM LearnAffiliateLedger l")
    BigDecimal sumTotalSalesDriven();

    @Query("SELECT coalesce(sum(l.netPayable), 0) FROM LearnAffiliateLedger l WHERE l.status = :status")
    BigDecimal sumNetPayableByStatus(@Param("status") String status);

    @Query("SELECT l FROM LearnAffiliateLedger l WHERE " +
           "(:status IS NULL OR :status = '' OR UPPER(l.status) = UPPER(:status)) AND " +
           "(:query IS NULL OR :query = '' OR LOWER(l.promoCodeStr) LIKE LOWER(CONCAT('%', :query, '%')) " +
           " OR LOWER(l.payoutReference) LIKE LOWER(CONCAT('%', :query, '%'))) " +
           "ORDER BY l.createdAt DESC")
    Page<LearnAffiliateLedger> searchLedger(
            @Param("status") String status,
            @Param("query") String query,
            Pageable pageable);
}
