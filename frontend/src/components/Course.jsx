import React, { useEffect, useState } from "react";
import Card from "./Card";
import Home from "../Home";
import { Link, json } from "react-router-dom";
import axios from "axios";

const Course = () => {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("https://bookstore-mxxf.onrender.com/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log("Error while fetching book ", error);
      }
    };

    getBook();
  }, []);

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className=" mt-28 items-center justify-center text-center">
          <h1 className=" text-2xl font-semibold md:text-4xl">
            We're delighted to have you
            <span className=" text-pink-500"> Here! :)</span>
          </h1>
          <p className="mt-12">
            Experience the power of words at our bookstore, where stories have
            the ability to change lives.
          </p>
          <Link to={"/"}>
            <button className=" bg-pink-500 text-white px-4 py-2 mt-6 rounded-lg hover:bg-pink-700 hover:duration-300">
              Back
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4">
          {book.map((item) => {
            return <Card item={item} key={item._id} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Course;
