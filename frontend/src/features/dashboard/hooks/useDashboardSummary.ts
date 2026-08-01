import { useQuery } from '@tanstack/react-query';
import { dashboardApi } from '../services/dashboard.api';

export const DASHBOARD_SUMMARY_QUERY_KEY = ['dashboard-summary'];

export function useDashboardSummary() {
  return useQuery({
    queryKey: DASHBOARD_SUMMARY_QUERY_KEY,
    queryFn: () => dashboardApi.getSummary(),
    staleTime: 30000, // 30s stale time as requested
  });
}
