import React, { useState } from 'react';
import { Layout, Space, Col, Row } from 'antd';
import { MdClient } from '@/api/md';
import { TdClient } from '@/api/td';

import DepthMarketDataBoard from './depthdata';
import TradeBoard from './trade';
import OrderBoard from './order';
import KlineBoard from './kline';
import InstrumentsBoard from './instruments';

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  lineHeight: '120px',
  // color: '#fff',
}

interface DashboardProps {
  mdClient: MdClient;
  tdClient: TdClient;
}

const Dashboard: React.FC<DashboardProps> = (props: DashboardProps) => {
  return (
    <Layout>
      <Layout.Header>
      </Layout.Header>
      <Layout.Content style={contentStyle}>
        <Row>
          <Col span={4}>
            <InstrumentsBoard tdClient={props.tdClient}></InstrumentsBoard>
          </Col>
          <Col span={12}>
            <Row>
              <Col span={24}>
                <KlineBoard></KlineBoard>
              </Col>
            </Row>
            <Row>
              <Col span={12}>
              </Col>
            </Row>
          </Col>
          <Col span={8}>
            <DepthMarketDataBoard></DepthMarketDataBoard>
          </Col>
        </Row>
        <Row>
          <OrderBoard></OrderBoard>
        </Row>
      </Layout.Content>
    </Layout>
  )
}

export default Dashboard;
