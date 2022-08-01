import React from "react";

const Subscribe = () => {
  return (
    <div class="mb-20 mt-20">
        <div class="flex flex-col w-full">
            <div class="grid card bg-gray-100 place-items-center">
                content
            </div>
            <div class="divider"></div>
                <div>
                    <span class="footer-title text-black">Get the blog articles into your inbox !
                    </span> 
                    <div class="form-control">
                        <label class="label">
                        <span class="label-text">Sign up for free and Subscribe our newsletter to get notified about upcoming posts.</span>
                        </label> 
                        <div class="relative">
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
