package com.devlens.api.service.lms;

import com.devlens.api.repository.UserRepository;
import com.devlens.api.repository.RepositoryRepository;
import com.devlens.api.repository.AnalysisJobRepository;
import com.devlens.api.resume.ResumeRepository;
import com.devlens.api.interview.InterviewSessionRepository;
import com.devlens.api.repository.lms.CourseRepository;
import com.devlens.api.repository.lms.ModuleRepository;
import com.devlens.api.repository.lms.EnrollmentRepository;
import com.devlens.api.repository.lms.CertificateRepository;
import com.devlens.api.repository.lms.UserProgressRepository;
import com.devlens.api.repository.payment.PaymentTransactionRepository;
import com.devlens.api.entity.payment.PaymentTransactionStatus;
import com.devlens.api.entity.lms.ProgressStatus;
import com.devlens.learn.repository.LearnUserRepository;
import com.devlens.learn.repository.LearnTransactionRepository;
import com.devlens.learn.repository.LearnQuestionRepository;
import com.devlens.learn.repository.LearnTestAttemptRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.HashMap;
import java.util.Map;

@Slf4j
@Service
@RequiredArgsConstructor
public class AdminStatsService {

    private final UserRepository userRepository;
    private final LearnUserRepository learnUserRepository;
    private final CourseRepository courseRepository;
    private final ModuleRepository moduleRepository;
    private final EnrollmentRepository enrollmentRepository;
    private final CertificateRepository certificateRepository;
    private final UserProgressRepository userProgressRepository;
    private final PaymentTransactionRepository paymentTransactionRepository;
    private final LearnTransactionRepository learnTransactionRepository;
    private final AnalysisJobRepository analysisJobRepository;
    private final ResumeRepository resumeRepository;
    private final InterviewSessionRepository interviewSessionRepository;
    private final RepositoryRepository repositoryRepository;
    private final LearnQuestionRepository learnQuestionRepository;
    private final LearnTestAttemptRepository learnTestAttemptRepository;

    public Map<String, Object> getDashboardStats() {
        Map<String, Object> stats = new HashMap<>();

        // 1. User & Community Telemetry
        long totalUsers = userRepository.count();
        long totalStudents = learnUserRepository.count();
        long totalConnectedRepos = repositoryRepository.count();

        // 2. Academy & Tracks Telemetry
        long totalCourses = courseRepository.count();
        long totalModules = moduleRepository.count();
        long totalEnrollments = enrollmentRepository.count();
        long certificatesIssued = certificateRepository.count();
        long pendingSubmissions = userProgressRepository.countByStatus(ProgressStatus.PENDING_REVIEW);
        long approvedSubmissions = userProgressRepository.countProjectSubmissionsByStatus(ProgressStatus.COMPLETED);

        // 3. AI Engine Telemetry
        long totalAnalysisJobs = analysisJobRepository.count();
        long totalResumesGenerated = resumeRepository.count();
        long totalInterviews = interviewSessionRepository.count();

        Instant last24Hours = Instant.now().minus(24, ChronoUnit.HOURS);
        long aiJobsLast24h = analysisJobRepository.countByCreatedAtAfter(last24Hours);
        double estimatedApiBurnUsd = aiJobsLast24h * 0.005; // ~$0.005 per analysis job

        // 4. Learn & Question Practice Telemetry
        long totalQuestions = learnQuestionRepository.count();
        long totalTestAttempts = learnTestAttemptRepository.count();

        // 5. Monetization & Transactions
        long lmsSuccessPayments = paymentTransactionRepository.countByStatus(PaymentTransactionStatus.SUCCESS);
        Long lmsSalesPaise = paymentTransactionRepository.getTotalSalesInPaise();
        long lmsRevenueInr = (lmsSalesPaise != null) ? (lmsSalesPaise / 100) : 0L;

        long learnSuccessPayments = learnTransactionRepository.countByStatus("SUCCESS");
        Long learnSalesInr = learnTransactionRepository.getTotalSales();
        if (learnSalesInr == null) learnSalesInr = 0L;

        long totalRevenueInr = lmsRevenueInr + learnSalesInr;
        long totalSuccessPayments = lmsSuccessPayments + learnSuccessPayments;

        // Populate response Map with clean keys
        stats.put("totalUsers", totalUsers);
        stats.put("totalStudents", totalStudents);
        stats.put("totalConnectedRepos", totalConnectedRepos);
        
        stats.put("totalCourses", totalCourses);
        stats.put("totalModules", totalModules);
        stats.put("totalEnrollments", totalEnrollments);
        stats.put("certificatesIssued", certificatesIssued);
        stats.put("pendingSubmissions", pendingSubmissions);
        stats.put("approvedSubmissions", approvedSubmissions);
        
        stats.put("totalAnalysisJobs", totalAnalysisJobs);
        stats.put("totalResumesGenerated", totalResumesGenerated);
        stats.put("totalInterviews", totalInterviews);
        stats.put("aiJobsLast24h", aiJobsLast24h);
        stats.put("estimatedApiBurnUsd", estimatedApiBurnUsd);
        
        stats.put("totalQuestions", totalQuestions);
        stats.put("totalTestAttempts", totalTestAttempts);
        
        stats.put("lmsSuccessPayments", lmsSuccessPayments);
        stats.put("learnSuccessPayments", learnSuccessPayments);
        stats.put("lmsRevenueInr", lmsRevenueInr);
        stats.put("learnRevenueInr", learnSalesInr);
        stats.put("totalRevenueInr", totalRevenueInr);
        stats.put("totalOrders", totalSuccessPayments);

        // Keep legacy backward compatibility keys
        stats.put("activeCourses", totalCourses);
        stats.put("successfulPayments", totalSuccessPayments);

        return stats;
    }
}
