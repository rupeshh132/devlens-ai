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
  } catch (error) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const err = error as any;
    if (err.response?.status === 404 || err.response?.status === 500) {
      return null;
    }
    throw error;
  }
};
