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
  timeout: 25000,
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

// Shared deduplicated profile cache to prevent concurrent/repeated /profile storms across layout & pages
const PROFILE_CACHE_TTL_MS = 30_000;
let cachedProfileData: any = null;
let cachedProfileExpiresAt = 0;
let cachedProfileToken: string | null = null;
let inFlightProfilePromise: Promise<any> | null = null;

const PROFILE_SNAPSHOT_KEY = 'learn_profile_snapshot_v1';

export function readCachedLearnProfileSnapshot(): any | null {
  try {
    const token =
      localStorage.getItem('learn_token') ||
      localStorage.getItem('token') ||
      localStorage.getItem('preplens_access_token') ||
      sessionStorage.getItem('token');
    if (!token) return null;
    const raw = localStorage.getItem(PROFILE_SNAPSHOT_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (parsed && parsed.token === token && parsed.data) {
      return parsed.data;
    }
  } catch {
    // ignore corrupted snapshot
  }
  return null;
}

export function invalidateLearnProfileCache() {
  cachedProfileData = null;
  cachedProfileExpiresAt = 0;
  inFlightProfilePromise = null;
}

export async function fetchLearnProfileCached(forceRefresh = false): Promise<any> {
  const token =
    localStorage.getItem('learn_token') ||
    localStorage.getItem('token') ||
    localStorage.getItem('preplens_access_token') ||
    sessionStorage.getItem('token');

  if (!token) {
    invalidateLearnProfileCache();
    return null;
  }

  if (cachedProfileToken !== token) {
    invalidateLearnProfileCache();
    cachedProfileToken = token;
  }

  if (!forceRefresh && cachedProfileData && Date.now() < cachedProfileExpiresAt) {
    return cachedProfileData;
  }

  if (inFlightProfilePromise) {
    return inFlightProfilePromise;
  }

  inFlightProfilePromise = learnApi
    .get('/profile')
    .then((res) => {
      cachedProfileData = res.data;
      cachedProfileExpiresAt = Date.now() + PROFILE_CACHE_TTL_MS;
      try {
        localStorage.setItem(PROFILE_SNAPSHOT_KEY, JSON.stringify({ token, data: res.data }));
      } catch {
        // ignore storage quota errors
      }
      return res.data;
    })
    .finally(() => {
      inFlightProfilePromise = null;
    });

  return inFlightProfilePromise;
}
