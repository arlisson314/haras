import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Comfortaa', cursive, sans-serif;
  }
  
  html, body, #root {
    background-color: var(--tertiary);
    max-height: 100vh;
    max-width: 100vw;
    margin: auto;
  
    height: 100%;
    width: 100%;
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
