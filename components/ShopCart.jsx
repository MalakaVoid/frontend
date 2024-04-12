"use client"
import { useMask } from '@react-input/mask';
import React from 'react';
export default function ShopCart() {

    const inputRef = useMask({ mask: '+7 (___) ___-__-__', replacement: { _: /\d/ }, showMask: true });

    const data = [
        {
            id: 1,
            name: 'Apple',
            price: 10,
            quantity: 1
        },
        {
            id: 2,
            name: 'Apple 2',
            price: 9000,
            quantity: 21
        },
        {
            id: 3,
            name: 'Apple 3',
            price: 1000,
            quantity: 3
        }
    ];

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
