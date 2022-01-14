import React, { useState, useEffect } from "react";
import { Table, Badge, SideSheet,Paragraph} from 'evergreen-ui';
import { moneyFormatter } from "../../Utils/MoneyFormat";
import {sampleInvoices} from "./DataQuery";
import { Statistic, Row, Col, Button } from 'antd';
import {
    FileOutlined
  } from '@ant-design/icons';
import 'antd/dist/antd.css';


export default function NewCustomer(){
    return(
        <h1>Added Customer</h1>
    )
}