import { useMutation, useQueryClient } from '@tanstack/react-query';
import { repositoryApi } from '../services/repository.api';
import type { UpdateRepositoryPayload } from '../services/repository.api';
import { toast } from 'sonner';

export const useUpdateRepository = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, payload }: { id: string; payload: UpdateRepositoryPayload }) => 
      repositoryApi.updateRepository(id, payload),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['repositories'] });
      queryClient.setQueryData(['repository', data.id], data);
      toast.success('Repository updated successfully');
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.message || 'Failed to update repository');
    },
  });
};
