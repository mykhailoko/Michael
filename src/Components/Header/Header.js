import './Header.css'
import Gojo from '../../Assets/gojo.png'
import Button from '../../Assets/button.png'
import ButtonHover from '../../Assets/button-hover.png'
import { useState } from 'react';

const Header = () => {
  const [buttonSrc, setButtonSrc] = useState(Button);

  const changeImage = (hover) => {
    if (hover) {
      setButtonSrc(ButtonHover);
    } else {
      setButtonSrc(Button);
    }
  };

  return (
    <div className="header" id="home">
      <div className="mainpart">
          <div className="mainparttext">
              <img id="gojo-hidden" src={Gojo} alt="gojo satoru" />
              <h2 className="firsttext">hi, I'm <span>michael</span>.</h2>
              <p className="secondtext">
                  I am a software engineer in my second year of <br/> university. I love creating 
                  websites, apps, and <br/> games, enjoying every challenge and the <br/> creative process.
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
          <img id="gojo" src={Gojo} alt="gojo satoru" />
      </div>
    </div>
  )
}
  
export default Header