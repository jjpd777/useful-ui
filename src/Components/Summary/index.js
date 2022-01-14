
import React, {useState, useEffect} from 'react';
import { Statistic, Row, Col, Button, Card } from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    CheckCircleFilled,
    EditOutlined,
    SnippetsOutlined
  } from '@ant-design/icons';
import 'antd/dist/antd.css';

import Saldada from "../../Utils/saldada-logo.png";

export default function Summary(){
    return(
        <>
        <h2> Balance History</h2>
        <Row gutter={16}>
        <Col span={12}>
          <Statistic prefix={<FileOutlined/>} title= {"Total Invoices"} value={75} />
          <Statistic prefix={<CheckCircleFilled/>}title= "Paid Invoices" value={39} />
        </Col>
        <Col span={12}>
          <Statistic title="Account Balance (USD)" value={"$500"} precision={2} />
          <Button style={{ marginTop: 16 }} type="primary">
            Recharge
          </Button>
        </Col>
      </Row>
      <div className="summary-btns">
          <Button   className="summary-b">
          <EditOutlined/>Create Invoice
          </Button>
          <Button className="summary-b">
             <SnippetsOutlined/> See Invoices
          </Button>
      </div>
      </>
      )
};