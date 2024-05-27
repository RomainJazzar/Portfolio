import React from "react";
import Heading from "../../components/heading/about-heading/Heading";
import Skills from "../../components/skill-section/Skills";
import "./about.scss";
import LottieAnimation from "../../components/animation/LottieAnimation";
import animationData from "../../assets/portfolio-animation.json"; // Import your lottie file

function About() {
  
  return (
    <div id="about" className="about">
      <Heading />
      <div className="section">
        <div className="animation-div" >
          <LottieAnimation animationURL={animationData} width={500} height={500} />
        </div>
        <div className="skills-div">
          <Skills />
        </div>
      </div>
    </div>
  );
}

export default About;
