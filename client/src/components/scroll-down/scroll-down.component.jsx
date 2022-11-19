import React from "react";
import "./scroll-down.styles.css";
import {HashLink as Link} from "react-router-hash-link"
import { ReactComponent as Scroll } from "../../assets/angle-down.svg";

const ScrollDown = () => (
  <div className="scroll">
    <Link smooth to="#about" className="scroll-button button-flex">
      <Scroll />
      <span className="scroll-name">scroll down</span>
    </Link>
  </div>
);
export default ScrollDown;
