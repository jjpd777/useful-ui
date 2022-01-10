
import React, {useState, useEffect} from 'react';
import CreateInvoice from "../CreateInvoice/index";
import InvoicesTable from "../InvoicesTable/index";
import DeliverInvoice from "../DeliverInvoice/index";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;



function Home() {

  const [collapsed, setCollapsed] = useState(false);
  const onCollapse = () =>{
    setCollapsed(!collapsed)
  };


  return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              <Link to="/transactions">
                Transactions
              </Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
            <Link to="/invoice">
                Create Invoice
              </Link>
            </Menu.Item>
            <Menu.Item key="9" icon={<FileOutlined />}>
            <Link to="/delivered">
                Delivered Invoice
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 24}}> </Header>
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item></Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                <Routes>   
                    <Route path="transactions" element={<InvoicesTable />} />
                    <Route path="invoice" element={<CreateInvoice />} />
                </Routes>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Saldada ©2022 Created by Latinos</Footer>
        </Layout>
      </Layout>
  );
}

export default Home;
