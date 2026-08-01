import { useQuery } from '@tanstack/react-query';
import { analysisApi } from '../services/analysis.api';

export function useAnalysis(id: string) {
  const { data: analysis, isLoading, error } = useQuery({
    queryKey: ['analysis', id],
    queryFn: () => analysisApi.getAnalysisResult(id),
    enabled: !!id,
  });

  return { analysis: analysis || null, isLoading, error };
}
