import React, { Component } from "react";
import "../styles/ProjectsPage.css";

class ProjectsPage extends Component {
  render() {
    return (
      <div className="projects-page">
        <main>
          <div className="project-card hvr-wobble-vertical">
            <div className="project-skills-wrapper">
              <i className="fab fa-css3-alt project-skill-icon" />
              <i className="fab fa-node project-skill-icon" />
              <i className="fab fa-react project-skill-icon" />
              <div className="project-skill-icon">
                <img
                  className="project-skill-image"
                  src={require("../images/mongoIcon.png")}
                  alt="mongo icon"
                />
              </div>
            </div>
            <a
              href="https://www.families-share.eu/"
              className="project-description"
            >
              FAMILIES SHARE
            </a>
          </div>
          <div className="project-card hvr-wobble-vertical">
            <div className="project-skills-wrapper">
              <i className="fab fa-react project-skill-icon" />
              <i className="fab fa-css3-alt project-skill-icon" />
              <i className="fab fa-node project-skill-icon" />
            </div>
            <div className="project-description">PORTFOLIO</div>
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
              <div className="project-skill-icon">
                <img
                  className="project-skill-image"
                  src={require("../images/redux.png")}
                  alt="nlp icon"
                />
              </div>
              <i className="fas fa-react project-skill-icon" />
            </div>
            <a
              href="https://github.com/dimitamp/PMH"
              className="project-description"
            >
              PIMP MY HOME
            </a>
          </div>
        </main>
      </div>
    );
  }
}

export default ProjectsPage;
