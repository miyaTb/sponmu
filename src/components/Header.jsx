import headerLogo from '../assets/headerLogo.svg';
import shopIcon from '../assets/shopIcon.png';
import "../pages/css/Header.css"

export default function Header() {
  return (
    <header>
      <div className="header">
        <h1><a href="/"><img src={headerLogo} alt="sponmu" /></a></h1>
        <ul className="headerUl">
          <li><a href="/products">商品一覧</a></li>
          <li><a href="/recipes">レシピ</a></li> 
          <li><a href="/cart"><img src={shopIcon} alt="かご" /></a></li> 
        </ul>
      </div>
    </header>
  );
}