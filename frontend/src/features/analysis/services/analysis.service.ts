import type { Analysis, AnalysisHistoryItem } from '../types/analysis';
import { mockAnalysis, mockHistory } from '../mock';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const analysisService = {
  getAnalysis: async (id: string): Promise<Analysis> => {
    await delay(500);
    // Simulate finding logic
    return { ...mockAnalysis, id };
  },

  startAnalysis: async (_repositoryId: string): Promise<{ jobId: string }> => {
    console.log(_repositoryId);
    await delay(1000);
    return { jobId: `job-${Math.random().toString(36).substr(2, 9)}` };
  },

  cancelAnalysis: async (_jobId: string): Promise<void> => {
    console.log(_jobId);
    await delay(500);
  },

  downloadReport: async (_analysisId: string): Promise<Blob> => {
    console.log(_analysisId);
    await delay(1500);
    return new Blob(['Mock PDF Content'], { type: 'application/pdf' });
  },

  getHistory: async (_repositoryId: string): Promise<AnalysisHistoryItem[]> => {
    console.log(_repositoryId);
    await delay(500);
    return mockHistory;
  },
};
