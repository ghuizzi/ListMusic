import React from 'react';
import { useRoutes } from 'react-router-dom';
import { IPath } from './interface';

import { LayoutApp } from './layout';
import { Home, About, Dashboard } from '../pages';

export const routes = [
  {
    path: '/',
    element: <LayoutApp />,
    children: [
      {
        path: IPath.Home,
        element: <Home />,
      },
      {
        path: IPath.Dashboard,
        element: <Dashboard />,
      },
      {
        path: IPath.About,
        element: <About />,
      },
    ],
  },
  // { path: '*', element: <Navigate to="/404" replace /> }
];

export const Routes = () => useRoutes(routes);