import React from 'react';
import { Typography } from 'antd';
import QuestionCard from '../../components/questionCard/index';
export default function List() {
  const { Title } = Typography;
  return (
    <div>
      <Title>我的问卷</Title>
      <QuestionCard />
    </div>
  );
}
