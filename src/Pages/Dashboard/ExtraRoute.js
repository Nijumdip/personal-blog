import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

const ExtraRoute = () => {
  const [imgUpload, setImgUpload] = useState(null);
  const handleImage = (e) => {
    const image = e.target.files[0];
    // console.log(image);
    const formData = new FormData();
    formData.set("key", "e3b0f164bd5e7d56983529530b499c26");
    formData.append("image", image);
    fetch("https://api.imgbb.com/1/upload", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setImgUpload(data.data.display_url);
      })
      .catch((err) => console.log(err));
  };

  const { register, handleSubmit, resetField } = useForm();
  const onSubmit = (data) => {
    // console.log(data.category, imgUpload);
    const categoryTitle = data.category;
    const categoryImage = imgUpload;
    const categoryData = { categoryTitle, categoryImage };
    // console.log(categoryData);

    fetch('http://localhost:5000/category', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(categoryData),
    })
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        if (data.acknowledged) {
          toast.success('your category added successfully');
          resetField("category");
          resetField("file");
          setImgUpload(null);
        }
        else {
          toast.error('oops! any problem occurred plz try again')
        }

    })
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
      <div className="shrink-0 grid place-content-center">
        <img
          className="h-16 w-16 object-cover rounded-full"
          src={imgUpload}
          alt=""
        />
      </div>

      {!imgUpload && <label className="block">
        <span className="sr-only">Choose profile photo</span>
        <input
          {...register("file")}
          type="file"
          accept="image/*"
          onChange={handleImage}
          required
          className="block w-full text-sm text-slate-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-violet-50 file:text-violet-700
            hover:file:bg-violet-100
            "
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
  );
};

export default ExtraRoute;
