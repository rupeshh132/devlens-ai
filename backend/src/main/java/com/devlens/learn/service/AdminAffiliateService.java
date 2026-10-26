package com.devlens.learn.service;

import com.devlens.api.exception.DuplicateResourceException;
import com.devlens.api.exception.ResourceNotFoundException;
import com.devlens.learn.dto.*;
import com.devlens.learn.entity.LearnAffiliateLedger;
import com.devlens.learn.entity.LearnPromoCode;
import com.devlens.learn.entity.LearnUser;
import com.devlens.learn.repository.LearnAffiliateLedgerRepository;
import com.devlens.learn.repository.LearnPromoCodeRepository;
import com.devlens.learn.repository.LearnUserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.LocalDateTime;
import java.util.Optional;
import java.util.UUID;

@Slf4j
@Service
@RequiredArgsConstructor
public class AdminAffiliateService {

    private final LearnPromoCodeRepository promoCodeRepository;
    private final LearnAffiliateLedgerRepository ledgerRepository;
    private final LearnUserRepository learnUserRepository;

    @Transactional(readOnly = true)
    public AdminAffiliateStatsDto getAffiliateStats() {
        long totalPromos = promoCodeRepository.count();
        long activePromos = promoCodeRepository.countByIsActiveTrue();
        long totalRedemptions = promoCodeRepository.sumTotalRedemptions() != null 
                ? promoCodeRepository.sumTotalRedemptions() : 0L;

        BigDecimal totalSales = ledgerRepository.sumTotalSalesDriven() != null 
                ? ledgerRepository.sumTotalSalesDriven() : BigDecimal.ZERO;

        BigDecimal totalCommission = ledgerRepository.sumTotalGrossCommission() != null 
                ? ledgerRepository.sumTotalGrossCommission() : BigDecimal.ZERO;

        BigDecimal pendingAmount = ledgerRepository.sumNetPayableByStatus("PENDING") != null 
                ? ledgerRepository.sumNetPayableByStatus("PENDING") : BigDecimal.ZERO;

        long pendingCount = ledgerRepository.countByStatus("PENDING");

        BigDecimal settledAmount = ledgerRepository.sumNetPayableByStatus("SETTLED") != null 
                ? ledgerRepository.sumNetPayableByStatus("SETTLED") : BigDecimal.ZERO;

        return AdminAffiliateStatsDto.builder()
                .totalPromos(totalPromos)
                .activePromos(activePromos)
                .totalRedemptions(totalRedemptions)
                .totalSalesDriven(totalSales)
                .totalGrossCommission(totalCommission)
                .pendingPayoutAmount(pendingAmount)
                .pendingPayoutsCount(pendingCount)
                .settledPayoutAmount(settledAmount)
                .build();
    }

    @Transactional(readOnly = true)
    public Page<AdminPromoCodeDto> getPromoCodes(String query, Boolean isActive, Pageable pageable) {
        String cleanQuery = (query != null && !query.trim().isEmpty()) ? query.trim() : null;
        Page<LearnPromoCode> page = promoCodeRepository.searchPromoCodes(cleanQuery, isActive, pageable);
        return page.map(this::mapToPromoDto);
    }

    @Transactional
    public AdminPromoCodeDto createPromoCode(AdminPromoCodeCreateDto dto) {
        String cleanCode = dto.getCode().trim().toUpperCase();

        if (promoCodeRepository.existsByCodeIgnoreCase(cleanCode)) {
            throw new DuplicateResourceException("Coupon code '" + cleanCode + "' already exists");
        }

        BigDecimal commission = dto.getCommissionPercentage() != null 
                ? dto.getCommissionPercentage() : BigDecimal.ZERO;

        LearnPromoCode promo = LearnPromoCode.builder()
                .code(cleanCode)
                .discountPercentage(dto.getDiscountPercentage())
                .commissionPercentage(commission)
                .maxRedemptions(dto.getMaxRedemptions())
                .currentRedemptions(0)
                .isActive(true)
                .expiryDate(dto.getExpiryDate())
                .description(dto.getDescription())
                .partnerName(dto.getPartnerName())
                .partnerEmail(dto.getPartnerEmail())
                .partnerPayoutUpi(dto.getPartnerPayoutUpi())
                .build();

        LearnPromoCode saved = promoCodeRepository.save(promo);
        log.info("Admin created new promo code: [{}] with {}% discount", saved.getCode(), saved.getDiscountPercentage());
        return mapToPromoDto(saved);
    }

