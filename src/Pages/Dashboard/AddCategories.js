import React from "react";
import { useForm } from "react-hook-form";

const AddCategories = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
            <div class="shrink-0 grid place-content-center">
                <img class="h-16 w-16 object-cover rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGVBG-gLrwqT_ZbUTjoHbgahHy1h2Qtx28xw&usqp=CAU" alt="Current profile photo" />
            </div>
            
            <label class="block">
                <span class="sr-only">Choose profile photo</span>
                <input
                {...register("file")} 
                type="file" 
                    accept="image/*"
                    class="block w-full text-sm text-slate-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-violet-50 file:text-violet-700
                hover:file:bg-violet-100
                "/>
            </label>

            <div>
            <input
                {...register("text")}
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
            />
            </div>

            <button
            type="submit"
            className=" w-full flex justify-center items-center text-white bg-amber-400 hover:bg-amber-500 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800" >
                SUBMIT
            </button>
        </form>
      {/* 
                <Avatar
                    alt="Remy Sharp"
                    rc={uploadImage}
                    sx={{ width: 56, height: 56 }}
                    style={{ margin: "0 auto", marginBottom: "10px" }}
                />
                {!uploadImage && (
                    <FormControl
                    className="input-field"
                    sx={{ m: 1, width: "50ch" }}
                    variant="outlined"
                    >
                    <Button variant="outlined" color="error" component="label">
                        <PhotoCamera /> Upload your profile picture
                        <input
                            hidden
                            accept="image/*"
                            multiple
                            type="file"
                            onChange={imgHandler}
                            required
                        />
                    </Button>
                    </FormControl>
                )}
            */}
    </div>
  );
};

export default AddCategories;
