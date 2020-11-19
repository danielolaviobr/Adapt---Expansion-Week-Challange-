import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: 0;
  }


  body {
    background: #000;
    color: #fff;
    -webkit-font-smooth: antialiased;
  }

  body, input, button {
    font-family: 'Inter', sans-serif;
    font-size: 16px;
  }

  html {
    scroll-snap-points-y: repeat(100vh);
    scroll-snap-type: y proximity;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

  ::-moz-selection { 
  color: #fff;
  background: #bb00ff;
}

::selection {
  color: #fff;
  background: #bb00ff;
}
`;
