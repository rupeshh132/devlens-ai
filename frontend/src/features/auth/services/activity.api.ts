import { api } from '@/lib/api';

export interface ActivityDto {
  id: string;
  title: string;
  date: string;
  type: 'resume' | 'analysis' | 'interview' | 'roadmap';
}

export const getRecentActivities = async (): Promise<ActivityDto[]> => {
  try {
    const { data } = await api.get('/user/activities');
    return data.data || [];
  } catch (error) {
    console.error('Failed to fetch activities:', error);
    return [];
  }
};
