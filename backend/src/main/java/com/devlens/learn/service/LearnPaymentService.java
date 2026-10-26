package com.devlens.learn.service;

import com.devlens.learn.entity.LearnTransaction;
import com.devlens.learn.entity.LearnUser;
import com.devlens.learn.repository.LearnTransactionRepository;
import com.devlens.learn.repository.LearnUserRepository;
import com.razorpay.Order;
import com.razorpay.RazorpayClient;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;
import java.util.UUID;

@Slf4j
@Service
@RequiredArgsConstructor
public class LearnPaymentService {

    @Value("${razorpay.key.id:dummyKey}")
    private String razorpayKeyId;

    @Value("${razorpay.key.secret:dummySecret}")
    private String razorpayKeySecret;

    private RazorpayClient razorpayClient;
    private final LearnTransactionRepository transactionRepository;
    private final LearnUserRepository userRepository;
    private final LearnAffiliateService affiliateService;
    private final LeaderboardService leaderboardService;
    private final com.devlens.learn.repository.LearnPromoCodeRepository promoCodeRepository;

    @PostConstruct
    public void init() {
        try {
            if (razorpayKeyId != null && !razorpayKeyId.equals("dummyKey") && !razorpayKeyId.isBlank()) {
                this.razorpayClient = new RazorpayClient(razorpayKeyId, razorpayKeySecret);
            }
        } catch (Exception e) {
            log.warn("Razorpay Client initialization skipped/failed. Running in mock order mode.");
        }
    }

    public Map<String, Object> validateCode(UUID userId, String rawCode) {
        if (rawCode == null || rawCode.trim().isEmpty()) {
            return Map.of("valid", false, "message", "Please enter a code.");
        }
        String cleanCode = rawCode.trim().toUpperCase();

        // 1. Check if user is entering their own referral code
        if (userId != null) {
            LearnUser currentUser = userRepository.findById(userId).orElse(null);
            if (currentUser != null && cleanCode.equalsIgnoreCase(currentUser.getReferralCode())) {
                return Map.of("valid", false, "message", "You cannot use your own referral code.");
            }
        }

        // 2. Check Student Referral Code
        Optional<LearnUser> referrerOpt = userRepository.findByReferralCodeIgnoreCase(cleanCode);
        if (referrerOpt.isPresent()) {
            LearnUser referrer = referrerOpt.get();
            String referrerName = referrer.getFullName() != null && !referrer.getFullName().isBlank() 
                    ? referrer.getFullName() 
                    : "a PrepLens Student";
            return Map.of(
                "valid", true,
                "type", "REFERRAL",
                "code", cleanCode,
                "referrerName", referrerName,
                "message", "Valid Referral Code! (Referred by " + referrerName + ")"
            );
        }

        // 3. Check Affiliate Promo Code
        Optional<com.devlens.learn.entity.LearnPromoCode> promoOpt = promoCodeRepository.findByCodeIgnoreCaseAndIsActiveTrue(cleanCode);
        if (promoOpt.isPresent()) {
            com.devlens.learn.entity.LearnPromoCode promo = promoOpt.get();
            return Map.of(
                "valid", true,
                "type", "AFFILIATE",
                "code", cleanCode,
                "discountPercentage", promo.getDiscountPercentage(),
                "message", "Valid Promo Code! " + promo.getDiscountPercentage() + "% discount applied"
            );
        }

        return Map.of("valid", false, "message", "Invalid referral or promo code.");
    }

