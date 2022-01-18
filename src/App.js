import './App.css';
import React, {useState, useEffect} from 'react';
import ItemsBasket from "./Components/ItemsBasket/index";
import CreateInvoice from "./Components/CreateInvoice/index";
import InvoicesTable from "./Components/InvoicesTable/index";
import DeliverInvoice from "./Components/DeliverInvoice/index";
import StripeResponse from "./Components/StripeResponse/index";
import Home from "./Components/Home/index";
import { Button } from 'antd';

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

  const IS_DEV_ENVIRONMENT = true;
  const BASE_URL = IS_DEV_ENVIRONMENT ? "http://www.localhost:3001/" : "www.backend-server-url.com";

 
  async function postData(url = BASE_URL , data = {customerID:"ABC1234"}) {

    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', 
      credentials: 'same-origin',  
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    console.log("This is the backend response: ",response);
    return response.json(); 
  }

  return (
    <div className="App">
      <div>
      <br></br>
      <br></br>
      <br></br>
        <Button onClick={()=>{ postData()}}>
            This Button Makes a Backend Call
        </Button>
      </div>
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
