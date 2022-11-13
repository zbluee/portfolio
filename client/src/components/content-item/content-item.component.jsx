import React from "react";
import SvgSelector from "../svg-selector/svg.selector";

const ContentItem = ({id, title, subtitle}) => (
  <div className="about-box">
    <SvgSelector key={id} iconName={title} />
    <h3 className="about-title">{title}</h3>
    <span className="about-subtitle">{subtitle}</span>
  </div>
);

export default ContentItem;
