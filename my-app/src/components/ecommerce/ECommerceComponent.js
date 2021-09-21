import React from "react";
import ShoppingListComponent from "../shoppinglist/ShoppingListComponent";

import './ECommerce.css';

function ECommerceComponent() {
    return (
        <div className="ECommerceComponent">
            <h2 className="ECommerceTitle">Shopping List</h2>
            <ShoppingListComponent />
        </div>
    )
}

export default ECommerceComponent;