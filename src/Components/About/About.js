import './About.css'
import GojoAbout from '../../Assets/gojo-about.png'
import Point from '../../Assets/point.png'
import { useTranslation  } from 'react-i18next';

const About = () => {
  const[t] = useTranslation("global");

  return (
    <div className="about" id="about">
      <div className="aboutmain">
        <img id="gojo-about" src={GojoAbout} alt="gojo satoru" />
        <div className="technologies">
          <h2 className="title">About <span>me</span>.</h2>

          <p className="abouttext">
            {t("about.maintext")}
          </p>

          <div className="tech">
            <div className="techleft">
              <div className="technodev">
                <img className="technopoint" src={Point} alt="point" />
                <h4 className="techno">C++</h4>
              </div>
              <div className="technodev">
                <img className="technopoint" src={Point} alt="point" />
                <h4 className="techno">Python, Pygame</h4>
              </div>
              <div className="technodev">
                <img className="technopoint" src={Point} alt="point" />
                <h4 className="techno">Unity, C#</h4>
              </div>
            </div>

            <div className="techright">
              <div className="technodev">
                <img className="technopoint" src={Point} alt="point" />
                <h4 className="techno">React JS</h4>
              </div>
              <div className="technodev">
                <img className="technopoint" src={Point} alt="point" />
                <h4 className="techno">HTML, CSS</h4>
              </div>
              <div className="technodev">
                <img className="technopoint" src={Point} alt="point" />
                <h4 className="techno">Photoshop, Figma</h4>
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
