import { useQuery } from '@tanstack/react-query';
import { analysisApi } from '../api/analysis.api';

export const useAnalysisReport = (jobId: string) => {
  return useQuery({
    queryKey: ['analysis-report', jobId],
    queryFn: () => analysisApi.getAnalysisReport(jobId),
    enabled: !!jobId,
  });
};
