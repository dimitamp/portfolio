import React, { Component } from "react";
import "../styles/LandingPage.css";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import scrollToElement from "scroll-to-element";

class LandingPage extends Component {
  state = {
    specialTheme: false,
    anchorEl: null,
    teasing: false,
    talking: false
  };
  scrollToAbout = () => {
    const elem = document.querySelector(".about-page");
    scrollToElement(elem, {
      offset: 0,
      duration: 1500
    });
  };
  scrollToHome = () => {
    const elem = document.querySelector(".landing-page");
    scrollToElement(elem, {
      offset: 0,
      duration: 1500
    });
  };
  scrollToProjects = () => {
    const elem = document.querySelector(".projects-page");
    scrollToElement(elem, {
      offset: 0,
      duration: 1500
    });
  };
  toggleSpecialTheme = () => {
    this.setState({ specialTheme: !this.state.specialTheme });
  };
  renderSpecialTheme = () => {
    if (this.state.specialTheme) {
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
  handleMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };
  handleMenuClose = () => {
    this.setState({ anchorEl: null });
  };
  handleMenuItemClick = scrollTo => {
    switch (scrollTo) {
      case "home":
        this.scrollToHome();
        break;
      case "about":
        this.scrollToAbout();
        break;
      case "portfolio":
        this.scrollToProjects();
        break;
      default:
    }
    this.setState({ anchorEl: null });
  };
  getNewPosition = () => {
    var h = window.innerHeight - 30;
    var w = window.innerWidth - 30;
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    return { top: nh + "px", left: nw + "px" };
  };
  getOldPosition = () => {
    const elem = document.getElementById("lamouchefatale");
    var oldq = elem.getBoundingClientRect();
    return { top: oldq.top + "px", left: oldq.left + "px" };
  };
  animateFly = async () => {
    if (!this.state.talking) {
      this.setState({ teasing: false });
      const elem = document.getElementById("lamouchefatale");
      let values = [this.getOldPosition()];
      for (let i = 0; i <= 5; i++) {
        values.push(this.getNewPosition());
      }
      elem.animate(values, {
        duration: 5000
      });
    }
  };
  teaseFly = () => {
    if (!this.state.teasing) {
      this.setState({ teasing: true, talking: true });
      setTimeout(() => {
        this.setState({ talking: false });
      }, 1500);
    }
  };
  getRandomText = () => {
    const texts = [
      "You don't want to mess with La Mouche Fatale, trust me...",
      "Do you want to pick a fight?",
      "Hey, don't tease me...",
      "You've angered the beast..."
    ];
    return texts[Math.floor(Math.random() * texts.length)];
  };
  render() {
    return (
      <div className="landing-page">
        {this.renderSpecialTheme()}
        <nav>
          <div className="brand">
            <div className="brand-title"> LMF | </div>
            <img
              className="hvr-wobble-vertical"
              src={require("../images/fly.png")}
              alt="fly icon"
              id="lamouchefatale"
              onClick={this.state.teasing ? this.animateFly : this.teaseFly}
            />
            <div
              className="talkingBubble"
              style={this.state.talking ? {} : { display: "none" }}
            >
              {this.getRandomText()}
            </div>
          </div>
          <div className="menu">
            <div className="menu-item" onClick={this.scrollToHome}>
              Home
            </div>
            <div className="menu-item" onClick={this.scrollToAbout}>
              About
            </div>
            <div className="menu-item" onClick={this.scrollToProjects}>
              Portfolio
            </div>
            <i
              className="fas fa-bars expandable-menu"
              onClick={this.handleMenuOpen}
            />
            <Menu
              anchorEl={this.state.anchorEl}
              open={Boolean(this.state.anchorEl)}
              onClose={this.handleMenuClose}
            >
              <MenuItem
                key={"home"}
                onClick={() => this.handleMenuItemClick("home")}
              >
                Home
              </MenuItem>
              <MenuItem
                key={"about"}
                onClick={() => this.handleMenuItemClick("about")}
              >
                About
              </MenuItem>
              <MenuItem
                key={"portfolio"}
                onClick={() => this.handleMenuItemClick("portfolio")}
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
                  style={this.state.specialTheme ? {} : { display: "none" }}
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
                  style={this.state.specialTheme ? {} : { display: "none" }}
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
                  style={this.state.specialTheme ? {} : { display: "none" }}
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
                  style={this.state.specialTheme ? {} : { display: "none" }}
                  className="dev-hat"
                  alt="christmas hat icon"
                  src={require("../images/christmashat.png")}
                />
                <i className="fab fa-dev" />
              </a>
            </div>
          </div>
        </main>
        {/* <div className="changeTheme">
          <div
            className="changeThemeText"
            onClick={this.toggleSpecialTheme}
            style={this.state.specialTheme ? { color: "red" } : {}}
          >
            Special Theme
          </div>
        </div> */}
      </div>
    );
  }
}

export default LandingPage;
