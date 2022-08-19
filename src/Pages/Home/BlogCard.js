import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  const { img, name, description, _id } = blog;
  return (
    <div
      style={{ height: "580px" }}
      className="card w-96 bg-base-100 shadow-xl"
    >
      <figure>
        <img
          className="rounded-full w-72 h-72 mt-8"
          src={img}
          alt="Shoes"
        />
      </figure>
      <div className="card-body text-black">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <div className="card-actions">
          <Link to= {`blogDetail/${_id}`} >
          <button className="btn btn-xs btn-primary px-7">Read More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
