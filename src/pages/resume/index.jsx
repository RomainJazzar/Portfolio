import React from "react";
import "./style.css"
import cvPDF from "../../assets/Romainjazzar-cv.pdf"
import { FiDownload } from 'react-icons/fi'; // Import the download icon
function Resume() {

  return <div id="resume" className="resume">
    <h1 style={{ color: 'white' }}>My <span style={{ color: '#F5B333' }}>Resume</span></h1>
    <img style={{ height: 600 }} src="/src/assets/cv.png" />
    <a href={cvPDF} download="MyResume.pdf" >
      <button className="download-btn">
        <FiDownload style={{ marginRight: 8 }} />
        <span >Download</span></button>
    </a>
  </div>;
}

export default Resume;
