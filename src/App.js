import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import WishList from './components/WishList';

const App = () => {
  return (
    <div className='app'>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/wishlist" element={<WishList/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </div>
  )
}

export default App