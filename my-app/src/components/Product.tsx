import { observer } from 'mobx-react'
import React, { FC, useCallback, useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Store from '../store/store'
import EmptyETC from './EmptyETC'
import '../style/Product.css'
import MyButton from '../UI/MyButton'
import cartStore from '../store/cartStore'

interface IItem{
    id: number,
    title: string,
    price: string,
    image: string,
    onClick?: any,
}

type IItemObj = {
    data: object
}

const prepareProduct = (id: number) => {
    return id;
}

const Product: FC = observer(() => {
    const params = useParams()

    const Buy = useCallback((itm: object) => {
        cartStore.setCart(itm)
    }, [])
    
  return (
    <main className='product'> 
        <div className="cart-icon _link">
            <Link className="cart-icon__main _link-btn" to="/cart">Корзина</Link>
            {cartStore.cartCount > 0 &&
                <div className="cart-icon__enums">{cartStore.cartCount}</div>
            }
      </div>
        <div className="container">
            <div className="product__row">
                <div className="product__head">
                    <div className="product__image">
                        <img src={Store.shopItems.filter(el => params.url === el.url)[0].image} alt="Катринка продукта"></img>
                    </div>
                    <div className="product__name">
                        <h1 className="product__title">{Store.shopItems.filter(el => params.url === el.url)[0].title}</h1>
                        <div className="product__description">{Store.shopItems.filter(el => params.url === el.url)[0].description}</div>
                        <div className="product__foot">
                            <div className="product__price">{Store.shopItems.filter(el => params.url === el.url)[0].price} <span>₽ / шт.</span></div>
                            <MyButton type='button' className='product__button' onClick={() => Buy(Store.shopItems.filter(el => params.url === el.url)[0])}>Купить</MyButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </main>
  )
})

export default Product