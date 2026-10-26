package com.devlens.api.service.billing;

import com.devlens.api.dto.billing.AdminBillingStatsDto;
import com.devlens.api.dto.billing.AdminBillingTransactionDto;
import com.devlens.api.dto.billing.ManualVerifyRequestDto;
import com.devlens.api.entity.lms.Enrollment;
import com.devlens.api.entity.lms.EnrollmentStatus;
import com.devlens.api.entity.payment.PaymentTransaction;
import com.devlens.api.entity.payment.PaymentTransactionStatus;
import com.devlens.api.repository.lms.EnrollmentRepository;
import com.devlens.api.repository.payment.PaymentTransactionRepository;
import com.devlens.learn.entity.LearnTransaction;
import com.devlens.learn.repository.LearnTransactionRepository;
import com.devlens.learn.service.LearnPaymentService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;

@Service
@RequiredArgsConstructor
@Slf4j
public class AdminBillingService {

    private final JdbcTemplate jdbcTemplate;
    private final LearnTransactionRepository learnTransactionRepository;
    private final PaymentTransactionRepository paymentTransactionRepository;
    private final LearnPaymentService learnPaymentService;
    private final EnrollmentRepository enrollmentRepository;

    public AdminBillingStatsDto getBillingStats() {
        // LMS Revenue in INR (amount is in paise)
        String lmsSql = "SELECT COALESCE(SUM(amount), 0) / 100.0 FROM payment_transaction WHERE status = 'SUCCESS'";
        Double lmsRevenue = jdbcTemplate.queryForObject(lmsSql, Double.class);
        if (lmsRevenue == null) lmsRevenue = 0.0;

        // Learn Revenue in INR (amount is already in rupees)
        String learnSql = "SELECT COALESCE(SUM(amount), 0) * 1.0 FROM learn_transactions WHERE status = 'SUCCESS'";
        Double learnRevenue = jdbcTemplate.queryForObject(learnSql, Double.class);
        if (learnRevenue == null) learnRevenue = 0.0;

        Double totalRevenue = lmsRevenue + learnRevenue;

        // Transaction Counts
        String countSql = """
            SELECT 
                COUNT(*) AS total_count,
                COUNT(CASE WHEN status = 'SUCCESS' THEN 1 END) AS success_count,
                COUNT(CASE WHEN status = 'FAILED' THEN 1 END) AS failed_count,
                COUNT(CASE WHEN status = 'PENDING' THEN 1 END) AS pending_count
            FROM (
                SELECT status FROM payment_transaction
                UNION ALL
                SELECT status FROM learn_transactions
            ) combined
        """;

        Map<String, Object> counts = jdbcTemplate.queryForMap(countSql);
        long totalCount = ((Number) counts.getOrDefault("total_count", 0)).longValue();
        long successCount = ((Number) counts.getOrDefault("success_count", 0)).longValue();
        long failedCount = ((Number) counts.getOrDefault("failed_count", 0)).longValue();
        long pendingCount = ((Number) counts.getOrDefault("pending_count", 0)).longValue();

        double successRate = totalCount > 0 ? ((double) successCount / totalCount) * 100.0 : 0.0;

        return AdminBillingStatsDto.builder()
                .totalRevenue(totalRevenue)
                .lmsRevenue(lmsRevenue)
                .learnRevenue(learnRevenue)
                .totalTransactions(totalCount)
                .successTransactions(successCount)
                .failedTransactions(failedCount)
                .pendingTransactions(pendingCount)
                .successRate(Math.round(successRate * 10.0) / 10.0)
                .build();
    }

