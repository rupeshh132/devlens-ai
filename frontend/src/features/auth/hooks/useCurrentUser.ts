import { useQuery } from '@tanstack/react-query';
import { authApi } from '../services/auth.api';

export const useCurrentUser = () => {
  // Only fetch if a token exists — prevents infinite redirect loop on login page
  const hasToken = !!localStorage.getItem('devlens_access_token');

  return useQuery({
    queryKey: ['currentUser'],
    queryFn: () => authApi.getCurrentUser(),
    enabled: hasToken,
    retry: 1,
    retryDelay: 3000,
    refetchOnWindowFocus: false,
    staleTime: 5 * 60 * 1000,
    refetchIntervalInBackground: false,
  });
};
