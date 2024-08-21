/* eslint-disable react-refresh/only-export-components */

import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Login from 'ui/pages/Login';

// lazy load for Loading Page
const PublicRoute = lazy(() => import('./PublicRoute'));
const PrivateRoute = lazy(() => import('./PrivateRoute'));
const CRUD = lazy(() => import('src/ui/pages/CRUD'));
const PageNotFound = lazy(() => import('ui/components/PageNotFound'));

const routers = createBrowserRouter([
  {
    id: 'public',
    element: <PublicRoute />,
    children: [
      {
        path: '/login',
        id: 'login',
        element: <Login />,
      },
    ],
  },
  {
    id: 'app',
    element: <PrivateRoute />,
    children: [
      {
        path: '/',
        id: '/',
        element: <CRUD />,
      },
    ],
  },
  {
    id: 'page_not_found',
    path: '*',
    element: <PageNotFound />,
  },
]);

export default routers;
