import { useState, useEffect } from 'react';
import type { Analysis } from '../types/analysis';
import { analysisService } from '../services/analysis.service';

interface UseAnalysisResult {
  analysis: Analysis | null;
  isLoading: boolean;
  error: Error | null;
}

export function useAnalysis(id: string): UseAnalysisResult {
  const [analysis, setAnalysis] = useState<Analysis | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let isMounted = true;
    
    async function fetchAnalysis() {
      try {
        setIsLoading(true);
        const data = await analysisService.getAnalysis(id);
        if (isMounted) {
          setAnalysis(data);
          setError(null);
        }
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err : new Error('Failed to fetch analysis'));
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    if (id) {
      fetchAnalysis();
    }

    return () => {
      isMounted = false;
    };
  }, [id]);

  return { analysis, isLoading, error };
}
