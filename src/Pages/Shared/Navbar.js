import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-20 bg-gray-50 dark:bg-gray-700">
      <nav>
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 pt-3">
          <Link to="/" className="flex items-center">
            <span className="btn btn-ghost self-center text-xl font-semibold whitespace-nowrap text-black dark:text-white">
              শেখাটা কাগজে কলমে
            </span>
          </Link>
          
          <div className="flex items-center">
            <div className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            
            <Link
              to="login"
              className="text-sm font-bold text-blue-600 dark:text-blue-500 btn btn-ghost"
            >
              Login
            </Link>
          </div>
          
        </div>
      </nav>
      
      <nav>
        <div className="px-4 mx-auto max-w-screen-xl md:px-2">
          <div className="flex items-center flex-wrap justify-between mx-auto max-w-screen-xl px-4 md:px-6 pb-3">
            <ul className="flex flex-row mt-0 mr-6 text-sm font-bold">
              <li>
                <Link
                  to="/"
                  className="text-gray-900 dark:text-white btn btn-ghost"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              
              <li>
                <Link
                  to="/"
                  className="text-gray-900 dark:text-white btn btn-ghost"
                >
                  Categories
                </Link>
              </li>
              
              <li>
                <Link
                  to="/"
                  className="text-gray-900 dark:text-white btn btn-ghost"
                >
                  Posts
                </Link>
              </li>
              
              <li>
                <Link
                  to="about"
                  className="text-gray-900 dark:text-white btn btn-ghost"
                >
                  About Me
                </Link>
              </li>
            </ul>
            
            <div >
                <Link className=" btn btn-ghost btn-circle" to="/">icon</Link>
                <Link className=" btn btn-ghost btn-circle" to="/">icon</Link>
                <Link className=" btn btn-ghost btn-circle" to="/">icon</Link>
                <Link className=" btn btn-ghost btn-circle" to="/">icon</Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
