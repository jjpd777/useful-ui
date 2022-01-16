
import React, { useState, useEffect } from "react";
import { Table, TextInput, Button } from 'evergreen-ui';
import { moneyFormatter } from "../../Utils/MoneyFormat";
import { CloseCircleOutlined, PlusOutlined } from '@ant-design/icons';
import CurrencyInput from 'react-currency-input-field';



function Basket({ items, setItems }) {
    const initialState = () => {
        return {
            uid: Date.now(),
            itemName: "",
            itemQuantity: 0,
            itemUnitPrice: 0,
            itemSubTotal: 0,
        }
    };


    useEffect(() => {
        if (items.length < 1) setItems([initialState()]);
    }, [items]);

    const insertItem = () => {
        setItems(prevState => [...prevState, initialState()]);
    };

    const deleteItem = (item) => {
        setItems(prevState => (
            prevState.filter(prev =>
                prev.uid !== item.uid)
        ));
    };

    const updateNameInput = (item, value) => {
        setItems(prevState => (
            prevState.map(prev =>
                prev.uid === item.uid ? { ...prev, itemName: value } : prev)
        ));
    };

    const updateQuantityInput = (item, value) => {
        setItems(prevState => (
            prevState.map(prev =>
                prev.uid === item.uid ? { ...prev, itemQuantity: value } : prev)
        ));
    };

    const updatePriceInput = (item, value) => {
        setItems(prevState => (
            prevState.map(prev =>
                prev.uid === item.uid ? { ...prev, itemUnitPrice: value } : prev)
        ));
    };

    const computeSubTotal = (item) => {
        return moneyFormatter.format(item.itemQuantity * item.itemUnitPrice);
    };

    console.log(items);



    return (
        <Table>
            <Table.Head>
                <Table.TextHeaderCell className="basket-name-col">Product Description</Table.TextHeaderCell>
                <Table.TextHeaderCell className="basket-2-col">Quantity</Table.TextHeaderCell>
                <Table.TextHeaderCell className="basket-2-col"> Price</Table.TextHeaderCell>
                <Table.TextHeaderCell>Sub-total</Table.TextHeaderCell>
                <Table.TextHeaderCell className="basket-2-input"></Table.TextHeaderCell>
            </Table.Head>
            <Table.Body >
                {items.map((x) => (
                    <Table.Row key={x.uid} >
                        <Table.TextCell className="basket-name-col">
                            <TextInput className="basket-name-input" onChange={e => updateNameInput(x, e.target.value)} value={x.itemName} />
                        </Table.TextCell>
                        <Table.TextCell >
                            <TextInput className="basket-2-input" type="number" onChange={e => updateQuantityInput(x, e.target.value)} value={x.itemQuantity} />
                        </Table.TextCell>
                        <Table.TextCell isNumber>
                            <TextInput className="basket-3-input" type="number" onChange={e => updatePriceInput(x, e.target.value)} value={x.itemUnitPrice} />
                        </Table.TextCell>
                        <Table.TextCell isNumber>
                            {computeSubTotal(x)}
                        </Table.TextCell>
                        <Table.TextCell className="basket-2-input" isNumber>
                            <CloseCircleOutlined style={{ color: "red" }} onClick={() => { deleteItem(x) }} />
                        </Table.TextCell>
                    </Table.Row>
                ))}
                <Table.Row>
                    <Table.TextCell className="bottom-add-col">
                        <Button className="add-btn" color={"green"} onClick={() => { insertItem() }} > <PlusOutlined />Nuevo Item</Button>
                    </Table.TextCell>
                    <Table.TextCell></Table.TextCell>
                    <Table.TextCell className="basket-2-input"></Table.TextCell>
                    <Table.TextCell className="basket-3-input" ><b>Total</b></Table.TextCell>
                    <Table.TextCell isNumber> {moneyFormatter.format(456700)}</Table.TextCell>
                    <Table.TextCell className="basket-2-input"> </Table.TextCell>
                </Table.Row>
            </Table.Body>
        </Table>
    )
};

export default Basket;