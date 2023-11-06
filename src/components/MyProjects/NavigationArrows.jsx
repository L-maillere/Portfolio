import React from "react";
import arrowLeft from "../../assets/svg/arrow-left.svg";
import arrowRight from "../../assets/svg/arrow-right.svg";


function NavigationArrows({ currentSlide, totalSlides, changeSlide}) {
  return (
    <div className="my-projects_navigation">
      <button
        onClick={() => changeSlide(currentSlide === 0 ? totalSlides - 1 : currentSlide - 1)}
        aria-label="Previous slide"
      >
        <img src={arrowLeft} alt="Previous slide" />
      </button>
      <button
        onClick={() => changeSlide(currentSlide === totalSlides - 1 ? 0 : currentSlide + 1)}
        aria-label="Next slide"
      >
        <img src={arrowRight} alt="Next slide" />
      </button>
    </div>
  )
}

export default NavigationArrows