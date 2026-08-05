import { useMemo, useCallback } from 'react';
import type { ReactNode } from 'react';
import type { LoginCredentials, RegisterCredentials } from '../types';
import { useCurrentUser } from '../hooks/useCurrentUser';
import { useLogin } from '../hooks/useLogin';
import { useRegister } from '../hooks/useRegister';
import { useLogout } from '../hooks/useLogout';

import { AuthContext } from './AuthContext';

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { data: user, isLoading: isUserLoading } = useCurrentUser();
  const { mutateAsync: loginMutation, isPending: isLoginLoading } = useLogin();
  const { mutateAsync: registerMutation, isPending: isRegisterLoading } = useRegister();
  const { mutateAsync: logoutMutation, isPending: isLogoutLoading } = useLogout();

  const login = useCallback(async (credentials: LoginCredentials) => {
    await loginMutation(credentials);
  }, [loginMutation]);

  const register = useCallback(async (data: RegisterCredentials) => {
    await registerMutation(data);
  }, [registerMutation]);

  const logout = useCallback(async () => {
    await logoutMutation();
  }, [logoutMutation]);

  const isLoading = isUserLoading || isLoginLoading || isRegisterLoading || isLogoutLoading;
  const isAuthenticated = !!user;

  const value = useMemo(() => ({
    user: user || null,
    accessToken: localStorage.getItem('devlens_access_token'),
    refreshToken: null, // Removed from localStorage due to HttpOnly cookie
    isAuthenticated,
    isLoading,
    login,
    register,
    logout,
  }), [user, isAuthenticated, isLoading, login, register, logout]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
