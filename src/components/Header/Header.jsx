import React from 'react'
import { FaSearch } from "react-icons/fa";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaCartPlus } from "react-icons/fa";
const Header = () => {
  return (
    <section>
        <section>
            <div>
                {/* logo */}

            <a href='/'>
            <img src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='' />
            </a>
           {/* Delivery */}
                <span>
<CiDeliveryTruck />
                </span>
                <div>
                    <p> Delliver To</p>
                    <span>Ethiopia</span>
                </div>
            </div>
            <div>
                {/* Search */}
                <select name='' id=''>
                    <option value="">All</option>
                </select>
                <input type='text' name='' id='' placeholder='search product'/>
                <FaSearch />
            </div>
            {/* right side */}
            <div>
                <div>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/d/de/Flag_of_the_United_States.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" alt="" />
                    <section>
                        <option value="">EN</option>
                    </section>
                </div>
                {/* three components */}
                <a href=''>
                    <div>
                        <p>Sign In</p>
                        <span>Account & Lists </span>
                    </div>
                </a>
                {/* orders */}
                <a href=''> 
                    <p>returns</p>
                    <span>&orders</span>
                </a>
                {/* cart */}
                <a to={"/cart"}>
                <FaCartPlus />
                <span>0</span>
                </a>
            </div>
        </section>
    </section>
  )
}

export default Header