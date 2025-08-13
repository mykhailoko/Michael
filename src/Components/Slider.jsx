import React, { useEffect, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import '../Styles/Slider.scss';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Portfolio from '../Assets/portfolio.png';
import TodoList from '../Assets/todo-list.png';
import Devora from '../Assets/devora.png';
import DinoAdventure from '../Assets/dino-adventure.png';
import GithubIcon from '../Assets/github-white.png';
import LinkIcon from '../Assets/linkicon-white.png';

function Slider() {
    const [t] = useTranslation("global");
    
    const titleRef = useRef(null);
    
    const [visibleSections, setVisibleSections] = useState([]);
    
    useEffect(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setVisibleSections((prev) => [...prev, entry.target]);
              }
            });
          },
          { threshold: 0.1 }
        );
        
        const titleNode = titleRef.current;
        if (titleNode) observer.observe(titleNode);
    
        return () => {
          if (titleNode) observer.unobserve(titleNode)
        };
    }, []);

    return (
        <div className='slider' id="projects">
            <h2 
                className={`titleprojects ${visibleSections.includes(titleRef.current) ? 'visible' : ''}`}
                ref={titleRef}
            >
                Projects<span>.</span>
            </h2>
            <div className='carousel'>
                <Carousel>
                    <Carousel.Item>
                        <img 
                            className="d-block w-100"
                            src={TodoList} 
                            alt="todo-list" 
                        />
                        <Carousel.Caption>
                            <h3>Todo List</h3>
                            <p>{t("slider.todo")}</p>
                            <p className='used-technologies'>React.js</p>
                            <div className='icons'>
                                <a href="https://github.com/mykhailoko/todo-list" target="_blank" rel="noreferrer">
                                    <img src={GithubIcon} alt='github' className='icons-image' />
                                </a>
                                <a href="https://mykhailoko.github.io/todo-list/" target="_blank" rel="noreferrer">
                                    <img src={LinkIcon} alt='link' className='icons-image' />
                                </a>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img 
                            className="d-block w-100"
                            src={Portfolio} 
                            alt="portfolio" 
                        />
                        <Carousel.Caption>
                            <h3>Portfolio</h3>
                            <p>{t("slider.michael")}</p>
                            <p className='used-technologies'>React.js, Three.js, SCSS</p>
                            <div className='icons'>
                                <a href="https://github.com/mykhailoko/Michael" target="_blank" rel="noreferrer">
                                    <img src={GithubIcon} alt='github' className='icons-image' />
                                </a>
                                <a href="https://mykhailoko.github.io/Michael/" target="_blank" rel="noreferrer">
                                    <img src={LinkIcon} alt='link' className='icons-image' />
                                </a>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img 
                            className="d-block w-100"
                            src={Devora} 
                            alt="devora" 
                        />
                        <Carousel.Caption>
                            <h3>Devora</h3>
                            <p>{t("slider.devora")}</p>
                            <p className='used-technologies'>MERN Stack</p>
                            <div className='icons'>
                                <a href="https://github.com/mykhailoko/Devora" target="_blank" rel="noreferrer">
                                    <img src={GithubIcon} alt='github' className='icons-image' />
                                </a>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img 
                            className="d-block w-100"
                            src={DinoAdventure} 
                            alt="dino-adventure" 
                        />
                        <Carousel.Caption>
                            <h3>Dino Adventure</h3>
                            <p>{t("slider.dino")}</p>
                            <p className='used-technologies'>Pygame, GitHub CI/CD</p>
                            <div className='icons'>
                                <a href="https://github.com/mykhailoko/Dino-Adventure-pygame" target="_blank" rel="noreferrer">
                                    <img src={GithubIcon} alt='github' className='icons-image' />
                                </a>
                                <a href="https://github.com/mykhailoko/Dino-Adventure-pygame/releases/tag/v1.0.0" target="_blank" rel="noreferrer">
                                    <img src={LinkIcon} alt='link' className='icons-image' />
                                </a>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}

export default Slider