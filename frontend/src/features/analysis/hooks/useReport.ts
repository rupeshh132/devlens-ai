import { useQuery } from '@tanstack/react-query';
import { reportApi } from '../services/report.api';

export const REPORT_QUERY_KEY = (jobId: string) => ['report', jobId];

export function useReport(jobId: string, enabled: boolean = true) {
  return useQuery({
    queryKey: REPORT_QUERY_KEY(jobId),
    queryFn: () => reportApi.getReport(jobId),
    enabled: enabled && !!jobId,
  });
}
