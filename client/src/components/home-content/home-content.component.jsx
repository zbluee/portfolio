import React from "react";
import "./home-content.styles.css";
import {HashLink as Link} from "react-router-hash-link"
import { ReactComponent as Hand } from "../../assets/hand.svg";
import { ReactComponent as Send } from "../../assets/send.svg";
import Typewriter from "typewriter-effect";

const HomeContent = () => (
  <div className="content">
    <h1 className="title">
      Amanuel T.{" "}
      <Link to="/contact#contact">
        <Hand />{" "}
      </Link>
    </h1>
    <h3 className="subtitle">
      Web
      <span>
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
            strings: [" Developer.", " Scraper."],
          }}
        />
      </span>
    </h3>
    <p className="description">
      I'm web developer and web scrapper who is highly interested on ml and
      cyber security.
    </p>
    <Link to="/contact#contact" className="button button-flex" id="ct-btn">
      Contact Me <Send />
    </Link>
  </div>
);

export default HomeContent;
