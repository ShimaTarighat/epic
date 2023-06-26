import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ImageSlider.css";

const Slide = ({ image }) => {
  return (
    <div className="slide">
      <img src={image} alt="Slide" />
    </div>
  );
};

const ImageSlider = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <Slide image={require("./image1.jpg")} />
        <Slide image={require("./image2.jpg")} />
        <Slide image={require("./image3.jpg")} />
        <Slide image={require("./image4.jpg")} />
        <Slide image={require("./image5.jpg")} />
      </Slider>
    </div>
  );
};

export default ImageSlider;
