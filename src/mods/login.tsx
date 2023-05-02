// component with fields named url, username, password
import React from "react"
import { Button, Form, Input } from 'antd';

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

interface LoginProps {
  onFinish: (values: any) => void;
}

const Login: React.FC<LoginProps> = (props: LoginProps) => (
  <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={props.onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="TD URL"
      name="tdUrl"
      rules={[{ required: true, message: 'Please input your td url!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="MD URL"
      name="mdUrl"
      rules={[{ required: true, message: 'Please input your md url!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="UserID"
      name="userId"
      rules={[{ required: true, message: 'Please input your userID!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        Connect & Login
      </Button>
    </Form.Item>
  </Form>
);

export default Login;
