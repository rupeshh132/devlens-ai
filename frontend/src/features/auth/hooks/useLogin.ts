import { useMutation, useQueryClient } from '@tanstack/react-query';
import { authApi } from '../services/auth.api';
import type { LoginCredentials } from '../types';

export const useLogin = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (credentials: LoginCredentials) => authApi.login(credentials),
    onSuccess: (data) => {
      localStorage.setItem('devlens_access_token', data.accessToken);
      if (data.user) {
        queryClient.setQueryData(['currentUser'], data.user);
      } else {
        queryClient.invalidateQueries({ queryKey: ['currentUser'] });
      }
    },
  });
};
