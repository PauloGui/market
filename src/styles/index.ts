import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: 'Poppins', sans-serif;
  }

  html{
    font-size: 62.5%;
  }

  body{
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased !important;
    font-weight: 500;
    height: 100vh;
    width: 100vw;
  }
`;
