import React from 'react';
import footerLogo from '../assets/footerLogo.png';

export default function footer() {
  return (
    <footer>
        <div className='footerText'>
            <img src={footerLogo} alt="sponmu" />
            <p>〒000-0000<br/>
            aaaaaaaaaaa
            </p>
        </div>
        <div className='footerIcon'>
          <img src="" alt="Instagram" />
          <img src="" alt="facebook" />
        </div>
        <p className='footerSponmu'>@スポンジーズ</p>
    </footer>
  )
};
