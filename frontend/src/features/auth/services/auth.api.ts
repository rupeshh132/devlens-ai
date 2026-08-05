import { api } from '../../../lib/api';
import type { User, LoginCredentials, RegisterCredentials } from '../types';

export interface AuthResponse {
  accessToken: string;
  user?: User; // Depending on what backend returns
}

export const authApi = {
  login: async (credentials: LoginCredentials): Promise<{ user: User; accessToken: string }> => {
    const { data } = await api.post('/auth/login', credentials);
    // Assuming backend ApiResponse wraps the data
    const payload = data.data || data;
    return payload;
  },

  register: async (credentials: RegisterCredentials): Promise<{ user: User; accessToken: string }> => {
    // Split fullName into firstName and lastName
    const nameParts = credentials.fullName.split(' ');
    const firstName = nameParts[0];
    const lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : ' ';
    
    const { data } = await api.post('/auth/register', {
      firstName,
      lastName,
      email: credentials.email,
      password: credentials.password
    });
    const payload = data.data || data;
    return payload;
  },

  logout: async (): Promise<void> => {
    await api.post('/auth/logout');
  },

  getCurrentUser: async (): Promise<User> => {
    const { data } = await api.get('/users/me');
    return data.data || data;
  }
};
