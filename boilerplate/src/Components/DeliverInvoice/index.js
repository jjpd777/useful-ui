import React, { useState, useEffect } from "react";
import 'antd/dist/antd.css';
import { Layout, Card, Divider } from 'antd';
import { Table, SegmentedControl} from 'evergreen-ui';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import {sampleDetails} from "./DataQuery";
import { moneyFormatter } from "../../Utils/MoneyFormat";
import {
    BankOutlined
  } from '@ant-design/icons';


const { Header, Content, Footer, Sider } = Layout;


function DeliverInvoice() {

    const [options] = useState([
        {label: "Bank Transfer", value: "BT"},
        {label: "Card Payment", value: "CP"},
        {label: "Check Payment", value: "CH"},
    ]);

    const [value, setValue] = useState("BT");

    return (
        <div className="delivered-invoice-container">
            <div className="delivered-summary">
                    <Content style={{ margin: '24px 16px 0' }}>
                        <div>
                            <h2>Created by Castillo INC</h2>
                            <h3>Invoice for the aformentioned specifics.</h3>
                            <h3>Billed to: GUATESPICES INC</h3>
                            <h3>Billed on: December 21 2021</h3>
                            <h3>Due on: January 19 2022</h3>
                        </div>
                    <Table>
            <Table.Head>
                {/* <Table.SearchHeaderCell /> */}
                <Table.TextHeaderCell>Description</Table.TextHeaderCell>
                <Table.TextHeaderCell>Quantity</Table.TextHeaderCell>
                <Table.TextHeaderCell>Price</Table.TextHeaderCell>
                <Table.TextHeaderCell>Total</Table.TextHeaderCell>
            </Table.Head>
            <Table.Body >
                {sampleDetails.basket.map((x) => (
                    <Table.Row key={x.uid} >
                        <Table.TextCell>
                            <b>{x.item}</b>
                        </Table.TextCell>
                        <Table.TextCell >
                            {x.units}
                        </Table.TextCell>
                        <Table.TextCell isNumber>
                            {moneyFormatter.format(x.price)}
                        </Table.TextCell>
                        <Table.TextCell isNumber>
                            {moneyFormatter.format(x.price * x.units)}
                        </Table.TextCell>
                    </Table.Row>
                ))}
            </Table.Body>
        </Table>
                    </Content>
            </div>
            <div className="payments-display">
            <Card className="payments-card" title="How would you like to pay?" >
                <div>
                    <SegmentedControl width={740} options={options} value={value} onChange={(value) => setValue(value)}/>
                </div>
                <Divider/>
                <h4>To pay via domestic ACH or wire, transfer funds to the following account:</h4>
                <h3><b>Bank Name:</b></h3>
                <h4>WELLS FARGO BANK, N.A.</h4>
                <h3><b>Routing Number:</b></h3>
                <h4>121000248</h4>
                <h3><b>Account Number:</b></h3>
                <h4>40630143094065474</h4>
                <h3><b>Swift:</b></h3>
                <h4>WFBIUS6S</h4>
                <Footer style={{ textAlign: 'center' }}>Saldada ©2022 Created by Latinos</Footer>
            </Card>
            </div>
        </div>
    )
};


export default DeliverInvoice;