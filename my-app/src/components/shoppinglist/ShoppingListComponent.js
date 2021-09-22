import React from "react";
import './ShoppingList.css';
import ShoppingListItem from "../shoppinglistitem/ShoppingListItemComponent";

function ShoppingListComponent() {
    // Todo - Call off to an API and retrieve a list of items (item name, cost, how many available - could be a basic fastAPI)
    const shoppingItems = ['iPhone 13', 'iPad mini 6th generation', 'Macbook Pro'];
    return (
        <ul className="ShoppingList">
            { 
                shoppingItems.map((item, i) => (
                    <ShoppingListItem key={item + i} itemName={item }></ShoppingListItem>
                )) 
            }
        </ul>
    )
}

export default ShoppingListComponent;