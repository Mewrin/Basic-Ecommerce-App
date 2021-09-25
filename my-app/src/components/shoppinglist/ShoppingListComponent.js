import React, { useEffect } from "react";
import ShoppingListItem from "../shoppinglistitem/ShoppingListItemComponent";
import './ShoppingList.css';
import { fetchShoppingList } from "./ShoppingListApi";
import { useState } from "react";

function ShoppingListComponent() {
    
    const [shoppingItems, setShoppingItems] = useState(null);

    useEffect(() => {
        const newItems = fetchShoppingList();
        setShoppingItems(newItems);
    });
    
    return (
        <ul className="ShoppingList">
            { 
                shoppingItems != null && shoppingItems.data != undefined && shoppingItems.data.length > 0 ? (
                    shoppingItems.data.map((item, i) => (
                        <ShoppingListItem key={item + i} itemName={item}></ShoppingListItem>
                    ))
                )
                : <p> No items currently available </p>
            }
        </ul>
    )
}

export default ShoppingListComponent;