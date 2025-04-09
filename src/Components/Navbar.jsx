import '../Styles/Navbar.scss';
import Github from '../Assets/github.png';
import GithubHover from '../Assets/github-hover.png';
import Telegram from '../Assets/telegram.png';
import TelegramHover from '../Assets/telegram-hover.png';
import Reorder from '../Assets/reorder.png';
import { useState } from 'react';
import { useTranslation  } from 'react-i18next';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((open) => !open);
  }

  const handleNavigationClick = (section) => {
    setIsOpen(false);

    const sectionToScroll = document.querySelector(section);
    if (sectionToScroll) {
      sectionToScroll.scrollIntoView({ behavior: "smooth" });
    }
  };

  const[t, i18n] = useTranslation("global");
  const handleChangeLanguage = (lang) => {
      i18n.changeLanguage(lang);
  };

  const [githubSrc, setGithubSrc] = useState(Github);
  const changeImage = (hover) => {
    if (hover) {
      setGithubSrc(GithubHover);
    } else {
      setGithubSrc(Github);
    }
  };

  const [telegramSrc, setTelegramSrc] = useState(Telegram);
  const changeImageAgain = (hover) => {
    if (hover) {
      setTelegramSrc(TelegramHover);
    } else {
      setTelegramSrc(Telegram);
    }
  };
  
  return (
    <div className="custom-navbar">
      <img className="reorder-icon" src={Reorder} alt="reorder" onClick={toggleMenu} />
      <div className={`reorder ${isOpen ? "is-open" : ""}`}>
        <a 
          className='navigation' 
          onClick={() => handleNavigationClick("#home")}
        >
          {t("navbar.home")}
        </a>
        <a 
          className='navigation' 
          onClick={() => handleNavigationClick("#about")}
        >
          {t("navbar.about")}
        </a>
        <a 
          className='navigation' 
          onClick={() => handleNavigationClick("#projects")}
        >
          {t("navbar.projects")}
        </a>
      </div>
      <div className='right-nav'>
        <a className="naviicon" href="https://github.com/mykhailoko" target="_blank" rel="noreferrer">
          <img 
            className='naviicon-size'
            src={githubSrc}  
            onMouseOver={() => changeImage(true)} 
            onMouseOut={() => changeImage(false)} 
            alt="github" 
          />
        </a>
        <a className="naviicon" href="https://t.me/mykhailokko" target="_blank" rel="noreferrer">
          <img 
            className='naviicon-size'
            src={telegramSrc} 
            onMouseOver={() => changeImageAgain(true)} 
            onMouseOut={() => changeImageAgain(false)} 
            alt="telegram" 
          />
        </a>
        <select className="select" onChange={(e) => handleChangeLanguage(e.target.value)}>
          <option className="option" value="en">EN</option>
          <option className="option" value="ru">RU</option>
        </select>
      </div>
    </div>
  )
}
  
export default Navbar