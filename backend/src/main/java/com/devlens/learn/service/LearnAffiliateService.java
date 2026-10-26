package com.devlens.learn.service;

import com.devlens.learn.entity.LearnAffiliateLedger;
import com.devlens.learn.entity.LearnPromoCode;
import com.devlens.learn.repository.LearnAffiliateLedgerRepository;
import com.devlens.learn.repository.LearnPromoCodeRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.LocalDateTime;
import java.util.UUID;

@Slf4j
@Service
@RequiredArgsConstructor
public class LearnAffiliateService {

    private final LearnPromoCodeRepository promoCodeRepository;
    private final LearnAffiliateLedgerRepository ledgerRepository;

    private static final BigDecimal TDS_RATE = new BigDecimal("0.05"); // 5% TDS

    @Transactional
    public LearnPromoCode createPromoCode(UUID affiliateUserId, String code, BigDecimal discountPct, BigDecimal commissionPct) {
        if (promoCodeRepository.findByCodeIgnoreCase(code).isPresent()) {
            throw new RuntimeException("Promo code already exists");
        }
        
        LearnPromoCode promoCode = new LearnPromoCode();
        promoCode.setAffiliateUserId(affiliateUserId);
        promoCode.setCode(code.toUpperCase());
        promoCode.setDiscountPercentage(discountPct);
        promoCode.setCommissionPercentage(commissionPct);
        
        return promoCodeRepository.save(promoCode);
    }

    public BigDecimal calculateDiscountedPrice(String code, BigDecimal originalPrice) {
        LearnPromoCode promo = promoCodeRepository.findByCodeIgnoreCaseAndIsActiveTrue(code)
                .orElseThrow(() -> new RuntimeException("Invalid or inactive promo code"));

        if (promo.getExpiryDate() != null && promo.getExpiryDate().isBefore(LocalDateTime.now())) {
            throw new RuntimeException("Promo code has expired");
        }

        if (promo.getMaxRedemptions() != null && promo.getCurrentRedemptions() != null
                && promo.getCurrentRedemptions() >= promo.getMaxRedemptions()) {
            throw new RuntimeException("Promo code redemption limit reached");
        }
                
        BigDecimal discount = originalPrice.multiply(promo.getDiscountPercentage()).divide(new BigDecimal("100"), 2, RoundingMode.HALF_UP);
        return originalPrice.subtract(discount);
    }

    @Transactional
    public void recordSale(UUID buyerUserId, String code, UUID transactionId, BigDecimal saleAmount) {
        LearnPromoCode promo = promoCodeRepository.findByCodeIgnoreCaseAndIsActiveTrue(code)
                .orElse(null);
                
        if (promo == null) {
            log.warn("Sale recorded with invalid promo code: {}", code);
            return;
        }

        BigDecimal commPct = promo.getCommissionPercentage() != null ? promo.getCommissionPercentage() : BigDecimal.ZERO;

        // Calculate Commission (e.g. 20% of Sale Amount)
        BigDecimal grossCommission = saleAmount.multiply(commPct).divide(new BigDecimal("100"), 2, RoundingMode.HALF_UP);
        
        // Calculate 5% TDS
        BigDecimal tdsAmount = grossCommission.multiply(TDS_RATE).setScale(2, RoundingMode.HALF_UP);
        
        // Net Payable to Affiliate
        BigDecimal netPayable = grossCommission.subtract(tdsAmount);

        LearnAffiliateLedger ledger = new LearnAffiliateLedger();
        ledger.setAffiliateUserId(promo.getAffiliateUserId());
        ledger.setBuyerUserId(buyerUserId);
        ledger.setTransactionId(transactionId);
        ledger.setPromoCodeId(promo.getId());
        ledger.setPromoCodeStr(promo.getCode());
        ledger.setSaleAmount(saleAmount);
        ledger.setGrossCommission(grossCommission);
        ledger.setTdsAmount(tdsAmount);
        ledger.setNetPayable(netPayable);

        if (promo.getAffiliateUserId() == null || netPayable.compareTo(BigDecimal.ZERO) == 0) {
            ledger.setStatus("SETTLED");
            ledger.setSettledAt(LocalDateTime.now());
            ledger.setPayoutNotes("Platform marketing coupon - zero partner payout");
        } else {
            ledger.setStatus("PENDING");
        }

        ledgerRepository.save(ledger);

        // Increment current redemptions count
        int current = promo.getCurrentRedemptions() != null ? promo.getCurrentRedemptions() : 0;
        promo.setCurrentRedemptions(current + 1);
        promoCodeRepository.save(promo);
        
        log.info("Affiliate Ledger recorded for Code: [{}], Affiliate: {}, Sale: {}, GrossComm: {}, NetPayable: {}, Status: {}, Redemptions: {}", 
                 promo.getCode(), promo.getAffiliateUserId(), saleAmount, grossCommission, netPayable, ledger.getStatus(), promo.getCurrentRedemptions());
    }
}
