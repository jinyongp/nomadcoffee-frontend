import { useReactiveVar } from '@apollo/client';
import { useMeQuery } from '@generated';
import { isAuthenticatedVar, logoutUser } from 'apollo';
import { useEffect } from 'react';

export default function useAuth() {
  const isAuthenticated = useReactiveVar(isAuthenticatedVar);
  const { data, loading } = useMeQuery({ skip: !isAuthenticated });
  useEffect(() => {
    if (isAuthenticated && data && !data.me.ok) logoutUser();
  }, [isAuthenticated, data]);
  return { data, loading };
}
