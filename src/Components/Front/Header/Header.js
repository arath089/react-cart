import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";


const Header = () => {
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
                        <i class="fab fa-opencart"></i>
                      </Link>
                  </li>
              </ul>
          </div>
      </header>
  )
};

export default Header;
