package com.devlens.api.entity.payment;

import com.devlens.api.entity.User;
import com.devlens.api.entity.lms.Course;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.ZonedDateTime;
import java.util.UUID;

@Entity
@Table(name = "payment_transaction")
@Data
@NoArgsConstructor
public class PaymentTransaction {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "course_id", nullable = false)
    private Course course;

    @Column(name = "razorpay_order_id", nullable = false)
    private String razorpayOrderId;

    @Column(name = "razorpay_payment_id")
    private String razorpayPaymentId;

    @Column(name = "razorpay_signature")
    private String razorpaySignature;

    @Column(nullable = false)
    private Integer amount; // in paise

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private PaymentTransactionStatus status = PaymentTransactionStatus.PENDING;

    @Column(name = "verified_by_admin_id")
    private UUID verifiedByAdminId;

    @Column(name = "admin_notes")
    private String adminNotes;

    @Column(name = "refund_status")
    private String refundStatus = "NONE";

    @Column(name = "created_at", updatable = false)
    private ZonedDateTime createdAt = ZonedDateTime.now();

    @Column(name = "updated_at")
    private ZonedDateTime updatedAt = ZonedDateTime.now();

    @PreUpdate
    public void preUpdate() {
        this.updatedAt = ZonedDateTime.now();
    }
}
