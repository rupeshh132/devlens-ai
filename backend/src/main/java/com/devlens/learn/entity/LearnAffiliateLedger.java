package com.devlens.learn.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Table(name = "learn_affiliate_ledger")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class LearnAffiliateLedger {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Column(name = "affiliate_user_id", nullable = true)
    private UUID affiliateUserId;

    @Column(name = "buyer_user_id", nullable = false)
    private UUID buyerUserId;

    @Column(name = "transaction_id", nullable = false)
    private UUID transactionId;

    @Column(name = "promo_code_id", nullable = false)
    private UUID promoCodeId;

    @Column(name = "promo_code_str", length = 50)
    private String promoCodeStr;

    @Column(name = "sale_amount", precision = 10, scale = 2, nullable = false)
    private BigDecimal saleAmount;

    @Column(name = "gross_commission", precision = 10, scale = 2, nullable = false)
    private BigDecimal grossCommission;

    @Column(name = "tds_amount", precision = 10, scale = 2, nullable = false)
    private BigDecimal tdsAmount;

    @Column(name = "net_payable", precision = 10, scale = 2, nullable = false)
    private BigDecimal netPayable;

    @Builder.Default
    @Column(name = "status", length = 20)
    private String status = "PENDING"; // PENDING, SETTLED, REJECTED

    @Column(name = "settled_at")
    private LocalDateTime settledAt;

    @Column(name = "settled_by_admin_id")
    private String settledByAdminId;

    @Column(name = "payout_reference")
    private String payoutReference;

    @Column(name = "payout_notes", columnDefinition = "TEXT")
    private String payoutNotes;

    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;
}
