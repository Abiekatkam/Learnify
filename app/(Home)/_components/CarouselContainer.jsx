"use client";
import React from "react";

// slick carousel css cdn
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import CarouselReviewCard from "@/components/cards/CarouselReviewCard";

function CarouselNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  );
}

function CarouselPrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "none",
      }}
      onClick={onClick}
    />
  );
}

const CarouselContainer = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 2500,
    autoplaySpeed: 6500,
    cssEase: "linear",
    nextArrow: <CarouselNextArrow />,
    prevArrow: <CarouselPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <CarouselReviewCard index={1} />
        <CarouselReviewCard index={2} />
        <CarouselReviewCard index={3} />
        <CarouselReviewCard index={4} />
        <CarouselReviewCard index={5} />
        <CarouselReviewCard index={6} />
        <CarouselReviewCard index={7} />
      </Slider>
    </div>
  );
};

export default CarouselContainer;
