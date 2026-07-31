const STORAGE_PREFIX = 'devlens_';

export const storage = {
  getToken: (key: string): string | null => {
    try {
      return localStorage.getItem(`${STORAGE_PREFIX}${key}`);
    } catch {
      return null;
    }
  },

  setToken: (key: string, value: string): void => {
    try {
      localStorage.setItem(`${STORAGE_PREFIX}${key}`, value);
    } catch {
      // Handle quota exceeded or other errors silently in UI
    }
  },

  removeToken: (key: string): void => {
    try {
      localStorage.removeItem(`${STORAGE_PREFIX}${key}`);
    } catch {
      // Silent error handling
    }
  },

  clearAuth: (): void => {
    try {
      localStorage.removeItem(`${STORAGE_PREFIX}access_token`);
      localStorage.removeItem(`${STORAGE_PREFIX}refresh_token`);
      localStorage.removeItem(`${STORAGE_PREFIX}user`);
    } catch {
      // Silent error handling
    }
  },

  getUser: (): import('../types').User | null => {
    try {
      const userStr = localStorage.getItem(`${STORAGE_PREFIX}user`);
      return userStr ? JSON.parse(userStr) : null;
    } catch {
      return null;
    }
  },

  setUser: (user: import('../types').User): void => {
    try {
      localStorage.setItem(`${STORAGE_PREFIX}user`, JSON.stringify(user));
    } catch {
      // Silent error handling
    }
  }
};
