import { createRoot } from 'react-dom/client'
import React, {useState} from "react";
import { Space, Col, Row } from "antd";
import Login from './mods/login';
import Dashboard from './mods/dashboard';
import { MdClient } from "./api/md";
import { TdClient } from './api/td';

const App: React.FC = () => {
  // create state called info with default value of empty object
  const [info, setInfo] = useState({});
  const [mdClient, setMdClient] = useState<null | MdClient>(null);
  const [tdClient, setTdClient] = useState<null | TdClient>(null);
  const [tdConnected, setTdConnected] = useState(false);
  const [mdConnected, setMdConnected] = useState(false);

  const onFinish = (values: any) => {
    console.log('Success:', values);
    setInfo(values);
    let mdClient = new MdClient(values.mdUrl, values.userId, values.password);
    mdClient.OnRspUserLogin = (data: any) => {setMdConnected(true);};
    setMdClient(mdClient);

    let tdClient = new TdClient(values.tdUrl, values.userId, values.password);
    tdClient.OnRspUserLogin = (data: any) => {setTdConnected(true);};
    setTdClient(tdClient);
  };

  return (
    <Space direction='vertical' style={{ width: '100%' }} size={[0, 48]}>
      {
        mdConnected && tdConnected?
          <Dashboard mdClient={mdClient} tdClient={tdClient}/>
          :
          <Row align='middle'>
            <Col span={8}/>
            <Col span={8}>
              <Login onFinish={onFinish}/>
            </Col>
            <Col span={8}/>
          </Row>
      }
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
