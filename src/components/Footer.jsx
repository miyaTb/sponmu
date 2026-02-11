import X from '../assets/X.svg';
import Instagram from '../assets/Instagram.svg';
import footerLogo from '../assets/footerLogo.svg';
import footerBG from '../assets/mountain.png';
import '../pages/css/Footer.css';

export default function footer() {
  return (
    <footer>
        <img src={footerBG} alt="フッターの波形デザイン" className="footer-wave-image" />
        <div className='footerText'>
            <img src={footerLogo} alt="sponmu" />
            <div className='footerDetail'>
              <span>〒049-3504</span>
              <span className='footerAddress'>北海道山越郡長万部町美畑39 スポンジ農場</span>
              <span className='footerTell'>Tel. 090-3939-6403</span>
            </div>
        </div>
        <div className='footerIcon'>
          <a href=""><img src={X} alt="X" /></a>          
          <a href=""><img src={Instagram} alt="Instagram" /></a>
        </div>
        <p className='footerSponmu'>@スポンジーズ</p>
    </footer>
  )
};
