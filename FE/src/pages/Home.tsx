import React from 'react';
import { Button, Typography } from 'antd';
import style from './Home.module.scss';
export default function Home() {
  const { Title } = Typography;
  return (
    <div className={style.container}>
      <Title>问卷调查 | 在线投票</Title>
      <div>已经累计创建问卷 1090 份数，发布问卷 100 份，收到答卷 10000 份</div>
      <Button type="primary" size="large">
        开始使用
      </Button>
    </div>
  );
}
