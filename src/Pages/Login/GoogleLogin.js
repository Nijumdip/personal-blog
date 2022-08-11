import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const GoogleLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  let errorElement;

  if (loading) {
    return <Loading></Loading>
  }

  if (error) {
    errorElement = <div><p className="text-red-500">{error?.message}</p></div>
  }

  if (user) {
    console.log(user);
  }
  return (
    <div>
      {errorElement}
      <button
        onClick={() => signInWithGoogle()}
        className="w-full flex justify-center items-center text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        <img
          width="30px"
          src="https://cdn3.iconfinder.com/data/icons/inside/PNG/256x256/icontexto-inside-google.png"
          alt=""
          className="mx-2"
        />
        CONTINUE WITH GOOGLE
      </button>
    </div>
  );
};

export default GoogleLogin;
