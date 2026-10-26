package com.devlens.api.repository.payment;

import com.devlens.api.entity.payment.PaymentTransaction;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;
import java.util.UUID;

import com.devlens.api.entity.payment.PaymentTransactionStatus;

import jakarta.persistence.LockModeType;
import org.springframework.data.jpa.repository.Lock;

public interface PaymentTransactionRepository extends JpaRepository<PaymentTransaction, UUID> {
    
    @Lock(LockModeType.PESSIMISTIC_WRITE)
    Optional<PaymentTransaction> findByRazorpayOrderId(String razorpayOrderId);
    
    long countByStatus(PaymentTransactionStatus status);

    @org.springframework.data.jpa.repository.Query("SELECT SUM(t.amount) FROM PaymentTransaction t WHERE t.status = com.devlens.api.entity.payment.PaymentTransactionStatus.SUCCESS")
    Long getTotalSalesInPaise();
}
