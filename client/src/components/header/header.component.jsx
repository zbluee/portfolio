import React from "react";
import "./header.styles.css";
import { HashLink as Link} from "react-router-hash-link"
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
      <Link smooth to="/#home" className={activeNav === "home" ? "nav-logo active-link" : "nav-logo"}>
        Amanuel T.
      </Link>
      <div className={toggleMenu ? "nav-menu show-menu" : "nav-menu"}>
        <ul className="nav-list grid">
          <li className="nav-item">
            <Link smooth to="/#home" className={activeNav === "home"? "nav-link active-link" : "nav-link"} onClick={() => dispatch(hoverActiveNav("home"))}>
              <i className="uil uil-estate nav-icon"></i>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link smooth to="/#about"  className={activeNav === "about" ? "nav-link active-link" : "nav-link"} onClick={() => dispatch(hoverActiveNav("about"))}>
              <i className="uil uil-user nav-icon"></i>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link smooth to="/#skills" className={activeNav === "skills" ? "nav-link active-link" : "nav-link"} onClick={() => dispatch(hoverActiveNav("skills"))}>
              <i className="uil uil-file-alt nav-icon"></i>
              Skills
            </Link>
          </li>
          <li className="nav-item">
            <Link smooth to="/#services" className={activeNav === "services" ? "nav-link active-link" : "nav-link"} onClick={() => dispatch(hoverActiveNav("services"))}>
              <i className="uil uil-briefcase-alt nav-icon"></i>
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link smooth to="/#portfolio" className={activeNav === "portfolio" ? "nav-link active-link" : "nav-link"} onClick={() => dispatch(hoverActiveNav("portfolio"))}>
              <i className="uil uil-scenery nav-icon"></i>
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link smooth to="/contact#contact" className={activeNav === "contact" ? "nav-link active-link" : "nav-link"} onClick={() => dispatch(hoverActiveNav("contact"))}>
              <i className="uil uil-message nav-icon"></i>
              Contact
            </Link>
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
