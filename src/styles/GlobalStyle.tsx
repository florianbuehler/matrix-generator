import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
  }
  
  #root {
    position: relative;
    width: 100%;
    min-height: 100vh;
  }
`;

export default GlobalStyle;
