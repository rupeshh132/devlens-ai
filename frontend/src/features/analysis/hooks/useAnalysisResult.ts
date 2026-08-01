import { useQuery } from '@tanstack/react-query';
import { analysisApi } from '../services/analysis.api';

export const useAnalysisResult = (jobId: string | undefined) => {
  return useQuery({
    queryKey: ['analysisResult', jobId],
    queryFn: () => analysisApi.getAnalysisResult(jobId!),
    enabled: !!jobId,
  });
};