    public Map<String, Object> getTransactions(String vertical, String status, String search, int page, int size) {
        StringBuilder whereClauses = new StringBuilder(" WHERE 1=1 ");
        List<Object> params = new ArrayList<>();

        if (vertical != null && !"ALL".equalsIgnoreCase(vertical)) {
            whereClauses.append(" AND t.vertical = ? ");
            params.add(vertical.toUpperCase());
        }

        if (status != null && !"ALL".equalsIgnoreCase(status)) {
            whereClauses.append(" AND UPPER(t.status) = ? ");
            params.add(status.toUpperCase());
        }

        if (search != null && !search.trim().isEmpty()) {
            whereClauses.append(" AND (LOWER(t.user_email) LIKE ? OR LOWER(t.user_name) LIKE ? OR LOWER(t.razorpay_order_id) LIKE ? OR LOWER(COALESCE(t.razorpay_payment_id, '')) LIKE ?) ");
            String term = "%" + search.trim().toLowerCase() + "%";
            params.add(term);
            params.add(term);
            params.add(term);
            params.add(term);
        }

        String baseUnionQuery = """
            SELECT 
                'LMS' AS vertical,
                pt.id AS id,
                pt.user_id AS user_id,
                CONCAT(u.first_name, ' ', u.last_name) AS user_name,
                u.email AS user_email,
                c.title AS item_name,
                (pt.amount / 100.0) AS amount,
                pt.status AS status,
                pt.razorpay_order_id AS razorpay_order_id,
                pt.razorpay_payment_id AS razorpay_payment_id,
                NULL AS promo_code,
                TO_CHAR(pt.created_at, 'YYYY-MM-DD"T"HH24:MI:SS"Z"') AS created_at,
                pt.admin_notes AS admin_notes,
                pt.verified_by_admin_id AS verified_by_admin_id,
                pt.refund_status AS refund_status
            FROM payment_transaction pt
            JOIN users u ON u.id = pt.user_id
            JOIN course c ON c.id = pt.course_id

            UNION ALL

            SELECT 
                'LEARN' AS vertical,
                lt.id AS id,
                lt.user_id AS user_id,
                lu.full_name AS user_name,
                lu.email AS user_email,
                lt.plan_name AS item_name,
                lt.amount * 1.0 AS amount,
                lt.status AS status,
                lt.razorpay_order_id AS razorpay_order_id,
                lt.razorpay_payment_id AS razorpay_payment_id,
                lt.promo_code AS promo_code,
                TO_CHAR(lt.created_at, 'YYYY-MM-DD"T"HH24:MI:SS"Z"') AS created_at,
                lt.admin_notes AS admin_notes,
                lt.verified_by_admin_id AS verified_by_admin_id,
                lt.refund_status AS refund_status
            FROM learn_transactions lt
            JOIN learn_users lu ON lu.id = lt.user_id
        """;

        String countSql = "SELECT COUNT(*) FROM (" + baseUnionQuery + ") t " + whereClauses;
        Long totalCount = jdbcTemplate.queryForObject(countSql, Long.class, params.toArray());
        if (totalCount == null) totalCount = 0L;

        String dataSql = "SELECT * FROM (" + baseUnionQuery + ") t " + whereClauses + " ORDER BY t.created_at DESC LIMIT ? OFFSET ?";
        List<Object> dataParams = new ArrayList<>(params);
        dataParams.add(size);
        dataParams.add(page * size);

        List<AdminBillingTransactionDto> list = jdbcTemplate.query(dataSql, (rs, rowNum) -> AdminBillingTransactionDto.builder()
                .id(UUID.fromString(rs.getString("id")))
                .vertical(rs.getString("vertical"))
                .userId(rs.getString("user_id") != null ? UUID.fromString(rs.getString("user_id")) : null)
                .userName(rs.getString("user_name"))
                .userEmail(rs.getString("user_email"))
                .itemName(rs.getString("item_name"))
                .amount(rs.getDouble("amount"))
                .status(rs.getString("status"))
                .razorpayOrderId(rs.getString("razorpay_order_id"))
                .razorpayPaymentId(rs.getString("razorpay_payment_id"))
                .promoCode(rs.getString("promo_code"))
                .createdAt(rs.getString("created_at"))
                .adminNotes(rs.getString("admin_notes"))
                .verifiedByAdminId(rs.getString("verified_by_admin_id") != null ? UUID.fromString(rs.getString("verified_by_admin_id")) : null)
                .refundStatus(rs.getString("refund_status"))
                .build(),
                dataParams.toArray()
        );

        Map<String, Object> result = new HashMap<>();
        result.put("content", list);
        result.put("totalElements", totalCount);
        result.put("totalPages", (int) Math.ceil((double) totalCount / size));
        result.put("page", page);
        result.put("size", size);
        return result;
    }

    @Transactional
    public void manualVerify(UUID transactionId, ManualVerifyRequestDto request, UUID adminUserId) {
        String vertical = request.getVertical() != null ? request.getVertical().toUpperCase() : "LEARN";
        String paymentId = request.getRazorpayPaymentId() != null && !request.getRazorpayPaymentId().isBlank()
                ? request.getRazorpayPaymentId().trim()
                : "pay_manual_admin_" + UUID.randomUUID().toString().substring(0, 8);

        if ("LEARN".equalsIgnoreCase(vertical)) {
            learnPaymentService.verifyPaymentManual(transactionId, adminUserId, paymentId, request.getAdminNotes());
            log.info("Admin {} manually verified PrepLens Learn Transaction {}", adminUserId, transactionId);

        } else if ("LMS".equalsIgnoreCase(vertical)) {
            PaymentTransaction tx = paymentTransactionRepository.findById(transactionId)
                    .orElseThrow(() -> new IllegalArgumentException("LMS Payment Transaction not found: " + transactionId));

            tx.setStatus(PaymentTransactionStatus.SUCCESS);
            tx.setRazorpayPaymentId(paymentId);
            tx.setVerifiedByAdminId(adminUserId);
            tx.setAdminNotes(request.getAdminNotes() != null ? request.getAdminNotes() : "Manually verified by Admin");
            paymentTransactionRepository.save(tx);

            // Ensure enrollment
            if (enrollmentRepository.findByUserIdAndCourseId(tx.getUser().getId(), tx.getCourse().getId()).isEmpty()) {
                Enrollment enrollment = new Enrollment();
                enrollment.setUser(tx.getUser());
                enrollment.setCourse(tx.getCourse());
                enrollment.setStatus(EnrollmentStatus.ACTIVE);
                enrollmentRepository.save(enrollment);
            }
            log.info("Admin {} manually verified LMS Transaction {}", adminUserId, transactionId);
        } else {
            throw new IllegalArgumentException("Unsupported business vertical: " + vertical);
        }
    }
}
