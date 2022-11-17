import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectToggleTheme } from "./redux/header/header.selectors";
import Header from "./components/header/header.component";
import Home from "./pages/home/home.component";
import About from "./pages/about/about.component";
import Skills from "./pages/skills/skills.component";
import Services from "./pages/services/services.component";
import Work from "./pages/work/work.component";
import Testimonials from "./pages/testimonials/testimonials.component";
import Contact from "./pages/contact/contact-component";

class App extends React.Component {
  render() {
    const { toggleTheme } = this.props;
    return (
      <div className={toggleTheme ? "dark-theme" : ""}>
        <Header />
        <main className="main">
          <Home />
          <About />
          <Skills />
          <Services />
          <Work />
          <Testimonials />
          <Contact />
        </main>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  toggleTheme: selectToggleTheme,
});
export default connect(mapStateToProps)(App);
