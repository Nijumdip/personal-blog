import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import AllBlog from "./AllBlog";
import BlogCard from "./BlogCard";

const Blog = () => {
  /* const blogs = [
    {
        _id:1,
        name:'পঁঞ্চ রত্নের Loop .',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor architecto tenetur unde neque culpa libero omnis? Deserunt perspiciatis unde magni.',
        img:"https://placeimg.com/400/225/arch"
    },
    {
        _id:2,
        name:'প্রোগ্রামিং শিখার স্টাডি প্ল্যান',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor architecto tenetur unde neque culpa libero omnis? Deserunt perspiciatis unde magni.',
        img:"https://placeimg.com/400/225/arch"
    },
    {
        _id:3,
        name:'কি করলে গুগলে চাকরি পাওয়া যাবে',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor architecto tenetur unde neque culpa libero omnis? Deserunt perspiciatis unde magni.',
        img:"https://placeimg.com/400/225/arch"

    },
    {
        _id:4,
        name:'ডিপ্রেশন থেকে বের হবার উপায়, Block করে ...',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor architecto tenetur unde neque culpa libero omnis? Deserunt perspiciatis unde magni.',
        img:"https://placeimg.com/400/225/arch"

    },
    {
        _id:5,
        name:'Complete MERN stack part-1',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor architecto tenetur unde neque culpa libero omnis? Deserunt perspiciatis unde magni.',
        img:"https://placeimg.com/400/225/arch"

    },
    {
        _id:6,
        name:'ড্রিম নিয়ে এগিয়ে যাওয়ার উপায়ে',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor architecto tenetur unde neque culpa libero omnis? Deserunt perspiciatis unde magni.',
        img:"https://placeimg.com/400/225/arch"

    },
    {
        _id:7,
        name:'খারাপ স্টুডেন্টদের ক্যারিয়ার',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor architecto tenetur unde neque culpa libero omnis? Deserunt perspiciatis unde magni.',
        img:"https://placeimg.com/400/225/arch"

    },
    {
        _id:8,
        name:'প্রেজেন্টেশন/লিডারশীপ ডেভেলপ করার সহজ স্টেপ',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor architecto tenetur unde neque culpa libero omnis? Deserunt perspiciatis unde magni.',
        img:"https://placeimg.com/400/225/arch"

    },
  ] */

  const [blogs, setBlogs] = useState();

  useEffect(() => {
    fetch("https://stark-hollows-26694.herokuapp.com/blog")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  console.log(blogs);
  return (
    <div className="mt-10 flex flex-wrap justify-center items-center gap-5">
      {blogs?.slice(0, 9).map((blog) => (
        <BlogCard key={blog._id} blog={blog}></BlogCard>
      ))}
    </div>
  );
};

export default Blog;
