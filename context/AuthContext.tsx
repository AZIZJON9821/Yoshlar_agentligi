import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { customAxios } from '../api/instances/codeMuseum';

interface User {
  id: string;
  username: string;
  email: string;
  github_username?: string;
  avatar?: string;
}

interface LoginRequest {
  username: string;
  password: string;
}

interface RegisterRequest {
  username: string;
  email: string;
  password: string;
  github_username: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
  register: (username: string, email: string, password: string, github_username: string) => Promise<void>;
  deleteUser: (id: string) => Promise<void>;
  getAllUsers: () => Promise<User[]>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const isAuthenticated = !!user;

  useEffect(() => {
    // Check for existing user session
    const checkAuth = async () => {
      try {
        const savedUser = localStorage.getItem('user');
        if (savedUser) {
          setUser(JSON.parse(savedUser));
        }
      } catch (error) {
        console.error('Error checking authentication:', error);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = async (username: string, password: string) => {
    setIsLoading(true);
    try {
      const response = await customAxios.post('/auth/login', {
        username,
        password
      });

      if (response.data) {
        const userData: User = {
          id: response.data.id || '1',
          username: response.data.username || username,
          email: response.data.email || `${username}@example.com`,
          github_username: response.data.github_username,
          avatar: response.data.avatar
        };
        
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
      } else {
        throw new Error('Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const register = async (username: string, email: string, password: string, github_username: string) => {
    setIsLoading(true);
    try {
      const response = await customAxios.post('/auth/register', {
        username,
        email,
        password,
        github_username
      });

      if (response.data) {
        const userData: User = {
          id: response.data.id || '1',
          username: response.data.username || username,
          email: response.data.email || email,
          github_username: response.data.github_username || github_username,
          avatar: response.data.avatar
        };
        
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
      } else {
        throw new Error('Registration failed');
      }
    } catch (error) {
      console.error('Registration error:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const deleteUser = async (id: string) => {
    try {
      await customAxios.delete(`/auth/${id}`);
      
      // If deleting current user, logout
      if (user?.id === id) {
        logout();
      }
    } catch (error) {
      console.error('Delete user error:', error);
      throw error;
    }
  };

  const getAllUsers = async (): Promise<User[]> => {
    try {
      const response = await customAxios.get('/auth');
      return response.data || [];
    } catch (error) {
      console.error('Get all users error:', error);
      throw error;
    }
  };

  const value: AuthContextType = {
    user,
    isAuthenticated,
    isLoading,
    login,
    logout,
    register,
    deleteUser,
    getAllUsers,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}; 