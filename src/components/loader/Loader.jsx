import "./loader.css";
import React from "react";

const Loader = () => {
  return (
    <div className="loaderContainer">
      <div className="loaderWrapper">
        <img src="./assets/loader.webp" alt="" className="loaderAnimation" />
      </div>
    </div>
  );
};

export default Loader;
