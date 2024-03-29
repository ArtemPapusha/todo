import type React from 'react';

import { Typography, Button } from 'antd';
import { Link } from 'react-router-dom';

import { ROUTES, ROUTE_ID } from '@constants/routes';
const NotFound404: React.FC = () => {
  const { Title } = Typography;
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Title>404</Title>
      <Title level={5}>The page you visited does not exist.</Title>
      <Button type="primary">
        {' '}
        <Link to={ROUTES[ROUTE_ID.HOME].PATH}>Back to home page</Link>
      </Button>
    </div>
  );
};

export default NotFound404;
