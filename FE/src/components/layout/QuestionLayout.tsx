import React from 'react';
import { Outlet } from 'react-router-dom';
export default function QuestionLayout() {
  return (
    <div>
      QuestionLayout
      <div>
        <Outlet />
      </div>
    </div>
  );
}
