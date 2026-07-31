import type { User, LoginCredentials, RegisterCredentials } from '../types';

const MOCK_USER: User = {
  id: 'usr_123456789',
  fullName: 'Alex Developer',
  email: 'alex@example.com',
  avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
  role: 'USER',
};

const MOCK_DELAY = 800;

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const authService = {
  async login(credentials: LoginCredentials): Promise<{ user: User; accessToken: string; refreshToken: string }> {
    await delay(MOCK_DELAY);
    
    // Mock validation
    if (credentials.email !== 'alex@example.com') {
      throw new Error('Invalid email or password');
    }
    
    return {
      user: MOCK_USER,
      accessToken: 'mock_access_token_' + Date.now(),
      refreshToken: 'mock_refresh_token_' + Date.now(),
    };
  },

  async register(data: RegisterCredentials): Promise<{ user: User; accessToken: string; refreshToken: string }> {
    await delay(MOCK_DELAY);
    
    const newUser: User = {
      ...MOCK_USER,
      fullName: data.fullName,
      email: data.email,
    };
    
    return {
      user: newUser,
      accessToken: 'mock_access_token_' + Date.now(),
      refreshToken: 'mock_refresh_token_' + Date.now(),
    };
  },

  async logout(): Promise<void> {
    await delay(MOCK_DELAY / 2);
    // In a real app, you might call a /logout endpoint to invalidate tokens
  },

  async getCurrentUser(accessToken: string): Promise<User> {
    await delay(MOCK_DELAY / 2);
    
    if (!accessToken) {
      throw new Error('Unauthorized');
    }
    
    return MOCK_USER;
  },

  async refreshToken(oldRefreshToken: string): Promise<{ accessToken: string; refreshToken: string }> {
    await delay(MOCK_DELAY / 2);
    
    if (!oldRefreshToken) {
      throw new Error('No refresh token provided');
    }
    
    return {
      accessToken: 'mock_access_token_' + Date.now(),
      refreshToken: 'mock_refresh_token_' + Date.now(),
    };
  }
};
