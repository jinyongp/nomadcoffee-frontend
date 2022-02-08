import { ApolloProvider, useReactiveVar } from '@apollo/client';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { client, colorSchemeVar, isAuthenticatedVar } from './apollo';
import routes from './constants/routes';
import Home from './screens/Home';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import { getTheme, GlobalStyle } from './styles';

export default function App() {
  const isAuthenticated = useReactiveVar(isAuthenticatedVar);
  const colorScheme = useReactiveVar(colorSchemeVar);

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={getTheme(colorScheme)}>
        <HelmetProvider>
          <GlobalStyle />
          <BrowserRouter>
            <Routes>
              <Route path={routes.home} element={isAuthenticated ? <Home /> : <Login />} />
              {isAuthenticated || <Route path={routes.signUp} element={<SignUp />} />}
            </Routes>
          </BrowserRouter>
        </HelmetProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
}
