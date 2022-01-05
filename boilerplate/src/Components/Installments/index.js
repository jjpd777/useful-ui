import React, { useState } from "react";
import { Table } from 'evergreen-ui';
import { DatePicker, Space } from 'antd';
import { moneyFormatter } from "../../Utils/MoneyFormat";

function Installments() {

    const [items, setItems] = useState([
        { uid: 1, price: 55, dueDate: "" },
        { uid: 2, price: 75, dueDate: "" },
        { uid: 3, price: 105, dueDate: "" },
    ]);

    const updateTime = (d, ds, item) => {
        console.log(d, "time object");
        setItems(prevState => (
            prevState.map(prev =>
                prev.uid === item.uid ? { ...prev, dueDate: ds } : prev)
        ));
    }

    const datePickerUI = (item) => {
        return (
            <Space direction="vertical" size={12}>
                <DatePicker onChange={
                    (dateObject, dateString) => {
                        updateTime(dateObject, dateString, item)
                    }
                }
                />
            </Space>
        )
    };

    console.log(items)

    return (
        <div className="date-picker">
            <Table>
                <Table.Head>
                    {/* <Table.SearchHeaderCell /> */}
                    <Table.TextHeaderCell>Installment Value</Table.TextHeaderCell>
                    <Table.TextHeaderCell>Due date:</Table.TextHeaderCell>
                </Table.Head>
                <Table.Body >
                    {items.map((x) => (
                        <Table.Row key={x.uid} >
                            <Table.TextCell>
                                {moneyFormatter.format(x.price)}
                            </Table.TextCell>
                            <Table.TextCell >
                                {datePickerUI(x)}
                            </Table.TextCell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </div>
    )
};

export default Installments;