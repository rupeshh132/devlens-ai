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
  } catch (error) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const err = error as any;
    if (err.response?.status === 404 || err.response?.status === 500) {
      return null;
    }
    throw error;
  }
};
