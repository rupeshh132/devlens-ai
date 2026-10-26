package com.devlens.learn.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.UUID;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AdminAffiliateLedgerDto {
    private UUID id;
    private UUID affiliateUserId;
    private String partnerName;
    private String partnerEmail;
    private String partnerPayoutUpi;
    private UUID buyerUserId;
    private String buyerName;
    private String buyerEmail;
    private UUID transactionId;
    private UUID promoCodeId;
    private String promoCodeStr;
    private BigDecimal saleAmount;
    private BigDecimal grossCommission;
    private BigDecimal tdsAmount;
    private BigDecimal netPayable;
    private String status;
    private LocalDateTime settledAt;
    private String settledByAdminId;
    private String payoutReference;
    private String payoutNotes;
    private LocalDateTime createdAt;
}
