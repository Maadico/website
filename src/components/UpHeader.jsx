import React from "react";
import { Link } from "react-router-dom";

const UpHeader = () => {
  return (
    <div className="upHeader">
      <div className="navUp_Header">
        <Link to="/product" target="blank">
          Shop
        </Link>
        <Link to="https://liveyoga.maadico.in" target="blank">
          Yoga
        </Link>
        <a href="#service">Services</a>
      </div>
    </div>
  );
};

export default UpHeader;
