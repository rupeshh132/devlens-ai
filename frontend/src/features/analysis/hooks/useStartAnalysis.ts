/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useMutation } from '@tanstack/react-query';
import { analysisApi } from '../services/analysis.api';
import { toast } from 'sonner';

export const useStartAnalysis = () => {
  return useMutation({
    mutationFn: (repositoryId: string) => analysisApi.startAnalysis(repositoryId),
    onSuccess: () => {
      toast.success('Analysis started successfully');
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.message || 'Failed to start analysis');
    },
  });
};
