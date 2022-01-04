
import React, {useState, useEffect} from "react";
import Basket from "./Basket";

function ItemsBasket(){
    const [items, setItems] = useState([]);

    return(
        <Basket items={items} setItems = {setItems}/>
    )
};

export default ItemsBasket;