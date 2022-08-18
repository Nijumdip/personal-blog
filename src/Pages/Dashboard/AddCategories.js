import React, { useState } from "react";
import { useForm } from "react-hook-form";

const AddCategories = () => {
  const [imageUpload, setImageUpload] = useState(null);

  const handleImage = e => {
    const image = e.target.files[0];
    const formData = new FormData();
    formData.set("key", "e3b0f164bd5e7d56983529530b499c26");
    formData.append("image", image);
    fetch('https://api.imgbb.com/1/upload', {
      method: "POST",
      body: formData
    })
      .then(res => res.json())
      .then(data => {
        // console.log(data.data);
        setImageUpload(data.data.display_url);
      })
      .catch(err => console.log(err));
  }

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    // console.log(imageUpload, data.category);
    const categoryImage = imageUpload;
    const categoryTitle = data.category;
    // console.log(categoryImage, categoryTitle);
    // console.log({ categoryImage, categoryTitle });
    const categoryData = { categoryImage, categoryTitle };
    console.log(categoryData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        <div className="shrink-0 grid place-content-center">
          <img
            className="h-16 w-16 object-cover rounded-full"
            src={imageUpload}
            alt="" />
        </div>

        {<label className="block">
          <span className="sr-only">Choose profile photo</span>
          <input
            {...register("file")}
            onChange={handleImage}
            type="file"
            accept="image/*"
            className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
            required
          />
        </label>}

        <div>
          <input
            {...register("category")}
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            required
          />
        </div>

        <button
          type="submit"
          className=" w-full flex justify-center items-center text-white bg-amber-400 hover:bg-amber-500 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800"
        >
          SUBMIT
        </button>
      </form>
      
    </div>
  );
};

export default AddCategories;
