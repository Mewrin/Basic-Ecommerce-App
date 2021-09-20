import React from "react";
import ShoppingListComponent from "../shoppinglist/ShoppingListComponent";

import './ECommerce.css';

function ECommerceComponent() {
    // on load get all possible shopping items 
    return (
        <div className="ECommerceComponent">
            <h2>Shopping List</h2>
            <ShoppingListComponent />
        </div>
    )
}

export default ECommerceComponent;