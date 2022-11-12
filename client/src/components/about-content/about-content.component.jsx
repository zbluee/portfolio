import React from "react";
import "./about-content.styles.css";
import { ReactComponent as Education } from "../../assets/graduation.svg";
import { ReactComponent as Experience } from "../../assets/briefcase.svg";
import { ReactComponent as Interest } from "../../assets/interest.svg";

const AboutContent = () => (
  <div className="about-info grid">
    <div className="about-box">
    <Education />
      <h3 className="about-title">Education</h3>
      <span className="about-subtitle">Computer Science</span>
    </div>
    <div className="about-box">
    <Experience />
      <h3 className="about-title">Experience</h3>
      <span className="about-subtitle">8 months </span>
    </div>
    <div className="about-box">
    <Interest />
      <h3 className="about-title">Interest</h3>
      <span className="about-subtitle">Cyber Security & ML</span>
    </div>
  </div>
);

export default AboutContent;
