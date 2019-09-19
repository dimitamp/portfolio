import React from "react";
import "../styles/ProjectsPage.css";

const ProjectsPage = () => {
  return (
    <div className="projects-page">
      <div className="project-card hvr-wobble-vertical">
        <div className="project-skills-wrapper">
          <i className="fab fa-node project-skill-icon" />
          <i className="fab fa-react project-skill-icon" />
          <div className="project-skill-icon">
            <img
              className="project-skill-image"
              src={require("../images/mongoIcon.png")}
              alt="mongo icon"
            />
          </div>
          <div className="project-skill-icon">
            <img
              className="project-skill-image"
              src={require("../images/redux.png")}
              alt="nlp icon"
            />
          </div>
        </div>
        <a
          href="https://play.google.com/store/apps/details?id=com.vilabs.families_share_bologna"
          className="project-description"
        >
          FAMILIES SHARE
        </a>
      </div>
      <div className="project-card hvr-wobble-vertical">
        <div className="project-skills-wrapper">
          <div className="project-skill-icon">
            <img
              className="project-skill-image"
              src={require("../images/redux.png")}
              alt="nlp icon"
            />
          </div>
          <i className="fab fa-react project-skill-icon" />
        </div>
        <a
          href="https://github.com/dimitamp/PMH"
          className="project-description"
        >
          PIMP MY HOME
        </a>
      </div>
      <div className="project-card hvr-wobble-vertical">
        <div className="project-skills-wrapper">
          <i className="fab fa-css3-alt project-skill-icon" />
          <i className="fab fa-js project-skill-icon" />
          <i className="fab fa-html5 project-skill-icon" />
        </div>
        <div className="project-description">UX BOT</div>
      </div>
      <div className="project-card hvr-wobble-vertical">
        <div className="project-skills-wrapper">
          <div className="project-skill-icon">
            <img
              className="project-skill-image"
              src={require("../images/nlpIcon.png")}
              alt="nlp icon"
            />
          </div>
          <i className="fas fa-robot project-skill-icon" />
          <i className="fab fa-node project-skill-icon" />
        </div>
        <div className="project-description">UX EXTENSION</div>
      </div>
      <div className="project-card hvr-wobble-vertical">
        <div className="project-skills-wrapper">
          <i className="fab fa-react project-skill-icon" />
          <i className="fab fa-npm project-skill-icon" />
        </div>
        <a
          href="https://www.npmjs.com/package/react-intro-slider"
          className="project-description"
        >
          REACT INTRO SLIDER
        </a>
      </div>
      <div className="project-card hvr-wobble-vertical">
        <div className="project-skills-wrapper">
          <i className="fab fa-node project-skill-icon" />
          <div className="project-skill-icon">
            <img
              className="project-skill-image"
              src={require("../images/mongoIcon.png")}
              alt="mongo icon"
            />
          </div>
        </div>
        <a
          h
          href="https://github.com/dimitamp/authentication-microservice"
          className="project-description"
        >
          AUTHENTICATION MICROSERVICE
        </a>
      </div>
      <div className="project-card hvr-wobble-vertical">
        <div className="project-skills-wrapper">
          <div className="project-skill-icon">
            <img
              className="project-skill-image"
              src={require("../images/graphqlIcon.png")}
              alt="nlp icon"
            />
          </div>
          <div className="project-skill-icon">
            <img
              className="project-skill-image"
              src={require("../images/mongoIcon.png")}
              alt="mongo icon"
            />
          </div>
          <i className="fab fa-node project-skill-icon" />
        </div>
        <a
          href="https://github.com/dimitamp/authentication-microservice-graphql"
          className="project-description"
        >
          AUTHENTICATION MICROSERVICE GRAPHQL
        </a>
      </div>
      <div className="project-card hvr-wobble-vertical">
        <div className="project-skills-wrapper">
          <i className="fab fa-node project-skill-icon" />
          <i className="fab fa-react project-skill-icon" />
          <div className="project-skill-icon">
            <img
              className="project-skill-image"
              src={require("../images/redux.png")}
              alt="nlp icon"
            />
          </div>
          <div className="project-skill-icon">
            <img
              className="project-skill-image"
              src={require("../images/mongoIcon.png")}
              alt="mongo icon"
            />
          </div>
        </div>
        <a
          href="https://sities-platform.netlify.com"
          className="project-description"
        >
          SYTHES PLATFORM
        </a>
      </div>
    </div>
  );
};

export default ProjectsPage;
