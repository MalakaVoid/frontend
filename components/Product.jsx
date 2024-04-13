// "use client"

import React, { useState, useEffect } from 'react'
import styles from '@/styles/Product.module.scss'

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
            <div className={styles.product}>
                <div className={styles.product__image}>
                    <img src={product_info.image_url} alt="" />
                </div>
                <h3 className={styles.product__title}>
                    {product_info.title}
                </h3>
                <p className={styles.product__desc}>
                    {product_info.description}
                </p>
                <div className={styles.product__price}>
                    Цена: {new Intl.NumberFormat("ru").format(product_info.price)}₽
                </div>
                {
                    !!quantity ? (
                        <div className={styles.product__amount}>
                            <button className={`${styles.product__button} ${styles.product__button_increase}`} onClick={handleDecrease}>
                                -
                            </button>
                            <input name='quantity' type="number" value={quantity} onChange={handleChangeQty} onBlur={handleQtyFoucsOut} className={styles.product__counter} />
                            <button className={`${styles.product__button} ${styles.product__button_decrease}`}  onClick={handleIncrease}>
                                +
                            </button>
                        </div>
                    ) :
                    (
                        <div className={styles.product__buttons}>
                            <button className={`${styles.product__button} ${styles.product__button_buy}`} onClick={handleBuy}>
                                КУПИТЬ
                            </button>
                        </div>
                    )
                }
            </div>
        </>
    )
}
