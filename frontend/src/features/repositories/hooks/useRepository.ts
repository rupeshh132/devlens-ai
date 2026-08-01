import { useQuery } from '@tanstack/react-query';
import { repositoryApi } from '../services/repository.api';

export const useRepository = (id: string) => {
  return useQuery({
    queryKey: ['repository', id],
    queryFn: () => repositoryApi.getRepository(id),
    enabled: !!id,
  });
};
