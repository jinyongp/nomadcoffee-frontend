import { ApolloClient, createHttpLink, InMemoryCache, makeVar } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { TOKEN_KEY } from '@constants/auth';
import { COLOR_MODE } from '@constants/theme';
import { ColorScheme } from 'styles/theme';

const getPreferredColorScheme = () => {
  const theme = localStorage.getItem(COLOR_MODE) as ColorScheme | null;
  return theme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
};

export const isAuthenticatedVar = makeVar<boolean>(Boolean(localStorage.getItem(TOKEN_KEY)));
export const colorSchemeVar = makeVar<ColorScheme>(getPreferredColorScheme());

export const loginUser = (token: string) => {
  localStorage.setItem(TOKEN_KEY, token);
  isAuthenticatedVar(true);
};

export const logoutUser = () => {
  localStorage.removeItem('token');
  isAuthenticatedVar(false);
};

export const setColorScheme = (theme: ColorScheme) => {
  localStorage.setItem(COLOR_MODE, theme);
  colorSchemeVar(theme);
};

const httpLink = createHttpLink({
  uri:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:4000/graphql'
      : 'https://nomadcoffee-jinyongp.herokuapp.com/graphql',
});

const authLink = setContext((_, { headers }) => ({
  headers: {
    ...headers,
    authorization: localStorage.getItem(TOKEN_KEY),
  },
}));

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
