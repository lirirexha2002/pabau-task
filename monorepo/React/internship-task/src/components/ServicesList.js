import React, { useState } from "react";
import Service from "./Service";
import serviceIcon from "../service-icon.png";
import '../style/Service.css';


const ServicesList = () => {
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

  return (
    <div className="services-list">
      {servicesList.map((service, index) => (
        <Service
          key={index}
          serviceName={service.serviceName}
          serviceIcon={service.image}
        />
      ))}
    </div>
  );
};

export default ServicesList;
