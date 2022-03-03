import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";


const Header = ({cartItems}) => {
  return (
      <header className="header">
          <div>
            <h1>
                <Link to="/" className="logo">
                    Shoe Shop
                </Link>
            </h1>
          </div>
          <div className="header-links">
              <ul>
                  <li>
                      <Link to="/home">Home</Link>
                  </li>
              </ul>
              <ul>
                  <li>
                      <Link to="/">Collection</Link>
                  </li>
              </ul>
              <ul>
                  <li>
                      <Link to="/cart" className="cart">
                        <i className="fab fa-opencart"></i>
                        <span className='cart-length'>
                            {cartItems.length === 0 ? "" : cartItems.length}
                        </span>
                      </Link>
                  </li>
              </ul>
          </div>
      </header>
  )
};

export default Header;
