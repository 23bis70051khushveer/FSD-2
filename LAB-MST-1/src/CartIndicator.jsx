import React from 'react';

function CartIndicator({ count }) {
    return (
        <div className="cart-indicator">
            🛒 Total Items in Cart: {count}
        </div>
    );
}

export default CartIndicator;
