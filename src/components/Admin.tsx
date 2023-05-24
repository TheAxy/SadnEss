import { observer } from 'mobx-react'
import React, { useCallback, useEffect, useState } from 'react'
import adminStore from '../store/adminStore'
import Store from '../store/store';
import { Link } from 'react-router-dom';
import '../style/Admin.css'
import MyButton from '../UI/MyButton';
import Modal from './Modal';

const Admin = observer(() => {
  const [ids, setIds] = useState(-1)

  useEffect(() => {
    Store.updateData()
  }, [])
  
  
  const DeleteItem = useCallback((id:number, e:React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIds(id)
    const modal = document.querySelector('.modal')
    modal?.classList.add(`modal-active`)
  },[])
  
  const YesBtn = useCallback(() => {
    Store.deleteItem(ids)
    const modal = document.querySelector('.modal')
    modal?.classList.remove(`modal-active`)
  },[ids])

  const NoBtn = useCallback(() => {
    const modal = document.querySelector('.modal')
    modal?.classList.remove(`modal-active`)
  },[ids])
  

  return (
    <main className='section-admin'>
      <div className="container">
        <div className="admin__top">
          <h1 className="admin__title">Вся продукция</h1>
          <div className="admin__append-item"><Link to={`/admin/product/new`} className={'admin__append-item-btn btn'} type={'button'}>Добавить продукт</Link></div>
        </div>
        <div className="admin__row">
          {
            Store.shopItems.map(el => {
              return (
                <Link to={`/admin/product/${el.url}`} className={`admin__item item-admin`} key={el.id}>
                  <img className='item-admin__image' src={el.image} alt=""/>
                  <div className="item-admin__content">
                    <div className="item-admin__text">
                      <div className="item-admin__left">
                        <h2 className="item-admin__title">{el.title}</h2>
                        <div className="item-admin__category">{el.category}</div>
                      </div>
                      <div className="item-admin__buttons">
                        <div className="item-admin__price">{el.price} <span>₽ / шт.</span></div>
                        <a href='#' className="btn item-admin__delete _red" type={'button'} onClick={(e) => DeleteItem(el.id, e)}>
                          <span>Удалить</span>
                        </a>
                      </div>
                  </div>
                  </div>
                </Link>
            )})
          }
        </div>
      </div>
      
      <Modal>
        <div className="admin-modal">
          <div className="admin-modal__title">Вы уверены?</div>
          <div className="admin-modal__row">
            <MyButton className='admin-modal__btn _yes _red' type={'button'} onClick={YesBtn} >Да</MyButton>
            <MyButton className='admin-modal__btn _no _green' type={'button'} onClick={NoBtn}>Нет</MyButton>
          </div>
        </div>
      </Modal>
    </main>
  )
})

export default Admin