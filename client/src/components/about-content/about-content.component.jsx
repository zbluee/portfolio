import React from "react";
import "./about-content.styles.css";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectContents } from "../../redux/about/about-content.selector"
import ContentItem from "../content-item/content-item.component";

const AboutContent = ({ contents }) => (
  <div className="about-info grid">
    {contents.map((content) => (
      <ContentItem key={content.id} {...content} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector ({
  contents : selectContents
});
export default connect(mapStateToProps)(AboutContent);
