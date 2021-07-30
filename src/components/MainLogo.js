import React from "react";
import logoWhite from "../assets/images/logo-w.png";
import logoBlack from "../assets/images/logo-bb.png";

const MainLogo = ({ collapse, showMenu }) => {
  return (
    <div className="navbar-header">
      <div className="logo">
        <a href={process.env.PUBLIC_URL}>
          <img className="logo logo-display" src={logoWhite} alt="" />
          <img className="logo logo-scrolled" src={logoBlack} alt="" />
        </a>
      </div>
    </div>
  );
};

export default MainLogo;
