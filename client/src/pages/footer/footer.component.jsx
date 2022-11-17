import React from "react";
import Social from "../../components/social-link/social-link.component";
import "./footer.styles.css";

const Footer = () => (
  <footer className="footer">
    <div className="footer-container container">
      <hr className="footer-underline title-underline" />
      <h1 className="footer-title">Amanuel T.</h1>
      <ul className="footer-list">
        <li>
          <a href="#about" className="footer-link">
            about
          </a>
        </li>
        <li>
          <a href="#contact" className="footer-link">
            contact
          </a>
        </li>
        <li>
          <a href="#portfolio" className="footer-link">
            portfolio
          </a>
        </li>
      </ul>
      <Social footer />
      <span className="footer-text">
        &copy;2022 Amanuel T. &nbsp;&nbsp; zbluee
      </span>
    </div>
  </footer>
);

export default Footer;
