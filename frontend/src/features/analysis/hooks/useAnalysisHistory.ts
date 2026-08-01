import { useQuery } from '@tanstack/react-query';
import { analysisApi } from '../services/analysis.api';

export function useAnalysisHistory(repositoryId: string) {
  const { data: history = [], isLoading, error } = useQuery({
    queryKey: ['analysisHistory', repositoryId],
    queryFn: () => analysisApi.getAnalysisHistory(repositoryId),
    enabled: !!repositoryId,
  });

  return { history, isLoading, error };
}
