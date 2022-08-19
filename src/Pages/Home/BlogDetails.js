import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();
  const [blogDetails, setBlogDetails] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/blogDetail/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBlogDetails(data);
      });
  }, []);
  return (
    <>

      <div class="hero flex justify-center items-center" style={{ height: "650px" }}>
        <div class="card w-5/6 shadow-xl hero-content flex-col lg:flex-row">
          <img
            src={blogDetails.img}
            class="max-w-sm rounded-lg shadow-2xl"
            alt="blog Pic"
          />
          <div className=" card-body text-black">
            <h2 className="text-3xl font-bold card-title">
              {blogDetails.name}
            </h2>
            <p>{blogDetails.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
