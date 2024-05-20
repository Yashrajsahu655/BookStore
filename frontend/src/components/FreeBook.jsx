import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from "./Card";
import axios from 'axios';


const FreeBook = () => {
  const [book,setBook] = useState([
    {
      "id": 0,
      "name": "Story book",
      "title": "lorem lorem lorem lorem",
      "price": 0,
      "category": "free",
      "Image": "https://unsplash.com/photos/united-states-circa-1960s-man-in-library-XqePqNS5Kc4"
  }
  ]);

  useEffect(()=>{
    const getBook = async()=>{
       try {
          const res = await axios.get('https://bookstore-mxxf.onrender.com/book');
          
          setBook(res.data.filter((data) => data.category === "free"))
       } catch (error) {
          console.log("error while fetching free book",error);
       }
    } 
     getBook();
  },[])
  

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
          {book.map((item)=>{
              return <Card item={item} key={item.id}/>
              })}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default FreeBook;
