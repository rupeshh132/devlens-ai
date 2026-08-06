/* eslint-disable @typescript-eslint/no-explicit-any */
import { api } from '../../../lib/api';
import type { RepositoryDetails, RepositoryStatus } from '../types';

export interface CreateRepositoryPayload {
  name: string;
  owner: string;
  url: string;
  branch: string;
  visibility: 'PUBLIC' | 'PRIVATE';
  provider: 'GITHUB';
}

export interface UpdateRepositoryPayload {
  name?: string;
  branch?: string;
  visibility?: 'PUBLIC' | 'PRIVATE';
  status?: 'ACTIVE' | 'INACTIVE' | 'DELETED';
}

const formatDate = (isoString: string | null | undefined): string => {
  if (!isoString) return 'N/A';
  try {
    return new Date(isoString).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  } catch {
    return 'N/A';
  }
};

const mapBackendToFrontend = (data: unknown): RepositoryDetails => {
  const raw = data as any;
  const backendStatus: string = raw.status || 'ACTIVE';
  const statusMap: Record<string, RepositoryStatus> = {
    ACTIVE: 'Healthy',
    INACTIVE: 'Warning',
    DELETED: 'Critical',
  };

  return {
    id: raw.id,
    name: raw.name,
    owner: raw.owner,
    visibility: raw.visibility === 'PUBLIC' ? 'Public' : 'Private',
    language: raw.language || 'Unknown',
    stars: raw.stars ?? 0,
    lastUpdated: formatDate(raw.updatedAt),
    lastAnalysis: formatDate(raw.lastAnalyzedAt),
    score: raw.lastAnalysisScore ?? 0,
    status: (statusMap[backendStatus] ?? 'Critical') as RepositoryStatus,
    description: raw.description || '',
    branches: raw.branches ?? 1,
    isFavorite: raw.isFavorite ?? false,
    url: raw.url,
    branch: raw.branch,
  };
};

export const repositoryApi = {
  getRepositories: async (): Promise<RepositoryDetails[]> => {
    const { data } = await api.get('/repositories');
    const items = data.content || data.data?.content || data.data || (Array.isArray(data) ? data : []);
    return items.map(mapBackendToFrontend);
  },

  getRepository: async (id: string): Promise<RepositoryDetails> => {
    const { data } = await api.get(`/repositories/${id}`);
    return mapBackendToFrontend(data.data || data);
  },

  createRepository: async (payload: CreateRepositoryPayload): Promise<RepositoryDetails> => {
    const { data } = await api.post('/repositories', payload);
    return mapBackendToFrontend(data.data || data);
  },

  updateRepository: async (id: string, payload: UpdateRepositoryPayload): Promise<RepositoryDetails> => {
    const { data } = await api.patch(`/repositories/${id}`, payload);
    return mapBackendToFrontend(data.data || data);
  },

  deleteRepository: async (id: string): Promise<void> => {
    await api.delete(`/repositories/${id}`);
  },

  syncRepository: async (id: string): Promise<string> => {
    // This calls the analysis start endpoint and returns the jobId
    const { data } = await api.post('/analyses/start', { repositoryId: id });
    return data.id || data.data?.id;
  }
};
