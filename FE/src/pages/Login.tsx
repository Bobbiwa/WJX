import React, { useState } from 'react';
import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input, Typography } from 'antd';
import style from './Login.module.scss';

type FieldType = {
  loginUsername?: string;
  loginPassword?: string;
  regisUsername?: string;
  regisPassword?: string;
  remember?: string;
  confirePassword?: string;
};

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const { Title } = Typography;
  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    if (isLogin) {
      console.log('login值:', values);
    } else {
      console.log('regis:', values);
    }
  };

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (
    errorInfo
  ) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className={style.container}>
      <Title>小慕问卷</Title>
      <div className={style['table-container']}>
        {isLogin ? (
          <>
            <Title level={4}>登入 Login</Title>
            <Form
              name="basic"
              labelCol={{ span: 0 }}
              wrapperCol={{ span: 24 }}
              style={{ maxWidth: 600 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
              className={style['form-container']}
            >
              <Form.Item<FieldType>
                name="loginUsername"
                rules={[
                  { required: true, message: 'Please input your username!' },
                ]}
              >
                <Input placeholder="账号" />
              </Form.Item>

              <Form.Item<FieldType>
                name="loginPassword"
                rules={[
                  { required: true, message: 'Please input your password!' },
                ]}
              >
                <Input.Password placeholder="密码" />
              </Form.Item>

              <Form.Item<FieldType>
                name="remember"
                valuePropName="checked"
                label={null}
              >
                <Checkbox>记住密码</Checkbox>
              </Form.Item>

              <Form.Item label={null}>
                <Button
                  type="primary"
                  htmlType="submit"
                  className={style['up-button']}
                >
                  登录
                </Button>
              </Form.Item>
            </Form>
            <Button
              type="link"
              className={style['down-button']}
              onClick={() => setIsLogin(false)}
            >
              注册账号
            </Button>
          </>
        ) : (
          <>
            <Title level={4}>注册 Sign Up</Title>
            <Form
              name="basic"
              labelCol={{ span: 0 }}
              wrapperCol={{ span: 24 }}
              style={{ maxWidth: 600 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
              className={style['form-container']}
            >
              <Form.Item<FieldType>
                name="regisUsername"
                rules={[
                  { required: true, message: 'Please input your username!' },
                ]}
              >
                <Input placeholder="账号" />
              </Form.Item>

              <Form.Item<FieldType>
                name="regisPassword"
                rules={[
                  { required: true, message: 'Please input your password!' },
                ]}
              >
                <Input.Password placeholder="密码" />
              </Form.Item>

              <Form.Item
                name="confirePassword"
                rules={[
                  { required: true, message: 'Please input your password!' },
                ]}
              >
                <Input.Password placeholder="确认密码" />
              </Form.Item>

              <Form.Item label={null}>
                <Button
                  type="primary"
                  htmlType="submit"
                  className={style['up-button']}
                >
                  注册
                </Button>
              </Form.Item>
            </Form>
            <Button
              type="link"
              className={style['down-button']}
              onClick={() => setIsLogin(true)}
            >
              去登录
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
