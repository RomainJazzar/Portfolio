import React from "react";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import './style.css'
function ProjectCards(props) {
    return (
        <div className="project-card">
            <img src={props.imgPath} alt="card-img" className="project-card-img" />
            <div className="project-card-body">
                <h5 className="project-card-title">{props.title}</h5>
                <p className="project-card-text">{props.description}</p>
                <div className="btns-div">


                    <a className="project-card-button" href={props.ghLink} target="_blank" rel="noopener noreferrer">
                        <BsGithub /> {props.isBlog ? "Blog" : "GitHub"}
                    </a>
                    {!props.isBlog && props.demoLink && (
                        <a
                            id="demo-btn"
                            className="project-card-button"
                            href={props.demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ marginLeft: "10px" }}
                        >
                            <CgWebsite /> Demo
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProjectCards;
