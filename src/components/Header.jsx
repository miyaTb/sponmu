import React from 'react';
import headerLogo from '../assets/headerLogo.png';
import shopIcon from '../assets/shopIcon.png';

export default function Header() {
  return (
    <header>
      <div className="header">
        <h1><a href="/"><img src={headerLogo} alt="sponmu" /></a></h1>
        <ul className="headerUl">
          <li><a href="/products">商品一覧</a></li>
          <li><a href="#">レシピ</a></li> 
          <li><a href="#"><img src={shopIcon} alt="かご" /></a></li> 
        </ul>
      </div>
    </header>
  );
}