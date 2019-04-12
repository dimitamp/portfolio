import React, { Component } from "react";
import "../styles/ProjectsPage.css";

class ProjectsPage extends Component {
  render() {
    return (
      <div className="projects-page">
        <main>
          <div className="project-card hvr-wobble-vertical">
            <div className="project-skills-wrapper">
              <div className="project-skill-icon">CSS</div>
              <div className="project-skill-icon">JS</div>
              <div className="project-skill-icon">NODE</div>
              <div className="project-skill-icon">REACT</div>
              <div className="project-skill-icon">MONGO</div>
            </div>
            <a
              href="http://83.212.107.194:4000"
              className="project-description"
            >
              FAMILIES SHARE
            </a>
          </div>
          <div className="project-card hvr-wobble-vertical">
            <div className="project-skills-wrapper">
              <div className="project-skill-icon">JS</div>
              <div className="project-skill-icon">CSS</div>
              <div className="project-skill-icon">REACT</div>
            </div>
            <a
              href="https://github.com/dimitamp/portfolio"
              className="project-description"
            >
              PORTFOLIO
            </a>
          </div>
          <div className="project-card hvr-wobble-vertical">
            <div className="project-skills-wrapper">
              <div className="project-skill-icon">CSS</div>
              <div className="project-skill-icon">JS</div>
              <div className="project-skill-icon">HTML</div>
            </div>
            <div className="project-description">UX BOT</div>
          </div>
          <div className="project-card hvr-wobble-vertical">
            <div className="project-skills-wrapper">
              <div className="project-skill-icon">NLP</div>
              <div className="project-skill-icon">WIT.AI</div>
              <div className="project-skill-icon">CHATBOT</div>
              <div className="project-skill-icon">NODE</div>
            </div>
            <div className="project-description">UX EXTENSION</div>
          </div>
        </main>
      </div>
    );
  }
}

export default ProjectsPage;
