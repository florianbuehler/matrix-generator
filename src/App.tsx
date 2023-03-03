import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from 'styles';
import { Control, Matrix } from 'components';
import { MatrixSettingsProvider } from 'providers';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MatrixSettingsProvider>
        <GlobalStyle />
        <Matrix />
        <Control />
      </MatrixSettingsProvider>
    </ThemeProvider>
  );
}

export default App;
