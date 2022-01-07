import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Combobox } from "evergreen-ui";
import ItemsBasket from "../ItemsBasket/index";
import { sampleCustomers } from "./DataQuery";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;





function CreateInvoice() {

    return (
        <div className="invoice-box">
            <h2>Create an Invoice</h2>
            <br></br>
            <div className="fields-description">
                <div>
          Please chose your desired customer
                <Combobox
                    items={sampleCustomers.map(x => x.name)}
                    onChange={selected => console.log(selected)}
                    placeholder="Choose a customer"
                    autocompleteProps={{
                        // Used for the title in the autocomplete.
                        name: 'Yolo'
                    }}
                />
                </div>
            </div>
            <div className="content-chunk">
                <ItemsBasket />
            </div>
        </div>
    )
};

export default CreateInvoice;