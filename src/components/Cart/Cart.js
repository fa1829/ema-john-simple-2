import React from 'react';

const Cart = (cart) => {
    console.log(cart)
    return (
        <div>
            <h4> Order summary</h4>
            <p> Selected items: {cart.cart.length}</p>
        </div>
    );
};

export default Cart;