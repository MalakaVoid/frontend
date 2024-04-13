// "use client"
"use client";
import { useMask } from '@react-input/mask';
import { useEffect } from 'react';
import styles from '@/styles/ShopCart.module.scss';


export default function ShopCart({ cart, clearCart, showMessage }) {

    const inputRef = useMask({ mask: '+7 (___) ___-__-__', replacement: { _: /\d/ }, showMask: true });

    useEffect(() => {
        const phone = window.localStorage.getItem('phone');
        inputRef.current.value = phone ? phone : '';
    }, [])

    const makeOrder = () => {
        let phoneNumber = inputRef.current.value;
        let regex = /^([+]?[0-9\s-\(\)]{3,25})*$/i;

        if (!regex.test(phoneNumber)) {
            inputRef.current.style.backgroundColor = 'red';
        }

        let cleanPhone = phoneNumber.replace(/[&\/\\#,+()$~%.'":*?<>{}-\s]/g, '');

        let order = {
            phone: cleanPhone,
            cart: cart.products.map((item) => { return { id: item.id, quantity: item.qty } })
        }

        makeOrderRequest(order);
    }

    const makeOrderRequest = async (order) => {
        const response = await fetch('http://localhost:3000/api/order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(order)
        });
        const data = await response.json();

        if (data.success === 1) {
            clearCart();
        }

        let text = data.error ? data.error : '';

        showMessage(data.success, text);
    }

    const onPhoneChange = () => {
        window.localStorage.setItem('phone', inputRef.current.value);
    }

    return (
        <>
            <div className={styles.shop_cart}>
                <h1 className={styles.shop_cart__title}>
                    Добавленные товары
                </h1>
                <div className={styles.shop_cart__items}>
                    {
                        cart.products.map(item => {
                            return (
                                <>
                                    <div className={styles.shop_cart__item_name}>{item.title}</div>
                                    <div className={styles.shop_cart__item_qty}>x{item.qty}</div>
                                    <div className={styles.shop_cart__item_price}>{new Intl.NumberFormat("ru").format(item.price * item.qty)} ₽ </div>
                                </>
                            )
                        })
                    }
                </div>
                <div className={styles.shop_cart__order}>
                    <input className={styles.shop_cart__order_phone} name='phone' onChange={onPhoneChange} ref={inputRef} />
                    <button className={styles.shop_cart__order_button} onClick={makeOrder}>
                        Заказать
                    </button>
                </div>
            </div>
        </>
    )
}
