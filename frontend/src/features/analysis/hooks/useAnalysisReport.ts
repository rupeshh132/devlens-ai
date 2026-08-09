import { useQuery } from '@tanstack/react-query';
import { analysisApi } from '../api/analysis.api';

export const useAnalysisReport = (jobId: string) => {
  return useQuery({
    queryKey: ['analysis-report', jobId],
    queryFn: () => analysisApi.getAnalysisReport(jobId),
    enabled: !!jobId,
    refetchInterval: (query) => {
      // Poll every 3 seconds if the report exists but score/summary are null (still processing)
      const data = query.state.data;
      if (data && (data.score === null || data.summary === null)) {
        return 3000;
      }
      return false; // Stop polling once complete
    },
  });
};
