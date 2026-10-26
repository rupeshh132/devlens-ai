package com.devlens.api.service.payment;

import com.devlens.api.entity.User;
import com.devlens.api.entity.lms.Course;
import com.devlens.api.entity.lms.Enrollment;
import com.devlens.api.entity.lms.EnrollmentStatus;
import com.devlens.api.entity.payment.PaymentTransaction;
import com.devlens.api.entity.payment.PaymentTransactionStatus;
import com.devlens.api.repository.UserRepository;
import com.devlens.api.repository.lms.CourseRepository;
import com.devlens.api.repository.lms.EnrollmentRepository;
import com.devlens.api.repository.payment.PaymentTransactionRepository;
import com.razorpay.Order;
import com.razorpay.RazorpayClient;
import com.razorpay.RazorpayException;
import com.razorpay.Utils;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Map;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
@Slf4j
public class PaymentService {

    private final UserRepository userRepository;
    private final CourseRepository courseRepository;
    private final PaymentTransactionRepository paymentTransactionRepository;
    private final EnrollmentRepository enrollmentRepository;
    private final com.devlens.learn.repository.LearnTransactionRepository learnTransactionRepository;
    private final com.devlens.learn.service.LearnPaymentService learnPaymentService;

    @Value("${razorpay.key.id}")
    private String razorpayKeyId;

    @Value("${razorpay.key.secret}")
    private String razorpayKeySecret;

    @Value("${razorpay.webhook-secret}")
    private String razorpayWebhookSecret;

    @Transactional
    public String createOrder(UUID userId, UUID courseId) throws RazorpayException {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("User not found"));
        Course course = courseRepository.findById(courseId)
                .orElseThrow(() -> new IllegalArgumentException("Course not found"));

        if (enrollmentRepository.findByUserIdAndCourseId(userId, courseId).isPresent()) {
            throw new IllegalStateException("User is already enrolled in this course");
        }

        RazorpayClient client = new RazorpayClient(razorpayKeyId, razorpayKeySecret);

        JSONObject orderRequest = new JSONObject();
        orderRequest.put("amount", course.getPrice()); // amount in the smallest currency unit
        orderRequest.put("currency", "INR");
        orderRequest.put("receipt", "receipt_" + System.currentTimeMillis());

        Order order = client.orders.create(orderRequest);
        String orderId = order.get("id");

        PaymentTransaction tx = new PaymentTransaction();
        tx.setUser(user);
        tx.setCourse(course);
        tx.setRazorpayOrderId(orderId);
        tx.setAmount(course.getPrice());
        tx.setStatus(PaymentTransactionStatus.PENDING);
        paymentTransactionRepository.save(tx);

        return orderId;
    }

    @Transactional
    public boolean verifyPayment(String razorpayOrderId, String razorpayPaymentId, String razorpaySignature) {
        try {
            JSONObject options = new JSONObject();
            options.put("razorpay_order_id", razorpayOrderId);
            options.put("razorpay_payment_id", razorpayPaymentId);
            options.put("razorpay_signature", razorpaySignature);

            boolean isValid = Utils.verifyPaymentSignature(options, razorpayKeySecret);

            PaymentTransaction tx = paymentTransactionRepository.findByRazorpayOrderId(razorpayOrderId)
                    .orElseThrow(() -> new IllegalArgumentException("Transaction not found"));

            if (isValid) {
                if (tx.getStatus() == PaymentTransactionStatus.SUCCESS) {
                    return true; // Idempotency check: Already processed
                }
                
                tx.setRazorpayPaymentId(razorpayPaymentId);
                tx.setRazorpaySignature(razorpaySignature);
                tx.setStatus(PaymentTransactionStatus.SUCCESS);
                paymentTransactionRepository.save(tx);

                if (enrollmentRepository.findByUserIdAndCourseId(tx.getUser().getId(), tx.getCourse().getId()).isEmpty()) {
                    Enrollment enrollment = new Enrollment();
                    enrollment.setUser(tx.getUser());
                    enrollment.setCourse(tx.getCourse());
                    enrollment.setStatus(EnrollmentStatus.ACTIVE);
                    enrollmentRepository.save(enrollment);
                }
                return true;
            } else {
                tx.setStatus(PaymentTransactionStatus.FAILED);
                paymentTransactionRepository.save(tx);
                return false;
            }
        } catch (RazorpayException e) {
            log.error("Error verifying payment signature", e);
            return false;
        }
    }

    @Transactional
    public void handleWebhook(String payload, String signature) {
        try {
            boolean isValid = Utils.verifyWebhookSignature(payload, signature, razorpayWebhookSecret);
            if (!isValid) {
                log.error("Invalid Razorpay webhook signature");
                throw new IllegalArgumentException("Invalid webhook signature");
            }

            JSONObject jsonPayload = new JSONObject(payload);
            String event = jsonPayload.getString("event");

            if ("payment.captured".equals(event)) {
                JSONObject paymentEntity = jsonPayload.getJSONObject("payload").getJSONObject("payment").getJSONObject("entity");
                String orderId = paymentEntity.optString("order_id", "");
                String paymentId = paymentEntity.optString("id", "");

                // 1. Check & Process LMS Course Purchases
                Optional<PaymentTransaction> lmsTxOpt = paymentTransactionRepository.findByRazorpayOrderId(orderId);
                if (lmsTxOpt.isPresent()) {
                    PaymentTransaction tx = lmsTxOpt.get();
                    if (tx.getStatus() != PaymentTransactionStatus.SUCCESS) {
                        tx.setRazorpayPaymentId(paymentId);
                        tx.setStatus(PaymentTransactionStatus.SUCCESS);
                        paymentTransactionRepository.save(tx);

                        // Ensure user is enrolled
                        if (enrollmentRepository.findByUserIdAndCourseId(tx.getUser().getId(), tx.getCourse().getId()).isEmpty()) {
                            Enrollment enrollment = new Enrollment();
                            enrollment.setUser(tx.getUser());
                            enrollment.setCourse(tx.getCourse());
                            enrollment.setStatus(EnrollmentStatus.ACTIVE);
                            enrollmentRepository.save(enrollment);
                            log.info("Enrolled LMS user {} into course {} via Webhook", tx.getUser().getEmail(), tx.getCourse().getTitle());
                        }
                    }
                    return;
                }

                // 2. Check & Process PrepLens Learn Subscriptions
                Optional<com.devlens.learn.entity.LearnTransaction> learnTxOpt = learnTransactionRepository.findByRazorpayOrderId(orderId);
                if (learnTxOpt.isPresent()) {
                    com.devlens.learn.entity.LearnTransaction learnTx = learnTxOpt.get();
                    if (!"SUCCESS".equalsIgnoreCase(learnTx.getStatus())) {
                        learnPaymentService.verifyPayment(learnTx.getUserId(), orderId, paymentId, null);
                        log.info("Activated PrepLens Learn subscription via Razorpay Webhook for Order: {}", orderId);
                    }
                    return;
                }

                log.warn("Razorpay Webhook orderId [{}] not found in LMS or Learn transactions", orderId);
            }
        } catch (RazorpayException e) {
            log.error("Failed to verify Razorpay webhook signature", e);
            throw new RuntimeException("Webhook verification failed", e);
        } catch (Exception e) {
            log.error("Error processing webhook payload", e);
            throw new RuntimeException("Error processing webhook", e);
        }
    }
}
