import React, { useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import "./slider.css";


const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    console.log("Next slide clicked");
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlider = () => {
    console.log("Previous slide clicked");
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!slides || slides.length <= 0) {
    return <div>No slides available</div>;
  }

  return (
    <div>
      <section className="slider">
        <FaArrowAltCircleLeft
          className="left-arrow"
          onClick={() => {
            console.log("Left arrow clicked");
            prevSlider();
          }}
        />
        <FaArrowAltCircleRight
          className="right-arrow"
          onClick={() => {
            console.log("Right arrow clicked");
            nextSlide();
          }}
        />

    
        {slides.map((slide, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && (
                <img src={slide.image} alt="BOOK" className="image" />
              )}
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default ImageSlider;

