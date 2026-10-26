package com.devlens.learn.entity;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;
import java.util.UUID;

@Data
@Entity
@Table(name = "learn_transactions")
public class LearnTransaction {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Column(name = "user_id")
    private UUID userId;

    @Column(name = "razorpay_order_id")
    private String razorpayOrderId;

    @Column(name = "razorpay_payment_id")
    private String razorpayPaymentId;

    private Integer amount;

    @Column(name = "plan_name")
    private String planName;

    @Column(name = "promo_code")
    private String promoCode; // Optional promo code used

    private String status = "PENDING"; // PENDING, SUCCESS, FAILED

    @Column(name = "verified_by_admin_id")
    private UUID verifiedByAdminId;

    @Column(name = "admin_notes")
    private String adminNotes;

    @Column(name = "refund_status")
    private String refundStatus = "NONE";

    @Column(name = "payment_method")
    private String paymentMethod;

    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;
}
