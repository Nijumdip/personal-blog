import React from "react";

const BlogCard = ({ blog }) => {
  return (
    <div style={{height:'580px'}} class="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img className="rounded-full w-72 h-72 mt-8" src={blog.img} alt="Shoes" />
      </figure>
      <div class="card-body text-black">
        <h2 class="card-title">
          {blog.name}
        </h2>
        <p>{blog.description}</p>
        <div class="card-actions">
          <button class="btn btn-xs btn-primary px-7">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
