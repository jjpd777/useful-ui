import React, { useState, useEffect } from "react";
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';
import { Table, Badge} from 'evergreen-ui';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import {sampleDetails} from "./DataQuery";
import { moneyFormatter } from "../../Utils/MoneyFormat";

const { Header, Content, Footer, Sider } = Layout;

function DeliverInvoice() {
    return (
        <div className="delivered-invoice-container">
            <div className="delivered-summary">
                    <Content style={{ margin: '24px 16px 0' }}>
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
                <h3>This is the text to be displayed</h3>
            </div>
        </div>
    )
}

export default DeliverInvoice;