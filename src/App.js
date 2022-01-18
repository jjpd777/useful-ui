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

  const IS_DEV_ENVIRONMENT = true;
  const BASE_URL = IS_DEV_ENVIRONMENT ? "localhost:3001/" : "www.backend-server-url.com";

 
  async function postData(url = BASE_URL , data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

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
