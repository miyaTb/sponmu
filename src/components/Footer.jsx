import React from 'react';
import X from '../assets/X.svg';
import Instagram from '../assets/Instagram.svg';
import footerLogo from '../assets/footerLogo.svg';
import footerBG from '../assets/mountain.png';

export default function footer() {
  return (
    <footer>
        <img src={footerBG} alt="フッターの波形デザイン" className="footer-wave-image" />
        <div className='footerText'>
            <img src={footerLogo} alt="sponmu" />
            <div className='footerDetail'>
              <span>〒049-3504</span>
              <span>北海道山越郡長万部町美畑39 スポンジ農場</span>
              <span>Tel. 090-3939-6403</span>
            </div>
        </div>
        <div className='footerIcon'>
          <img src={X} alt="X" />
          <img src={Instagram} alt="Instagram" />
        </div>
        <p className='footerSponmu'>@スポンジーズ</p>
    </footer>
  )
};
