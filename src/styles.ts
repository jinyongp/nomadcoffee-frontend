import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { ColorScheme, Theme } from './types';

const theme: Theme = {
  light: {
    accentColor: 'rgb(72, 52, 52)',
    fontColor: 'rgb(38, 38, 38)',
    placeholderColor: 'rgb(142, 142, 142)',
    borderColor: 'rgba(219,219,219)',
    inputColor: 'rgba(250, 250, 250)',
    backgroundColor: 'rgb(240, 236, 227)',
    linkColor: '#0095f6',
    infoColor: '#00b894',
    errorColor: 'rgb(237, 73, 86)',
  },
  dark: {
    accentColor: '',
    fontColor: '',
    placeholderColor: 'rgb(80, 80, 80)',
    borderColor: 'rgba(219,219,219)',
    inputColor: 'rgba(250, 250, 250)',
    backgroundColor: 'rgb(250, 250, 250)',
    linkColor: '#0095f6',
    infoColor: '#00b894',
    errorColor: 'rgb(237, 73, 86)',
  },
};

export const getTheme = (colorScheme: ColorScheme) => theme[colorScheme];

export const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    font-family: 'Poppins', sans-serif;
    color: rgb(38,38,38);
  }

  input, button {
    outline: none;
    border: none;
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
