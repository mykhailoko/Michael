import './Header.css'
import Gojo from '../../Assets/gojo.png'
import Power from '../../Assets/power.png'
import Button from '../../Assets/button.png'
import ButtonHover from '../../Assets/button-hover.png'
import { useState } from 'react';
import { useTranslation  } from 'react-i18next';

const Header = () => {
  const[t] = useTranslation("global");

  const [buttonSrc, setButtonSrc] = useState(Button);
  const changeImage = (hover) => {
    if (hover) {
      setButtonSrc(ButtonHover);
    } else {
      setButtonSrc(Button);
    }
  };

  const handleGojoClick = (event) => {
    const gojoElement = document.getElementById('gojo');
    if (!gojoElement) return;

    const img = document.createElement('img');
    img.src = Power;
    img.className = 'moving-image';

    const rect = gojoElement.getBoundingClientRect();
    img.style.top = `${rect.top + window.scrollY}px`;
    img.style.left = `${rect.left + window.scrollX}px`;

    document.body.appendChild(img);

    requestAnimationFrame(() => {
      img.style.transform = `translate(0, 0)`;
    });

    img.addEventListener('animationend', () => {
      img.remove();
    });
  };

  return (
    <div className="header" id="home">
      <div className="mainpart">
          <div className="mainparttext">
              <img id="gojo-hidden" src={Gojo} alt="gojo satoru" />
              <h2 className="firsttext">hi, I'm <span>Michael</span>.</h2>
              <p className="secondtext">
                {t("header.message")}
              </p>
              <a href="https://github.com/mykhailoko" target="_blank" id="checkout" rel="noreferrer">
                <img 
                  src={buttonSrc} 
                  onMouseOver={() => changeImage(true)} 
                  onMouseOut={() => changeImage(false)} 
                  alt="button"
                /> 
              </a>
          </div>
          <img id="gojo" src={Gojo} alt="gojo satoru" onClick={handleGojoClick}/>
      </div>
    </div>
  )
}
  
export default Header