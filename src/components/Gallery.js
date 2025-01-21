import "./GalleryStyles.css";
import React from "react";
import img1 from "../assets/10.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/4.jpg";

const Gallery = () => {
  return (
    <div className="gallery-container">
      <div className="main-image">
        <img src={img1} alt="Golden Bridge" />
      </div>
      <div className="side-images">
        <img src={img2} alt="Ba Na Hills" />
        <img src={img3} alt="French Village" />
      </div>
    </div>
  );
};

export default Gallery;
