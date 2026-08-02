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

const mapBackendToFrontend = (data: unknown): RepositoryDetails => {
  return {
    id: (data as any).id,
    name: (data as any).name,
    owner: (data as any).owner,
    visibility: (data as any).visibility === 'PUBLIC' ? 'Public' : 'Private',
    language: 'Java', // Default or parse from backend if added
    stars: 0,
    lastUpdated: (data as any).updatedAt || new Date().toISOString(),
    lastAnalysis: 'N/A',
    score: 100,
    status: ((data as any).status === 'ACTIVE' ? 'Healthy' : (data as any).status === 'INACTIVE' ? 'Warning' : 'Critical') as RepositoryStatus,
    description: (data as any).url || '',
    branches: 1,
    isFavorite: false,
    ...(data as Record<string, unknown>), // Keep raw data accessible
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
