import React, { useEffect, useCallback, useState } from 'react'
import { observer } from 'mobx-react';
import Store from '../store/store';
import adminStore from '../store/adminStore';
import MyButton from '../UI/MyButton';
import { Link, useNavigate } from 'react-router-dom';
import '../style/Login.css'

const Login = observer(() => {

    const [loginValue, setLoginValue] = useState<string>('')
    const [passwordValue, setPasswordValue] = useState<string>('')
    const [inputChange, setInputChange] = useState<string>('')

    const ChangeLogin = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginValue(e.target.value)
    }, [])     
    const ChangePassword = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setPasswordValue(e.target.value)
    }, [])     

    const IsInput = useCallback((login: string, password: string) => {
        adminStore.checkAdmin(login, password)
        if (adminStore.isAdmin) {
            setInputChange("")
            localStorage.setItem('login', adminStore.adminLogin)
            localStorage.setItem('password', adminStore.adminPassword)
        }
        else setInputChange('error');
    }, [])

    useEffect(() => {
        if (adminStore.isAdmin) {
            console.log('isAdmin')
            localStorage.setItem('login', adminStore.adminLogin)
            localStorage.setItem('password', adminStore.adminPassword)
        }   
        // adminStore.setIsAdmin(false);
    }, [adminStore.isAdmin])

  return (
    <div className='login'>
        <div className="container"> 
            <div className="login__row">
                <h1 className="login__title">Вход в админскую панель</h1>
                <form action="" className="login__form">
                    <div className={`login__input-wrap ${inputChange}`}>
                        <input id='login' value={loginValue} type="text" className='login__input' placeholder='Логин' onChange={ChangeLogin}/>
                    </div> 
                    <div className={`login__input-wrap ${inputChange}`}>
                        <input id='password' value={passwordValue} type="text" className='login__input' placeholder='Пароль' onChange={ChangePassword}/>
                    </div> 
                    <MyButton type='button' className='login__button btn' onClick={() => IsInput(loginValue, passwordValue)}>Войти</MyButton>
                </form>
            </div>
        </div>
    </div>
  )
})

export default Login