import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaCartPlus } from "react-icons/fa";
import './Header.css';
import { useStore } from '../../StoreContext';
const Header = () => {
  const { cartCount } = useStore();
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const submitSearch = (event) => {
    event.preventDefault();
    navigate(query.trim() ? `/all?search=${encodeURIComponent(query.trim())}` : '/all');
  };
  return (
    <header className="amazon-header">
        <section className="amazon-header__bar">
            <div className="amazon-header__left">
                <Link className="amazon-logo" to="/">amazon</Link>
           {/* Delivery */}
                <div className="delivery">
                    <CiDeliveryTruck className="delivery-icon" />
                <div className="delivery-location">
                    <p>Deliver To</p>
                    <span>Ethiopia</span>
                </div>
                </div>
            </div>
            <form className="amazon-search" onSubmit={submitSearch}>
                <select name='' id=''>
                    <option value="">All</option>
                </select>
                <input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search Amazon" aria-label="Search products" />
                <button type="button" aria-label="Search">
                    <FaSearch />
                </button>
            </form>
            <div className="amazon-header__right">
                <div className="language">🇺🇸 <span>EN</span></div>
                <Link className="header-link" to="/account">
                    <p>Sign In</p>
                    <span>Account & Lists</span>
                </Link>
                <Link className="header-link" to="/orders">
                    <p>Returns</p>
                    <span>& Orders</span>
                </Link>
                <Link className="cart-link" to="/cart">
                    <FaCartPlus />
                    <span>{cartCount}</span>
                </Link>
            </div>
        </section>
        <nav className="amazon-nav" aria-label="Primary navigation">
            <Link to="/all"><FaBars /> All</Link>
            <Link to="/deals">Today's Deals</Link>
            <Link to="/service">Customer Service</Link>
            <Link to="/registry">Registry</Link>
            <Link to="/gift-cards">Gift Cards</Link>
            <Link to="/sell">Sell</Link>
        </nav>
    </header>
  )
}

export default Header