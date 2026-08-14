import React from "react";
import "../styles/PageTransition.css";

const PageTransition = ({ visible }) => {
  if (!visible) {
    return null;
  }

  return (
    <div className="page-transition-overlay" aria-hidden="true">
      <div className="page-transition-inner">
        <img
          src="/Technovashield design image only.png"
          alt=""
          className="page-transition-logo"
        />

        {/* <span className="page-transition-text">
          TechnovaShield
        </span> */}
      </div>
    </div>
  );
};

export default PageTransition;