import React from "react";
import HomeContent from "../../components/home-content/home-content.component";
import ScrollDown from "../../components/scroll-down/scroll-down.component";
import Social from "../../components/social-link/social-link.component";
import "./home.styles.css";

const Home = () => (
  <section className="home section" id="home">
    <div className="home-container container grid">
      <div className="home-content grid">
        <Social />
        {/* <div></div>  add your image here*/}
        <HomeContent />
      </div>
      <ScrollDown />
    </div>
  </section>
);

export default Home;
