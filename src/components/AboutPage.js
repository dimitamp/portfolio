import React, { Component } from "react";
import "../styles/AboutPage.css";

class AboutPage extends Component {
  render() {
    return (
      <div className="about-page">
        <main>
          <div className="profile-photo">
            <img src={require("../images/profile_photo.jpg")} alt="profile" />
          </div>
          <div className="about-section">
            <div className="studies">
              I received the Diploma Degree in Electrical & Computer Engineering
              from the faculty school of Aristotle University of Thessaloniki in
              2017.
            </div>
            <div className="current-work">
              Currently I am working as a Full Stack Developer at{" "}
              <a href="https://vilabs.eu/">ViLabs</a>, a company that is active
              in Research and Development of new ICT Technologies.
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default AboutPage;
