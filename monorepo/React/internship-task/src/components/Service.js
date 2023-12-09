import React from "react";
import "../style/Service.css";
import { Link } from "react-router-dom";

const Service = ({ serviceName, serviceIcon }) => {
  return (
    <div className="service-tab">
      <Link className="links" to={`/service/${serviceName}`}>
        <div className="service-tab-content">
          <img src={serviceIcon} alt="service icon" />
          <div className="service-name">{serviceName}</div>
        </div>
        <div className="arrow">&#187;</div>
      </Link>
    </div>
  );
};

export default Service;
