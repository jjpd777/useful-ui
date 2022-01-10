import React, { useState, useEffect } from "react";
import 'antd/dist/antd.css';
import { Layout, Card, Divider, Space, Button } from 'antd';
import { Table, TextInputField } from 'evergreen-ui';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { sampleDetails } from "./DataQuery";
import { moneyFormatter } from "../../Utils/MoneyFormat";
import * as Icon from 'react-bootstrap-icons';
import {
    BankOutlined, CreditCardOutlined, WalletOutlined, LockOutlined, CheckCircleFilled
} from '@ant-design/icons';

import Visa from "../../Utils/visa-logo.png";
import MasterCard from "../../Utils/mastercard-logo.png";
import Amex from "../../Utils/amex-logo.png";




const { Header, Content, Footer, Sider } = Layout;


function DeliverInvoice() {

    const paymentOpts = [
        { val: "Card Payment" },
        { val: "Bank Transfer" },
        { val: "Check Payment" }
    ];
    

    const [value, setValue] = useState(paymentOpts[0]);

    const selectIcon = (x) => {
        if (x === "Bank Transfer") return <BankOutlined />
        else if (x === "Card Payment") return <CreditCardOutlined />
        else return <WalletOutlined />;
    }

    return (
        <div className="delivered-invoice-container">
            <div className="delivered-summary">
                <Content style={{ margin: '24px 16px 0' }}>
                    <div>
                        <h2>Created by Castillo INC</h2>
                        <h3><b>Invoice details for invoice #757</b></h3>
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
                    <div className="bank-card-check">
                        <Space size={10} align="end">
                            {paymentOpts.map(x =>
                                <Button className="payments-options-btn"
                                    type={x.val === value.val ? "primary" : ""}
                                    onClick={() => setValue(x)}
                                >
                                    {selectIcon(x.val)}{x.val}
                                </Button>
                            )}
                        </Space>
                    </div>
                    
                    <Divider />
                    {value.val === "Card Payment" &&
                        <>
                            <TextInputField
                                className="cc-number"
                                label="Card number"
                                hint = {"secured by Rapyd"}
                                placeholder="Card number"
                                inputHeight="40px"
                                required={true}
                            />
                            <div className="payments-credit-card">
                                <TextInputField
                                    className="cc-secondary"
                                    label="Expiration date"
                                    placeholder="Expiration date"
                                    inputHeight="40px"
                                    inputWidth="200px"
                                    required={true}
                                />
                                <div>
                                    <TextInputField
                                        className="cc-secondary"
                                        label="CVC"
                                        required
                                        placeholder="CVC security code"
                                        inputHeight="40px"
                                        inputWidth="200px"
                                    />
                                </div>
                            </div>
                            <div>
                                <br></br>
                                <h3>All transactions are secured and encrypted <Icon.ShieldLock /></h3>
                                <div className="box-logos">
                                    <img className="card-logos" src={Visa}></img>
                                    <img className="card-logos" src={MasterCard}></img>
                                    <img className="card-logos" src={Amex}></img>
                                </div>
                            </div>
                            <div className="pay-btn-box">
                            <Space>
                                <Button className="pay-btn"
                                    size="large"
                                    style={{color:"green",}}
                                    icon={<CheckCircleFilled/>}
                                >
                                   {"  Pay $500.00"} 
                                </Button>
                                </Space>
                        </div>

                        </>}
                    {value.val === "Bank Transfer" &&
                        <>
                            <h4>To pay via domestic ACH or wire, transfer funds to the following account:</h4>
                            <h3><b>Bank Name:</b></h3>
                            <h4>WELLS FARGO BANK, N.A.</h4>
                            <h3><b>Routing Number:</b></h3>
                            <h4>121000248</h4>
                            <h3><b>Account Number:</b></h3>
                            <h4>40630143094065474</h4>
                            <h3><b>Swift:</b></h3>
                            <h4>WFBIUS6S</h4>
                        </>}
                    {value.val === "Check Payment" &&
                        <>
                            <h4>Mail the check to the following address:</h4>
                            <h4>Attn: Balance Payments Inc.</h4>
                            <h4>2261 Market Street #4149</h4>
                            <h4>San Francisco, CA 94114</h4>
                            <h3><b>Make the check out to "Saldada Payments Inc". On check memo please add the following id: invoice-13375.</b></h3>
                        </>}
                    <Footer style={{ textAlign: 'center' }}>powered by Saldada</Footer>
                </Card>
            </div>
        </div>
    )
};


export default DeliverInvoice;