import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'antd';
import {
  EditOutlined,
  LineChartOutlined,
  StarOutlined,
  CopyOutlined,
  DeleteOutlined,
} from '@ant-design/icons';
import style from './index.module.scss';
export default function QuestionCard() {
  return (
    <ul className={style.container}>
      <li>
        <div className={style['item-container']}>
          <div className={style['item-top']}>
            <div className={style['item-top-left']}>title</div>
            <div className={style['item-top-right']}>
              <span>已发布</span>&nbsp;&nbsp;
              <span>答卷：12</span>&nbsp;&nbsp;
              <span>2003-12-19 07:22:46</span>
            </div>
          </div>
          <div className={style['item-bottom']}>
            <div className={style['item-bottom-left']}>
              <NavLink to="/question/edit/123">
                <Button type="text" size="small">
                  <EditOutlined />
                  编辑问卷
                </Button>
              </NavLink>
              <NavLink to="/question/statistics/123">
                <Button type="text" size="small">
                  <LineChartOutlined />
                  问卷统计
                </Button>
              </NavLink>
            </div>
            <div className={style['item-bottom-right']}>
              <Button type="text" size="small">
                <StarOutlined />
                标星
              </Button>
              <Button type="text" size="small">
                <CopyOutlined />
                复制
              </Button>
              <Button type="text" size="small">
                <DeleteOutlined />
                删除
              </Button>
            </div>
          </div>
        </div>
      </li>
    </ul>
  );
}
