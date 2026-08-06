import axios from 'axios';
import type { AxiosResponse, InternalAxiosRequestConfig, AxiosError } from 'axios';

// 60 second timeout — matches Render free plan spin-up time
export const httpClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
  timeout: 60000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// ─── Request Interceptor: Attach JWT ─────────────────────────────────────────
httpClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem('devlens_access_token');
    if (token && config.headers) {
      if (typeof config.headers.set === 'function') {
        config.headers.set('Authorization', `Bearer ${token}`);
      } else {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// ─── Response Interceptor: Handle Render server wakeup ───────────────────────
httpClient.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & { _serverRetry?: boolean };
    const status = error.response?.status;

    // Retry once on 502/503/504 (Render free plan spin-up)
    if ((status === 502 || status === 503 || status === 504) && !originalRequest._serverRetry) {
      originalRequest._serverRetry = true;
      await new Promise((resolve) => setTimeout(resolve, 3000));
      return httpClient(originalRequest);
    }

    return Promise.reject(error);
  }
);
