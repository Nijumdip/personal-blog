import { signOut } from "firebase/auth";
import React from "react";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "./Loading";

const Navbar = () => {

  const [user, loading] = useAuthState(auth);
  const [admin, setAdmin] = useState({});
  

  if (user) {
    console.log(user.email);
    fetch(`http://localhost:5000/admin/${user.email}`)
    .then(res=>res.json())
      .then(data => {
        console.log(data);
        setAdmin(data);
    })
  }

  const logout = () => {
    signOut(auth);
  };

  return (
    <>
      {
        loading ? <Loading></Loading> :
        <div className="sticky top-0 z-20 bg-gray-50 dark:bg-gray-700">
          <nav>
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl   pt-3">
              <Link to="/" className="flex items-center">
                <span className="btn btn-ghost self-center text-lg font-bold whitespace-nowrap text-black">
                  কাগজে কলমে শেখা
                </span>
              </Link>
  
              <div className="flex items-center">
                <div className="btn btn-ghost btn-circle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
  
                <p>
                    {user ? 
                      <Link to="/" onClick={logout} className="text-sm font-bold text-blue-900 btn btn-ghost">sign out</Link>
                      :
                      <Link to="login" className="text-sm font-bold text-gray-800 btn btn-ghost">
                        Login
                      </Link>
                    }
                </p>
              </div>
            </div>
          </nav>
  
          <nav>
            <div className="mx-auto max-w-screen-xl ">
              <div className="flex items-center flex-wrap justify-between mx-auto max-w-screen-xl pb-3 ">
                <ul className="flex flex-row mt-0 text-sm font-bold">
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
                    {
                      admin.role ==="admin" && <Link
                      to="/dashboard"
                      className="text-gray-900 dark:text-white btn btn-ghost"
                      aria-current="page"
                    >
                      Dashboard
                    </Link>
                    }
                    </li>
                  
                  <li>
                    <Link
                      to="/"
                      className="text-gray-900 dark:text-white btn btn-ghost"
                    >
                      Blog
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
  
                <div className="px-7">
                  <Link
                    className=" btn btn-ghost btn-circle text-gray-800 text-xl"
                    to="/"
                  >
                    <i className="fa-brands fa-twitter"></i>
                  </Link>
  
                  <Link
                    className=" btn btn-ghost btn-circle text-gray-800 text-xl"
                    to="/"
                  >
                    <i className="fa-brands fa-github"></i>
                  </Link>
  
                  <Link
                    className=" btn btn-ghost btn-circle text-gray-800 text-xl"
                    to="/"
                  >
                    <i className="fa-brands fa-linkedin"></i>
                  </Link>
  
                  <Link
                    className=" btn btn-ghost btn-circle text-gray-800 text-xl"
                    to="/"
                  >
                    <i className="fa-brands fa-facebook-f"></i>
                  </Link>
  
                </div>
              </div>
            </div>
  
          {/*  <div>
              <label tabIndex="1" htmlFor="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
            </div> */}
          </nav>
          
        </div>
      }
    </>
  );
};

export default Navbar;
