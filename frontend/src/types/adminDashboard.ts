export type DashboardMode = 'live' | 'projections';

export type DateRangeFilter = '7d' | '30d' | '90d' | 'all';

export interface LivePlatformTelemetry {
  // Users & Community
  totalUsers: number;
  totalStudents: number;
  totalConnectedRepos: number;

  // Academy & LMS
  totalCourses: number;
  totalModules: number;
  totalEnrollments: number;
  certificatesIssued: number;
  pendingSubmissions: number;
  approvedSubmissions: number;

  // AI Engine
  totalAnalysisJobs: number;
  totalResumesGenerated: number;
  totalInterviews: number;
  aiJobsLast24h: number;
  estimatedApiBurnUsd: number;

  // Learn & Practice
  totalQuestions: number;
  totalTestAttempts: number;

  // Monetization & Revenue
  lmsSuccessPayments: number;
  learnSuccessPayments?: number;
  lmsRevenueInr: number;
  learnRevenueInr: number;
  totalRevenueInr: number;
  totalOrders?: number;

  // Legacy compatibility
  activeCourses?: number;
  successfulPayments?: number;
}

export interface LearnDashboardMetrics {
  totalSales: number;
  totalCommissionPaid: number;
  netRevenue: number;
  aiJobsLast24h: number;
  estimatedApiBurnRateUsd: number;
}

export interface RevenueDataPoint {
  name: string;
  mrr: number;
  expenses: number;
  actual?: number;
}

export interface AcquisitionDataPoint {
  name: string;
  visitors: number;
  registrations: number;
}
