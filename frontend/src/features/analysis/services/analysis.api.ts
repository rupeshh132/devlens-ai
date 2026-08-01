/* eslint-disable @typescript-eslint/no-explicit-any */
import { api } from '../../../lib/api';
import type { Analysis, AnalysisHistoryItem, AnalysisStatus } from '../types/analysis';


const mapBackendStatus = (status: string): AnalysisStatus => {
  switch (status) {
    case 'PENDING': return 'QUEUED';
    case 'IN_PROGRESS': return 'STATIC_ANALYSIS'; // Approximate mapping
    case 'COMPLETED': return 'COMPLETED';
    case 'FAILED': return 'FAILED';
    case 'CANCELLED': return 'CANCELLED';
    default: return 'IDLE';
  }
};

const mapBackendToAnalysis = (data: any): Analysis => {
  return {
    scores: [], findings: [], recommendations: [], overallScore: 0, commitHash: "HEAD",
    id: data.id,
    repositoryId: data.repositoryId,
    status: mapBackendStatus(data.status),
    startedAt: data.startedAt || new Date().toISOString(),
    completedAt: data.completedAt,
    // Add real mapping when backend supports findings/scores etc.
  };
};

const mapBackendToHistory = (data: any): AnalysisHistoryItem => {
  return {
    id: data.id,
    date: data.createdAt || new Date().toISOString(),
    overallScore: 85, // Mock default
    commitHash: 'HEAD', // Mock default
    status: mapBackendStatus(data.status),
  };
};

export const analysisApi = {
  startAnalysis: async (repositoryId: string): Promise<Analysis> => {
    const { data } = await api.post('/analyses/start', { repositoryId });
    return mapBackendToAnalysis(data.data || data);
  },

  getAnalysisStatus: async (jobId: string): Promise<Analysis> => {
    const { data } = await api.get(`/analyses/${jobId}/status`);
    return mapBackendToAnalysis(data.data || data);
  },

  getAnalysisResult: async (jobId: string): Promise<Analysis> => {
    const { data } = await api.get(`/analyses/${jobId}/result`);
    return mapBackendToAnalysis(data.data || data);
  },

  getAnalysisHistory: async (repositoryId: string): Promise<AnalysisHistoryItem[]> => {
    const { data } = await api.get(`/repositories/${repositoryId}/analyses`);
    const items = data.data || data || [];
    return items.map(mapBackendToHistory);
  },

  cancelAnalysis: async (jobId: string): Promise<void> => {
    await api.post(`/analyses/${jobId}/cancel`);
  },
};
