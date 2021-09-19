import React from 'react';

import { ThemeProvider } from 'styled-components';
import theme from './src/styles/theme';


import { Routes } from './src/routes';
import { AuthProvider } from './src/providers/auth';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  );
}
