import React from "react";
import { Link } from "react-router-dom";

const Clone = () => {
  return (
    <>
      <h1>ini landing page </h1>
      <h2>maaf mas landing page nya belum jadi</h2>
      <>
        <Link to="/Login">
          <button
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Login
          </button>
        </Link>
        <Link to="/dashboard">
          <button
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            dasboard
          </button>
        </Link>
      </>
    </>
  );
};

export default Clone;
