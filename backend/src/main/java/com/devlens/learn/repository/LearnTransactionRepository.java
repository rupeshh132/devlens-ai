package com.devlens.learn.repository;

import com.devlens.learn.entity.LearnTransaction;
import jakarta.persistence.LockModeType;
import org.springframework.data.jpa.repository.Lock;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;
import java.util.List;

@Repository
public interface LearnTransactionRepository extends JpaRepository<LearnTransaction, UUID> {
    
    List<LearnTransaction> findByUserIdOrderByCreatedAtDesc(UUID userId);

    @Lock(LockModeType.PESSIMISTIC_WRITE)
    Optional<LearnTransaction> findByRazorpayOrderId(String razorpayOrderId);

    @org.springframework.data.jpa.repository.Query("SELECT SUM(t.amount) FROM LearnTransaction t WHERE t.status = 'SUCCESS'")
    Long getTotalSales();

    long countByStatus(String status);
}
