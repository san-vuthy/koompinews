import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Form, Input, Button, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { LOG_IN } from "../../graphql/mutation";
const Login = () => {
  const [login] = useMutation(LOG_IN);
  const [loading, setLoading] = useState(false);
  const onFinish = (values) => {
    login({
      variables: {
        ...values,
      },
    }).then(async (res) => {
      localStorage.setItem("token", res.data.login.token);
      localStorage.setItem("id", res.data.login.id);
      console.log("token", res.data.login.token);
      if (res.data.login.token) {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
        }, 5000);
        // setSucessMessage('Successfull');
        await message.success(res.data.login.message);
        setTimeout(() => {
          window.location.replace("/admin/allbanner");
        }, 3000);
      }
    });
    console.log("Received values of form: ", values);
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
          <img alt="img" src="/img/undraw_profile_pic_ic5t.svg" />
        </center>
        <h3 className="welcome-login">Member Login</h3>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your Email!",
            },
          ]}
        >
          <Input
            type="email"
            style={{ borderRadius: "4px" }}
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
              message: "Please input your password!",
            },
          ]}
          hasFeedback
        >
          <Input.Password
            style={{ borderRadius: "4px" }}
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
            style={{ marginBottom: "20px" }}
          >
            Log in
          </Button>
          {/* Or <Link to="">register now!</Link> */}
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
