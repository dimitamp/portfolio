import React from "react";
import "../styles/AboutPage.css";

const AboutPage = () => {
  return (
    <div className="about-page">
      <main>
        <div className="profile-photo">
          <img src={require("../images/profile_photo.jpg")} alt="profile" />
        </div>
        <div className="about-section">
          <div className="studies">
            Dimitris holds a Diploma in Electrical and Computer Engineering,
            which he received from the Faculty of Engineering of Aristotle
            University of Thessaloniki. He is currently working at Versatile
            Innovations Labs (<a href="https://vilabs.eu/">ViLabs</a>) - a
            company that is active in Research and Development of new ICT
            Technologies - as a Full Stack Developer. He's also working at the
            Information Processing Laboratory (
            <a href="https://issel.ee.auth.gr/">ISSEL</a>) of the Aristotle
            University as a Full Stack Developer and Research Associate.
          </div>
          <div className="current-work">
            His interests include Software Development, Machine Learning, Data
            Mining and Web Development. He is an enthusiastic learner and likes
            to participate in hackathons and online courses, seeing them as an
            opportunity to hone his skills. He loves coding, especially in
            Javascript. His favourite JavaScript technologies include: NodeJS,
            Express, MongoDB, React/React Native and Redux.
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;
