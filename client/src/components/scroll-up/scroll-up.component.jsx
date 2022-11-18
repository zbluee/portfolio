import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectScrollUp } from "../../redux/header/header.selectors";
import { scrollToTop } from "../../redux/header/header.actions";
import "./scroll-up.styles.css";

const ScrollUp = ({ scrollUp, dispatch }) => {
  window.addEventListener("scroll", function () {
    this.scrollY > 560
      ? dispatch(scrollToTop(true))
      : dispatch(scrollToTop(false));
  });
  const scrollTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    scrollUp && (
      <button onClick={scrollTop} className="scroll-up">
        <i className="uil uil-arrow-up scroll-up-icon"></i>
      </button>
    )
  );
};

const mapStateToProps = createStructuredSelector({
  scrollUp: selectScrollUp,
});
export default connect(mapStateToProps)(ScrollUp);
