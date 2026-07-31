import { createContext, useState, useEffect, useCallback } from 'react';
import type { ReactNode } from 'react';
import type { AuthContextType, AuthState, LoginCredentials, RegisterCredentials } from '../types';
import { storage } from '../utils/storage';
import { authService } from '../services/auth.service';

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    accessToken: null,
    refreshToken: null,
    isAuthenticated: false,
    isLoading: true,
  });

  useEffect(() => {
    const initAuth = async () => {
      const accessToken = storage.getToken('access_token');
      const refreshToken = storage.getToken('refresh_token');
      const savedUser = storage.getUser();

      if (accessToken && savedUser) {
        setAuthState({
          user: savedUser,
          accessToken,
          refreshToken,
          isAuthenticated: true,
          isLoading: false,
        });
        
        // Optionally, fetch current user to verify token validity in background
        try {
          const user = await authService.getCurrentUser(accessToken);
          setAuthState(prev => ({ ...prev, user }));
          storage.setUser(user);
        } catch {
          // If token is invalid, we might want to try refreshing it or log out
          storage.clearAuth();
          setAuthState({
            user: null,
            accessToken: null,
            refreshToken: null,
            isAuthenticated: false,
            isLoading: false,
          });
        }
      } else {
        setAuthState(prev => ({ ...prev, isLoading: false }));
      }
    };

    initAuth();
  }, []);

  const login = useCallback(async (credentials: LoginCredentials) => {
    setAuthState(prev => ({ ...prev, isLoading: true }));
    try {
      const { user, accessToken, refreshToken } = await authService.login(credentials);
      
      storage.setToken('access_token', accessToken);
      storage.setToken('refresh_token', refreshToken);
      storage.setUser(user);
      
      setAuthState({
        user,
        accessToken,
        refreshToken,
        isAuthenticated: true,
        isLoading: false,
      });
    } catch (error) {
      setAuthState(prev => ({ ...prev, isLoading: false }));
      throw error;
    }
  }, []);

  const register = useCallback(async (data: RegisterCredentials) => {
    setAuthState(prev => ({ ...prev, isLoading: true }));
    try {
      const { user, accessToken, refreshToken } = await authService.register(data);
      
      storage.setToken('access_token', accessToken);
      storage.setToken('refresh_token', refreshToken);
      storage.setUser(user);
      
      setAuthState({
        user,
        accessToken,
        refreshToken,
        isAuthenticated: true,
        isLoading: false,
      });
    } catch (error) {
      setAuthState(prev => ({ ...prev, isLoading: false }));
      throw error;
    }
  }, []);

  const logout = useCallback(async () => {
    setAuthState(prev => ({ ...prev, isLoading: true }));
    try {
      await authService.logout();
    } finally {
      storage.clearAuth();
      setAuthState({
        user: null,
        accessToken: null,
        refreshToken: null,
        isAuthenticated: false,
        isLoading: false,
      });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ ...authState, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
