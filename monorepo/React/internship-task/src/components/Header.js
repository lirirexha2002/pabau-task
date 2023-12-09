import React from "react";
import '../style/Header.css'

const Header = ({ page }) => {
  return (
    <div className="header">
      {page === 1 && <div className="choose-service">Choose Service</div>}
      <div className="page-num">{page}/2</div>
    </div>
  );
};

export default Header;
