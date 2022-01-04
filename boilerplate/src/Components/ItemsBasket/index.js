
import React, { useState, useEffect } from "react";
import Basket from "./Basket";
import { SideSheet, Paragraph, Button, Badge } from 'evergreen-ui';


function ItemsBasket() {
    const [items, setItems] = useState([]);
    const [isShown, setIsShown] = useState(false);

    const sumBasket = ()=>{
        var total = 0;
        items.map(x=>{
            total+= x.itemUnitPrice * x.itemQuantity;
        });
        return total;
    };
    
    return (
        <>
            <Basket items={items} setItems={setItems} />
            <SideSheet isShown={isShown} onCloseComplete={() => setIsShown(false)}>
                <div className="content-chunk">
                <Badge color={"blue"}>Items Summary</Badge>
                </div>
                <Paragraph margin={40}>The total in your basket is ${sumBasket()}</Paragraph>
            </SideSheet>
            <div className="content-chunk">
            <Button onClick={() => setIsShown(true)}>See summary</Button>
            </div>
        </>
    )
};

export default ItemsBasket;