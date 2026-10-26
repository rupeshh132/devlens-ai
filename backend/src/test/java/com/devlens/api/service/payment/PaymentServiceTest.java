package com.devlens.api.service.payment;

import com.devlens.api.entity.User;
import com.devlens.api.entity.lms.Course;
import com.devlens.api.entity.payment.PaymentTransaction;
import com.devlens.api.repository.UserRepository;
import com.devlens.api.repository.lms.CourseRepository;
import com.devlens.api.repository.lms.EnrollmentRepository;
import com.devlens.api.repository.payment.PaymentTransactionRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.test.util.ReflectionTestUtils;

import java.util.Optional;
import java.util.UUID;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class PaymentServiceTest {

    @Mock
    private UserRepository userRepository;
    @Mock
    private CourseRepository courseRepository;
    @Mock
    private PaymentTransactionRepository paymentTransactionRepository;
    @Mock
    private EnrollmentRepository enrollmentRepository;

    @InjectMocks
    private PaymentService paymentService;

    @BeforeEach
    void setUp() {
        ReflectionTestUtils.setField(paymentService, "razorpayKeyId", "test_key_id");
        ReflectionTestUtils.setField(paymentService, "razorpayKeySecret", "test_key_secret");
    }

    @Test
    void testVerifyPayment_InvalidSignature() {
        String orderId = "order_test_123";
        String paymentId = "pay_test_456";
        String invalidSignature = "invalid_hash";

        PaymentTransaction tx = new PaymentTransaction();
        tx.setUser(new User());
        tx.setCourse(new Course());
        tx.setRazorpayOrderId(orderId);

        when(paymentTransactionRepository.findByRazorpayOrderId(orderId)).thenReturn(Optional.of(tx));

        boolean result = paymentService.verifyPayment(orderId, paymentId, invalidSignature);

        assertFalse(result);
        verify(enrollmentRepository, never()).save(any());
    }
}
