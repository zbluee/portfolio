import React from "react";
import "./service-item.styles.css";
import SvgSelector from "../svg-selector/svg.selector";

const ServiceItem = ({ info }) => (
  <li className="services-modal-service">
    <SvgSelector iconName="Check" />
    <p className="services-modal-info">{info}</p>
  </li>
);

export default ServiceItem;
