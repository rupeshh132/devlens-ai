/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from '@tanstack/react-query';
import { repositoryApi } from '../services/repository.api';
import { toast } from 'sonner';

export const useSyncRepository = () => {
  return useMutation({
    mutationFn: (id: string) => repositoryApi.syncRepository(id),
    onSuccess: () => {
      toast.success('Repository analysis started');
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.message || 'Failed to start repository analysis');
    },
  });
};
