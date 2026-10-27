import React from 'react';
import Carousel from '../../components/carousel/carousel';
import Category from '../../components/Category/Category';
import Product from '../../components/Product/Product';

function Home() {
  return (
    <main>
      <Carousel />
      <Category />
      <Product />
    </main>
  );
}

export default Home;
