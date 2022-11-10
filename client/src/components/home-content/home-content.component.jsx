import React from "react";
import "./home-content.styles.css";
import { ReactComponent as Hand } from "../../assets/hand.svg";
import { ReactComponent as Send } from "../../assets/send.svg";

const HomeContent = () => (
  <div className="content">
    <h1 className="title">
      Amanuel F. <a href="#contact"><Hand /> </a>
    </h1>
    <h3 className="subtitle">Web Developer</h3>
    <p className="description">
      I'm web developer and web scrapper who is highly interested on ml and
      cyber security.
    </p>
    <a href="#contact" className="button button-flex">
      Contact Me <Send  />
    </a>
  </div>
);

export default HomeContent;
