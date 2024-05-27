// Skills.js
import React from "react";
import "./Skills.scss"; // Create a CSS file for styling
import { Icon } from "@iconify/react";
import { useTranslation } from 'react-i18next';

const Skills = () => {
  const { t } = useTranslation();
  return (
    <section className="skills">
      <div className="skills-container"></div>
      <section className="work">
        <h2>{t('FullStackDevelopment')}</h2>
        <div className="skill-icons-div">
          <div className="skill-item">
            <Icon icon="vscode-icons:file-type-html" width={60} height={60} />
          </div>
          <div className="skill-item">
            <Icon icon="devicon:css3" width={56} height={56} />
          </div>
          <div className="skill-item">
            <Icon icon="logos:javascript" width={56} height={56} />
          </div>
          <div className="skill-item">
            <Icon icon="devicon:nodejs" width={56} height={56} />
          </div>
          <div className="skill-item">
            <Icon icon="skill-icons:mongodb" width={56} height={56} />
          </div>
          <div className="skill-item">
            <Icon icon="logos:react" width={56} height={56} />
          </div>
          <div className="skill-item">
            <Icon icon="devicon:csharp" width={56} height={56} />
          </div>

        </div>
        <ul>
          <li>
            {t('li1')}
          </li>
          <li>
            {t('li2')}
          </li>
          <li>
            {t('li3')}
          </li>
          <li>
            {t('li4')}
          </li>
          <li>
            {t('li5')}
          </li>
        </ul>
      </section>
    </section>
  );
};

export default Skills;
