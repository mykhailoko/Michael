import './About.css'
import GojoAbout from '../../Assets/gojo-about.png'
import Point from '../../Assets/point.png'

const About = () => {
  return (
    <div className="about" id="about">
      <div className="aboutmain">
        <img id="gojo-about" src={GojoAbout} alt="gojo satoru" />
        <div className="technologies">
          <h2 className="title">About <span>me</span>.</h2>

          <p className="abouttext">
            I am a software engineer in my second year of
            university. I love creating websites, apps, and
            games, enjoying every challenge and the
            creative process. Technologies I've worked with:
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

          <p className="abouttext">
            Outside of my studies, I enjoy watching anime, especially <span>Jujutsu Kaisen</span> and Demon Slayer.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About