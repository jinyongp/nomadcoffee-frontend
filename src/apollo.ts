import { ApolloClient, InMemoryCache, makeVar } from '@apollo/client';
import { TOKEN_KEY } from 'constants/auth';
import { COLOR_MODE } from 'constants/theme';
import { ColorScheme } from './types';

export const client = new ApolloClient({
  uri: 'https://nomadcoffee-jinyongp.herokuapp.com/graphql',
  cache: new InMemoryCache(),
});

const getPreferredColorScheme = () => {
  const theme = localStorage.getItem(COLOR_MODE) as ColorScheme | null;
  return theme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
};

// console.log(getPreferredColorScheme());

export const isAuthenticatedVar = makeVar<boolean>(Boolean(localStorage.getItem(TOKEN_KEY)));
export const colorSchemeVar = makeVar<ColorScheme>(getPreferredColorScheme());

export const loginUser = (token: string) => {
  localStorage.setItem(TOKEN_KEY, token);
  window.location.reload();
  isAuthenticatedVar(true);
};

export const logoutUser = () => {
  localStorage.removeItem('token');
  window.location.reload();
  isAuthenticatedVar(false);
};

export const setColorScheme = (theme: ColorScheme) => {
  localStorage.setItem(COLOR_MODE, theme);
  colorSchemeVar(theme);
};
