import { useReactiveVar } from '@apollo/client';
import routes from '@constants/routes';
import { isAuthenticatedVar } from 'apollo';
import { Navigate, Outlet } from 'react-router-dom';

export default function RequireAuth() {
  const isAuthenticated = useReactiveVar(isAuthenticatedVar);
  return isAuthenticated ? <Outlet /> : <Navigate to={routes.abs.home} />;
}
