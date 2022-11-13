import React from "react";
import "./social-link.styles.css";

const Social = () => (
  <div className="social">
    <a
      href="https://github.com/zbluee/"
      className="social-icon"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i class="uil uil-github"></i>
    </a>
    <a
      href="https://www.linkedin.com/in/amanuel-temesgen-9316a2235/"
      className="social-icon"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i class="uil uil-linkedin"></i>
    </a>
    <a
      href="https://t.me/zeblue"
      className="social-icon"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i class="uil uil-telegram"></i>
    </a>
  </div>
);

export default Social;
