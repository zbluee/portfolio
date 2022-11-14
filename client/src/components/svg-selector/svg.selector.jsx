import React from "react";
import { ReactComponent as Education } from "../../assets/graduation.svg";
import { ReactComponent as Experience } from "../../assets/briefcase.svg";
import { ReactComponent as Interest } from "../../assets/interest.svg";
import { ReactComponent as Code } from "../../assets/code.svg";
import { ReactComponent as ArrowRight } from "../../assets/arrow-right.svg";
import { ReactComponent as Checked } from "../../assets/checked.svg";
import { ReactComponent as Scrap } from "../../assets/scrap-icon.svg";

const SvgSelector = ({ iconName }) => {
  switch (iconName) {
    case "Education":
      return <Education />;
    case "Interest":
      return <Interest />;
    case "Experience":
      return <Experience />;
    case "Code":
      return <Code />;
    case "ArrowRight":
      return <ArrowRight />;
    case "Check":
      return <Checked />;
    case "Scrap":
      return <Scrap />;
    default:
      return "svg-missed";
  }
};

export default SvgSelector;
