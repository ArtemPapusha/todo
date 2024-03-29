import { Navigate, createBrowserRouter } from 'react-router-dom';

import { ROUTES, LAYOUT, ROUTE_ID, LAYOUT_ID } from '@constants/routes';
import Components from '@layout/Components';
import User from '@layout/User';
import Class from '@pages/Class';
import Function from '@pages/Function';
import Home from '@pages/Home';
import NotFound404 from '@pages/NotFound404';

const router = createBrowserRouter([
  {
    id: LAYOUT[LAYOUT_ID.USER].ID,
    path: LAYOUT[LAYOUT_ID.USER].PATH,
    element: <User />,
    children: [
      {
        index: true,
        id: ROUTES[ROUTE_ID.HOME].ID,
        path: ROUTES[ROUTE_ID.HOME].PATH,
        element: <Home />,
      },
      {
        id: LAYOUT[LAYOUT_ID.COMPONENTS].ID,
        path: LAYOUT[LAYOUT_ID.COMPONENTS].PATH,
        element: <Components />,
        children: [
          {
            index: true,
            id: ROUTES[ROUTE_ID.COMPONENT].ID,
            path: ROUTES[ROUTE_ID.COMPONENT].PATH,
            element: <Navigate to={ROUTES[ROUTE_ID.FUNCTION_COMPONENT].PATH} />,
          },
          {
            id: ROUTES[ROUTE_ID.FUNCTION_COMPONENT].ID,
            path: ROUTES[ROUTE_ID.FUNCTION_COMPONENT].PATH,
            element: <Function />,
          },
          {
            id: ROUTES[ROUTE_ID.CLASS_COMPONENT].ID,
            path: ROUTES[ROUTE_ID.CLASS_COMPONENT].PATH,
            element: <Class />,
          },
        ],
      },
    ],
  },
  {
    path: '*',
    element: <NotFound404 />,
  },
]);

export default router;
