import React from "react";
import "./ShoppingListItem.css"

const ShoppingListItem = props => (
    <div>
        <li className="shoppingListItem">{props.itemName}</li>
        <button type="button" onClick={() => addItemToBasket(props.itemName)}>Add {props.itemName} to basket</button>
    </div>
)

function addItemToBasket(itemName) {
    alert("You have added an item to your basket: " + itemName)
};

export default ShoppingListItem;