import { useMutation, useQueryClient } from '@tanstack/react-query';
import { repositoryApi } from '../services/repository.api';
import type { CreateRepositoryPayload } from '../services/repository.api';
import { toast } from 'sonner';

export const useCreateRepository = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: CreateRepositoryPayload) => repositoryApi.createRepository(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['repositories'] });
      toast.success('Repository added successfully');
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.message || 'Failed to add repository');
    },
  });
};
