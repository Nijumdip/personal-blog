import React, { useEffect } from "react";
import { useState } from "react";
import Category from "./Category";

const Categories = () => {

  /* const categories = [
    {
      _id: 1,
      name: "শিক্ষা / কেরিয়ার",
      img: "https://placeimg.com/160/160/arch",
    },
    {
      _id: 2,
      name: "ওয়েব ডেভলপমেন্ট",
      img: "https://placeimg.com/160/160/arch",
    },
    {
      _id: 3,
      name: "টেকনিক্যাল জ্ঞান",
      img: "https://placeimg.com/160/160/arch",
    },
    {
      _id: 4,
      name: "মোটিভেশন",
      img: "https://placeimg.com/160/160/arch",
    },
    {
      _id: 5,
      name: "বুক স্টোর",
      img: "https://placeimg.com/160/160/arch",
    },
    {
      _id: 6,
      name: "গূগল টুলস্",
      img: "https://placeimg.com/160/160/arch",
    },
    {
      _id: 7,
      name: "টিউটোরিয়াল",
      img: "https://placeimg.com/160/160/arch",
    },
    {
      _id: 8,
      name: "গুরুত্বপূর্ণ রিসোর্স",
      img: "https://placeimg.com/160/160/arch",
    },
  ]; */

  const [categories, setCategories] = useState();
  useEffect(() => {
    fetch('http://localhost:5000/category')
      .then(res => res.json())
      .then(data => setCategories(data));
 },[])

  return (
    <div className=" bg-gray-100 -mt-28">
   <div className="flex flex-wrap justify-center items-center gap-3">
        {categories?.map(category =><Category
                key={category._id}    
                category={category}    
            ></Category>)
        
        }
    </div>
    </div>
  );
};

export default Categories;
