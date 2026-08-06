import { useQuery } from '@tanstack/react-query';
import { authApi } from '../services/auth.api';

export const useCurrentUser = () => {
  return useQuery({
    queryKey: ['currentUser'],
    queryFn: () => authApi.getCurrentUser(),
    // Retry once with a 3s delay to handle Render server wakeup (50s spin-up).
    // The api.ts interceptor already handles 502/503/504 at the HTTP level;
    // this retry handles cases where the server is up but returns an error
    // for the first request due to slow cold start.
    retry: 1,
    retryDelay: 3000,
    refetchOnWindowFocus: false,
    // Cache user for 5 minutes so token expiry doesn't cause repeated /me calls
    staleTime: 5 * 60 * 1000,
    // Don't refetch in background — reduces unnecessary auth chatter
    refetchIntervalInBackground: false,
  });
};
