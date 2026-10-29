import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import homeImage from './img/0f9d9c58-81e7-468a-a40d-7060218676a0.jpg';
import beddingImage from './img/1a5aa94d-f22f-4178-8405-eed6997ff2bb.jpg';
import toyImage from './img/2a95f308-16f3-4526-9b11-70b00deee069.jpg';
import beautyImage from './img/75656337-b5ce-44d2-b19e-60b6ad0121a4.jpg';
import footwearImage from './img/b0d3a689-c481-4eca-acbe-61c9509f8801.jpg';
import petImage from './img/c671c4bd-30a4-4bf1-aa0a-2ef93312a0bf.jpg';
import './Product.css';
import { useStore } from '../../StoreContext';

const products = [
  { title: 'Modern indoor plants and living room decor', image: homeImage, price: '89.99', rating: 4.5, reviews: 128 },
  { title: 'Floral cotton bedding set for every bedroom', image: beddingImage, price: '42.99', rating: 4, reviews: 214 },
  { title: 'Ice cream counter play set for kids', image: toyImage, price: '29.95', rating: 4.5, reviews: 96 },
  { title: 'Beauty and skincare essentials', image: beautyImage, price: '24.50', rating: 4, reviews: 187 },
  { title: 'Comfortable sandals for everyday style', image: footwearImage, price: '19.99', rating: 4.5, reviews: 342 },
  { title: 'Playful accessories for happy pets', image: petImage, price: '16.95', rating: 5, reviews: 81 },
];

function Rating({ value, reviews }) {
  return (
    <div className="product-rating" aria-label={`${value} out of 5 stars, ${reviews} reviews`}>
      <span className="stars">
        {[1, 2, 3, 4, 5].map((star) => (
          star <= Math.floor(value)
            ? <FaStar key={star} />
            : star - value === 0.5
              ? <FaStarHalfAlt key={star} />
              : <FaStar key={star} className="empty-star" />
        ))}
      </span>
      <span className="review-count">{reviews}</span>
    </div>
  );
}

function Product() {
  const { addToCart } = useStore();
  return (
    <section className="product-section" aria-labelledby="product-title">
      <div className="product-heading">
        <h2 id="product-title">Featured products</h2>
        <a href="/products">See all products</a>
      </div>
      <div className="product-list">
        {products.map((product) => (
          <article className="product-card" key={product.title}>
            <div className="product-image-wrap">
              <img src={product.image} alt={product.title} loading="lazy" />
            </div>
            <h3>{product.title}</h3>
            <Rating value={product.rating} reviews={product.reviews} />
            <p className="product-price">
              <span>$</span>{product.price}
            </p>
            <button type="button" onClick={() => addToCart(product)}>Add to Cart</button>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Product;
