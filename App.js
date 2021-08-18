import React from 'react';

import { ThemeProvider } from 'styled-components';
import theme from './src/styles/theme';

import { Home } from './src/screens/Home';
import { NewAccountPersonal } from './src/screens/NewAccountPersonal';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NewAccountPersonal />
    </ThemeProvider>
  );
}
