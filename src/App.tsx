import React from 'react';

import { ConfigProvider } from 'antd';
import { RouterProvider } from 'react-router-dom';

import ContextProvider from '@contexts/Context';
import RootModal from '@modules/RootModal';
import router from '@routes';
import 'normalize.css';
import theme from '@theme';

const App: React.FC = () => {
  return (
    <React.StrictMode>
      <ConfigProvider theme={theme}>
        <ContextProvider>
          <RouterProvider router={router} />
          <RootModal />
        </ContextProvider>
      </ConfigProvider>
    </React.StrictMode>
  );
};

export default App;
