import React from 'react'
import { FaAngleRight } from 'react-icons/fa';

export default function NextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "white",
        borderRadius: "50%",
        width: "40px",
        height: "40px",
        boxShadow: "rgba(0, 0, 0, 0.2) 0px 4px 12px",
        zIndex: 10,
        right: "-15px", // Side mein thoda bahar nikalne ke liye
        color:"black"
      }}
      onClick={onClick}
    >
        <FaAngleRight size={"20px"}/>{/* Slick default icon color adjust karne ke liye CSS zaroori hai */}
    </div>
  );
}
