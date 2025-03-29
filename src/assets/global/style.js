import { createGlobalStyle } from "styled-components";

// font
import Fonte from "../font/Game-of-Thrones.ttf"

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    overflow-x: hidden;
    background-color: #0f0f11;
  }

  ::selection {
    background-color: #f9f9f9;
    color: #0f0f11;
  }

  @font-face {
    font-family: 'GameThrones';
    src: url(${Fonte}) format('truetype');
    font-display: swap;
  }
`;
