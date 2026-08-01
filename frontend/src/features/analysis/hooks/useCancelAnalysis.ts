/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from '@tanstack/react-query';
import { analysisApi } from '../services/analysis.api';
import { toast } from 'sonner';

export const useCancelAnalysis = () => {
  return useMutation({
    mutationFn: (jobId: string) => analysisApi.cancelAnalysis(jobId),
    onSuccess: () => {
      toast.success('Analysis cancelled successfully');
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.message || 'Failed to cancel analysis');
    },
  });
};
