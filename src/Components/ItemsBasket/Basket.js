
import React, { useState, useEffect } from "react";
import { Table, TextInput, Button} from 'evergreen-ui';
import { moneyFormatter } from "../../Utils/MoneyFormat";
import { CloseCircleOutlined, PlusOutlined } from  '@ant-design/icons';
import CurrencyInput from 'react-currency-input-field';



function Basket({ items, setItems }) {
    const initialState =()=> { 
        return{
        uid: Date.now(),
        itemName: "",
        itemQuantity: 0,
        itemUnitPrice: 0,
        itemSubTotal: 0,
    }};


    useEffect(() => {
        if (items.length < 1) setItems([initialState()]);
    }, [items]);

    const insertItem = ()=>{
        setItems(prevState => [...prevState, initialState() ]);
    };

    const deleteItem = (item)=>{
        setItems(prevState => (
            prevState.filter(prev=>
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
                {/* <Table.SearchHeaderCell /> */}
                <Table.TextHeaderCell>Name</Table.TextHeaderCell>
                <Table.TextHeaderCell>Quantity</Table.TextHeaderCell>
                <Table.TextHeaderCell>Price</Table.TextHeaderCell>
                <Table.TextHeaderCell>Sub-total</Table.TextHeaderCell>
                <Table.TextHeaderCell></Table.TextHeaderCell>
            </Table.Head>
            <Table.Body >
                {items.map((x) => (
                    <Table.Row key={x.uid} >
                        <Table.TextCell>
                            <TextInput width={200}  onChange={e => updateNameInput(x, e.target.value)} value={x.itemName} />
                        </Table.TextCell>
                        <Table.TextCell >
                            <TextInput type="number" width={100} onChange={e => updateQuantityInput(x, e.target.value)} value={x.itemQuantity} />
                        </Table.TextCell>
                        <Table.TextCell isNumber>
                            <TextInput type="number" width={100}  onChange={e => updatePriceInput(x, e.target.value)} value={x.itemUnitPrice} />
                        </Table.TextCell>
                        <Table.TextCell isNumber>
                            {computeSubTotal(x)}
                        </Table.TextCell>
                        <Table.TextCell isNumber>
                            <CloseCircleOutlined style={{color:"red"}} onClick={()=>{ deleteItem(x)}} />
                        </Table.TextCell>
                    </Table.Row>
                ))}
                <Table.Row>
                    <Table.TextCell>
                        <Button color={"green"} onClick={()=>{insertItem()}} > <PlusOutlined/>Add row</Button>
                    </Table.TextCell>
                    <Table.TextCell></Table.TextCell>
                    <Table.TextCell></Table.TextCell>
                    <Table.TextCell></Table.TextCell>
                    <Table.TextCell></Table.TextCell>
                </Table.Row>
            </Table.Body>
        </Table>
    )
};

export default Basket;