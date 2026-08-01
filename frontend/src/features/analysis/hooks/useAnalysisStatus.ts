import { useQuery } from '@tanstack/react-query';
import { analysisApi } from '../services/analysis.api';

export const useAnalysisStatus = (jobId: string | undefined) => {
  return useQuery({
    queryKey: ['analysisStatus', jobId],
    queryFn: () => analysisApi.getAnalysisStatus(jobId!),
    enabled: !!jobId,
    refetchInterval: (query) => {
      const data = query.state.data;
      if (data && (data.status === 'COMPLETED' || data.status === 'FAILED' || data.status === 'CANCELLED')) {
        return false;
      }
      return 3000; // Poll every 3 seconds while pending/running
    },
  });
};
