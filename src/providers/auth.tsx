import React, { createContext, ReactNode, useState } from 'react';

export const AuthContext = createContext({});

interface Props {
  children: ReactNode;
  token?: string;
}

export const AuthProvider = ({ children }: Props) => {
  const [token, setToken] = useState('');


  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  )
}