import { api } from '../../../lib/api';
import type { SkillGapAnalysis, SkillGapRequest } from '../types';

export const generateSkillGapAnalysis = async (request: SkillGapRequest): Promise<SkillGapAnalysis> => {
  const { data } = await api.post('/skill-gap', request);
  return data.data || data;
};

export const getLatestSkillGapAnalysis = async (): Promise<SkillGapAnalysis | null> => {
  const { data } = await api.get('/skill-gap/latest');
  return data.data || null;
};
