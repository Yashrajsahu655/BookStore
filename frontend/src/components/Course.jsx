import React from "react";
import Card from "./Card";
import Home from '../Home'
import list from "../../public/list.json";
import { Link } from "react-router-dom";

const Course = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className=" mt-28 items-center justify-center text-center">
          <h1 className=" text-2xl font-semibold md:text-4xl">
            We're delighted to have you
            <span className=" text-pink-500"> Here! :)</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati
            earum dicta beatae iusto unde quas reprehenderit esse, neque
            quisquam nulla. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Voluptas quae nostrum sint eum officiis qui!
          </p>
          <Link to={"/"}>
            <button  className=" bg-pink-500 text-white px-4 py-2 mt-6 rounded-lg hover:bg-pink-700 hover:duration-300">
              Back 
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4">
          {list.map((item) => {
            return <Card item={item} key={item.key} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Course;