    public int getCanonicalBasePrice(String rawPlanName, String rawBillingCycle, Integer fallbackAmount) {
        boolean isYearly = false;
        if (rawBillingCycle != null && rawBillingCycle.trim().equalsIgnoreCase("yearly")) {
            isYearly = true;
        } else if (rawPlanName != null && rawPlanName.toUpperCase().contains("YEARLY")) {
            isYearly = true;
        }

        String plan = rawPlanName != null ? rawPlanName.toUpperCase() : "";

        // Tier 1: Boards Prep (Class 9 & 10) -> ₹999/yr
        if (plan.contains("BOARDS PREP") || plan.contains("CLASS 9") || plan.contains("CLASS 10")
                || plan.contains("CLASS_9") || plan.contains("CLASS_10")
                || plan.contains("9 & 10") || plan.contains("9-10")) {
            return isYearly ? 999 : 149;
        }

        // Tier 2: Senior Boards (Class 11 & 12) -> ₹1299/yr
        if (plan.contains("SENIOR BOARDS") || plan.contains("CLASS 11") || plan.contains("CLASS 12")
                || plan.contains("CLASS_11") || plan.contains("CLASS_12")
                || plan.contains("11 & 12") || plan.contains("11-12")) {
            return isYearly ? 1299 : 199;
        }

        // Tier 3: Competitive & Govt (JEE / NEET / SSC / UPSC / GOVT) -> ₹1499/yr
        if (plan.contains("COMPETITIVE") || plan.contains("JEE") || plan.contains("NEET") || plan.contains("UPSC") || plan.contains("SSC") || plan.contains("GOVT")) {
            return isYearly ? 1499 : 249;
        }

        // Validate fallback amount against known legitimate pricing tiers to prevent price tampering
        if (fallbackAmount != null) {
            int amt = fallbackAmount;
            if (amt == 999 || amt == 1299 || amt == 1499 || amt == 149 || amt == 199 || amt == 249) {
                return amt;
            }
        }

        // Default canonical fallback (Boards Prep)
        return isYearly ? 999 : 149;
    }

    public Map<String, Object> createSubscriptionOrder(UUID userId, String planName, int amount, String promoCode) {
        return createSubscriptionOrder(userId, planName, null, amount, promoCode);
    }

    public Map<String, Object> createSubscriptionOrder(UUID userId, String planName, String billingCycle, Integer requestedAmount, String promoCode) {
        int basePrice = getCanonicalBasePrice(planName, billingCycle, requestedAmount);
        int finalAmount = basePrice;
        try {
            if (promoCode != null && !promoCode.trim().isEmpty()) {
                try {
                    java.math.BigDecimal discountedPrice = affiliateService.calculateDiscountedPrice(promoCode.trim(), new java.math.BigDecimal(basePrice));
                    if (discountedPrice != null && discountedPrice.intValue() > 0) {
                        finalAmount = discountedPrice.intValue();
                    }
                } catch (Exception ignored) {
                    // Not an affiliate discount code (likely student referral code)
                }
            }

            String orderId;

            if (razorpayClient != null) {
                JSONObject orderRequest = new JSONObject();
                orderRequest.put("amount", finalAmount * 100);
                orderRequest.put("currency", "INR");
                orderRequest.put("receipt", "txn_" + UUID.randomUUID().toString().substring(0, 8));

                Order order = razorpayClient.orders.create(orderRequest);
                orderId = order.get("id");
            } else {
                // Demo / Mock order generation when Razorpay live key is not supplied
                orderId = "order_mock_" + UUID.randomUUID().toString().substring(0, 8);
                log.info("Generated Mock Razorpay Order ID [{}] for plan [{}] with canonical amount [{}]", orderId, planName, finalAmount);
            }

            LearnTransaction transaction = new LearnTransaction();
            transaction.setUserId(userId);
            transaction.setAmount(finalAmount);
            transaction.setPlanName(planName != null ? planName : "PRO_PLAN");
            transaction.setRazorpayOrderId(orderId);
            if (promoCode != null && !promoCode.trim().isEmpty()) {
                transaction.setPromoCode(promoCode.toUpperCase());
            }
            transactionRepository.save(transaction);

            Map<String, Object> response = new HashMap<>();
            response.put("orderId", orderId);
            response.put("amount", finalAmount);
            response.put("currency", "INR");
            response.put("keyId", razorpayKeyId);
            return response;

        } catch (Exception e) {
            log.error("Failed to create Razorpay order for Learn User {}", userId, e);
            // Fallback mock order if API throws exception
            String fallbackOrderId = "order_mock_" + UUID.randomUUID().toString().substring(0, 8);
            LearnTransaction transaction = new LearnTransaction();
            transaction.setUserId(userId);
            transaction.setAmount(finalAmount);
            transaction.setPlanName(planName != null ? planName : "PRO_PLAN");
            transaction.setRazorpayOrderId(fallbackOrderId);
            transactionRepository.save(transaction);

            Map<String, Object> response = new HashMap<>();
            response.put("orderId", fallbackOrderId);
            response.put("amount", finalAmount);
            response.put("currency", "INR");
            response.put("keyId", "rzp_test_demo");
            return response;
        }
    }

