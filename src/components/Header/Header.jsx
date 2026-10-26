import React from 'react'
import { FaSearch } from "react-icons/fa";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaCartPlus } from "react-icons/fa";
import './Header.css';
const Header = () => {
  return (
    <header className="amazon-header">
        <section className="amazon-header__bar">
            <div className="amazon-header__left">
                {/* logo */}

            <a href='/'>
            <span className="amazon-logo">amazon</span>
            </a>
           {/* Delivery */}
                <span className="delivery-icon">
<CiDeliveryTruck />
                </span>
                <div className="delivery-location">
                    <p>Deliver To</p>
                    <span>Ethiopia</span>
                </div>
            </div>
            <div className="amazon-search">
                {/* Search */}
                <select name='' id=''>
                    <option value="">All</option>
                </select>
                <input type='text' name='' id='' placeholder='search product'/>
                <button type="button" aria-label="Search">
                    <FaSearch />
                </button>
            </div>
            {/* right side */}
            <div className="amazon-header__right">
                <div className="language">🇺🇸 <span>EN</span></div>
                <div className="header-link">
                    <p>Sign In</p>
                    <span>Account & Lists</span>
                </div>
                {/* three components */}
                {/* orders */}
                <a className="header-link" href='/orders'>
                    <p>returns</p>
                    <span>&orders</span>
                </a>
                {/* cart */}
                <a className="cart-link" href="/cart">
                <FaCartPlus />
                <span>0</span>
                </a>
            </div>
        </section>
    </header>
  )
}

export default Header