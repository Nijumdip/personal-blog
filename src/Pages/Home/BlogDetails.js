import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "../Shared/Footer";

const BlogDetails = () => {
  const { id } = useParams();
  const [blogDetails, setBlogDetails] = useState({});

  useEffect(() => {
    fetch(`https://stark-hollows-26694.herokuapp.com/blogDetail/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBlogDetails(data);
      });
  }, []);
  console.log(blogDetails);

  return (
    <div class="hero flex justify-center items-center mt-10">
      <div class="card w-5/6 shadow-xl hero-content flex-col lg:flex-row py-10">
        <img
          src={blogDetails.img}
          class="max-w-sm rounded-lg shadow-2xl"
          alt="blog Pic"
        />
        <div className=" card-body text-black">
          <h2 className="text-3xl font-bold card-title">{blogDetails.name}</h2>
          <div
            dangerouslySetInnerHTML={{
              __html: blogDetails.description,
            }}
          ></div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default BlogDetails;
