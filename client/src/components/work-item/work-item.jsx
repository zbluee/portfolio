import React from "react";
import "./work-item.styles.css";

const WorkItem = ({ title, imageUrl, addressLink }) => {
  return (
    <div className="work-card">
      <img className="work-img" src={imageUrl} alt="work-img" />

      <h3 className="work-title">{title}</h3>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={addressLink}
      >
         <span className="link-span" />
      </a>
     
    </div>
  );
};

export default WorkItem;
