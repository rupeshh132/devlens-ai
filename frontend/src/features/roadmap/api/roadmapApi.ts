import { api } from '../../../lib/api';
import type { Roadmap, RoadmapRequest } from '../types';

export const generateRoadmap = async (request: RoadmapRequest): Promise<Roadmap> => {
  const { data } = await api.post('/roadmaps', request);
  return data.data || data;
};

export const getLatestRoadmap = async (): Promise<Roadmap | null> => {
  try {
    const { data } = await api.get('/roadmaps/latest');
    return data.data || null;
  } catch (error: any) {
    if (error.response?.status === 404 || error.response?.status === 500) {
      return null;
    }
    throw error;
  }
};
