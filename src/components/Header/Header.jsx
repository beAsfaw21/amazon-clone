import React from 'react'
import { FaSearch } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaCartPlus } from "react-icons/fa";
import './Header.css';
const Header = () => {
  return (
    <header className="amazon-header">
        <section className="amazon-header__bar">
            <div className="amazon-header__left">
                <a className="amazon-logo" href='/'>amazon</a>
           {/* Delivery */}
                <div className="delivery">
                    <CiDeliveryTruck className="delivery-icon" />
                <div className="delivery-location">
                    <p>Deliver To</p>
                    <span>Ethiopia</span>
                </div>
                </div>
            </div>
            <div className="amazon-search">
                <select name='' id=''>
                    <option value="">All</option>
                </select>
                <input type='text' name='' id='' placeholder='Search Amazon'/>
                <button type="button" aria-label="Search">
                    <FaSearch />
                </button>
            </div>
            <div className="amazon-header__right">
                <div className="language">🇺🇸 <span>EN</span></div>
                <a className="header-link" href="/account">
                    <p>Sign In</p>
                    <span>Account & Lists</span>
                </a>
                <a className="header-link" href='/orders'>
                    <p>Returns</p>
                    <span>& Orders</span>
                </a>
                <a className="cart-link" href="/cart">
                    <FaCartPlus />
                    <span>0</span>
                </a>
            </div>
        </section>
        <nav className="amazon-nav" aria-label="Primary navigation">
            <a href="/all"><FaBars /> All</a>
            <a href="/deals">Today's Deals</a>
            <a href="/service">Customer Service</a>
            <a href="/registry">Registry</a>
            <a href="/gift-cards">Gift Cards</a>
            <a href="/sell">Sell</a>
        </nav>
    </header>
  )
}

export default Header