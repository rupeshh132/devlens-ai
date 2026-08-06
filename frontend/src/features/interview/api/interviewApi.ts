import { api } from '../../../lib/api';
import type { InterviewSession, InterviewRequest } from '../types';

export const generateInterview = async (request: InterviewRequest): Promise<InterviewSession> => {
  const { data } = await api.post('/interviews', request);
  return data.data;
};

export const getLatestInterview = async (): Promise<InterviewSession | null> => {
  try {
    const { data } = await api.get('/interviews/latest');
    return data.data;
  } catch (error: any) {
    if (error.response?.status === 404 || error.response?.status === 500) {
      return null;
    }
    throw error;
  }
};
