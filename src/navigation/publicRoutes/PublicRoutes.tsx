import React from 'react';
import { Route } from 'react-router';
import SignIn from '../../pages/signIn';
import { ROUTES } from '../routes';

export const ROUTES_LIST = [{
  path: ROUTES.SIGNIN,
  element: <SignIn />,
  index: true,
}];

const PublicRoutes = () => (
  <>
    {ROUTES_LIST.map((item) => (
      <Route {...item} key={item.path} />
    ))}
  </>
);

export default PublicRoutes;