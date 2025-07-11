import React from 'react';
import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';
import style from './NotFound.module.scss';
export default function NotFound() {
  const navigate = useNavigate();
  return (
    <Result
      className={style.container}
      status="404"
      title="404"
      subTitle="抱歉，您访问的页面不存在"
      extra={<Button type="primary" onClick={()=>(navigate('/'))}>返回首页</Button>}
    />
  );
}
