import React from 'react';
import './Cart.css';

const Cart = ({ cart, handleRemoveProduct }) => {

    return (
        <div>
            {
                cart.map(product => <p className='cartBtn'>{product.name} <button onClick={() => handleRemoveProduct(product)}>X</button></p>)
            }
        </div>
    );
};

export default Cart;