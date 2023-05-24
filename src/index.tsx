import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Main from './main';
import Header from './components/Header';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(
  document.querySelector('body') as HTMLElement
);
root.render(
  <>
    <Main/>
    <Footer></Footer>
  </>
);


