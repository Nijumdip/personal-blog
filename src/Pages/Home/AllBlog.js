import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Footer from "../Shared/Footer";
import BlogCard from "./BlogCard";

const AllBlog = () => {
  const [blogs, setBlogs] = useState();

  useEffect(() => {
    fetch("https://stark-hollows-26694.herokuapp.com/blog")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setBlogs(data);
      });
  }, []);

  return (
    <div className="mt-10 flex flex-wrap justify-center items-center gap-5">
      {blogs?.map((blog) => (
        <BlogCard key={blog._id} blog={blog}></BlogCard>
      ))}
      <Footer></Footer>
    </div>
  );
};

export default AllBlog;
