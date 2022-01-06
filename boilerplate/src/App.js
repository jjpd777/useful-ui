import './App.css';
import React, {useState, useEffect} from 'react';
import ItemsBasket from "./Components/ItemsBasket/index";
import Installments from "./Components/Installments/index";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;



function App() {

  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = () =>{
    setCollapsed(!collapsed)
  }
  return (
    <div className="App">
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              <Link to="/basket">
                Basket
              </Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
            <Link to="/installments">
                Installments
              </Link>
            </Menu.Item>
            <Menu.Item key="9" icon={<FileOutlined />}>
              Files
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 24 }}> This header </Header>
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item></Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              <Routes>
                <Route exact path="/basket" element={<ItemsBasket />} />
                <Route exact path="/installments" element={<Installments />} />
              </Routes>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Saldada ©2022 Created by Latinos</Footer>
        </Layout>
      </Layout>
      </Router>
    </div>

  );
}

export default App;
