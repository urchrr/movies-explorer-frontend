import "./index.css";
import React from "react";

const Preloader = (props) => {
  return (
    <div className={`preloader ${props.isOpen ? "preloader__show" : ""}`}>
      <div className="preloader__container">
        <span className="preloader__round">{""}</span>
      </div>
    </div>
  );
};

export default Preloader;
