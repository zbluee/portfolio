import React from "react";
import "./header.styles.css";
import { connect } from "react-redux";
import {
  toggleMenuHidden,
  toggleThemeDark,
} from "../../redux/header/header.actions";
import { createStructuredSelector } from "reselect";
import {
  selectToggleMenu,
  selectToggleTheme,
} from "../../redux/header/header.selectors";

const Header = ({ toggleMenu, toggleTheme, dispatch }) => (
  <header className="header">
    <nav className="nav container">
      <a href="index.html" className="nav-logo">
        Amanuel T.
      </a>
      <div className={toggleMenu ? "nav-menu show-menu" : "nav-menu"}>
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
          <li className="nav-item">
            <a
              href="#contact"
              className="nav-link"
              onClick={() => dispatch(toggleThemeDark())}
            >
              <i
                className={`uil uil-${
                  toggleTheme ? "moon" : "brightness"
                } nav-icon`}
              ></i>
              {toggleTheme ? "Light" : "Dark"}
            </a>
          </li>
        </ul>
        <i
          class="uil uil-times nav-close"
          onClick={() => dispatch(toggleMenuHidden())}
        ></i>
      </div>
      <div className="nav-toggle" onClick={() => dispatch(toggleMenuHidden())}>
        <i className="uil uil-apps"></i>
      </div>
    </nav>
  </header>
);

const mapStateToProps = createStructuredSelector({
  toggleMenu: selectToggleMenu,
  toggleTheme: selectToggleTheme,
});
export default connect(mapStateToProps)(Header);
