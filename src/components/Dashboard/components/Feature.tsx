import React from 'react';
import {
  ContainerOutlined,
  DesktopOutlined,
  ProjectOutlined,
  ScheduleOutlined,
  BugOutlined,
  InsertRowAboveOutlined
} from '@ant-design/icons';


import type { MenuProps } from 'antd';
import { Menu } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Projects', '1', <ProjectOutlined />),
  getItem('Boards', '2', <DesktopOutlined />),
  getItem('Tasks', '3', <ContainerOutlined />),
  getItem('Meetings', '4', <ScheduleOutlined />),
  getItem('Timesheets', '5', <InsertRowAboveOutlined />),
  getItem('Issues ', '6', <BugOutlined/>),
  getItem('Risks', '7', <ContainerOutlined />),
];

const Feature: React.FC = () => {
  return (
    <div style={{ width: 256 }}>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        items={items}
      />
    </div>
  );
};

export default Feature;