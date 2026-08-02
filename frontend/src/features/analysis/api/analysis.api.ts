import { api } from '@/lib/api';
import type { AnalysisReport } from '../types';

export const analysisApi = {
  getAnalysisReport: async (jobId: string): Promise<AnalysisReport> => {
    const { data } = await api.get(`/analyses/${jobId}/detailed-report`);
    return data;
  }
};
