import React from "react";
import "./services.styles.css";
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect";
import { selectServiceLists } from "../../redux/service/service.selectors"
import ServiceContent from "../service-content/service-content.component";

const Services = ({serviceLists}) => (
    <section className="services section" id="services">
      <h2 className="section-title">Services</h2>
      <hr className="title-underline" />
      <div className="services-container container grid">
        {serviceLists.map((serviceData) => (
          <ServiceContent key={serviceData.id} {...serviceData} />
        ))}
      </div>
    </section>
  );


const mapStateToProps = createStructuredSelector({
  serviceLists : selectServiceLists
})

export default connect(mapStateToProps) (Services);
