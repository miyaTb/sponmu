import React from 'react';
import footerLogo from '../assets/footerLogo.png';
import X from '../assets/X.svg';
import Instagram from '../assets/Instagram.svg';


export default function footer() {
  return (
    <footer>
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
