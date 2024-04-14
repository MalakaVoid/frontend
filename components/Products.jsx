"use client"
import { useState, useEffect, useRef } from "react";
import Product from "./Product"
import ShopCart from "./ShopCart";
import Loader from "./Loader";
import Message from "./Message";
import styles from '@/styles/Products.module.scss';


export default function Products({ firstPage, pageSize }) {

    const [cart, setCart] = useState({ products: [] });
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(2);
    const [products, setProducts] = useState([]);
    const [message, setMessage] = useState(null);

    const elementRef = useRef(null);

    useEffect(() => {
        loadCart();
        setProducts(firstPage.items);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(onIntersection);
        if (observer && elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (observer) {
                observer.disconnect();
            }
        }

    }, [products]);

    function onIntersection(entries) {
        const firstEntry = entries[0];
        if (firstEntry.isIntersecting && hasMore) {
            fetchProducts();
        }
    }

    const clearCart = () => {
        setCart({ products: [] });
        localStorage.removeItem("cart");
    }

    const loadCart = () => {
        let oldCart = JSON.parse(window.localStorage.getItem('cart'))
        if (oldCart) {
            setCart(oldCart);
        }
    }

    const changeCart = (product, qty) => {
        if (qty === 0) {
            let newCart = {
                products: cart.products.filter(item => item.id !== product.id),
            };
            setCart(newCart);
            window.localStorage.setItem('cart', JSON.stringify(newCart));
            return;
        }

        if (cart.products.find(item => item.id === product.id)) {
            const index = cart.products.findIndex(item => item.id === product.id);
            const newProducts = [...cart.products];
            newProducts[index].qty = qty;
            let newCart = { products: newProducts };
            setCart(newCart);
            window.localStorage.setItem('cart', JSON.stringify(newCart));
            return;
        }

        let newCart = {
            products: [
                ...cart.products,
                { id: product.id, title: product.title, price: product.price, image_url: product.image_url, qty: qty }
            ]
        };
        setCart(newCart);
        window.localStorage.setItem('cart', JSON.stringify(newCart));

    };

    const showMessage = (code, text) => {
        if (code === 1) {
            if (message) {

            }
            setMessage({ title: "УСПЕШНО", text: "Вы успешно оформили заказ." });
            return;
        }

        if (code === 0) {
            setMessage({ title: "ОШИБКА", text: text });
            return;
        }
    }

    const hideMessage = () => {
        setMessage(null);
    }

    const fetchProducts = async () => {

        const res = await fetch(
            "/api/products?" + new URLSearchParams({ page: page, page_size: pageSize }),
            { cache: 'no-store' }
        );
        const data = await res.json();

        if (data.amount == 0) {
            setHasMore(false);
        } else {
            setProducts(prev => [...prev, ...data.items]);
            setPage(prev => prev + 1);
            console.log(products);
        }

    }

    return (
        <>
            <ShopCart cart={cart} clearCart={clearCart} showMessage={showMessage} />
            <section className={styles.products}>
                {
                    products.map((product) => (
                        <Product key={product.id} product_info={product} cart={cart} changeCart={changeCart} />
                    ))
                }
            </section>
            {hasMore && <div className={styles.products__loader} ref={elementRef}><Loader /></div>}
            {message && <Message onClick={hideMessage} text={message.text} title={message.title} />}
        </>
    )
}
