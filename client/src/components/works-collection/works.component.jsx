import React from "react";
import "./works.styles.css";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectWorkLists } from "../../redux/work/work.selectors";
import WorkItem from "../work-item/work-item";

const Works = ({workLists}) => {
 
  return (
    <div className="work-containter container grid">
      {workLists.map(({ id, ...otherWorkProps }) => (
        <WorkItem key={id} {...otherWorkProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  workLists: selectWorkLists,
});

export default connect(mapStateToProps)(Works);
