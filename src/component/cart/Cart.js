import React from 'react';

const Cart = ({ cart, handleRemoveProduct }) => {

    return (
        <div>
            {
                cart.map(product => <p>{product.name} <button onClick={() => handleRemoveProduct(product)}>X</button></p>)
            }
        </div>
    );
};

export default Cart;