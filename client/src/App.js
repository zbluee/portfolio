import React from "react";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectToggleTheme } from "./redux/header/header.selectors";
import { selectCurrentUser } from "./redux/user/user.selector"
import { setCurrentUser } from "./redux/user/user.action"
import Header from "./components/header/header.component";
import Main from "./pages/main/main.page";
import Contact from "./pages/contact/contact-component";
import Footer from "./components/footer/footer.component";
import ScrollUp from "./components/scroll-up/scroll-up.component";
import SignIn from "./pages/sign-in/sign-in.component";
import NotFound from "./pages/not-found/not-found.component";
import Admin from "./pages/admin/admin.component";

class App extends React.Component {
  
  componentDidMount() {
    this.getAuthStatus();
  }
  getAuthStatus() {
    const authStatus = JSON.parse(localStorage.getItem("authStatus"));
    if (authStatus && authStatus.signedIn) {
      this.props.setCurrentUser({ signedIn: true, token: authStatus.token })
    }
  }
  render() {
    const { toggleTheme, currentUser } = this.props;
    console.log(currentUser);
    return (
      <div className={toggleTheme ? "dark-theme" : ""}>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={ currentUser ? <Navigate to="/admin" replace /> : <SignIn />} />
          <Route path="/admin" element={ currentUser ?  <Admin /> : <Navigate to="/signin" replace/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <ScrollUp />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  toggleTheme: selectToggleTheme,
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
