import React from "react";

const Subscribe = () => {
  return (
    <div class="mb-20 mt-20 shadow-xl">
        <div class="flex flex-col w-full place-items-center px-5 pb-10">
            <div>
                <span class="font-bold text-gray-600">
                    Many free resources in Bangladesh for self-learners.This is one of them .That <br />
                    Provides a free and open environment for the exchange of knowledge.
                </span>
            </div>
            <div class="divider"></div>
            <div>
                <span class="footer-title text-gray-900">
                    Get the blog articles into your inbox !
                </span> 
                <div class="form-control">
                    <label class="label">
                        <span class="font-medium text-gray-600">SignUp or Subscribe our newsletter and never miss any upcoming articles.</span>
                    </label> 
                    <div class="relative w-full shadow-lg rounded-lg">
                        <input type="text" placeholder="Enter your email address" class="input input-bordered w-full pr-16" /> 
                        <button class="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                    </div>
                </div>
            </div>
            </div>
        </div>
  );
};

export default Subscribe;
