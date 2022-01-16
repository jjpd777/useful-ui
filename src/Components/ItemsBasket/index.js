
import React, { useState, useEffect } from "react";
import Basket from "./Basket";
import { Dialog, Pane, Button, Badge, Overlay } from 'evergreen-ui';
import { Layout, Card, Divider, Space, Tag } from 'antd';



function ItemsBasket() {
    const [items, setItems] = useState([]);
    const [isShown, setIsShown] = useState(false);

    const sumBasket = () => {
        var total = 0;
        items.map(x => {
            total += x.itemUnitPrice * x.itemQuantity;
        });
        return total;
    };

    return (
        <>
            <Basket items={items} setItems={setItems} />
            {/* <SideSheet isShown={isShown} onCloseComplete={() => setIsShown(false)}>
                <div className="content-chunk">
                    <Badge color={"blue"}>Items Summary</Badge>
                </div>
                <Paragraph margin={40}>The total in your basket is ${sumBasket()}</Paragraph>
            </SideSheet> */}
            <div className="content-chunk">
                <Button height={48} intent={"success"} onClick={() => setIsShown(true)}>See summary</Button>
            </div>
            <Pane>
      <Dialog
        isShown={isShown}
        title="Invoice #78863"
        onCloseComplete={() => setIsShown(false)}
        confirmLabel="Custom Label"
      >
        Dialog content
      </Dialog>

    </Pane>
        </>
    )
};

export default ItemsBasket;