import React from "react";
import "./scroll-down.styles.css";
import { ReactComponent as Scroll } from "../../assets/angle-down.svg";

const ScrollDown = () => (
  <div className="scroll">
    <a href="#about" className="scroll-button button-flex">
      <Scroll />
      <span className="scroll-name">scroll down</span>
    </a>
  </div>
);
export default ScrollDown;
