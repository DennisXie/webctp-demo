// component with fields named url, username, password
import React from "react"
import { Button, Checkbox, Form, Input } from 'antd';
import { MdClient } from "../api/md";

const onFinish = (values: any) => {
  console.log('Success:', values);
  let mdclient = new MdClient(values.mdUrl, values.userId, values.password);
  // let tdclient = new TdClient(values.tdUrl, values.userId, values.password);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

const Login: React.FC = () => (
  <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="td URL"
      name="tdUrl"
      rules={[{ required: true, message: 'Please input your td url!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="md URL"
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
        connect
      </Button>
    </Form.Item>
  </Form>
);

export default Login;
