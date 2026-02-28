import React from "react";
import Container from "./Container";

export default function CategoryBox() {
  const categories = [
    "106.jpg",
    "107.png",
    "108.png",
    "109.png",
    "110.png",
    "111.png",
    "112.png",
    "113.png",
    "114.png",
    "115.png",
    "116.png",
    "117.png",
    "118.png",
    "119.png",
    "120.png",
    "121.png",
    "122.png",
    "123.png",
    "124.png",
    "125.png",
  ];
  return (
    <Container extraclass="my-1">
      <div className="grid grid-cols-2 sm:grid-cols-4  md:grid-cols-5 lg:grid-cols-10">
        {categories.map((cat_img, idx) => {
          return (
            <img
              src={`images/${cat_img}`}
              alt=""
              className="my-1 cursor-pointer hover:translate-y-1 transition-transform duration-300"
            />
          );
        })}
      </div>
    </Container>
  );
}
