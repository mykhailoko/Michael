import './Navbar.css'
import Github from '../../Assets/github.png'
import GithubHover from '../../Assets/github-hover.png'
import Telegram from '../../Assets/telegram.png'
import TelegramHover from '../../Assets/telegram-hover.png'
import { useState, useEffect } from 'react';
import { useTranslation  } from 'react-i18next';

const Navbar = () => {
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

  useEffect(() => {
    const anchors = document.querySelectorAll('a[href^="#"]');
    const handleClick = (e) => {
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    };

    anchors.forEach(anchor => {
      anchor.addEventListener('click', handleClick);
    });

    return () => {
      anchors.forEach(anchor => {
        anchor.removeEventListener('click', handleClick);
      });
    };
  }, []);

  return (
    <div className="navbar">
      <div className="leftside">
        <a className="navigation" href="#home">{t("navbar.home")}</a>
        <a className="navigation" href="#about">{t("navbar.about")}</a>
        <a className="navigation" href="#projects">{t("navbar.projects")}</a>
      </div>
      <div className="rightside">
        <a className="naviicon" href="https://github.com/mykhailoko" target="_blank" rel="noreferrer">
          <img 
            src={githubSrc}  
            onMouseOver={() => changeImage(true)} 
            onMouseOut={() => changeImage(false)} 
            alt="github" 
          />
        </a>
        <a className="naviicon" href="https://t.me/michaelk0" target="_blank" rel="noreferrer">
          <img 
            src={telegramSrc} 
            onMouseOver={() => changeImageAgain(true)} 
            onMouseOut={() => changeImageAgain(false)} 
            alt="telegram" 
          />
        </a>
      </div>
      <div className="languageside">
        <select className="select" onChange={(e) => handleChangeLanguage(e.target.value)}>
            <option className="option" value="en">EN</option>
            <option className="option" value="ru">RU</option>
          </select>
      </div>
    </div>
  )
}
  
export default Navbar