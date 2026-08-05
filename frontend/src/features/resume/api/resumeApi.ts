import { httpClient } from '../../../http/client';
import { Resume } from '../types';

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

export const getMyLatestResume = async (): Promise<Resume> => {
  const response = await httpClient.get<Resume>('/resumes/me');
  return response.data;
};
