"use client"
import { useMask } from '@react-input/mask';
import React, { useState } from 'react';
export default function ShopCart() {

    const inputRef = useMask({ mask: '+7 (___) ___-__-__', replacement: { _: /\d/ }, showMask: true });
    const [cart, setCart] = useState({
        products: [],
        total: 0,
    });


  return (
    <>
        <div className="shop_cart">
            <h1 className="shop_cart__title">
                Добавленные товары
            </h1>
            <div className="shop_cart__items">
                {
                    data.map(item => {
                        return (
                            <>
                                <div className="shop_cart__item-name">{item.name}</div>
                                <div className="shop_cart__item-qty">x{item.quantity}</div>
                                <div className="shop_cart__item-price">{item.price} ₽ </div>
                            </>
                        )
                    })
                }
            </div>
            <div className="shop_cart__order">
                <input className='shop_cart__order-phone' ref={inputRef} />
                <button className="shop_cart__order-button">
                    Заказать
                </button>
            </div>
        </div>
    </>
  )
}
