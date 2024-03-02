import React from "react";
import "./about.styles.css";
import ProfileImg from "../../assets/profile.jpg";
import AboutContent from "../about-content/about-content.component";
import { ReactComponent as FileDownload } from "../../assets/file-download.svg";

const About = () => (
  <section className="about section" id="about">
    <h2 className="section-title">About Me</h2>
    <hr className="title-underline" />
    <div className="about-container container grid">
      <img src={ProfileImg} className="profile-img" alt="profile-img" />
      <div className="about-content">
        <AboutContent />
        <p className="about-descriprtion">
          Computer Science graduate with a passion for software engineering, machine learning (ML), and cybersecurity.
          Skilled in programming languages and experienced in developing web solutions.
        </p>
        <a
          href="https://drive.google.com/file/d/1aoKVm4DJV-F9eebIyrTPr65ObsEolWjk/view?usp=sharing"
          className="button button-flex"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get Resume <FileDownload />
        </a>
      </div>
    </div>
  </section>
);

export default About;
