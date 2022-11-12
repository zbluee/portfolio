import React from "react";
import "./App.css";
import { connect } from 'react-redux';
import Header from "./components/header/header.component";
import Home from "./pages/home/home.component";
import About from "./pages/about/about.component";

class App extends React.Component {

  render() {
    const {toggleTheme} = this.props
    return (
      <div className={toggleTheme ? "dark-theme" : ""}>
        <Header />
        <main className="main">
          <Home />
          <About />
        </main>
      </div>
    );
  }
}

const mapStateToProps = ({header : {toggleTheme}}) => ({
  toggleTheme
})
export default connect(mapStateToProps)(App);
