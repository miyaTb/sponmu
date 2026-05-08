import React from 'react';
import { Link } from 'react-router-dom';
import headerLogo from '../assets/headerLogo.svg';
import shopIcon from '../assets/shopIcon.png';
import { useCart } from '../context/CartContext';
import "../pages/css/Header.css"

export default function Header() {
  const { cartItems } = useCart();
  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header>
      <div className="header">
        <h1><Link to="/"><img src={headerLogo} alt="sponmu" /></Link></h1>
        <ul className="headerUl">
          <li><Link to="/products">商品一覧</Link></li>
          <li><Link to="/recipes">レシピ</Link></li>
          <li>
            <Link to="/cart" className="header-cart-link">
              <img src={shopIcon} alt="かご" />
              {totalCount > 0 && (
                <span className="header-cart-badge">{totalCount}</span>
              )}
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}