import React, { useState } from "react";
import Service from "./Service";
import serviceIcon from "../service-icon.png";
import '../style/Service.css';


const ServicesList = ({updatePage}) => {
  const [servicesList, setServicesList] = useState([
    {
      image: serviceIcon,
      serviceName: "Anti Wrinkle Treatment",
    },
    {
      image: serviceIcon,
      serviceName: "Dermal Fillers",
    },
    {
      image: serviceIcon,
      serviceName: "Facials",
    },
    {
      image: serviceIcon,
      serviceName: "LED",
    },
    {
      image: serviceIcon,
      serviceName: "Constultation",
    },
  ]);

  const handleServiceClick = () => {
    updatePage(2);
  }

  return (
    <div>
    <div className="services-list">
      {servicesList.map((service, index) => (
        <Service
          key={index}
          serviceName={service.serviceName}
          serviceIcon={service.image}
          onClick={handleServiceClick}
        />
      ))}
    </div>
    <div className="info">
      <span>Not sure about consultation type? Please, call <a href="tel:0203-7959063">0203 795063</a></span>
    </div>
    </div>
  );
};

export default ServicesList;
