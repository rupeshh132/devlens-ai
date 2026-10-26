import { useState, useEffect, useCallback } from 'react';
import { api } from '@/lib/api';
import type { LivePlatformTelemetry, LearnDashboardMetrics } from '@/types/adminDashboard';

const DEFAULT_TELEMETRY: LivePlatformTelemetry = {
  totalUsers: 0,
  totalStudents: 0,
  totalConnectedRepos: 0,
  totalCourses: 0,
  totalModules: 0,
  totalEnrollments: 0,
  certificatesIssued: 0,
  pendingSubmissions: 0,
  approvedSubmissions: 0,
  totalAnalysisJobs: 0,
  totalResumesGenerated: 0,
  totalInterviews: 0,
  aiJobsLast24h: 0,
  estimatedApiBurnUsd: 0,
  totalQuestions: 0,
  totalTestAttempts: 0,
  lmsSuccessPayments: 0,
  learnSuccessPayments: 0,
  lmsRevenueInr: 0,
  learnRevenueInr: 0,
  totalRevenueInr: 0,
  totalOrders: 0,
};

const DEFAULT_LEARN_METRICS: LearnDashboardMetrics = {
  totalSales: 0,
  totalCommissionPaid: 0,
  netRevenue: 0,
  aiJobsLast24h: 0,
  estimatedApiBurnRateUsd: 0,
};

export function useAdminDashboardData() {
  const [telemetry, setTelemetry] = useState<LivePlatformTelemetry>(DEFAULT_TELEMETRY);
  const [learnMetrics, setLearnMetrics] = useState<LearnDashboardMetrics>(DEFAULT_LEARN_METRICS);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async (isManualRefresh = false) => {
    if (isManualRefresh) setRefreshing(true);
    setError(null);

    try {
      // 1. Fetch live admin stats from Spring Boot backend
      const statsRes = await api.get('/admin/stats').catch(() => null);
      if (statsRes && statsRes.data) {
        setTelemetry({
          totalUsers: Number(statsRes.data.totalUsers || 0),
          totalStudents: Number(statsRes.data.totalStudents || 0),
          totalConnectedRepos: Number(statsRes.data.totalConnectedRepos || 0),
          totalCourses: Number(statsRes.data.totalCourses || 0),
          totalModules: Number(statsRes.data.totalModules || 0),
          totalEnrollments: Number(statsRes.data.totalEnrollments || 0),
          certificatesIssued: Number(statsRes.data.certificatesIssued || 0),
          pendingSubmissions: Number(statsRes.data.pendingSubmissions || 0),
          approvedSubmissions: Number(statsRes.data.approvedSubmissions || 0),
          totalAnalysisJobs: Number(statsRes.data.totalAnalysisJobs || 0),
          totalResumesGenerated: Number(statsRes.data.totalResumesGenerated || 0),
          totalInterviews: Number(statsRes.data.totalInterviews || 0),
          aiJobsLast24h: Number(statsRes.data.aiJobsLast24h || 0),
          estimatedApiBurnUsd: Number(statsRes.data.estimatedApiBurnUsd || 0),
          totalQuestions: Number(statsRes.data.totalQuestions || 0),
          totalTestAttempts: Number(statsRes.data.totalTestAttempts || 0),
          lmsSuccessPayments: Number(statsRes.data.lmsSuccessPayments || 0),
          learnSuccessPayments: Number(statsRes.data.learnSuccessPayments || 0),
          lmsRevenueInr: Number(statsRes.data.lmsRevenueInr || 0),
          learnRevenueInr: Number(statsRes.data.learnRevenueInr || 0),
          totalRevenueInr: Number(statsRes.data.totalRevenueInr || 0),
          totalOrders: Number(statsRes.data.totalOrders || 0),
        });
      }

      // 2. Fetch learn metrics if available
      const learnRes = await api.get('/learn/admin/dashboard/metrics').catch(() => null);
      if (learnRes && learnRes.data) {
        setLearnMetrics({
          totalSales: Number(learnRes.data.totalSales || 0),
          totalCommissionPaid: Number(learnRes.data.totalCommissionPaid || 0),
          netRevenue: Number(learnRes.data.netRevenue || 0),
          aiJobsLast24h: Number(learnRes.data.aiJobsLast24h || 0),
          estimatedApiBurnRateUsd: Number(learnRes.data.estimatedApiBurnRateUsd || 0),
        });
      }

      setLastUpdated(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    } catch (err: any) {
      console.error('Failed to load admin telemetry', err);
      setError('Failed to refresh platform telemetry');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const refresh = useCallback(() => {
    return fetchData(true);
  }, [fetchData]);

  return {
    telemetry,
    learnMetrics,
    loading,
    refreshing,
    lastUpdated,
    error,
    refresh,
  };
}
