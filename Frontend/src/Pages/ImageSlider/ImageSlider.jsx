import React, { useState, useEffect } from "react";
import "./ImageSlider.css";
import nsslider2 from "../AssertsPage/nsslider2.png";
import nsslider3 from "../AssertsPage/nsslider3.png";
import nsslider4 from "../AssertsPage/nsslider4.png";
import nsslider5 from "../AssertsPage/nsslider5.png";
import nsslider1 from "../AssertsPage/nsslider1.mp4"; // Ensure this is a video file

const media = [
  { type: "video", src: nsslider1 },
  { type: "image", src: nsslider2 },
  { type: "image", src: nsslider3 },
  { type: "image", src: nsslider4 },
  { type: "image", src: nsslider5 },
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3450);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % media.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? media.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="imageslider">
      <div className="carousel">
        <div className="carousel-container">
          {media[currentIndex].type === "image" ? (
            <img
              src={media[currentIndex].src}
              alt={`Slide ${currentIndex + 1}`}
              className="carousel-image"
            />
          ) : (
            <video
              src={media[currentIndex].src}
              className="carousel-image"
              autoPlay
              muted
              loop
            />
          )}
        </div>
        <button className="prev" onClick={prevSlide}>
          &#10094;
        </button>
        <button className="next" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
