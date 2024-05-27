import React from "react";
import "./home.scss";
import profilePic from "../../assets/profile-img.png"; // In your JSX
import LottieAnimation from "../../components/animation/LottieAnimation";
import animationData from "../../assets/profile-animation.json"; // Import your lottie file
import { useTranslation } from 'react-i18next';
function Home() {
  const { t } = useTranslation();
  return (
    <div id="main" className="home-div">


      <div className="main-home">
        <div className="hero-container">
          <h1>{t('NameHeading')}</h1>
          <h1>
            <span>Front-end</span> {t('developer')}
          </h1>
          <p>
            {t('Introduction')}
          </p>
          <button>{t('HireMe')}</button>
        </div>
        <div className="second-section">
          {/* <img src={profilePic} alt="Ryan Aldrard" /> */}
          <LottieAnimation animationURL={animationData} width={400} height={400} />
        </div>
      </div>
    </div>
  );
}

export default Home;
