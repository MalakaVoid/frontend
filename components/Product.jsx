import React from 'react'

export default function Product({product_info}) {
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
            <div className="product__buttons">
                <button className="product__button product__button-buy">
                    КУПИТЬ
                </button>
            </div>
            <div className="product__amount">
                <input type="hidden" name="id" value={product_info.id} />
                <button className="product__button product__button-increase">
                    -
                </button>
                <input disabled type="number" value={1} className='product__counter'/>
                <button className="product__button product__button-decrease">
                    +
                </button>
            </div>
        </div> 
    </>
  )
}
