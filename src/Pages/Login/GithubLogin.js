import React from "react";

const GithubLogin = () => {
  return (
    <div className="pt-3">
      <button className="w-full flex justify-center items-center text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
        <img
          width="30px"
          className="mx-2"
          src="https://octodex.github.com/images/Professortocat_v2.png"
          alt=""
        />
        CONTINUE WITH GITHUB
      </button>
    </div>
  );
};

export default GithubLogin;
