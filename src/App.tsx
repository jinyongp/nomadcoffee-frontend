import { ApolloProvider, useReactiveVar } from '@apollo/client';
import routes from '@constants/routes';
import RequireAuth from '@routes/RequireAuth';
import CreateCoffeeShopScreen from '@screens/CreateCoffeeShop';
import EditCoffeeShopScreen from '@screens/EditCoffeeShop';
import HomeScreen from '@screens/Home';
import LoginScreen from '@screens/Login';
import NotFoundScreen from '@screens/NotFound';
import SignUpScreen from '@screens/SignUp';
import { GlobalStyle } from '@styles/global';
import { getTheme } from '@styles/theme';
import { client, colorSchemeVar, isAuthenticatedVar } from 'apollo';
import { HelmetProvider } from 'react-helmet-async';
import { Location, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

export default function App() {
  const colorScheme = useReactiveVar(colorSchemeVar);
  const isAuthenticated = useReactiveVar(isAuthenticatedVar);
  const location = useLocation();
  const state = location.state as { backgroundLocation?: Location };

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={getTheme(colorScheme)}>
        <HelmetProvider>
          <GlobalStyle />
          <Routes location={state?.backgroundLocation || location}>
            <Route path={routes.notFound} element={<NotFoundScreen />} />
            {isAuthenticated || <Route path={routes.abs.home} element={<LoginScreen />} />}
            {isAuthenticated || <Route path={routes.abs.signUp} element={<SignUpScreen />} />}
            <Route element={<RequireAuth />}>
              <Route path={routes.abs.signUp} element={<Navigate to={routes.abs.home} />} />
              <Route path={routes.abs.home} element={<HomeScreen />} />
              <Route path={routes.abs.shop + '/*'}>
                <Route index element={<Navigate to={routes.abs.home} />} />
                <Route path={routes.rel.id} element={<EditCoffeeShopScreen />} />
              </Route>
            </Route>
          </Routes>
          {state?.backgroundLocation && (
            <Routes>
              <Route element={<RequireAuth />}>
                <Route path={routes.abs.shop + '/*'}>
                  <Route path={routes.rel.create} element={<CreateCoffeeShopScreen />} />
                </Route>
              </Route>
            </Routes>
          )}
        </HelmetProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
}
