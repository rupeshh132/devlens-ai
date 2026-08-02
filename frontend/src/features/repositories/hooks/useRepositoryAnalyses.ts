import { useQuery } from '@tanstack/react-query';
import { api } from '@/lib/api';

export const useRepositoryAnalyses = (repositoryId: string) => {
  return useQuery({
    queryKey: ['repository-analyses', repositoryId],
    queryFn: async () => {
      const { data } = await api.get(`/repositories/${repositoryId}/analyses`);
      return data;
    },
    enabled: !!repositoryId,
  });
};
