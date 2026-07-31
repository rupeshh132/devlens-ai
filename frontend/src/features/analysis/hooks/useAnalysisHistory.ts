import { useState, useEffect } from 'react';
import type { AnalysisHistoryItem } from '../types/analysis';
import { analysisService } from '../services/analysis.service';

interface UseAnalysisHistoryResult {
  history: AnalysisHistoryItem[];
  isLoading: boolean;
  error: Error | null;
}

export function useAnalysisHistory(repositoryId: string): UseAnalysisHistoryResult {
  const [history, setHistory] = useState<AnalysisHistoryItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let isMounted = true;
    
    async function fetchHistory() {
      try {
        setIsLoading(true);
        const data = await analysisService.getHistory(repositoryId);
        if (isMounted) {
          setHistory(data);
          setError(null);
        }
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err : new Error('Failed to fetch analysis history'));
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    if (repositoryId) {
      fetchHistory();
    }

    return () => {
      isMounted = false;
    };
  }, [repositoryId]);

  return { history, isLoading, error };
}
