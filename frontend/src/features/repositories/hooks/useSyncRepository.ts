import { useMutation } from '@tanstack/react-query';
import { repositoryApi } from '../services/repository.api';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

export const useSyncRepository = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (id: string) => repositoryApi.syncRepository(id),
    onSuccess: (jobId) => {
      toast.success('Analysis started! Navigating to report...');
      if (jobId) {
        navigate(`/analysis/${jobId}`);
      }
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.message || 'Failed to start repository analysis');
    },
  });
};
