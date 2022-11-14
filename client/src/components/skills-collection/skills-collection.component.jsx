import React from "react";
import "./skills-collection.styles.css";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectToggleSkillsTab } from "../../redux/header/header.selectors";
import { toggleSkillsTabClose } from "../../redux/header/header.actions";
import SkillItem from "../skill-item/skill-item.component";
import SvgSelector from "../svg-selector/svg.selector";

const SkillCollection = ({
  id,
  skillTitle,
  skills,
  toggleSkillsTab,
  dispatch,
}) => (
  <div className="skills-content">
    <h3 className="skills-title">{skillTitle}</h3>
    <div className="skills-box">
      <div className="skills-group">
        {skills
          .filter((_, idx) => idx < 3)
          .map(({ id, ...otherdata }) => (
            <SkillItem key={id} {...otherdata} />
          ))}
        <span
          className="viewmore-button"
          onClick={() => dispatch(toggleSkillsTabClose(id))}
        >
          View More <SvgSelector iconName="ArrowRight" />
        </span>
      </div>
      <div className={toggleSkillsTab === id ? "modal modal-active" : "modal"}>
        <div className="modal-content">
          <i
            className="uil uil-times modal-close-icon"
            onClick={() => dispatch(toggleSkillsTabClose(null))}
          ></i>
          <h3 className="modal-title">{skillTitle}</h3>
          <div className="modal-box">
            <div className="modal-group">
              {skills.map(({ id, ...otherdata }) => (
                <SkillItem key={id} {...otherdata} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  toggleSkillsTab: selectToggleSkillsTab,
});
export default connect(mapStateToProps)(SkillCollection);
