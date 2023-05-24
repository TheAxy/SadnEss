import React, { FC, memo, useCallback, useEffect, useRef } from 'react'
import Store from '../store/store'
import Item from './Item'
import '../style/ItemList.css'
import { observer } from 'mobx-react'
import cartStore from '../store/cartStore'
import Header from './Header'
import { stringify } from 'querystring'



const ItemList: FC = observer(() => {

  const Buy = useCallback((itm: object) => {
    cartStore.setCart(itm)
  }, [])

  useEffect(() => {
    Store.updateData()
    
  }, [])
  

  return (
    <div className='shop-list'>
        {Store.sortedShopItems.map(obj => 
          <Item title={obj.title} price={obj.price} key={obj.id} url={obj.url} image={obj.image} onClick={() => Buy(obj)}/>
        )}
    </div>
  )
})

export default ItemList