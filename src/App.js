import './App.css';
import React, {useState, useEffect} from 'react';
import ItemsBasket from "./Components/ItemsBasket/index";
import CreateInvoice from "./Components/CreateInvoice/index";
import InvoicesTable from "./Components/InvoicesTable/index";
import DeliverInvoice from "./Components/DeliverInvoice/index";
import StripeResponse from "./Components/StripeResponse/index";
import Home from "./Components/Home/index";
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
  };


  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element ={<Home/>}>
          <Route path="/invoice" element={<CreateInvoice />} />
          <Route path="/transactions" element={<InvoicesTable />} />
        </Route>
        <Route path="/delivered" element={<DeliverInvoice />} />
        <Route exact path="/status" element={<StripeResponse/>} />
      </Routes>
    </div>
  );
}

export default App;
