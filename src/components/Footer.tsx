import { observer } from 'mobx-react'
import React from 'react'
import '../style/Footer.css'
import { Link, BrowserRouter } from 'react-router-dom';
import cartStore from '../store/cartStore';

let Logo = require('../img/logo.png');

const Footer = observer(({}) => {
  return (
    <>
        <footer className='footer'>
            <div className="container">
                <div className="footer__row">
                    @Все права защищены - SadnEss
                </div>
            </div>
        </footer>
    </>
  )
})

export default Footer