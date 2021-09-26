import React, { createContext, ReactNode, useState } from 'react';

export const AuthContext = createContext({});

interface Props {
  children: ReactNode;
  token?: string;
}

export const AuthProvider = ({ children }: Props) => {
  const [token, setToken] = useState('');
  const [list, setList] = useState([]);

  return (
    <AuthContext.Provider value={{ token, setToken, list, setList }}>
      {children}
    </AuthContext.Provider>
  )
}