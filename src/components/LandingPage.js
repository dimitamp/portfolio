import React, { useState } from "react";
import "../styles/LandingPage.css";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import scrollToElement from "scroll-to-element";

const LandingPage = () => {
  const [specialTheme, setSpecialTheme] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [teasing, setTeasing] = useState(false);
  const [talking, setTalking] = useState(false);

  const scrollToAbout = () => {
    const elem = document.querySelector(".about-page");
    scrollToElement(elem, {
      offset: 0,
      duration: 1500
    });
  };
  const scrollToHome = () => {
    const elem = document.querySelector(".landing-page");
    scrollToElement(elem, {
      offset: 0,
      duration: 1500
    });
  };
  const scrollToProjects = () => {
    const elem = document.querySelector(".projects-page");
    scrollToElement(elem, {
      offset: 0,
      duration: 1500
    });
  };
  const toggleSpecialTheme = () => {
    setSpecialTheme(!specialTheme);
  };
  const renderSpecialTheme = () => {
    if (specialTheme) {
      return (
        <div className="snowflakes" aria-hidden="true">
          <div className="snowflake snowflake-blue snowflake-big">❄</div>
          <div className="snowflake snowflake-blue snowflake-big">❅</div>
          <div className="snowflake snowflake-blue snowflake-small">❆</div>
          <div className="snowflake snowflake-blue snowflake-small">❄</div>
          <div className="snowflake snowflake-blue snowflake-small">❅</div>
          <div className="snowflake snowflake-white snowflake-big">❆</div>
          <div className="snowflake snowflake-white snowflake-big">❄</div>
          <div className="snowflake snowflake-white snowflake-big">❅</div>
          <div className="snowflake snowflake-white snowflake-small">❆</div>
          <div className="snowflake snowflake-white snowflake-small">❄</div>
        </div>
      );
    }
  };
  const handleMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const handleMenuItemClick = scrollTo => {
    switch (scrollTo) {
      case "home":
        scrollToHome();
        break;
      case "about":
        scrollToAbout();
        break;
      case "portfolio":
        scrollToProjects();
        break;
      default:
    }
    setAnchorEl(null);
  };
  const getNewPosition = () => {
    var h = window.innerHeight - 30;
    var w = window.innerWidth - 30;
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    return { top: nh + "px", left: nw + "px" };
  };
  const getOldPosition = () => {
    const elem = document.getElementById("lamouchefatale");
    var oldq = elem.getBoundingClientRect();
    return { top: oldq.top + "px", left: oldq.left + "px" };
  };
  const animateFly = async () => {
    if (!talking) {
      setTeasing(false);
      const elem = document.getElementById("lamouchefatale");
      let values = [getOldPosition()];
      for (let i = 0; i <= 5; i++) {
        values.push(getNewPosition());
      }
      elem.animate(values, {
        duration: 5000
      });
    }
  };
  const teaseFly = () => {
    if (!teasing) {
      setTeasing(true);
      setTalking(true);
      setTimeout(() => {
        setTalking(false);
      }, 1500);
    }
  };
  const getRandomText = () => {
    const texts = [
      "You don't want to mess with La Mouche Fatale, trust me...",
      "Do you want to pick a fight?",
      "Hey, don't tease me...",
      "You've angered the beast..."
    ];
    return texts[Math.floor(Math.random() * texts.length)];
  };
  return (
    <div className="landing-page">
      {renderSpecialTheme()}
      <nav>
        <div className="brand">
          <div className="brand-title"> LMF | </div>
          <img
            className="hvr-wobble-vertical"
            src={require("../images/fly.png")}
            alt="fly icon"
            id="lamouchefatale"
            onClick={teasing ? animateFly : teaseFly}
          />
          <div
            className="talkingBubble"
            style={talking ? {} : { display: "none" }}
          >
            {getRandomText()}
          </div>
        </div>
        <div className="menu">
          <div className="menu-item" onClick={scrollToHome}>
            Home
          </div>
          <div className="menu-item" onClick={scrollToAbout}>
            About
          </div>
          <div className="menu-item" onClick={scrollToProjects}>
            Portfolio
          </div>
          <i className="fas fa-bars expandable-menu" onClick={handleMenuOpen} />
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem key={"home"} onClick={() => handleMenuItemClick("home")}>
              Home
            </MenuItem>
            <MenuItem
              key={"about"}
              onClick={() => handleMenuItemClick("about")}
            >
              About
            </MenuItem>
            <MenuItem
              key={"portfolio"}
              onClick={() => handleMenuItemClick("portfolio")}
            >
              Portfolio
            </MenuItem>
          </Menu>
        </div>
      </nav>
      <main>
        <div className="intro-wrapper">
          <div className="intro-name">Hello I'm Dimitris</div>
          <div className="intro-skills">
            Full-Stack Developer | React Enthousiast
          </div>
          <div className="social-icons">
            <a
              href="https://github.com/dimitamp"
              className="hvr-wobble-vertical"
            >
              <img
                style={specialTheme ? {} : { display: "none" }}
                className="github-hat"
                alt="christmas hat icon"
                src={require("../images/christmashat.png")}
              />
              <i className="fab fa-github" />
            </a>
            <a
              href="https://www.linkedin.com/in/dimitrios-tampakis-538144175"
              className="hvr-wobble-vertical"
            >
              <img
                style={specialTheme ? {} : { display: "none" }}
                className="linkedin-hat"
                alt="christmas hat icon"
                src={require("../images/christmashat.png")}
              />
              <i className="fab fa-linkedin" />
            </a>
            <a
              href="https://www.instagram.com/lamouchefatale/"
              className="hvr-wobble-vertical"
            >
              <img
                style={specialTheme ? {} : { display: "none" }}
                className="instagram-hat"
                alt="christmas hat icon"
                src={require("../images/christmashat.png")}
              />
              <i className="fab fa-instagram" />
            </a>
            <a
              href="https://devpost.com/DimitriosTampakis?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav"
              className="hvr-wobble-vertical"
            >
              <img
                style={specialTheme ? {} : { display: "none" }}
                className="dev-hat"
                alt="christmas hat icon"
                src={require("../images/christmashat.png")}
              />
              <i className="fab fa-dev" />
            </a>
            <a
              href="https://drive.google.com/uc?export=download&id=1u2f0xInSDNkP00ArgEV3D7r6GLhYKS_F"
              className="hvr-wobble-vertical"
            >
              <img
                style={specialTheme ? {} : { display: "none" }}
                className="instagram-hat"
                alt="christmas hat icon"
                src={require("../images/christmashat.png")}
              />
              <i className="fas fa-file" />
            </a>
          </div>
        </div>
      </main>
      <div className="changeTheme">
        <div
          className="changeThemeText"
          onClick={toggleSpecialTheme}
          style={specialTheme ? { color: "red" } : {}}
        >
          Special Theme
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
