import React from 'react';
import { Route, Routes } from 'react-router';

import NotFound from './pages/notFound';
// import PublicRoutes from './navigation/publicRoutes';
// import ProtectedRoutes from './navigation/protectedRoutes';
import { ROUTES_LIST } from './navigation/publicRoutes/PublicRoutes';

const App = () => (
  <Routes>
    {ROUTES_LIST.map((item) => (
      <Route {...item} index key={item.path} />
    ))}
    {/* <Route path={ROUTES.PROTECTED} element={<ProtectedRoutes />} /> */}
   
    {/* <Route path="/" element={<Navigate to={ROUTES.SIGNIN} replace />} /> */}
    <Route path="*" element={<NotFound/>} />
  </Routes>
);

export default App;
