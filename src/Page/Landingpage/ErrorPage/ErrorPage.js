import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <div className="w-full h-screen bg-blue-200 flex justify-center items-center flex-col gap-5">
        <div>
          <h1 className="text-5xl font-extrabold">404 PAGE NOT FOUND</h1>
        </div>
        <div>
          <Link to={"/"} className="mt-5 text-2xl ">
            &rarr; Go To Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
