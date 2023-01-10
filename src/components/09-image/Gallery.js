import React from "react";
import "./Gallery.scss";
import Images from "./Images.json";
const Gallery = () => {
  return (
    <div className="gallery">
      {Images.map((img, i) => (
        <div key={i}>
          <img src={require(`../../assets/img/${img.name}`)} alt="" />
        </div>
      ))}
    </div>
  );
};
export default Gallery;