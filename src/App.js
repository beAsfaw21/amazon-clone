
import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Carousel from './components/carousel/carousel';
import Category from './components/Category/Category';
function App() {
  return (
    <div className="App">
      <Header/>
      <Carousel/>
      <Category/>
    </div>
  );
}

export default App;
