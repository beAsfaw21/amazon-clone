import React from 'react';
import img1 from '../carousel/img/10001.jpg';
import img2 from '../carousel/img/10002.jpg';
import img3 from '../carousel/img/10003.jpg';
import img4 from '../carousel/img/10004.jpg';
import img5 from '../carousel/img/10005.jpg';
import './Category.css';

const categories = [
  { title: 'Electronics', image: img1 },
  { title: 'Discover fashion trends', image: img2 },
  { title: "Men's Clothing", image: img3 },
  { title: 'Jewelry', image: img4 },
  { title: 'Home & Kitchen', image: img5 },
];

function Category() {
  return (
    <section className="category-section" aria-labelledby="category-title">
      <div className="category-heading">
        <h2 id="category-title">Shop by category</h2>
        <a href="/categories">See all</a>
      </div>
      <div className="category-list">
        {categories.map((category) => (
          <a className="category-card" href={`/categories/${category.title.toLowerCase().replaceAll(' ', '-')}`} key={category.title}>
            <h3>{category.title}</h3>
            <img src={category.image} alt="" />
            <span>Shop now</span>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Category;
