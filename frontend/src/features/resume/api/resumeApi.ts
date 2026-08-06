import { httpClient } from '../../../http/client';
import type { Resume } from '../types';

export const uploadResume = async (file: File): Promise<Resume> => {
  const formData = new FormData();
  formData.append('file', file);
  
  const response = await httpClient.post<Resume>('/resumes', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};

export const getMyLatestResume = async (): Promise<Resume | null> => {
  try {
    const response = await httpClient.get<Resume>('/resumes/me');
    return response.data;
  } catch (error: any) {
    if (error.response?.status === 404 || error.response?.status === 500) {
      return null;
    }
    throw error;
  }
};
