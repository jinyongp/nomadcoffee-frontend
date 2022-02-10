import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    background-color: ${({ theme }) => theme.backgroundColor}
  }

  html, body, #root {
    height: 100%;
  }

  body {
    font-family: 'Poppins', sans-serif;
    color: rgb(38,38,38);
  }

  body.disable-scroll {
    overflow: hidden;
    margin-right: ${window.innerWidth - document.body.scrollWidth}px;
  }

  input, button {
    outline: none;
    border: none;
  }

  button {
    cursor: pointer;

      &:disabled {
      opacity: 0.8;
      cursor: default;
    }
  }

  a {
    text-decoration: none;
    &:link,
    &:visited,
    &:active {
      color: ${({ theme }) => theme.linkColor};
    }
  }
`;
