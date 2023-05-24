import { observer } from 'mobx-react'
import React, { FC, useCallback, useEffect, useMemo, useState } from 'react'
import { Await, Link, useParams } from 'react-router-dom'
import Store from '../store/store'
import {Input, TextArea} from '../UI/Input'
import MyButton from '../UI/MyButton'
import adminStore from '../store/adminStore'
import '../style/ProductEdit.css'
import { Sort } from './Sorting'
import Modal from './Modal'

var url:any = null;

const ProductNew: FC = observer(() => {
    
  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [price, setPrice] = useState<string>('')
  const [add, setAdd] = useState<boolean>(false)
  const [category, setCategory] = useState<string>('')
  const [newCategory, setNewCategory] = useState<string>('')
  const [active, setActive] = useState<string>('')
  var params = useParams()

  useEffect(() => {
    adminStore.editTitle = title;
  }, [title])
  useEffect(() => {
    adminStore.editDescription = description
  }, [description])
  useEffect(() => {
    adminStore.editPrice = price
  }, [price])
  useEffect(() => {
    adminStore.editCategory = newCategory
  }, [newCategory])
  useEffect(() => {
    adminStore.editCategory = category
  }, [category])

  const ChangeTitle = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }, [])
  const ChangeDescription = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value)
  }, [])
  const ChangePrice = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    let inp;
    inp = e.target.value.replace(/[^ \d.]/g, '')
    setPrice(inp) 
  }, [])
  const ChangeCategory = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setNewCategory(e.target.value)
  }, [])
  const Category = useCallback((str:string) => {
    if (str === 'Добавить новую') setActive('_active')
    else {
      setCategory(str)
      setActive('_')
    }
  }, [])

  const ChangeFile = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    url = URL.createObjectURL({...e.target.files}[0])
    const image = document.querySelector('.product-edit-image__img')
    image?.setAttribute('src', url)
  }, [])
  
  const SaveDate = useCallback(() => {
    if (add === false) {
      setAdd(true)
      Store.shopItems.push({
        id: 0,
        url: '',
        title: '',
        price: '',
        category: '',
        urlCategory: '',
        description: '',
        image: ''
      })
      Store.shopItems[Store.shopItems.length - 1].id = Store.shopItems.length
      Store.shopItems[Store.shopItems.length - 1].category = adminStore.editCategory
      Store.shopItems[Store.shopItems.length - 1].title = adminStore.editTitle
      Store.shopItems[Store.shopItems.length - 1].description = adminStore.editDescription
      Store.shopItems[Store.shopItems.length - 1].price = adminStore.editPrice
      Store.shopItems[Store.shopItems.length - 1].url = Store.cyrToLat(adminStore.editTitle)
      Store.shopItems[Store.shopItems.length - 1].urlCategory = Store.cyrToLat(adminStore.editCategory)
      Store.shopItems[Store.shopItems.length - 1].image = url
    }
    else {
      Store.shopItems[Store.shopItems.length - 1].id = Store.shopItems.length
      Store.shopItems[Store.shopItems.length - 1].category = adminStore.editCategory
      Store.shopItems[Store.shopItems.length - 1].title = adminStore.editTitle
      Store.shopItems[Store.shopItems.length - 1].description = adminStore.editDescription
      Store.shopItems[Store.shopItems.length - 1].price = adminStore.editPrice
      Store.shopItems[Store.shopItems.length - 1].url = Store.cyrToLat(adminStore.editTitle)
      Store.shopItems[Store.shopItems.length - 1].urlCategory = Store.cyrToLat(adminStore.editCategory)
    }
    localStorage.setItem('shop', JSON.stringify(Store.shopItems))
    Store.updateData()
    const modal = document.querySelector('.modal')
    modal?.classList.add(`modal-active`)
  }, [add])

  const CloseModal = useCallback(() => {
    const modal = document.querySelector('.modal')
    modal?.classList.remove(`modal-active`)
  },[])
    
  return (
    <main className='section-product-edit'>
      <div className="container">
          <div className="product-edit__row">
            <div className="product-edit__image">
              <Input className="product-edit-image__input" type="file" accept="image/*" value='' onChange={ChangeFile}></Input>
              <img className="product-edit-image__img" src='' alt={params.url}/>
              <div className="product-edit-image__text">Нажмите и выберите картинку</div>
            </div>
            <div className="product-edit__centr">
              <div className="product-edit__category-wrap">
                <div className="product-edit__category">
                  <label className='product-edit__label'>Выберите категорию</label>
                  <Sort className="product-edit__sorting" disabled={true} defaultValue='Категория' arrOptions={[...Array.from(new Set([...JSON.parse(JSON.stringify(Store.shopItems))].map(el => el.category))), 'Добавить новую']} callback={Category}/>
                </div>
                <div className={`product-edit__category _right ${active}`}>
                  <label className={`product-edit__label`}>Введите новую категорию</label>
                  <Input className={`product-edit__title`} placeholder='Новая категория' type="text" value={newCategory} onChange={ChangeCategory}></Input>
                </div>
              </div>
              <label className='product-edit__label'>Название</label>
              <Input className='product-edit__title' placeholder='Название' type="text" value={title} onChange={ChangeTitle}></Input>
              <label className='product-edit__label'>Описание</label>
              <TextArea className='product-edit__description' placeholder='Описание' value={description} onChange={ChangeDescription}></TextArea>
              <label className='product-edit__label'>Цена</label>
              <Input className='product-edit__price' placeholder='Цена' type="text" value={price} onChange={ChangePrice}></Input>
              <div className="product-edit__centr-buttons">
                <MyButton type={'button'} className={'product-edit__button _green product-edit__button-green'} onClick={SaveDate} >Сохранить</MyButton>
                <Link to={`/admin`} className={'btn product-edit__button _red'} >Удалить</Link>
              </div>

            </div>
          </div>
        </div>
        <Modal>
          <div className="product-edit-modal">
            <h2 className="product-edit-modal__title">Успешно</h2>
            <div className="product-edit-modal__row">
              <MyButton className='admin-modal-modal__btn' type={'button'} onClick={CloseModal}>Закрыть</MyButton>
            </div>
          </div>
        </Modal>
      </main>
  )
})

export default ProductNew