    @Transactional
    public AdminPromoCodeDto togglePromoCode(UUID id) {
        LearnPromoCode promo = promoCodeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Promo code not found with id: " + id));

        promo.setIsActive(!Boolean.TRUE.equals(promo.getIsActive()));
        LearnPromoCode updated = promoCodeRepository.save(promo);
        log.info("Toggled promo code [{}] active status to [{}]", updated.getCode(), updated.getIsActive());
        return mapToPromoDto(updated);
    }

    @Transactional
    public void deletePromoCode(UUID id) {
        LearnPromoCode promo = promoCodeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Promo code not found with id: " + id));

        if (promo.getCurrentRedemptions() != null && promo.getCurrentRedemptions() > 0) {
            // Soft delete/deactivate if it already has sales history to preserve ledger consistency
            promo.setIsActive(false);
            promoCodeRepository.save(promo);
            log.info("Promo code [{}] deactivated rather than purged due to existing redemptions", promo.getCode());
        } else {
            promoCodeRepository.delete(promo);
            log.info("Promo code [{}] purged from system", promo.getCode());
        }
    }

    @Transactional(readOnly = true)
    public Page<AdminAffiliateLedgerDto> getLedger(String status, String query, Pageable pageable) {
        String cleanStatus = (status != null && !"ALL".equalsIgnoreCase(status.trim())) ? status.trim() : null;
        String cleanQuery = (query != null && !query.trim().isEmpty()) ? query.trim() : null;

        Page<LearnAffiliateLedger> ledgerPage = ledgerRepository.searchLedger(cleanStatus, cleanQuery, pageable);
        return ledgerPage.map(this::mapToLedgerDto);
    }

    @Transactional
    public AdminAffiliateLedgerDto settlePayout(UUID ledgerId, String adminEmail, AdminSettlePayoutRequestDto dto) {
        LearnAffiliateLedger item = ledgerRepository.findById(ledgerId)
                .orElseThrow(() -> new ResourceNotFoundException("Affiliate ledger transaction not found: " + ledgerId));

        if ("SETTLED".equalsIgnoreCase(item.getStatus())) {
            throw new IllegalArgumentException("This payout has already been marked as SETTLED");
        }

        item.setStatus("SETTLED");
        item.setSettledAt(LocalDateTime.now());
        item.setSettledByAdminId(adminEmail != null ? adminEmail : "Admin");
        item.setPayoutReference(dto.getPayoutReference().trim());
        item.setPayoutNotes(dto.getPayoutNotes());

        LearnAffiliateLedger saved = ledgerRepository.save(item);
        log.info("ADMIN SETTLEMENT: Affiliate ledger [{}] settled by [{}] with UTR [{}]", 
                saved.getId(), adminEmail, saved.getPayoutReference());

        return mapToLedgerDto(saved);
    }

    @Transactional(readOnly = true)
    public PromoValidateResponseDto validatePromoCode(String rawCode, BigDecimal originalAmount) {
        if (rawCode == null || rawCode.isBlank()) {
            return PromoValidateResponseDto.builder()
                    .valid(false)
                    .message("Please enter a valid coupon code")
                    .build();
        }

        String cleanCode = rawCode.trim().toUpperCase();
        Optional<LearnPromoCode> promoOpt = promoCodeRepository.findByCodeIgnoreCase(cleanCode);

        if (promoOpt.isEmpty()) {
            return PromoValidateResponseDto.builder()
                    .valid(false)
                    .code(cleanCode)
                    .message("Coupon code '" + cleanCode + "' is invalid")
                    .build();
        }

        LearnPromoCode promo = promoOpt.get();

        if (!Boolean.TRUE.equals(promo.getIsActive())) {
            return PromoValidateResponseDto.builder()
                    .valid(false)
                    .code(cleanCode)
                    .message("Coupon code '" + cleanCode + "' is inactive or expired")
                    .build();
        }

        if (promo.getExpiryDate() != null && promo.getExpiryDate().isBefore(LocalDateTime.now())) {
            return PromoValidateResponseDto.builder()
                    .valid(false)
                    .code(cleanCode)
                    .message("Coupon code '" + cleanCode + "' expired on " + promo.getExpiryDate().toLocalDate())
                    .build();
        }

        if (promo.getMaxRedemptions() != null && promo.getCurrentRedemptions() != null 
                && promo.getCurrentRedemptions() >= promo.getMaxRedemptions()) {
            return PromoValidateResponseDto.builder()
                    .valid(false)
                    .code(cleanCode)
                    .message("Coupon code '" + cleanCode + "' has reached its maximum redemption limit")
                    .build();
        }

        BigDecimal base = originalAmount != null ? originalAmount : BigDecimal.ZERO;
        BigDecimal discountFactor = promo.getDiscountPercentage().divide(BigDecimal.valueOf(100), 4, RoundingMode.HALF_UP);
        BigDecimal discountAmount = base.multiply(discountFactor).setScale(2, RoundingMode.HALF_UP);
        BigDecimal discountedAmount = base.subtract(discountAmount).max(BigDecimal.ZERO);

        return PromoValidateResponseDto.builder()
                .valid(true)
                .code(promo.getCode())
                .discountPercentage(promo.getDiscountPercentage())
                .discountAmount(discountAmount)
                .discountedAmount(discountedAmount)
                .message(promo.getDiscountPercentage() + "% discount applied successfully!")
                .build();
    }

