import './Projects.css'
import FolderBack from '../../Assets/folder.png'
import FolderIcon from '../../Assets/foldericon.png'
import GithubIcon from '../../Assets/github.png'
import LinkIcon from '../../Assets/linkicon.png'
import { useTranslation } from 'react-i18next';
import React, { useEffect, useState, useRef } from 'react';

const Projects = () => {
  const [t] = useTranslation("global");

  const titleRef = useRef(null);
  const folderRefs = useRef([]);

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

    const currentFolderRefs = folderRefs.current;
    currentFolderRefs.forEach(folder => {
      if (folder) observer.observe(folder);
    });

    return () => {
      if (titleNode) observer.unobserve(titleNode);
      currentFolderRefs.forEach(folder => {
        if (folder) observer.unobserve(folder);
      });
    };
  }, []);

  return (
    <div className="projects" id="projects"> 
      <h2 
        className={`titleprojects ${visibleSections.includes(titleRef.current) ? 'visible' : ''}`}
        ref={titleRef}
      >
        Projects<span>.</span>
      </h2>

      <div className="projectsfirstline">
        <div className={`folder ${visibleSections.includes(folderRefs.current[0]) ? 'visible' : 'hidden'}`} 
          ref={(el) => folderRefs.current[0] = el} id="folderfirst">
          <img className="foldericon" src={FolderIcon} alt="foldericon" />
          <a href="https://github.com/mykhailoko/Dino-Adventure-pygame" target="_blank" rel="noreferrer">
            <img className="githubicon" src={GithubIcon} alt="githubicon" />
          </a>
          <a href="https://github.com/mykhailoko/Dino-Adventure-pygame/releases/tag/v1.0.0" target="_blank" rel="noreferrer">
            <img className="linkicon" src={LinkIcon} alt="linkicon" />
          </a>
          <h2 className="foldertitle">Dino Adventure with pygame</h2>
          <p className="foldertext">{t("projects.pygame")}</p>
          <p className="foldertechno">Python, Pygame</p>
          <img className="folderback" src={FolderBack} alt="folder" />
        </div>

        <div className={`folder ${visibleSections.includes(folderRefs.current[1]) ? 'visible' : 'hidden'}`} 
          ref={(el) => folderRefs.current[1] = el}>
          <img className="foldericon" src={FolderIcon} alt="foldericon" />
          <a href="https://github.com/mykhailoko/Dino-Adventure-website" target="_blank" rel="noreferrer">
            <img className="githubicon" src={GithubIcon} alt="githubicon" />
          </a>
          <a href="https://mykhailoko.github.io/Dino-Adventure-website/" target="_blank" rel="noreferrer">
            <img className="linkicon" src={LinkIcon} alt="linkicon" />
          </a>
          <h2 className="foldertitle">Dino Adventure website</h2>
          <p className="foldertext">{t("projects.website")}</p>
          <p className="foldertechno">HTML, CSS, Photoshop</p>
          <img className="folderback" src={FolderBack} alt="folder" />
        </div>

        <div className={`folder ${visibleSections.includes(folderRefs.current[2]) ? 'visible' : 'hidden'}`} 
          ref={(el) => folderRefs.current[2] = el}>
          <img className="foldericon" src={FolderIcon} alt="foldericon" />
          <a href="https://github.com/mykhailoko/Rock-Paper-Scissors" target="_blank" rel="noreferrer">
            <img className="githubicon" src={GithubIcon} alt="githubicon" />
          </a>
          <a href="https://mykhailoko.github.io/Rock-Paper-Scissors/" target="_blank" rel="noreferrer">
            <img className="linkicon" src={LinkIcon} alt="linkicon" />
          </a>
          <h2 className="foldertitle">Rock Paper Scissors</h2>
          <p className="foldertext">{t("projects.rock")}</p>
          <p className="foldertechno">HTML, CSS, JavaScript</p>
          <img className="folderback" src={FolderBack} alt="folder" />
        </div>
      </div>

      <div className="projectssecondline">
      <div className={`folder ${visibleSections.includes(folderRefs.current[3]) ? 'visible' : 'hidden'}`} 
          ref={(el) => folderRefs.current[3] = el} id="folderfirst">
          <img className="foldericon" src={FolderIcon} alt="foldericon" />
          <a href="https://github.com/mykhailoko/Michael" target="_blank" rel="noreferrer">
            <img className="githubicon" src={GithubIcon} alt="githubicon" />
          </a>
          <a href="https://mykhailoko.github.io/Michael/" target="_blank" rel="noreferrer">
            <img className="linkicon" src={LinkIcon} alt="linkicon" />
          </a>
          <h2 className="foldertitle">Portfolio website</h2>
          <p className="foldertextsmall">{t("projects.michael")}</p>
          <p className="foldertechnosmall">React.js, Photoshop</p>
          <img className="folderback" src={FolderBack} alt="folder" />
        </div>

        <div className={`folder ${visibleSections.includes(folderRefs.current[4]) ? 'visible' : 'hidden'}`} 
          ref={(el) => folderRefs.current[4] = el}>
          <img className="foldericon" src={FolderIcon} alt="foldericon" />
          <a href="https://github.com/mykhailoko/todo-list" target="_blank" rel="noreferrer">
            <img className="githubicon" src={GithubIcon} alt="githubicon" />
          </a>
          <a href="https://mykhailoko.github.io/todo-list/" target="_blank" rel="noreferrer">
            <img className="linkicon" src={LinkIcon} alt="linkicon" />
          </a>
          <h2 className="foldertitle">To-Do List</h2>
          <p className="foldertextsmall">{t("projects.todo")}</p>
          <p className="foldertechnosmall">React.js</p>
          <img className="folderback" src={FolderBack} alt="folder" />
        </div>
      </div>
    </div>
  )
}

export default Projects