    @Transactional
    public boolean verifyPayment(UUID userId, String orderId, String paymentId, String signature) {
        if (orderId == null || orderId.isBlank()) {
            log.warn("Payment verification failed: orderId is null or blank");
            return false;
        }

        Optional<LearnTransaction> txOpt = transactionRepository.findByRazorpayOrderId(orderId);
        LearnTransaction transaction;
        if (txOpt.isPresent()) {
            transaction = txOpt.get();
        } else if (orderId.startsWith("order_mock_")) {
            // Mock transaction fallback for dev/demo mode
            transaction = new LearnTransaction();
            transaction.setUserId(userId);
            transaction.setAmount(199);
            transaction.setPlanName("PRO_PLAN");
            transaction.setRazorpayOrderId(orderId);
        } else {
            log.warn("Payment verification failed: order {} not found in database", orderId);
            return false;
        }

        if ("SUCCESS".equals(transaction.getStatus())) {
            return true; // Idempotency check: Already processed
        }

        // Cryptographic Signature Verification
        boolean isMock = orderId.startsWith("order_mock_");
        boolean isLiveRazorpay = razorpayClient != null 
                && razorpayKeySecret != null 
                && !razorpayKeySecret.equals("dummySecret") 
                && !razorpayKeySecret.isBlank() 
                && !isMock;

        if (isLiveRazorpay) {
            try {
                if (signature == null || signature.isBlank()) {
                    log.warn("Payment verification failed: missing signature for order {}", orderId);
                    transaction.setStatus("FAILED");
                    transactionRepository.save(transaction);
                    return false;
                }
                JSONObject options = new JSONObject();
                options.put("razorpay_order_id", orderId);
                options.put("razorpay_payment_id", paymentId);
                options.put("razorpay_signature", signature);

                boolean isValid = com.razorpay.Utils.verifyPaymentSignature(options, razorpayKeySecret);
                if (!isValid) {
                    log.warn("Payment verification failed: invalid signature for order {}", orderId);
                    transaction.setStatus("FAILED");
                    transactionRepository.save(transaction);
                    return false;
                }
            } catch (Exception e) {
                log.error("Exception during Razorpay signature verification for order {}: {}", orderId, e.getMessage());
                transaction.setStatus("FAILED");
                transactionRepository.save(transaction);
                return false;
            }
        }

        transaction.setRazorpayPaymentId(paymentId != null ? paymentId : "pay_mock_" + UUID.randomUUID().toString().substring(0, 8));
        transaction.setStatus("SUCCESS");
        transactionRepository.save(transaction);

        applySubscriptionAndRewards(transaction);

        return true;
    }

    @Transactional
    public boolean verifyPaymentManual(UUID transactionId, UUID adminUserId, String paymentId, String adminNotes) {
        LearnTransaction transaction = transactionRepository.findById(transactionId)
                .orElseThrow(() -> new IllegalArgumentException("PrepLens Learn Transaction not found: " + transactionId));

        if ("SUCCESS".equals(transaction.getStatus())) {
            return true; // Idempotency: Already processed
        }

        String finalPaymentId = (paymentId != null && !paymentId.isBlank())
                ? paymentId.trim()
                : "pay_manual_admin_" + UUID.randomUUID().toString().substring(0, 8);

        transaction.setRazorpayPaymentId(finalPaymentId);
        transaction.setStatus("SUCCESS");
        transaction.setVerifiedByAdminId(adminUserId);
        transaction.setAdminNotes(adminNotes != null && !adminNotes.isBlank() ? adminNotes : "Manually verified by Admin");
        transaction.setPaymentMethod("MANUAL_ADMIN_OVERRIDE");
        transactionRepository.save(transaction);

        applySubscriptionAndRewards(transaction);

        log.info("Admin {} manually verified PrepLens Learn Transaction {}", adminUserId, transactionId);
        return true;
    }

