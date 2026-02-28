import React from "react";
import Container from "./Container";

export default function SmartCard() {
  const images = ["103.jpg", "104.jpg", "105.jpg"];
  return (
    <Container extraclass="hidden lg:block">
      <div className="grid grid-cols-3 gap-4">
        {images.map((img_name, idx) => {
          return <img src={`images/${img_name}`} alt="" />;
        })}
      </div>
    </Container>
  );
}
