import { useMutation, useQueryClient } from '@tanstack/react-query';
import { authApi } from '../services/auth.api';

export const useLogout = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => authApi.logout(),
    onSettled: () => {
      localStorage.removeItem('devlens_access_token');
      queryClient.setQueryData(['currentUser'], null);
      queryClient.clear();
      window.location.href = '/login';
    },
  });
};
