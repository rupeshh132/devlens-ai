import { useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '@/lib/api';

export const useToggleFavorite = (repositoryId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      const { data } = await api.patch(`/repositories/${repositoryId}/favorite`);
      return data;
    },
    onSuccess: () => {
      // Invalidate both the single repo and the list
      queryClient.invalidateQueries({ queryKey: ['repository', repositoryId] });
      queryClient.invalidateQueries({ queryKey: ['repositories'] });
    },
  });
};
