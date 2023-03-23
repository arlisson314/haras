import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Comfortaa', cursive, sans-serif;
  }
  
  html {
    scroll-behavior: smooth;
    background-color: var(--tertiary);
  }

  *, button, input {
    border: 0;
    font-family: 'Comfortaa', cursive, sans-serif;
  }

  :root {
    --primary: #daac11ff;
    --secundary: #7b4d0eff;
    --tertiary: #CFCFCF;
    --primaryfont: #0e0e0eff;
    --font: #ffff;
  }
`;
// preto #0e0e0eff
// amarelo #daac11ff
// ocre #7b4d0eff
// branco #ffff
// cinza #CFCFCF
