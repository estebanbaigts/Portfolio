/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const Component = ({ className }) => {
  return (
    <div className={`component ${className}`}>
      <div className="text">
        <img
          className="you-have-the-design"
          alt="You have the design"
          src="https://c.animaapp.com/LcNIGwu7/img/you-have-the-design--1@2x.png"
        />
      </div>
    </div>
  );
};
