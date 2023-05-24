import React, { FC, memo, useEffect, useState } from 'react'
import cartStore from '../store/cartStore'
import '../style/Item.css'
import '../style/ItemCart.css'
import MyButton from '../UI/MyButton'
import { Link } from 'react-router-dom'

interface IItem{
  id: number,
  title: string,
  url: string,
  price: string,
  image: string,
  count: number,
  onClick?: any,
}
interface IObj{
  item: IItem
}



const ItemCart: FC<IObj> = memo(({item}) => {

  const [disable, setDisable] = useState<boolean>(false)

  useEffect(() => {
    cartStore.update()
  }, [])

  useEffect(() => {
    if (item.count <= 1) setDisable(true)
    else setDisable(false)
  }, [item.count])
  
  return (
    <main className='shop-item cart-item'>
        <div className="shop-item__up cart-item__up">
          <Link to={`../product/${item.url}`} className="shop-item__img cart-item__img">
            <img src={item.image} alt=""/>
          </Link>
        </div>  
        <div className="shop-item__bottom cart-item__bottom">
          <div className="cart-item__text">
            <h2 className="shop-item__title cart-item__title">{item.title}</h2>
            <div className="shop-item__price cart-item__price">Цена: {item.price} руб.</div>
          </div>
          <div className="cart-item__counter">
            <MyButton disabled={disable} type='button' className='cart-counter__minus' onClick={() => cartStore.decreaseCount(item)}>-</MyButton>
            <div className="cart-item__count">{item.count}</div>
            <MyButton type='button' className='cart-counter__plus' onClick={() => cartStore.increaseCount(item)}>+</MyButton>
          </div>
          <MyButton type='button' className='shop-item__button button-cart _red' onClick={() => cartStore.deleteCart(item)}>Удалить</MyButton>
        </div>
    </main>
  )
})

export default ItemCart