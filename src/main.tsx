import { observer } from 'mobx-react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import adminStore from './store/adminStore';
import Admin from './components/Admin';
import Login from './components/Login';
import Cart from './components/Cart';
import App from './App';
import { useEffect, useState } from 'react';
import Product from './components/Product';
import Store from './store/store';
import ProductEdit from './components/ProductEdit';
import Header from './components/Header';
import ProductNew from './components/ProductNew';
import Footer from './components/Footer';

const Main = observer(() => { 
    const [isLoad, setIsLoad] = useState<boolean>(false)
    
    useEffect(() => {
        if (localStorage.login === adminStore.adminLogin && localStorage.password === adminStore.adminPassword) adminStore.isAdmin = true;
    }, [])

    return (
        <>
            <BrowserRouter>
                <Header>
                    <Routes>
                    {
                        adminStore.isAdmin
                        ? <>
                            <Route path='/admin' element={<Admin />}/>
                            { 

                            }
                            <Route path='/admin/product/:url' element={<ProductEdit />}/>
                            <Route path='/admin/product/new' element={<ProductNew />}/>
                        </>
                        : <>
                            <Route path='/admin' element={<Login />}/>
                            <Route path='/admin/product/*' element={<Login />}/>
                        </>
                    }
                        <Route path='/' element={<App />}/>
                        {/* <Route path='*' element={<App/>} /> */}
                        <Route path='/cart' element={<Cart />}/>
                        <Route path='/product/:url' element={<Product />}/>
                        
                    </Routes>
                </Header>
            </BrowserRouter>
        </>
    
  );
})

export default Main;