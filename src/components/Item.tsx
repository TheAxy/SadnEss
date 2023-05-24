import React, { FC, memo } from 'react'
import '../style/Item.css'
import MyButton from '../UI/MyButton'
import { Link } from 'react-router-dom'

interface IItem{
  title: string,
  url: string,
  price: string,
  image: string,
  onClick?: any,
}

const Item: FC<IItem> = memo(({url, title, price, image, onClick}) => {

  return ( 
    <div className="shop-item">
      <Link to={`product/${url}`} className='shop-item__link'>
        <div className="shop-item__up">
          <div className="shop-item__img">
            <img src={image} alt="Изображение"/>
          </div>
        </div>
        <h2 className="shop-item__title">{title}</h2>
        <div className="shop-item__price">{price} <span>₽ / шт.</span></div>
      </Link>
        <div className="shop-item__bottom">
          <MyButton type='button' className='shop-item__button' onClick={onClick}>В корзину</MyButton>
        </div>
    </div>
  )
})

export default Item