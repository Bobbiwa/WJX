import { Outlet } from 'react-router-dom';
import { FormOutlined } from '@ant-design/icons';
import style from './MainLayout.module.scss';
export default function MainLayout() {
  return (
    <div className={style.container}>
      <div className={style.header}>
        <FormOutlined />
        小慕问卷
      </div>
      <Outlet />
      <div className={style.footer}>
        小慕问卷 ©2023 - present. Created by 双越老师
      </div>
    </div>
  );
}
