import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from 'styles';
import { Matrix } from 'components';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Matrix />
    </ThemeProvider>
  );
}

export default App;
