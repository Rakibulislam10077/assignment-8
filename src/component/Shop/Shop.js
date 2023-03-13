import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import Product from '../product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        const url = `products.json`;
        fetch(`${url}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);


    const handleAddToCart = (selectedProduct) => {
        const exists = cart.find(product => product.id === selectedProduct.id)
        if (!exists) {
            const newCart = [...cart, selectedProduct];
            setCart(newCart)
        }
        else {
            alert('sorry!')
        }
    }
    const handleRemoveProduct = (removeItem) => {
        const rest = cart.filter(product => product.id !== removeItem.id)
        setCart(rest);
    }
    return (
        <div className='shop_container'>
            <div className='product_container'>
                {
                    products.map(product => <Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>)
                }
            </div>
            <div className='cart_container'>
                <Cart cart={cart} handleRemoveProduct={handleRemoveProduct}></Cart>
            </div>
        </div>
    );
};

export default Shop


