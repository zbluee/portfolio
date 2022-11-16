import React from "react";
import "./social-link.styles.css";

const Social = () => (
  <div className="social">
    <a
      href="https://github.com/zbluee/"
      className="social-icon github"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="uil uil-github"></i>
    </a>
    <a
      href="https://www.linkedin.com/in/amanuel-temesgen-9316a2235/"
      className="social-icon linkedin"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="uil uil-linkedin"></i>
    </a>
    <a
      href="https://t.me/zeblue"
      className="social-icon telegram"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="uil uil-telegram"></i>
    </a>
  </div>
);

export default Social;