    private AdminPromoCodeDto mapToPromoDto(LearnPromoCode p) {
        return AdminPromoCodeDto.builder()
                .id(p.getId())
                .code(p.getCode())
                .affiliateUserId(p.getAffiliateUserId())
                .discountPercentage(p.getDiscountPercentage())
                .commissionPercentage(p.getCommissionPercentage())
                .isActive(p.getIsActive())
                .maxRedemptions(p.getMaxRedemptions())
                .currentRedemptions(p.getCurrentRedemptions() != null ? p.getCurrentRedemptions() : 0)
                .expiryDate(p.getExpiryDate())
                .description(p.getDescription())
                .partnerName(p.getPartnerName())
                .partnerEmail(p.getPartnerEmail())
                .partnerPayoutUpi(p.getPartnerPayoutUpi())
                .createdAt(p.getCreatedAt())
                .build();
    }

    private AdminAffiliateLedgerDto mapToLedgerDto(LearnAffiliateLedger l) {
        String partnerName = "Direct / Platform";
        String partnerEmail = null;
        String partnerUpi = null;

        if (l.getAffiliateUserId() != null) {
            Optional<LearnUser> affUser = learnUserRepository.findById(l.getAffiliateUserId());
            if (affUser.isPresent()) {
                partnerName = affUser.get().getFullName() != null ? affUser.get().getFullName() : affUser.get().getEmail();
                partnerEmail = affUser.get().getEmail();
                partnerUpi = affUser.get().getPhone(); // or UPI
            }
        }

        if (l.getPromoCodeId() != null) {
            Optional<LearnPromoCode> promo = promoCodeRepository.findById(l.getPromoCodeId());
            if (promo.isPresent()) {
                if (promo.get().getPartnerName() != null && !promo.get().getPartnerName().isBlank()) {
                    partnerName = promo.get().getPartnerName();
                }
                if (promo.get().getPartnerEmail() != null) partnerEmail = promo.get().getPartnerEmail();
                if (promo.get().getPartnerPayoutUpi() != null) partnerUpi = promo.get().getPartnerPayoutUpi();
            }
        }

        String buyerName = "Student";
        String buyerEmail = "student@devlens.ai";
        if (l.getBuyerUserId() != null) {
            Optional<LearnUser> buyer = learnUserRepository.findById(l.getBuyerUserId());
            if (buyer.isPresent()) {
                buyerName = buyer.get().getFullName() != null ? buyer.get().getFullName() : buyer.get().getEmail();
                buyerEmail = buyer.get().getEmail();
            }
        }

        return AdminAffiliateLedgerDto.builder()
                .id(l.getId())
                .affiliateUserId(l.getAffiliateUserId())
                .partnerName(partnerName)
                .partnerEmail(partnerEmail)
                .partnerPayoutUpi(partnerUpi)
                .buyerUserId(l.getBuyerUserId())
                .buyerName(buyerName)
                .buyerEmail(buyerEmail)
                .transactionId(l.getTransactionId())
                .promoCodeId(l.getPromoCodeId())
                .promoCodeStr(l.getPromoCodeStr())
                .saleAmount(l.getSaleAmount())
                .grossCommission(l.getGrossCommission())
                .tdsAmount(l.getTdsAmount())
                .netPayable(l.getNetPayable())
                .status(l.getStatus())
                .settledAt(l.getSettledAt())
                .settledByAdminId(l.getSettledByAdminId())
                .payoutReference(l.getPayoutReference())
                .payoutNotes(l.getPayoutNotes())
                .createdAt(l.getCreatedAt())
                .build();
    }
}
