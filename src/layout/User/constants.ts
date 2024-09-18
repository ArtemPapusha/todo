import {
  HomeOutlined,
  FunctionOutlined,
  CiCircleOutlined,
  CopyrightOutlined,
} from '@ant-design/icons';

import { LAYOUT, LAYOUT_ID, ROUTES, ROUTE_ID } from '@constants/routes';

export const MENU_ITEM = [
  {
    id: ROUTES[ROUTE_ID.HOME].ID,
    path: ROUTES[ROUTE_ID.HOME].PATH,
    label: 'Home',
    Icon: HomeOutlined,
  },
  {
    id: LAYOUT[LAYOUT_ID.COMPONENTS].ID,
    path: LAYOUT[LAYOUT_ID.COMPONENTS].PATH,
    label: 'Components',
    Icon: CopyrightOutlined,
    children: [
      {
        id: ROUTES[ROUTE_ID.FUNCTION_COMPONENT].ID,
        path: ROUTES[ROUTE_ID.FUNCTION_COMPONENT].PATH,
        label: 'Function components',
        Icon: FunctionOutlined,
      },
      {
        id: ROUTES[ROUTE_ID.CLASS_COMPONENT].ID,
        path: ROUTES[ROUTE_ID.CLASS_COMPONENT].PATH,
        label: 'Class components',
        Icon: CiCircleOutlined,
      },
    ],
  },
];
