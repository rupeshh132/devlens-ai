import { useMutation, useQueryClient } from '@tanstack/react-query';
import { authApi } from '../services/auth.api';

export const useLogout = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => authApi.logout(),
    onSettled: () => {
      localStorage.removeItem('preplens_access_token');
      localStorage.removeItem('learn_study_plan');
      localStorage.removeItem('learn_exam_goal');
      localStorage.removeItem('learn_subscription_plan');
      queryClient.setQueryData(['currentUser'], null);
      queryClient.clear();
      window.location.href = '/login';
    },
  });
};
