import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ServicePage = () => {
  const { serviceName } = useParams();
  return (
    <div>
      <h2>{serviceName}</h2>
      <Link to='/'>Go back to 1/2</Link>
    </div>
  );
};

export default ServicePage;
