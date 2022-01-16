import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu, Button } from 'antd';
import { Combobox, } from "evergreen-ui";

import { Checkbox, Divider } from 'antd';
import ItemsBasket from "../ItemsBasket/index";
import { sampleCustomers } from "./DataQuery";
import {
    PlusOutlined, BankOutlined, UserOutlined, UserAddOutlined
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const CheckboxGroup = Checkbox.Group;

const plainOptions = ['Tarjeta', 'ACH', 'Cheque'];
const defaultCheckedList = ['Apple', 'Orange'];





function CreateInvoice() {

    const [checkedList, setCheckedList] = useState(defaultCheckedList);
    const [indeterminate, setIndeterminate] = useState(true);
    const [checkAll, setCheckAll] = useState(false);
  
    const onChange = list => {
      setCheckedList(list);
      setIndeterminate(!!list.length && list.length < plainOptions.length);
      setCheckAll(list.length === plainOptions.length);
    };
  
    const onCheckAllChange = e => {
      setCheckedList(e.target.checked ? plainOptions : []);
      setIndeterminate(false);
      setCheckAll(e.target.checked);
    };
  

    return (
        <div className="invoice-box">
            <br></br>
            <div className="fields-description">

                <div className="invoice-details">
                   <h3> Información Comprador <UserOutlined/></h3>
                    <Divider/>
                    <div className="invoice-detail-cust">
                        <Combobox
                            items={sampleCustomers.map(x => x.name)}
                            onChange={selected => console.log(selected)}
                            placeholder="Choose a customer"
                            autocompleteProps={{
                                // Used for the title in the autocomplete.
                                name: 'Yolo'
                            }}
                        />
                            <Button className="standard-action-btn">
                                Nuevo Cliente <PlusOutlined/>
                            </Button>
                    </div>
                </div>

                <div className="invoice-pay">
                <h3> Opciones de pago <BankOutlined/></h3>
                    <>
                        <Divider />
                        <CheckboxGroup options={plainOptions} value={checkedList} onChange={onChange} />
                    </>
                </div>
            </div>
            <div className="content-chunk">
                <ItemsBasket />
            </div>
        </div>
    )
};

export default CreateInvoice;