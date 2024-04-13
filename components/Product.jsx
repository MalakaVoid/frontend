// "use client"

import React, { useState, useEffect } from 'react'

export default function Product({ product_info, cart, changeCart }) {

    const [quantity, setQuantity] = useState(cart?.products?.find(item =>
        item.id === product_info.id) ?
        cart.products.find(item => item.id === product_info.id).qty :
        0);

    useEffect(() => {
        if (cart.products.find(item => item.id === product_info.id)) {
            setQuantity(cart.products.find(item => item.id === product_info.id).qty);
        } else {
            setQuantity(0);
        }
    }, [cart])

    const handleBuy = (e) => {
        setQuantity(1);
        changeCart(product_info, 1);
    }

    const handleIncrease = (e) => {
        setQuantity(prev => prev + 1);
        changeCart(product_info, quantity + 1);
    }

    const handleDecrease = (e) => {
        setQuantity(prev => prev - 1);
        changeCart(product_info, quantity - 1);
    }

    const handleQtyFoucsOut = (e) => {
        let userValue = parseInt(e.target.value) ? parseInt(e.target.value) : 0;
        setQuantity(userValue);
        changeCart(product_info, userValue);
    }

    const handleChangeQty = (e) => {
        if (e.target.value === "") {
            setQuantity(" ");
            return;
        }

        let userValue = parseInt(e.target.value);
        setQuantity(userValue);
    }

    return (
        <>
            <div className="product">
                <div className="product__image">
                    <img src="/monke.png" alt="" />
                </div>
                <h3 className="product__title">
                    {product_info.title}
                </h3>
                <p className="product__desc">
                    {product_info.description}
                </p>
                <div className="product__price">
                    Цена: {product_info.price}₽
                </div>
                {
                    !!quantity ? (
                        <div className="product__amount">
                            <button className="product__button product__button-increase" onClick={handleDecrease}>
                                -
                            </button>
                            <input name='quantity' type="number" value={quantity} onChange={handleChangeQty} onBlur={handleQtyFoucsOut} className='product__counter' />
                            <button className="product__button product__button-decrease" onClick={handleIncrease}>
                                +
                            </button>
                        </div>
                    ) :
                    (
                        <div className="product__buttons">
                            <button className="product__button product__button-buy" onClick={handleBuy}>
                                КУПИТЬ
                            </button>
                        </div>
                    )
                }
            </div>
        </>
    )
}
