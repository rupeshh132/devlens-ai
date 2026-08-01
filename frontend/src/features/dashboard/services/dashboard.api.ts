import { api } from '@/lib/api';
import type { Repository, Activity } from '../mock';

export interface DashboardSummaryResponse {
  totalRepositories: number;
  activeAnalyses: number;
  completedAnalyses: number;
  failedAnalyses: number;
  averageScore: number | null;
  generatedAt: string;
  recentRepositories: Repository[];
  recentAnalyses: Activity[];
}

export const dashboardApi = {
  getSummary: async (): Promise<DashboardSummaryResponse> => {
    const response = await api.get('/dashboard/summary');
    return response.data;
  },
};
