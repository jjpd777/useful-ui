
import React, { useState, useEffect } from "react";
import { Table, Badge} from 'evergreen-ui';
import { moneyFormatter } from "../../Utils/MoneyFormat";
import {sampleInvoices} from "./DataQuery";



function InvoicesTable({ items, setItems }) {

    const styleStatus = (input)=>{
        const styles = [
            {status: "Cancelled", color: "red"},
            {status: "Pending", color: "yellow"},
            {status: "Charged", color: "green"}]
        return styles.find(x=> x.status === input).color;
    }
    return (
        <>
        <h1>Transactions</h1>
        <Table>
            <Table.Head>
                {/* <Table.SearchHeaderCell /> */}
                <Table.TextHeaderCell>Amount</Table.TextHeaderCell>
                <Table.TextHeaderCell>Created at</Table.TextHeaderCell>
                <Table.TextHeaderCell>Buyer</Table.TextHeaderCell>
                <Table.TextHeaderCell>Vendor</Table.TextHeaderCell>
                <Table.TextHeaderCell>Status</Table.TextHeaderCell>
            </Table.Head>
            <Table.Body >
                {sampleInvoices.map((x) => (
                    <Table.Row key={x.uid} >
                        <Table.TextCell>
                            <b>{moneyFormatter.format(x.total)}</b>
                        </Table.TextCell>
                        <Table.TextCell >
                            {x.created}
                        </Table.TextCell>
                        <Table.TextCell isNumber>
                            {x.buyer}
                        </Table.TextCell>
                        <Table.TextCell isNumber>
                            {x.vendor}
                        </Table.TextCell>
                        <Table.TextCell isNumber>
                            <Badge color={styleStatus(x.status)} marginRight={8}>
                                {x.status}
                            </Badge>
                        </Table.TextCell>
                    </Table.Row>
                ))}
            </Table.Body>
        </Table>
        </>
    )
};

export default InvoicesTable;