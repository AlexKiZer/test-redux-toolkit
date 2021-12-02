import React from 'react';
import { Navigate, Route, RouteProps, useLocation } from 'react-router';
import { ROUTES } from '../routes';
import Home from '../../pages/home';

const ROUTES_LIST = [{
  path: ROUTES.HOME,
  element: <Home />,
}];

interface ProtectedRoutesProps extends RouteProps {
  redirectTo?: string;
}

export const ProtectedLayer = ({ 
  redirectTo = ROUTES.SIGNIN,
  ...props
}:ProtectedRoutesProps) => {
  const isAuthenticated = false;
  const location = useLocation();

  return isAuthenticated ? <Route {...props} /> : <Navigate to={redirectTo} replace state={{ from: location }} />;
};

const ProtectedRoutes = () => (
  <>
    {ROUTES_LIST.map((item) => <ProtectedLayer {...item} key={item.path} />)}
  </>
);

export default ProtectedRoutes;