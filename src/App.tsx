import { useReactiveVar } from '@apollo/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { colorSchemeVar, isAuthenticatedVar } from './apollo';
import Home from './screens/Home';
import Login from './screens/Login';
import { getThemeStyle, GlobalStyle } from './styles';

export default function App() {
  const isAuthenticated = useReactiveVar(isAuthenticatedVar);
  const colorScheme = useReactiveVar(colorSchemeVar);

  return (
    <ThemeProvider theme={getThemeStyle(colorScheme)}>
      <GlobalStyle />
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={isAuthenticated ? <Home /> : <Login />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}
