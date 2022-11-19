import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { connect } from "react-redux";
import { hoverActiveNav } from "../../redux/header/header.actions";
import Social from "../social-link/social-link.component";
import "./footer.styles.css";

const Footer = ({ hoverActiveNav }) => (
  <footer className="footer">
    <div className="footer-container container">
      <hr className="footer-underline title-underline" />
      <h1 className="footer-title">Amanuel T.</h1>
      <ul className="footer-list">
        <li>
          <Link to="/#about" className="footer-link" onClick={() => hoverActiveNav("about")}>
            about
          </Link>
        </li>
        <li>
          <Link smooth to="/contact#contact" className="footer-link" onClick={() => hoverActiveNav("contact") }>
            contact
          </Link>
        </li>
        <li>
          <Link smooth to="/#portfolio" className="footer-link" onClick={() => hoverActiveNav("portfolio")}>
            portfolio
          </Link>
        </li>
      </ul>
      <Social footer />
      <span className="footer-text">
        &copy;2022 Amanuel T. &nbsp;&nbsp; zbluee
      </span>
    </div>
  </footer>
);

const mapDispatchToProps = (dispatch) => ({
  hoverActiveNav: (navName) => dispatch(hoverActiveNav(navName)),
});

export default connect(null, mapDispatchToProps)(Footer);
