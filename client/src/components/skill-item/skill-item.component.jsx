import React from "react";
import "./skill-item.styles.css";
import { ReactComponent as Checked } from "../../assets/checked.svg";

const SkillItem = ({ skillName, skillLevel }) => (
  <div className="skills-data">
    <Checked />
    <div>
    <h3 className="skills-name">{skillName}</h3>
    <span className="skills-level">{skillLevel}</span>
    </div>
  </div>
);

export default SkillItem;
