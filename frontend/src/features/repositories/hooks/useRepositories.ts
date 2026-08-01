import { useQuery } from '@tanstack/react-query';
import { repositoryApi } from '../services/repository.api';

export const useRepositories = () => {
  return useQuery({
    queryKey: ['repositories'],
    queryFn: () => repositoryApi.getRepositories(),
  });
};
