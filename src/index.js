import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import ProjectPage from "./component/Pages/Projects";
import SkillPage from "./component/Pages/Skills";

ReactDOM.render(
  <Router>
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route exact path="/projects" element={<ProjectPage />} />
      <Route exact path="/skills" element={<SkillPage />} />
    </Routes>
  </Router>,

  document.getElementById("root")
);


reportWebVitals();
