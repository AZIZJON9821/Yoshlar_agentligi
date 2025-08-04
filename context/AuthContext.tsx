import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { customAxios } from '../api/instances/codeMuseum';
import { setCookie } from 'cookies-next/client';

interface User {
  id: string;
  username: string;
  email: string;
  githubURL?: string;
  avatar?: string;
}

interface LoginRequest {
  username: string;
  password: string;
}

interface RegisterRequest {
  username: string;
  email?: string | null;
  password: string;
  github_username?: string | null;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (payload:LoginRequest) => Promise<void>;
  logout: () => void;
  register: ({username, email, password, github_username}:RegisterRequest) => Promise<void>;
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

  const login = async (payload:LoginRequest) => {
    const {username,password}=payload
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
          githubURL: response.data.github_username,
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

  const register = async ({username,email=null,password,github_username=null}:RegisterRequest) => {
    setIsLoading(true);
    try {
      const response = await customAxios.post('/auth/register', {
        username,
        email,
        password,
        githubURL:github_username
      });

      if (response.data) {
        const userData: User = {
          id: response.data.id || '1',
          username: response.data.username || username,
          email: response.data.email || email,
          githubURL: response.data.github_username || github_username,
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


  const value: AuthContextType = {
    user,
    isAuthenticated,
    isLoading,
    login,
    logout,
    register
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}; 
