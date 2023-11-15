import React from "react";
import "./style.css";

export const GroupWrapper = ({ className }) => {
  return (
    <div className={`group-wrapper ${className}`}>
      <div className="group-2">
        <a href="mailto:esteban12baigts@gmail.com" className="info-designmodo-com">
          esteban12baigts@gmail.com
        </a>
      </div>
    </div>
  );
};
