import React, { Component } from "react";
import "./App.css";
import LandingPage from "./components/LandingPage";
import AboutPage from "./components/AboutPage";
import ProjectsPage from "./components/ProjectsPage";
import { ThemeProvider } from "styled-components";

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={{ mode: "dark" }}>
        <React.Fragment>
          <LandingPage />
          <AboutPage />
          <ProjectsPage />
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

export default App;
