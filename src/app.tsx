import { createRoot } from 'react-dom/client'
import React from "react";
import { Layout, Space, Col, Row } from "antd";
import Login from './mods/login';

const { Header, Sider, Content } = Layout;

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#7dbcea',
}

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#3ba0e9',
}

const App: React.FC = () => {
  return (
    <Space direction='vertical' style={{ width: '100%' }} size={[0, 48]}>
      <Layout>
        <Content style={contentStyle}>
          <Row>
            <Login />
          </Row>
          <Row>
            <Col span={12}>
              <Row>kline</Row>
              <Row>trade</Row>
            </Col>
            <Col span={12}>
              depth data
            </Col>
          </Row>
        </Content>
      </Layout>
    </Space>
  );
};

export const root = document.getElementById('app')

root &&
  createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
