import React, { Component } from "react";
import "./App.css";
import LandingPage from "./components/LandingPage";
import AboutPage from "./components/AboutPage";
import ProjectsPage from "./components/ProjectsPage";

class App extends Component {
  render() {
    return (
      <div className="app">
        <LandingPage />
        <AboutPage />
        <ProjectsPage />
      </div>
    );
  }
}

export default App;
