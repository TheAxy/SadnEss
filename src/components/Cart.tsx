import React, { useEffect, useCallback, useState } from 'react'
import { observer } from 'mobx-react';
import Store from '../store/store';
import MyButton from '../UI/MyButton';
import '../style/Cart.css'
import ItemCart from './ItemCart';
import cartStore from '../store/cartStore';
import { Link } from 'react-router-dom';
import EmptyETC from './EmptyETC';
import Modal from './Modal';
import { Input } from '../UI/Input';

const Cart = observer(() => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const OpenModal = useCallback(() => {
    const modal = document.querySelector('.modal')
    modal?.classList.add(`modal-active`)
  },[])

  const Submit = useCallback(() => {
    const modal = document.querySelector('.modal')
    modal?.classList.remove(`modal-active`)
  },[])

  const ChangePhone = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    let inp;
    inp = e.target.value.replace(/[^+\d.]/g, '')
    setPhone(inp) 
  }, [])


  return (
    <main className='cart'>
      <div className="cart__container">
          <div className="cart__row">
            {cartStore.cartList.length > 1 
              ? <><div className="cart__center">
                {cartStore.cartList.map(obj => {
                    // if (obj.brand.length > 1) return <ItemCart brand={obj.brand} title={obj.title} price={obj.price} key={index} onClick={() => cartStore.deleteCart(obj)}/>
                    if (obj.title.length > 1) return <ItemCart item={JSON.parse(JSON.stringify(obj))} key={obj.id}/>
                  })
                }
              </div>
              <div className="cart__bottom">
                <div className="cart__price">Итог: {cartStore.finalPrice} руб.</div>
                {<MyButton type='button' className='cart__button' onClick={OpenModal} >Сделать заказ</MyButton>} 
              </div></>
              : <EmptyETC className="cart__empty">Корзина пуста</EmptyETC>
            }
          </div>  
      </div>
      <Modal>
        <div className="cart-modal">
          <h2 className="cart-modal__title">Заполните данные</h2>
          <div className="cart-modal__row">
            <label className='cart-modal__label'>Введите имя</label>
            <Input className={'cart-modal__input'} placeholder="Имя" value={name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}></Input>
            <label className='cart-modal__label'>Введите email</label>
            <Input className={'cart-modal__input'} placeholder="Email" value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}></Input>
            <label className='cart-modal__label'>Введите телефон</label>
            <Input className={'cart-modal__input'} placeholder="Телефон" value={phone} onChange={ChangePhone}></Input>
          </div>
          <div className="cart-modal__bot">
            <MyButton className='cart-modal__btn' type={'button'} onClick={Submit}>Купить</MyButton>
            <div className="cart-modal__price">{cartStore.finalPrice} руб.</div>
          </div>
        </div>
      </Modal>
    </main>
  )
})

export default Cart