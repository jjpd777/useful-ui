import './App.css';
import React, {useState, useEffect} from 'react';
import ItemsBasket from "./Components/ItemsBasket/index";
import CreateInvoice from "./Components/CreateInvoice/index";
import InvoicesTable from "./Components/InvoicesTable/index";
import DeliverInvoice from "./Components/DeliverInvoice/index";
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
    <Router>
      <Routes>
        <Route exact path="/delivered" element={<DeliverInvoice/>} />
        <Route exact path="/" element ={<Home/>}>
          <Route exact path="/invoice" element={<CreateInvoice />} />
          <Route path="/transactions" element={<InvoicesTable />} />
        </Route>
      </Routes>
      </Router>
    </div>

  );
}

export default App;