    private void applySubscriptionAndRewards(LearnTransaction transaction) {
        // Update user subscription
        if (transaction.getUserId() != null) {
            userRepository.findById(transaction.getUserId()).ifPresent(user -> {
                String plan = transaction.getPlanName() != null ? transaction.getPlanName() : "Full Academic Pass";
                user.setSubscriptionPlan(plan);

                // Stack on existing active subscription if present, else start from now
                LocalDateTime baseTime = (user.getSubscribedUntil() != null && user.getSubscribedUntil().isAfter(LocalDateTime.now()))
                        ? user.getSubscribedUntil()
                        : LocalDateTime.now();
                LocalDateTime expiry = baseTime.plusYears(1);

                // Guarantee full academic session buffer (minimum until May 31, 2027, June 30 for competitive exams)
                LocalDateTime academicYearEnd = LocalDateTime.of(2027, 5, 31, 23, 59, 59);
                String upperPlan = plan.toUpperCase();
                if (upperPlan.contains("COMPETITIVE") || upperPlan.contains("JEE") || upperPlan.contains("NEET") || upperPlan.contains("UPSC")) {
                    academicYearEnd = LocalDateTime.of(2027, 6, 30, 23, 59, 59);
                }
                if (expiry.isBefore(academicYearEnd)) {
                    expiry = academicYearEnd;
                }

                user.setSubscribedUntil(expiry);
                userRepository.save(user);
                log.info("Activated Annual Pro Subscription [{}] for User {} until {}", plan, user.getEmail(), expiry);
            });
        }

        // Handle Student Referral XP Award (+200 XP to referrer upon paid Pro activation)
        if (transaction.getUserId() != null) {
            LearnUser buyer = userRepository.findById(transaction.getUserId()).orElse(null);
            if (buyer != null) {
                String usedCode = transaction.getPromoCode();
                LearnUser referrer = null;

                if (usedCode != null && !usedCode.isBlank()) {
                    referrer = userRepository.findByReferralCodeIgnoreCase(usedCode.trim()).orElse(null);
                } else if (buyer.getReferredBy() != null) {
                    referrer = userRepository.findById(buyer.getReferredBy()).orElse(null);
                }

                if (referrer != null && !referrer.getId().equals(buyer.getId())) {
                    // Check if buyer has any prior successful transactions (idempotency check)
                    long previousSuccessOrders = transactionRepository.findByUserIdOrderByCreatedAtDesc(buyer.getId()).stream()
                            .filter(t -> "SUCCESS".equals(t.getStatus()) && !t.getId().equals(transaction.getId()))
                            .count();

                    if (buyer.getReferredBy() == null) {
                        buyer.setReferredBy(referrer.getId());
                        userRepository.save(buyer);
                    }

                    if (previousSuccessOrders == 0) {
                        leaderboardService.awardXp(referrer.getId(), com.devlens.learn.entity.LearnXpLog.ActivityType.REFERRAL, 200);
                        log.info("Awarded +200 Referral XP to Referrer {} for Buyer {} activating PRO",
                                referrer.getEmail(), buyer.getEmail());
                    }
                }
            }
        }

        // Record Affiliate Sale
        if (transaction.getPromoCode() != null && transaction.getUserId() != null) {
            try {
                affiliateService.recordSale(
                    transaction.getUserId(),
                    transaction.getPromoCode(),
                    transaction.getId(),
                    new java.math.BigDecimal(transaction.getAmount())
                );
            } catch (Exception e) {
                log.warn("Failed to record affiliate sale: {}", e.getMessage());
            }
        }
    }
}
