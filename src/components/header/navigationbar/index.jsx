import React, { useState, useEffect } from "react";
import "./NavigationBar.scss";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cvPDF from "../../../assets/Romainjazzar-cv.pdf";
import { Icon } from "@iconify/react";
import DarkModeToggle from "../../darkModeToggle";
import { useTheme } from '../../../Context/ThemeContext.jsx';
import LanguageSwitcher from "../../../hook/useTranslation.jsx";
import { useTranslation } from 'react-i18next';
import logo from '../../../assets/logo.png';

const NavigationBar = ({ activeSection }) => {
  const { t } = useTranslation();
  const { theme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    setScrolled(offset > 0);
  };

  const handleResize = () => {
    setIsSmallScreen(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleResize(); // Check screen size on initial render

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => { }, [theme]);
  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""} ${theme ? "theme-black" : ""}`} >
      <div className="navbar-logo"><img src={logo} alt="" width="300px" height="50px" /></div>

      {/* Hamburger Menu for Small Screens */}
      {isSmallScreen && (
        <>
          <div className="hamburger-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <FontAwesomeIcon icon={faBars} style={{ color: 'white', fontSize: '30px' }} />
          </div>
          <div className={`navbar-links ${isMenuOpen ? "open" : ""}`}>

            <div className="items-icons" onClick={() => scrollToSection('main')}>
              <Icon icon="mdi-light:home" width={24} height={18} />
              <a className={`nav-item ${activeSection === 'main' ? 'active' : ''}`}>
                Home
              </a>
            </div>
            <div className="items-icons" onClick={() => scrollToSection('about')}>
              <Icon icon="material-symbols:person-outline" width={24} height={18} />
              <a className={`nav-item ${activeSection === 'about' ? 'active' : ''}`}>
                {t('About')}
              </a>
            </div>
            <div className="items-icons" onClick={() => scrollToSection('project-sec')}>
              <Icon icon="eos-icons:project-outlined" width={24} height={18} />
              <a className={`nav-item ${activeSection === 'project-sec' ? 'active' : ''}`}>
                {t('Projects')}
              </a>
            </div>
            <div className="items-icons" onClick={() => scrollToSection('contact')}>
              <Icon icon="mdi:resume" width={24} height={18} />
              <a className={`nav-item ${activeSection === 'contact' ? 'active' : ''}`}>
                {t('Contact')}
              </a>
            </div>

            {/* <div className="items-icons">
          <Icon icon="brandico:blogger" width={24} height={18} />
          <a className="nav-item">
            Blogs
          </a>
        </div> */}
            <div className="items-icons">


              <a id="download-header-btn" href={cvPDF} download="MyResume.pdf">
                {/* <Icon icon="line-md:download-loop" width={30} height={30} /> */}
                {t('DownloadCV')}
              </a>


            </div>
            <div className="items-icons">
              <DarkModeToggle colorChange={scrolled} />
            </div>
            <div className="items-icons">
              <LanguageSwitcher />
            </div>



          </div>
        </>
      )}

      {/* Regular Navigation for Large Screens */}
      {!isSmallScreen && (
        <div className="navbar-links">
          <div className="items-icons" onClick={() => scrollToSection('main')}>
            <Icon icon="mdi-light:home" width={24} height={18} />
            <a className={`nav-item ${activeSection === 'main' ? 'active' : ''}`}>
              Home
            </a>
          </div>
          <div className="items-icons" onClick={() => scrollToSection('about')}>
            <Icon icon="material-symbols:person-outline" width={24} height={18} />
            <a className={`nav-item ${activeSection === 'about' ? 'active' : ''}`}>
              {t('About')}
            </a>
          </div>
          <div className="items-icons" onClick={() => scrollToSection('project-sec')}>
            <Icon icon="eos-icons:project-outlined" width={24} height={18} />
            <a className={`nav-item ${activeSection === 'project-sec' ? 'active' : ''}`}>
              {t('Projects')}
            </a>
          </div>
          <div className="items-icons" onClick={() => scrollToSection('contact')}>
            <Icon icon="mdi:resume" width={24} height={18} />
            <a className={`nav-item ${activeSection === 'contact' ? 'active' : ''}`}>
              {t('Contact')}
            </a>
          </div>

          {/* <div className="items-icons">
          <Icon icon="brandico:blogger" width={24} height={18} />
          <a className="nav-item">
            Blogs
          </a>
        </div> */}
          <div className="items-icons">


            <a id="download-header-btn" href={cvPDF} download="MyResume.pdf">
              {/* <Icon icon="line-md:download-loop" width={30} height={30} /> */}
              {t('DownloadCV')}
            </a>


          </div>
          <div className="items-icons">
            <DarkModeToggle colorChange={scrolled} />
          </div>
          <div className="items-icons">
            <LanguageSwitcher />
          </div>


        </div>
      )}

    </nav >
  );
};

export default NavigationBar;
