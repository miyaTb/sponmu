import React, { useState } from 'react'

export default function Header() {
    const [isOpen, setIsopen] = useState(false);

    const handleToggle = () => {
        setIsopen(!isOpen);
    }
  return (
    <header>
        <div className="header">
            <h1><img src="#" alt="sponmu" /></h1>
            <ul className='headerUl'>
                <li><a href="#"><img src="#" alt="通知" /></a></li>
                <li><a href="#"><img src="#" alt="ショップかご" /></a></li>
                <li><a href="#"><img src="#" alt="ユーザー" /></a></li>
            </ul>
        </div>
        <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={handleToggle}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        <nav className={`menu ${isOpen ? 'open' : ''}`}>
            <ul>
                <li><a href="">rrr</a></li>
                <li><a href="">rrrr</a></li>
                <li><a href="">rrr</a></li>
                <li><a href="">rrrr</a></li>
            </ul>
        </nav>
    </header>
  )
}
