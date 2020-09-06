import React from 'react';

import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
const Login = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  return (
    <div className="login-box">
      <Form
        size="large"
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <center className="avatar-login">
          <img src="/img/undraw_profile_pic_ic5t.svg" />
        </center>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your Email!',
            },
          ]}
        >
          <Input
            type="email"
            style={{ borderRadius: '14px' }}
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Email"
          />
        </Form.Item>

        <Form.Item
          name="password"
          //   label="Password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
          hasFeedback
        >
          <Input.Password
            style={{ borderRadius: '14px' }}
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item>
          <Button
            shape="round"
            type="primary"
            htmlType="submit"
            className="login-form-button"
            style={{ marginBottom: '20px' }}
          >
            Log in
          </Button>
          Or <a href="">register now!</a>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
