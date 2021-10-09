import React, { createContext, ReactNode, useEffect, useState } from 'react';

export const AuthContext = createContext({});

interface Props {
  children: ReactNode;
  token?: string;
}

export const AuthProvider = ({ children }: Props) => {
  const [token, setToken] = useState('');
  const [list, setList] = useState([]);

  useEffect(() => {
    console.log('list teste')
    console.log(list)
    console.log(list.length)
  }, [])

  return (
    <AuthContext.Provider value={{ token, setToken, list, setList }}>
      {children}
    </AuthContext.Provider>
  )
}