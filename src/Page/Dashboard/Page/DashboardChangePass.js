import React, { useContext } from "react";
import { GlobalContext } from "../../../Context/GlobalContext";

const DashboardChangePass = () => {
  const { allFunct, State } = useContext(GlobalContext);
  const { HandlingInputPass, HandlingPass } = allFunct;
  const { inputPass } = State;
  return (
    <>
      <div className="p-5">
        <h1 className="text-2xl">CHANGE PASSWORD</h1>
        <form className="mt-6" onSubmit={HandlingPass}>
          <div className="mb-6">
            <label
              htmlFor="current_password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Current PassWord
            </label>
            <input
              onChange={HandlingInputPass}
              value={inputPass.current_password}
              type="password"
              name="current_password"
              id="current_password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="new_password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              New password
            </label>
            <input
              onChange={HandlingInputPass}
              value={inputPass.new_password}
              name="new_password"
              type="password"
              id="new_password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="new_confirm_password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Confirm password
            </label>
            <input
              onChange={HandlingInputPass}
              value={inputPass.new_confirm_password}
              name="new_confirm_password"
              type="password"
              id="new_confirm_password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="text-white float-right bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default DashboardChangePass;
