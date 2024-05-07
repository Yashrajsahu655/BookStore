import React from "react";
import list from "../../public/list.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from "./Card";

const FreeBook = () => {
  const filteredData = list.filter((data) => data.category === "free");
 

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <h1 className=" font-bold text-lg pb-2">Free Offered Courses </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          molestiae voluptate libero odit perspiciatis? Minus voluptatum
          cupiditate laborum dignissimos eius.
        </p>

        <div className="slider-container">
          <Slider {...settings}>
          {filteredData.map((item)=>{
              return <Card item={item} key={item.id}/>
              })}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default FreeBook;
