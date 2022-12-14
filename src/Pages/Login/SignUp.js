import React from 'react';
import { useEffect } from 'react';
import { useState } from "react";
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Footer from '../Shared/Footer';
import Loading from '../Shared/Loading';
import GithubLogin from './GithubLogin';
import GoogleLogin from './GoogleLogin';

const SignUp = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    
      const { register, formState: { errors }, handleSubmit} = useForm();
    let errorElement;
    const navigate = useNavigate();
  
    useEffect(() => {
      if (user) {
        navigate('/dashboard');
      }
    },[user, navigate]);
      
      if (loading || updating) {
        return <Loading></Loading>
      }
    
      if (error || updateError) {
        errorElement = <div><p className="text-red-500">{error?.message || updateError?.message}</p></div>
      }
    
      const onSubmit = async data => {
        // console.log(data);
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
          console.log('updating');
          
      };
    
    return (
        <div>
      <div className="flex justify-center items-center py-10">
        <div className=" w-full p-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3" >
            
            <h5 className="text-xl text-center font-medium text-gray-900 dark:text-white">
              Sign Up to our platform
            </h5>

            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your Name
              </label>

              <input
                {...register("name", {
                  required: {
                    value: true,
                    message: 'name is required'
                  }
                })}
                type="name"
                placeholder="Shamima Akter"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              />

              <label>
                {errors.name?.type === "required" && <span className="label-text-alt text-red-600">{errors.name.message}</span>}
              </label>
            </div>
            
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your email
              </label>

              <input
                {...register("email", {
                  required: {
                    value: true,
                    message: 'email is required'
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: 'provide a valid email'
                  }
                })}
                type="email"
                placeholder="name@company.com"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              />

              <label>
                {errors.email?.type === "required" && <span className="label-text-alt text-red-600">{errors.email.message}</span>}

                {errors.email?.type === "pattern" && <span className="label-text-alt text-red-600">{errors.email.message}</span>}
              </label>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your password
              </label>

              <input
                {...register("password", {
                required: {
                  value: true,
                  message: 'password is required'
                },
                minLength: {
                  value: 6,
                  message: 'Must be 6 character or longer'
                }
                })}
                /* type="password" */
                type="text"
                placeholder="????????????????????????"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required=""
              />

              <label>
                {errors.password?.type === "required" && <span className="label-text-alt text-red-600">{errors.password.message}</span>}

                {errors.password?.type === "minLength" && <span className="label-text-alt text-red-600">{errors.password.message}</span>}
              </label>
            </div>

            <div className="flex items-start">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                    required=""
                  />
                </div>
                <label
                  htmlFor="remember"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Remember me
                </label>
              </div>
              <Link
                to="#"
                className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
              >
                Lost Password?
              </Link>
            </div>
            
            {errorElement}
            <button
              type="submit"
              className="w-full flex justify-center items-center text-white bg-amber-400 hover:bg-amber-500 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800"
            >
              <img
                width="30px"
                className="mr-5 rounded-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSYtMF5lUCNhU_dM2FxJ4rYbFhIYq-_R659A&usqp=CAU"
                alt=""
              />
              SIGN UP
            </button>

            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-blue-700 hover:underline dark:text-blue-500"
              >
                Please login
              </Link>
            </div>
          </form>

          <div className="divider text-gray-800">OR</div>
          <GoogleLogin></GoogleLogin>
          <GithubLogin></GithubLogin>
        </div>
      </div>

      <Footer></Footer>
    </div>
    );
};

export default SignUp;