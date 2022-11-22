import React from "react";
import "./sign-in.styles.css";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { setCurrentUser } from "../../redux/user/user.action";
import FormInput from "../../components/form-input/form-input.component";
import axios from "axios";
import { Navigate } from "react-router-dom";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      failedSubmitMsg: "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value }, () => console.log(this.state));
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { username, password } = this.state;

    try {
      const url = "http://localhost:3001/api/v1/auth/login";
      const res = await axios.post(url, { username, password });
      localStorage.setItem(
        "authStatus",
        JSON.stringify({ signedIn: true, token: res.data.token })
      );
      this.props.setCurrentUser({ signedIn: true, token: res.data.token });
      this.setState({ username: "", password: "" });
    } catch (error) {
      this.setState({
        failedSubmitMsg:
          error.response?.data?.msg ||
          "An error occured while sending your message, please try again",
      });
    }
  };
  render() {
    const { username, password, failedSubmitMsg } = this.state;
    return !this.props.currentUser ? (
      <section className="section signin" id="signin">
        <h2 className="section-title">Sign in</h2>
        <p className="section-subtitle mg-0">only for admins</p>
        <hr className="title-underline mg-0" />
        <div className="sign-in-container container grid">
          <p className={failedSubmitMsg ? "failed-msg" : ""}>
            {failedSubmitMsg}
          </p>
          <form onSubmit={this.handleSubmit}>
            <FormInput
              name="username"
              type="text"
              label="username"
              value={username}
              handleChange={this.handleChange}
              required
            />
            <FormInput
              name="password"
              type="password"
              label="password"
              value={password}
              handleChange={this.handleChange}
              required
            />
            <button type="submit" className="button button-flex login">
              Login
            </button>
          </form>
        </div>
      </section>
    ) : (
      <Navigate to="/admin" replace />
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
