import React from "react";
import "./App.css";
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";
import { selectToggleTheme } from "./redux/header/header.selectors"
import Header from "./components/header/header.component";
import Home from "./pages/home/home.component";
import About from "./pages/about/about.component";
import Skills from "./pages/skills/skills.component";

class App extends React.Component {

  render() {
    const {toggleTheme} = this.props
    return (
      <div className={toggleTheme ? "dark-theme" : ""}>
        <Header />
        <main className="main">
          <Home />
          <About />
          <Skills />
        </main>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  toggleTheme : selectToggleTheme
})
export default connect(mapStateToProps)(App);
