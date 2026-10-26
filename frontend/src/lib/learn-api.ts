import axios from 'axios';

// Ensure base URL cleanly resolves to /api/v1/learn
const rawApiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8081/api/v1';
const baseUrlClean = rawApiUrl.replace(/\/+$/, '');
const learnBaseUrl = baseUrlClean.endsWith('/learn')
  ? baseUrlClean
  : baseUrlClean.endsWith('/api/v1')
  ? `${baseUrlClean}/learn`
  : `${baseUrlClean}/api/v1/learn`;

export const learnApi = axios.create({
  baseURL: learnBaseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

learnApi.interceptors.request.use((config) => {
  const token =
    localStorage.getItem('learn_token') ||
    localStorage.getItem('token') ||
    localStorage.getItem('preplens_access_token') ||
    sessionStorage.getItem('token');

  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
