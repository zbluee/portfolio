import React from "react";
import "./header.styles.css";
import { connect } from "react-redux";
import { toggleMenuHidden } from "../../redux/header/header.actions";

const Header = ({ toggle, dispatch }) => (
  <header className="header">
    <nav className="nav container">
      <a href="index.html" className="nav-logo">
        Amanuel
      </a>
      <div className={toggle ? "nav-menu show-menu" : "nav-menu"}>
        <ul className="nav-list grid">
          <li className="nav-item">
            <a href="#home" className="nav-link active-link">
              <i className="uil uil-estate nav-icon"></i>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link">
              <i className="uil uil-user nav-icon"></i>
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="#skills" className="nav-link">
              <i className="uil uil-file-alt nav-icon"></i>
              Skills
            </a>
          </li>
          <li className="nav-item">
            <a href="#services" className="nav-link">
              <i className="uil uil-briefcase-alt nav-icon"></i>
              Services
            </a>
          </li>
          <li className="nav-item">
            <a href="#portfolio" className="nav-link">
              <i className="uil uil-scenery nav-icon"></i>
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link">
              <i className="uil uil-message nav-icon"></i>
              Contact
            </a>
          </li>
        </ul>
        <i class="uil uil-times nav-close" onClick={() => dispatch(toggleMenuHidden())}></i>
      </div>
      <div className="nav-toggle" onClick={() => dispatch(toggleMenuHidden())}>
        <i className="uil uil-apps"></i>
      </div>
    </nav>
  </header>
);


const mapStateToProps = ({ header: { toggle } }) => ({
  toggle,
});
export default connect(mapStateToProps)(Header);
