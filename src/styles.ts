import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { ColorScheme, Theme } from './types';

const theme: Theme = {
  light: {
    color: {
      primary: '',
    },
  },
  dark: {
    color: {
      primary: '',
    },
  },
};

export const getThemeStyle = (colorScheme: ColorScheme) => theme[colorScheme];
export const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }
`;
