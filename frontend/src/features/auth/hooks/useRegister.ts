import { useMutation, useQueryClient } from '@tanstack/react-query';
import { authApi } from '../services/auth.api';
import type { RegisterCredentials } from '../types';

export const useRegister = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (credentials: RegisterCredentials) => authApi.register(credentials),
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
