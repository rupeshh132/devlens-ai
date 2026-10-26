import { api } from '../../../lib/api';
import type { Resume } from '../types';

export const uploadResume = async (file: File): Promise<Resume> => {
  const formData = new FormData();
  formData.append('file', file);
  
  const response = await api.post<Resume>('/resumes', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};

export const getMyLatestResume = async (): Promise<Resume | null> => {
  try {
    const response = await api.get<Resume>('/resumes/me');
    return response.data;
  } catch (error) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const err = error as any;
    if (err.response?.status === 404 || err.response?.status === 500) {
      return null;
    }
    throw error;
  }
};
