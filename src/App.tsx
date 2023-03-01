import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <h1>hello world</h1>
    </ThemeProvider>
  );
}

export default App;
