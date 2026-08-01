import { useQuery } from '@tanstack/react-query';
import { analysisApi } from '../services/analysis.api';

export const useAnalysisHistoryQuery = (repositoryId: string | undefined) => {
  return useQuery({
    queryKey: ['analysisHistory', repositoryId],
    queryFn: () => analysisApi.getAnalysisHistory(repositoryId!),
    enabled: !!repositoryId,
  });
};
