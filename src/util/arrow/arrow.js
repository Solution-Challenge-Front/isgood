import React, { useState } from "react";
import "./arrow.css";

const arrowIcon = "https://cdn3.iconfinder.com/data/icons/arrow-outline-8/32/left-512.png";

function ArrowIcon() {
    const [hovered, setHovered] = useState(false);
  
    return (
      <img
        onClick={()=>{console.log('aaaaa')}}
        src={arrowIcon}
        alt="arrow icon"
        className={hovered ? "arrow-icon hovered" : "arrow-icon"}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      />
    );
  }
  export default ArrowIcon;