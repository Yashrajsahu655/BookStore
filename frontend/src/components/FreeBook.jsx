import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from "./Card";
import axios from "axios";
import { Link } from "react-router-dom";

const FreeBook = () => {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("https://bookstore-mxxf.onrender.com/book");

        setBook(res.data.filter((data) => data.category === "free"));
      } catch (error) {
        console.log("error while fetching free book", error);
      }
    };
    getBook();
  }, [book]);

  if (book.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-screen">
      <div
        className=" inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      >
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Loading...
        </span>
      </div>
      </div>
    ); // Optional: a loading state
  }

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
        <p className="text-sm md:text-xl">
          These are Some of the free books available on our Store,If you want to
          avail more books.
          <br />
          Please{" "}
          <button
            className="underline text-blue-400 cursor-pointer"
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            login
          </button>{" "}
          to our store
        </p>

        <div className="slider-container">
          <Slider {...settings}>
            {book.map((item) => {
              return <Card item={item} key={item.id} />;
            })}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default FreeBook;
