import React from "react";


// Assuming these imports paths are correct and you have these assets
import leaf from "../../assets/img/image1.jpeg";
import emotion from "../../assets/img/image2.jpeg";
import editor from "../../assets/img/image3.jpeg";
import kasa from "../../assets/img/image4.jpeg";
import suicide from "../../assets/img/image5.jpeg";
import bitsOfCode from "../../assets/Projects/blog.png";
import "./style.css"; // Make sure to create this CSS file
import ProjectCards from "../../components/projectCard";
import { useTranslation } from 'react-i18next';

function Projects() {
  const { t } = useTranslation();
  return (
    <div id="project-sec" className="project-div">

      <div className="projects-container">
        <h1 className="project-heading">
          {t('MyRecentWorks')} <strong className="purple">{t('work')}</strong>
        </h1>
        <p className="projects-description">
          {t('RecentWorksIntro')}
        </p>
        <div className="projects-grid">
          <ProjectCards
            imgPath={leaf}
            isBlog={false}
            title="Booki"
            description={t('BookiProject')}
            ghLink="https://github.com/soumyajit4419/Chatify"
            demoLink="https://chatify-49.web.app/"
          />
          <ProjectCards
            imgPath={emotion}
            isBlog={false}
            title="Sophie Bluel Architecte d'Intérieur"
            description={t('SophieBluelInteriorDesign')}
            ghLink="https://github.com/soumyajit4419/Chatify"
            demoLink="https://chatify-49.web.app/"
          />
          <ProjectCards
            imgPath={editor}
            isBlog={false}
            title="Menu Maker by Qwenta"
            description={t('MenuMakerByQwenta')}
            ghLink="https://github.com/soumyajit4419/Chatify"
            demoLink="https://chatify-49.web.app/"
          />
          <ProjectCards
            imgPath={suicide}
            isBlog={false}
            title="Nina Carducci Photographie"
            description={t('NinaCarducciPhotography')}
            ghLink="https://github.com/soumyajit4419/Chatify"
            demoLink="https://chatify-49.web.app/"
          />
          <ProjectCards
            imgPath={kasa}
            isBlog={false}
            title="Kasa"
            description={t('Kasa')}
            ghLink="https://github.com/soumyajit4419/Chatify"
            demoLink="https://chatify-49.web.app/"
          />
          <ProjectCards
            imgPath={bitsOfCode}
            isBlog={false}
            title="Mon Vieux Grimoire"
            description={t('MonVieuxGrimoire')}
            ghLink="https://github.com/soumyajit4419/Chatify"
            demoLink="https://chatify-49.web.app/"
          />

          {/* Repeat for each project */}
          {/* More <ProjectCard> components */}
        </div>
      </div>
    </div>
  );
}

export default Projects;
