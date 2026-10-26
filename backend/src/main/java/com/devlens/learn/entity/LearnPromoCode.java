package com.devlens.learn.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Table(name = "learn_promo_codes")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class LearnPromoCode {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Column(nullable = false, unique = true, length = 50)
    private String code;

    @Column(name = "affiliate_user_id")
    private UUID affiliateUserId;

    @Column(name = "discount_percentage", precision = 5, scale = 2, nullable = false)
    private BigDecimal discountPercentage;

    @Column(name = "commission_percentage", precision = 5, scale = 2, nullable = false)
    private BigDecimal commissionPercentage;

    @Builder.Default
    @Column(name = "is_active")
    private Boolean isActive = true;

    @Column(name = "max_redemptions")
    private Integer maxRedemptions;

    @Builder.Default
    @Column(name = "current_redemptions")
    private Integer currentRedemptions = 0;

    @Column(name = "expiry_date")
    private LocalDateTime expiryDate;

    @Column(name = "description")
    private String description;

    @Column(name = "partner_name")
    private String partnerName;

    @Column(name = "partner_email")
    private String partnerEmail;

    @Column(name = "partner_payout_upi")
    private String partnerPayoutUpi;

    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;
}
