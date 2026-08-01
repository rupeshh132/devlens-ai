/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { repositoryApi } from '../services/repository.api';
import { toast } from 'sonner';

export const useDeleteRepository = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => repositoryApi.deleteRepository(id),
    onSuccess: (_, id) => {
      queryClient.invalidateQueries({ queryKey: ['repositories'] });
      queryClient.removeQueries({ queryKey: ['repository', id] });
      toast.success('Repository deleted successfully');
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.message || 'Failed to delete repository');
    },
  });
};
