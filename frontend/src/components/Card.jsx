import React from "react";

const Card = ({ item }) => {
  return (
    <>
      <div className="mt-4 p-3">
        <div className="card w-92 bg-base-100 shadow-xl z-10 hover:scale-105 hover:duration-300 dark:bg-slate-900 dark:text-white dark:border">
          <figure>
            <img src={item.Image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title" style={{ maxHeight: "3.6rem", overflow: "hidden", textOverflow: "ellipsis" }}>
              {item.name}
              <div className="badge badge-secondary bg-pink-500 text-white" style={{ maxHeight: "1.6rem", overflow: "hidden", textOverflow: "ellipsis" }}>{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <div className="badge badge-outline py-1 hover:bg-orange-500 hover:text-white hover:cursor-pointer hover:duration-300">Buy now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
