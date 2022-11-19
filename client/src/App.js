import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectToggleTheme } from "./redux/header/header.selectors";
import Header from "./components/header/header.component";
import Main from "./pages/main/main.page";
import Contact from "./pages/contact/contact-component";
import Footer from "./components/footer/footer.component";
import ScrollUp from "./components/scroll-up/scroll-up.component";

class App extends React.Component {
  render() {
    const { toggleTheme } = this.props;
    return (
      <div className={toggleTheme ? "dark-theme" : ""}>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <ScrollUp />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  toggleTheme: selectToggleTheme,
});
export default connect(mapStateToProps)(App);
