import React from "react";
import "./skills.styles.css";
import { connect } from "react-redux";
import { selectSkillCollections } from "../../redux/skill/skill.selctors";
import { createStructuredSelector } from "reselect";
import SkillCollection from "../../components/skills-collection/skills-collection.component";

const Skills = ({ skillCollections }) => (
  <section className="skills section" id="skills">
    <h2 className="section-title">Skills</h2>
    <hr className="title-underline" />
    <div className="skills-container container grid">
      {skillCollections.map(({ id, ...othersSkillCollection }) => (
        <SkillCollection key={id} {...othersSkillCollection} />
      ))}
    </div>
  </section>
);

const mapStateToProps = createStructuredSelector({
  skillCollections: selectSkillCollections,
});

export default connect(mapStateToProps)(Skills);
