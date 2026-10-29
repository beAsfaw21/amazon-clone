import React from 'react';
import img1 from '../carousel/img/10001.jpg';
import img2 from '../carousel/img/10002.jpg';
import img3 from '../carousel/img/10003.jpg';
import img4 from '../carousel/img/10004.jpg';
import img5 from '../carousel/img/10005.jpg';
import './Category.css';
import { Link } from 'react-router-dom';

const categories = [
  { title: 'Toys & Games', image: img1 },
  { title: 'Beauty', image: img2 },
  { title: 'Gifts', image: img3 },
  { title: 'Books', image: img4 },
  { title: 'Gaming', image: img5 },
];

function Category() {
  return (
    <section className="category-section" aria-labelledby="category-title">
      <div className="category-heading">
        <h2 id="category-title">Shop by category</h2>
        <Link to="/all">See all</Link>
      </div>
      <div className="category-list">
        {categories.map((category) => (
          <Link className="category-card" to={`/all?category=${encodeURIComponent(category.title)}`} key={category.title}>
            <h3>{category.title}</h3>
            <img src={category.image} alt={`${category.title} collection`} />
            <span>Shop now</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Category;
