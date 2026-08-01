import { api } from '@/lib/api';
import type { ReportMetadata } from '../types/analysis';

export const reportApi = {
  getReport: async (jobId: string): Promise<ReportMetadata> => {
    const response = await api.get(`/analyses/${jobId}/report`);
    return response.data;
  },

  exportPdf: async (jobId: string): Promise<Blob> => {
    const response = await api.get(`/analyses/${jobId}/report/pdf`, {
      responseType: 'blob',
    });
    return response.data;
  }
};
