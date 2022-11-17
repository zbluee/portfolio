import React from "react";
import "./contact.styles.css";
import { ReactComponent as Send } from "../../assets/send.svg";
import FromInput from "../../components/form-input/form-input.component";
import axios from "axios";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      formErrors: {},
      successMsg: "",
      failedSubmitMsg: "",
      loading : false
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    
    const { name, email, message } = this.state;
    const errors = {};
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!email.match(regex)) {
      errors.email = "Invalid Email";
    }
    if (message.trim().length < 3) {
      errors.message =
        "Message length should be greater than three characters.";
    }
    this.setState({ formErrors: errors });

    if (!Object.keys(errors).length) {
      this.setState({loading : true})
      const url = "http://localhost:3001/api/v1/comments";
      try {
        const res = await axios.post(url, { name, email, message });
        this.setState({
          successMsg: res.data.msg,
          name: "",
          email: "",
          message: "",
          loading : false
        });
        setTimeout(() => {
          this.setState({ successMsg: "" });
        }, 4000);
      } catch (error) {
        this.setState({
          failedSubmitMsg:
            "An error occured while sending your message, please try again",
        });
        setTimeout(() => {
          this.setState({ failedSubmitMsg: "" });
        }, 5000);
      }
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    const { name, email, message, formErrors, successMsg, failedSubmitMsg, loading } =
      this.state;
    return (
      <section className="section contact" id="contact">
        <h2 className="section-title">Contact Me</h2>
        <hr className="title-underline mg-0" />
        <div className="contact-container container grid">
          {successMsg || failedSubmitMsg ? (
            <p
              className={`${
                successMsg ? "success-msg" : "validation-error submitfield-msg"
              } `}
            >
              {successMsg || failedSubmitMsg}
            </p>
          ) : (
            ""
          )}
          <form onSubmit={this.handleSubmit}>
            <FromInput
              name="name"
              type="text"
              label="Name"
              value={name}
              handleChange={this.handleChange}
              required
            />

            <FromInput
              name="email"
              type="email"
              label="Email"
              value={email}
              handleChange={this.handleChange}
              required
            />

            <textarea
              className="input-textarea"
              name="message"
              cols="30"
              rows="10"
              value={message}
              onChange={this.handleChange}
              placeholder="message"
              required
            />
            {<p className="validation-error">{formErrors.email}</p>}
            {<p className="validation-error">{formErrors.message}</p>}
            <button type="submit" className="button button-flex submit">
              Send <Send /> <span className={`${loading ? "loading" : ""}`}></span>
            </button>
          </form>
        </div>
      </section>
    );
  }
}

export default Contact;
