import React from "react";
import { ReactComponent as Education } from "../../assets/graduation.svg";
import { ReactComponent as Experience } from "../../assets/briefcase.svg";
import { ReactComponent as Interest } from "../../assets/interest.svg";

const SvgSelector = ({ iconName }) => {
  switch (iconName) {
    case "Education":
      return <Education />;
    case "Interest":
      return <Interest />;
    case "Experience":
      return <Experience />;
    default :
        return "svg-missed"
  }
};

export default SvgSelector;
