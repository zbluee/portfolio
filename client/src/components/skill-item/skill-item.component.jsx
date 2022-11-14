import React from "react";
import "./skill-item.styles.css";
import SvgSelector from "../svg-selector/svg.selector";

const SkillItem = ({ skillName, skillLevel }) => (
  <div className="skills-data">
    <SvgSelector iconName="Check" />
    <div>
      <h3 className="skills-name">{skillName}</h3>
      <span className="skills-level">{skillLevel}</span>
    </div>
  </div>
);

export default SkillItem;
