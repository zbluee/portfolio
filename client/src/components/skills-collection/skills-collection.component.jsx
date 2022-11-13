import React from "react";
import "./skills-collection.styles.css";
import SkillItem from "../skill-item/skill-item.component";

const SkillCollection = ({ skillTitle, skills }) => (
  <div className="skills-content">
    <h3 className="skills-title">{skillTitle}</h3>
    <div className="skills-box">
      <div className="skills-group">
        {skills.map(({ id, ...otherdata }) => (
          <SkillItem key={id} {...otherdata} />
        ))}
      </div>
    </div>
  </div>
);

export default SkillCollection;
