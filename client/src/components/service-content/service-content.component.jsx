import React from "react";
import "./service-content.styles.css";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectToggleTab } from "../../redux/header/header.selectors";
import { toggleTabClose } from "../../redux/header/header.actions"
import ServiceItem from "../service-item/service-item.component";
import SvgSelector from "../svg-selector/svg.selector";

const ServiceContent = ({ id, title, description, infos, titleSvg, toggleTab, dispatch }) => {
  return (
    <div className="services-content">
      <div>
        <SvgSelector iconName={titleSvg} />
        <h3 className="services-title">{title}</h3>
      </div>
      <span className="viewmore-button" onClick={() => dispatch(toggleTabClose(id))}>
        View More <SvgSelector iconName="ArrowRight" />
      </span>
      <div className={toggleTab === id? "modal active-modal" : "modal"}>
        <div className="modal-content">
          <i className="uil uil-times modal-close-icon" onClick={() => dispatch(toggleTabClose(null))}></i>
          <h3 className="modal-title">{title}</h3>
          <p className="modal-description">{description}</p>
          <ul className="services-modal-services grid">
            {infos.map((info) => (
              <ServiceItem key={info.id} {...info} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  toggleTab: selectToggleTab,
});

export default connect(mapStateToProps)(ServiceContent);
