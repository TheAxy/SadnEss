import { observer } from 'mobx-react';
import React, { useEffect, useState } from 'react';
import './style/App.css';
import ItemList from './components/ItemList';
import Store from './store/store';
import { Search, Sort } from './components/Sorting';
import EmptyETC from './components/EmptyETC';

const App = observer(() => { 
  
  const [isLoad, setIsLoad] = useState<boolean>(false)

  useEffect(() => {
    Store.updateData()
    
  }, [])

  return (
    <main className="app">
      <div className="container">
        <div className="app__sorting">
          <Search className="app__sorting-search" state={Store.setInputLine } callback={Store.setSortBySearch}/>
          <div className="app__sorting-sort">
            <Sort className="app__sorting-sort-search" disabled={false} defaultValue='Категория' arrOptions={Array.from(new Set([...JSON.parse(JSON.stringify(Store.shopItems))].map(el => el.category)))} callback={Store.setSortBySelect}/>
            <Sort className="app__sorting-sort-main" defaultValue='Сортировка' arrOptions={['По возрастанию', 'По убыванию']} callback={Store.setSorting}/>
          </div>
        </div>
        <div className="app__row">
          {isLoad 
            ?  <EmptyETC className="app__load">Загрузка...</EmptyETC>
            : (Store.sortedShopItems.length > 0 
                ? <ItemList/>
                : <EmptyETC className="app__empty">Не найдено</EmptyETC>
               )
          }
        </div>
      </div>
    </main>
  );
})

export default App;