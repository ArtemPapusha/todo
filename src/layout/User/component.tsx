import type React from 'react';

import { Menu, Layout } from 'antd';
import type { ItemType, MenuItemType } from 'antd/es/menu/hooks/useItems';
import { Link, Outlet } from 'react-router-dom';

import type { LAYOUT_ID, ROUTE_ID } from '@constants/routes';

import { MENU_ITEM } from './constants';
import { useContainer } from './hook';

const { Header, Content } = Layout;

export interface PageData {
  id: string;
}

interface MenuItem {
  id: ROUTE_ID | LAYOUT_ID;
  path: string;
  label: string;
  icon?: React.ReactNode;
  children?: MenuItem[];
}

const menuItems = (items: MenuItem[]): ItemType<MenuItemType>[] => {
  return items.map(({ id, path, icon, label, children }) => ({
    id,
    label: <Link to={path}>{label}</Link>,
    key: id,
    icon: icon,
    children: children ? menuItems(children) : undefined,
  }));
};

const User: React.FC = () => {
  const pageData: PageData | undefined = useContainer();
  const items = menuItems(MENU_ITEM);
  return (
    <>
      <Header>
        <Menu
          mode="horizontal"
          theme={'dark'}
          style={{ flex: 1, minWidth: 0 }}
          items={items}
          selectedKeys={[pageData?.id || '']}
        />
      </Header>
      <Content style={{ padding: '20px 48px' }}>
        <Outlet />
      </Content>
    </>
  );
};

export default User;
