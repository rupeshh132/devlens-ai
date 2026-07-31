import type { Analysis, AnalysisHistoryItem } from '../types/analysis';
import { mockAnalysis, mockHistory } from '../mock';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const analysisService = {
  getAnalysis: async (id: string): Promise<Analysis> => {
    await delay(500);
    // Simulate finding logic
    return { ...mockAnalysis, id };
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  startAnalysis: async (_repositoryId: string): Promise<{ jobId: string }> => {
    await delay(1000);
    return { jobId: `job-${Math.random().toString(36).substr(2, 9)}` };
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  cancelAnalysis: async (_jobId: string): Promise<void> => {
    await delay(500);
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  downloadReport: async (_analysisId: string): Promise<Blob> => {
    await delay(1500);
    return new Blob(['Mock PDF Content'], { type: 'application/pdf' });
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getHistory: async (_repositoryId: string): Promise<AnalysisHistoryItem[]> => {
    await delay(500);
    return mockHistory;
  },
};
