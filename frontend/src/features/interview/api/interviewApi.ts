import { api } from '../../../lib/api';
import type { InterviewSession, InterviewRequest } from '../types';

export const generateInterview = async (request: InterviewRequest): Promise<InterviewSession> => {
  const { data } = await api.post('/interviews', request);
  return data.data;
};

export const getLatestInterview = async (): Promise<InterviewSession | null> => {
  const { data } = await api.get('/interviews/latest');
  return data.data;
};
