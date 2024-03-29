import {
  HomeOutlined,
  FunctionOutlined,
  CiCircleOutlined,
  CopyrightOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

import { LAYOUT, LAYOUT_ID, ROUTES, ROUTE_ID } from '@constants/routes';

export const MENU_ITEM = [
  {
    id: ROUTES[ROUTE_ID.HOME].ID,
    label: <Link to={ROUTES[ROUTE_ID.HOME].PATH}>Home</Link>,
    icon: <HomeOutlined />,
  },
  {
    id: LAYOUT[LAYOUT_ID.COMPONENTS].ID,
    label: <Link to={LAYOUT[LAYOUT_ID.COMPONENTS].PATH}>Components</Link>,
    icon: <CopyrightOutlined />,
    children: [
      {
        id: ROUTES[ROUTE_ID.FUNCTION_COMPONENT].ID,
        label: (
          <Link to={ROUTES[ROUTE_ID.FUNCTION_COMPONENT].PATH}>
            Function components
          </Link>
        ),
        icon: <FunctionOutlined />,
      },
      {
        id: ROUTES[ROUTE_ID.CLASS_COMPONENT].ID,
        label: (
          <Link to={ROUTES[ROUTE_ID.CLASS_COMPONENT].PATH}>
            Class components
          </Link>
        ),
        icon: <CiCircleOutlined />,
      },
    ],
  },
];
