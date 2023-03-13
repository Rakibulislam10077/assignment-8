import React from 'react';
import './Product.css'

const Product = ({ product, handleAddToCart }) => {
    const { name, price, img, id } = product
    return (
        <div className='ev_product'>
            <img src={img} alt="" />
            <p>id: {id}</p>
            <h3>Name: {name}</h3>
            <h4>Price: {price}</h4>
            <button onClick={() => handleAddToCart(product)} className='button'>Add To Cart</button>
        </div>
    );
};

export default Product;