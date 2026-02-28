import React from "react";
import { FaAngleLeft } from "react-icons/fa";
export default function PrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      style={{
        display: "grid",
        alignItems: "center",
        justifyContent: "center",
        background: "white",
        borderRadius: "50%",
        width: "40px",
        height: "40px",
        boxShadow: "rgba(0, 0, 0, 0.2) 0px 4px 12px",
        zIndex: 10,
        left: "-15px",
        color:"black"
        
      }}
      onClick={onClick}
    >
      <FaAngleLeft size={"20px"} />
    </div>
  );
}
