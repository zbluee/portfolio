import React from "react";
import "./about.styles.css";
import ProfileImg from "../../assets/profile.jpg";
import AboutContent from "../../components/about-content/about-content.component";
import { ReactComponent as FileDownload } from "../../assets/file-download.svg";
import Resume from "../../assets/Resume.pdf";

const About = () => (
  <section className="about section" id="about">
    <h2 className="section-title">About Me</h2>
    <hr className="title-underline" />
    <div className="about-container container grid">
      <img src={ProfileImg} className="profile-img" alt="profile-img" />
      <div className="about-content">
        <AboutContent />
        <p className="about-descriprtion">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id
          interdum metus. Nulla facilisis quis sem eu auctor. Nam pretium ante
          nec felis maximus congue. Ut vel ligula lectus.
        </p>
        <a download href={Resume} className="button button-flex">
          Get Resume <FileDownload />
        </a>
      </div>
    </div>
  </section>
);

export default About;
