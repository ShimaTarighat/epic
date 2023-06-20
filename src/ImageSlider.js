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
    dots: false,
    arrows: true,
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
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    cssEase: "linear",
    centerMode: true,
    variableWidth: true,
  };

  const CustomPrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        {"<"}
      </div>
    );
  };

  const CustomNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        {">"}
      </div>
    );
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <Slide image={require("./image1.jpg")} />
        <Slide image={require("./image2.jpg")} />
        <Slide image={require("./image3.jpg")} />
        <Slide image={require("./image4.jpg")} />
        <Slide image={require("./image5.jpg")} />
        <Slide image={require("./image6.jpg")} />
        <Slide image={require("./image7.jpg")} />
        <Slide image={require("./image8.jpg")} />
        <Slide image={require("./image9.jpg")} />
        <Slide image={require("./image10.jpg")} />
      </Slider>
    </div>
  );
};

export default ImageSlider;
