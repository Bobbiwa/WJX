import React, { useEffect } from 'react';
import { Button, Typography } from 'antd';
import axios from 'axios';
import style from './Home.module.scss';
export default function Home() {
  useEffect(() => {
    document.title = '问卷调查 | 在线投票';
    async function fet() {
      axios.get('/api/question/123').then((res) => {
        console.log(111111, res.data);
      });
    }
    fet();
  }, []);
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
