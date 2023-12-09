import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ServicePage = ({updatePage}) => {
  const { serviceName } = useParams();

  const handleBackClick = () => {
    updatePage(1);
  }

  return (
    <div>
      <h2>{serviceName}</h2>
      <Link to='/' onClick={handleBackClick}>Go back to 1/2</Link>
    </div>
  );
};

export default ServicePage;
