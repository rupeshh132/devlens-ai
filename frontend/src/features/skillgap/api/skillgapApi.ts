import { api } from '../../../lib/api';
import type { SkillGapAnalysis, SkillGapRequest } from '../types';

export const generateSkillGapAnalysis = async (request: SkillGapRequest): Promise<SkillGapAnalysis> => {
  const { data } = await api.post('/skill-gap', request);
  return data.data || data;
};

export const getLatestSkillGapAnalysis = async (): Promise<SkillGapAnalysis | null> => {
  try {
    const { data } = await api.get('/skill-gap/latest');
    return data.data || null;
  } catch (error: any) {
    if (error.response?.status === 404 || error.response?.status === 500) {
      return null;
    }
    throw error;
  }
};
