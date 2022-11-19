import React from 'react'
import Home from "../../components/home/home.component";
import About from "../../components/about/about.component";
import Skills from "../../components/skills/skills.component";
import Services from "../../components/services/services.component";
import Work from "../../components/work/work.component";
import Testimonials from "../../components/testimonials/testimonials.component";

const Main = () => (
    <main className="main">
          <Home />
          <About />
          <Skills />
          <Services />
          <Work />
          <Testimonials />
        </main>
)

export default Main