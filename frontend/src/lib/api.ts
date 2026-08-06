/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';

// 60 second timeout — Render free plan can take up to 50s to wake up.
// This prevents premature timeout errors while the server is spinning up.
export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '/api/v1',
  withCredentials: true,
  timeout: 60000,
});

// ─── Request Interceptor: Attach JWT to every request ────────────────────────
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('devlens_access_token');
  if (token && config.headers) {
    if (typeof config.headers.set === 'function') {
      config.headers.set('Authorization', `Bearer ${token}`);
    } else {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

// ─── Token Refresh Queue ──────────────────────────────────────────────────────
let isRefreshing = false;
let failedQueue: Array<{
  resolve: (token: string) => void;
  reject: (err: any) => void;
}> = [];

const processQueue = (error: any, token: string | null = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else if (token) {
      prom.resolve(token);
    }
  });
  failedQueue = [];
};

// ─── Force Logout: clear all local state and redirect to /login ───────────────
const forceLogout = () => {
  localStorage.removeItem('devlens_access_token');
  localStorage.removeItem('devlens_user');
  // Hard redirect to login — clears all in-memory React state too
  window.location.href = '/login';
};

// ─── Helper: should we retry for server wakeup? ───────────────────────────────
// Render free plan responds with 502/503/504 while spinning up.
const isServerWakingUp = (status: number | undefined): boolean => {
  return status === 502 || status === 503 || status === 504;
};

// ─── Response Interceptor ─────────────────────────────────────────────────────
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    const status = error.response?.status;

    // ── Handle Render server wake-up (502/503/504): retry once after 3 seconds ──
    if (isServerWakingUp(status) && !originalRequest._serverRetry) {
      originalRequest._serverRetry = true;
      await new Promise((resolve) => setTimeout(resolve, 3000));
      return api(originalRequest);
    }

    // ── Handle 401: try to refresh the token ─────────────────────────────────
    if (
      status === 401 &&
      !originalRequest._retry &&
      originalRequest.url !== '/auth/login' &&
      originalRequest.url !== '/auth/refresh'
    ) {
      // If a refresh is already in flight, queue this request
      if (isRefreshing) {
        return new Promise(function (resolve, reject) {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            originalRequest.headers.Authorization = `Bearer ${token}`;
            return api(originalRequest);
          })
          .catch((err) => {
            return Promise.reject(err);
          });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const response = await axios.post(
          `${api.defaults.baseURL}/auth/refresh`,
          {},
          { withCredentials: true, timeout: 60000 }
        );
        const accessToken =
          response.data.data?.accessToken || response.data.accessToken;

        if (accessToken) {
          localStorage.setItem('devlens_access_token', accessToken);
          processQueue(null, accessToken);
          originalRequest.headers.Authorization = `Bearer ${accessToken}`;
          return api(originalRequest);
        }

        // Refresh returned no token — session is dead
        processQueue(new Error('No access token returned'));
        forceLogout();
        return Promise.reject(new Error('Session expired. Please log in again.'));
      } catch (refreshError) {
        // Refresh call itself failed — session is dead
        processQueue(refreshError);
        forceLogout();
        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);
