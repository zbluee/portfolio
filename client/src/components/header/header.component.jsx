import React from "react";
import "./header.styles.css";
import { connect } from "react-redux";
import {
  toggleMenuHidden,
  toggleThemeDark,
  hoverActiveNav
} from "../../redux/header/header.actions";
import { createStructuredSelector } from "reselect";
import {
  selectToggleMenu,
  selectToggleTheme,
  selectActiveNav
} from "../../redux/header/header.selectors";

const Header = ({ toggleMenu, toggleTheme, activeNav, dispatch }) => (
  <header className="header">
    <nav className="nav container">
      <a href="index.html" className="nav-logo">
        Amanuel T.
      </a>
      <div className={toggleMenu ? "nav-menu show-menu" : "nav-menu"}>
        <ul className="nav-list grid">
          <li className="nav-item">
            <a href="#home" className={activeNav === "home"? "nav-link active-link" : "nav-link"} onClick={() => dispatch(hoverActiveNav("home"))}>
              <i className="uil uil-estate nav-icon"></i>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#about" className={activeNav === "about" ? "nav-link active-link" : "nav-link"} onClick={() => dispatch(hoverActiveNav("about"))}>
              <i className="uil uil-user nav-icon"></i>
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="#skills" className={activeNav === "skills" ? "nav-link active-link" : "nav-link"} onClick={() => dispatch(hoverActiveNav("skills"))}>
              <i className="uil uil-file-alt nav-icon"></i>
              Skills
            </a>
          </li>
          <li className="nav-item">
            <a href="#services" className={activeNav === "services" ? "nav-link active-link" : "nav-link"} onClick={() => dispatch(hoverActiveNav("services"))}>
              <i className="uil uil-briefcase-alt nav-icon"></i>
              Services
            </a>
          </li>
          <li className="nav-item">
            <a href="#portfolio" className={activeNav === "portfolio" ? "nav-link active-link" : "nav-link"} onClick={() => dispatch(hoverActiveNav("portfolio"))}>
              <i className="uil uil-scenery nav-icon"></i>
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className={activeNav === "contact" ? "nav-link active-link" : "nav-link"} onClick={() => dispatch(hoverActiveNav("contact"))}>
              <i className="uil uil-message nav-icon"></i>
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#theme"
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
          className="uil uil-times nav-close"
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
  activeNav : selectActiveNav
});
export default connect(mapStateToProps)(Header);
