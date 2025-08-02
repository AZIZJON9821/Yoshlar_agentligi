import React, { ReactNode, useState } from 'react';
import { AuthProvider } from './AuthContext';

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  
  return (
    <AuthProvider>
        {children}
    </AuthProvider>
  );
}; 