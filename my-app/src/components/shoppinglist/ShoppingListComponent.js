import React from "react";
import './ShoppingList.css';

function ShoppingListComponent() {
    const shoppingItems = ['hello', 'world']
    return (
        <ul className="ShoppingList">{shoppingItems.map((item, i) => 
            <li key={item + i}>{item}</li> // Convert into a ShoppingListItemComponent
        )}</ul>
    )
}

export default ShoppingListComponent;