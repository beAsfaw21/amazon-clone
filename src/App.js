
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Carousel from './components/carousel/carousel';
import Category from './components/Category/Category';
import Product from './components/Product/Product';
import Account from './pages/Account/Account';
import All from './pages/All/All';
import Cart from './pages/Cart/Cart';
import Deals from './pages/Deals/Deals';
import GiftCards from './pages/GiftCards/GiftCards';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Orders from './pages/Orders/Orders';
import Registry from './pages/Registry/Registry';
import Service from './pages/Service/Service';
import Sell from './pages/Sell/Sell';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route
          path="/"
          element={
            <Home>
              <Carousel/>
              <Category/>
              <Product/>
            </Home>
          }
        />
        <Route path="/account" element={<Account />} />
        <Route path="/all" element={<All />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/gift-cards" element={<GiftCards />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/registry" element={<Registry />} />
        <Route path="/service" element={<Service />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
