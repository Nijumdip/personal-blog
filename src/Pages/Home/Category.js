import React from "react";

const Category = ({ category }) => {
  return (
    <div
      style={{ height: "250px" }}
      className="flex flex-col justify-center items-center"
    >
      <div>
        <img className="mask mask-circle w-32" src={category.img} alt="" />
      </div>
      <div>
        <h5 className="text-black text-sm mt-5">{category.name}</h5>
      </div>
    </div>
  );
};

export default Category;
