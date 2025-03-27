import '../Styles/About.scss'
import GojoAbout from '../Assets/gojo-about.png'
import Point from '../Assets/point.png'
import { useTranslation  } from 'react-i18next';
import React, { useEffect, useState, useRef } from 'react';

const About = () => {
  const[t] = useTranslation("global");

  const [visibleSections, setVisibleSections] = useState([]);
  const aboutRef = useRef(null);
  const techRef = useRef(null);

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

    const aboutNode = aboutRef.current;
    const techNode = techRef.current;

    if (aboutNode) observer.observe(aboutNode);
    if (techNode) observer.observe(techNode);

    return () => {
      if (aboutNode) observer.unobserve(aboutNode);
      if (techNode) observer.unobserve(techNode);
    };
  }, []);

  return (
    <div className="about" id="about">
      <div className="aboutmain">
        <img id="gojo-about" src={GojoAbout} alt="gojo satoru" />
        <div className="technologies">
          <h2 className={`title ${visibleSections.includes(aboutRef.current) ? 'visible' : ''}`}
          ref={aboutRef}>About <span>me</span>.</h2>

          <p className="abouttext">
            {t("about.maintext")}
          </p>

          <div className={`tech ${visibleSections.includes(techRef.current) ? 'visible' : ''}`}
            ref={techRef}>
            <div className="techleft">
              <div className="technodev">
                <img className="technopoint" src={Point} alt="point" />
                <h4 className="techno">JavaScript</h4>
              </div>
              <div className="technodev">
                <img className="technopoint" src={Point} alt="point" />
                <h4 className="techno">Python</h4>
              </div>
              <div className="technodev">
                <img className="technopoint" src={Point} alt="point" />
                <h4 className="techno">React.js</h4>
              </div>
            </div>

            <div className="techright">
              <div className="technodev">
                <img className="technopoint" src={Point} alt="point" />
                <h4 className="techno">Node.js</h4>
              </div>
              <div className="technodev">
                <img className="technopoint" src={Point} alt="point" />
                <h4 className="techno">Express.js</h4>
              </div>
              <div className="technodev">
                <img className="technopoint" src={Point} alt="point" />
                <h4 className="techno">MongoDB</h4>
              </div>
            </div>
          </div>

          <p className="abouttext" dangerouslySetInnerHTML={{ __html: t('about.animetext') }} />
        </div>
      </div>
    </div>
  )
}

export default About
