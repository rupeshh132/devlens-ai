import { useQuery } from '@tanstack/react-query';
import { api } from '@/lib/api';

export interface CommitInfo {
  sha: string;
  message: string;
  author: string;
  date: string | null;
}

export const useRepositoryCommits = (repositoryId: string) => {
  return useQuery<CommitInfo[]>({
    queryKey: ['repository-commits', repositoryId],
    queryFn: async () => {
      const { data } = await api.get(`/repositories/${repositoryId}/commits?limit=5`);
      return data as CommitInfo[];
    },
    enabled: !!repositoryId,
    staleTime: 5 * 60 * 1000, // 5 minutes cache
    retry: 1,
  });
};
