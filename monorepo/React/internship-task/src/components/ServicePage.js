import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import '../style/Service.css';

const ServicePage = ({updatePage}) => {
  const { serviceName } = useParams();

  const handleBackClick = () => {
    updatePage(1);
  }

  return (
    <div>
      <h2>{serviceName}</h2>
      <Link to='/' onClick={handleBackClick} className="go-back-btn">&#8249; Go back</Link>
    </div>
  );
};

export default ServicePage;
