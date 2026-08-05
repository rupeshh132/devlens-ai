export type Role = 'ADMIN' | 'USER';

export interface User {
  id: string;
  fullName?: string;
  firstName?: string;
  lastName?: string;
  email: string;
  avatar?: string;
  role: Role;
  points?: number;
  badges?: string;
}

export interface AuthState {
  user: User | null;
  accessToken: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export interface AuthContextType extends AuthState {
  login: (credentials: LoginCredentials) => Promise<void>;
  register: (data: RegisterCredentials) => Promise<void>;
  logout: () => void;
}

export interface LoginCredentials {
  email: string;
  password?: string;
}

export interface RegisterCredentials {
  fullName: string;
  email: string;
  password?: string;
}
