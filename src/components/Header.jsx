import React, { useState } from 'react';
import headerLogo from '../../assets/headerLogo.png';

export default function Header() {
  return (
    <header>
      <div className="header">
        <h1><img src={headerLogo} alt="sponmu" /></h1>
        <ul className="headerUl">
          <li><a href="/products">商品一覧</a></li>
          <li><a href="#">レシピ</a></li> {/* 正しいパスに修正 */}
          <li><a href="#"><img src="" alt="かご" /></a></li> {/* 正しいパスに修正 */}
        </ul>
      </div>
    </header>
  );
}