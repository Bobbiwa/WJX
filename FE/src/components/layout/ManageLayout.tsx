import React from 'react';
import { Outlet, NavLink, useLocation } from 'react-router-dom';
import { Button } from 'antd';
import {
  PlusOutlined,
  UnorderedListOutlined,
  StarOutlined,
  DeleteOutlined,
} from '@ant-design/icons';

import style from './ManageLayout.module.scss';
export default function ManageLayout() {
  let { pathname } = useLocation();
  return (
    <div className={style.container}>
      <div className={style.left}>
        <ul>
          <li className={style.create}>
            <Button type="primary">
              <PlusOutlined />
              新建问卷
            </Button>
          </li>
          <li>
            <NavLink to="/manage/list">
              <Button type={pathname.includes('list') ? 'default' : 'text'}>
                <UnorderedListOutlined />
                我的问卷
              </Button>
            </NavLink>
          </li>
          <li>
            <NavLink to="/manage/star">
              <Button type={pathname.includes('star') ? 'default' : 'text'}>
                <StarOutlined />
                星标问卷
              </Button>
            </NavLink>
          </li>
          <li>
            <NavLink to="/manage/trash">
              <Button type={pathname.includes('trash') ? 'default' : 'text'}>
                <DeleteOutlined />
                回收站
              </Button>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className={style.right}>
        <Outlet />
      </div>
    </div>
  );
}
