import React from "react";
import "./not-found.styles.css";
import { HashLink as Link } from "react-router-hash-link";

const NotFound = () => (
  <section className="section not-found">
    <div className="not-found-container container grid">
      <h2 className="not-found-title">404</h2>
      <h3 className="not-found-subtitle">Oops! Page Not Be Found</h3>
      <div className="not-found-description">
        <span>This page isn't available. Sorry about that.</span>
        <span>Try searching for something else.</span>
      </div>
      <Link to="/#home">
        <button className="button button-flex back-to-home">
          Back to homepage
        </button>
      </Link>
    </div>
  </section>
);

export default NotFound;
