import './Projects.css'
import FolderBack from '../../Assets/folder.png'
import FolderIcon from '../../Assets/foldericon.png'
import GithubIcon from '../../Assets/github.png'
import LinkIcon from '../../Assets/linkicon.png'

const Projects = () => {
  return (
    <div className="projects" id="projects"> 
        <h2 className="titleprojects">Projects<span>.</span></h2>

        <div className="projectsfirstline">
          <div className="folder" id="folderfirst">
            <img className="foldericon" src={FolderIcon} alt="foldericon" />
            <a href="https://github.com/mykhailoko/Dino-Adventure-pygame" target="_blank" rel="noreferrer">
             <img className="githubicon" src={GithubIcon} alt="githubicon" />
            </a>
            <a href="https://github.com/mykhailoko/Dino-Adventure-pygame/releases/tag/v1.0.0" target="_blank" rel="noreferrer">
              <img className="linkicon" src={LinkIcon} alt="linkicon" />
            </a>
            <h2 className="foldertitle">Dino Adventure with pygame</h2>
            <p className="foldertext">
              Dino Adventure is a Python game using Pygame, inspired by 
              Chrome's offline dinosaur game, but with added unique features.
            </p>
            <p className="foldertechno">
              Python, Pygame
            </p>
            <img className="folderback" src={FolderBack} alt="folder" />
          </div>

          <div className="folder">
            <img className="foldericon" src={FolderIcon} alt="foldericon" />
            <a href="https://github.com/mykhailoko/Dino-Adventure-website" target="_blank" rel="noreferrer">
             <img className="githubicon" src={GithubIcon} alt="githubicon" />
            </a>
            <a href="https://mykhailoko.github.io/Dino-Adventure-website/" target="_blank" rel="noreferrer">
              <img className="linkicon" src={LinkIcon} alt="linkicon" />
            </a>
            <h2 className="foldertitle">Dino Adventure website</h2>
            <p className="foldertext">
              This site was created using HTML and CSS, with a custom design created 
              in Photoshop. Download the Dino Adventure game here.
            </p>
            <p className="foldertechno">
              HTML, CSS, Photoshop
            </p>
            <img className="folderback" src={FolderBack} alt="folder" />
          </div>

          <div className="folder">
            <img className="foldericon" src={FolderIcon} alt="foldericon" />
            <a href="https://github.com/mykhailoko/Dino-Adventure" target="_blank" rel="noreferrer">
             <img className="githubicon" id="githubiconone" src={GithubIcon} alt="githubicon" />
            </a>
            <h2 className="foldertitle">Dino Adventure with Unity</h2>
            <p className="foldertext">
              Dino Adventure is made with Unity, featuring gameplay mechanics and interactive elements scripted in C#.
            </p>
            <p className="foldertechno">
              Unity, C#
            </p>
            <img className="folderback" src={FolderBack} alt="folder" />
          </div>
        </div>

        <div className="projectssecondline">
          <div className="folder" id="folderfirst">
            <img className="foldericon" src={FolderIcon} alt="foldericon" />
            <a href="https://github.com/mykhailoko/Michael" target="_blank" rel="noreferrer">
             <img className="githubicon" src={GithubIcon} alt="githubicon" />
            </a>
            <a href="https://mykhailoko.github.io/Michael/" target="_blank" rel="noreferrer">
              <img className="linkicon" src={LinkIcon} alt="linkicon" />
            </a>
            <h2 className="foldertitle">Portfolio website</h2>
            <p className="foldertextsmall">
              Built with React.js, this site showcases my programming projects, skills, and accomplishments.
            </p>
            <p className="foldertechnosmall">
              React.js, Photoshop
            </p>
            <img className="folderback" src={FolderBack} alt="folder" />
          </div>

          <div className="folder">
            <img className="foldericon" src={FolderIcon} alt="foldericon" />
            <a href="https://github.com/mykhailoko/LeetCode" target="_blank" rel="noreferrer">
             <img className="githubicon" src={GithubIcon} alt="githubicon" />
            </a>
            <a href="https://leetcode.com/u/michaelko_/" target="_blank" rel="noreferrer">
              <img className="linkicon" src={LinkIcon} alt="linkicon" />
            </a>
            <h2 className="foldertitle">Leetcode</h2>
            <p className="foldertextsmall">
              I enjoy solving LeetCode problems, which help me enhance my coding skills through various programming challenges.
            </p>
            <img className="folderback" src={FolderBack} alt="folder" />
          </div>
        </div>
    </div>
  )
}

export default Projects