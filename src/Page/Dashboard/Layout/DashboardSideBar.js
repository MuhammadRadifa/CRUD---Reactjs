import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../../Context/GlobalContext";

const DashboardSideBar = () => {
  const { allFunct } = useContext(GlobalContext);
  const { RemoveToken, defaultID } = allFunct;

  return (
    <>
      <div className="h-screen hidden lg:block my-4 ml-4 shadow-lg relative w-64">
        <div className="bg-white h-full rounded-2xl dark:bg-gray-700">
          <div className="flex items-center justify-center pt-6">
            <svg
              width={35}
              height={30}
              viewBox="0 0 256 366"
              version="1.1"
              preserveAspectRatio="xMidYMid"
            >
              <defs>
                <linearGradient
                  x1="12.5189534%"
                  y1="85.2128611%"
                  x2="88.2282959%"
                  y2="10.0225497%"
                  id="linearGradient-1"
                >
                  <stop
                    stopColor="#FF0057"
                    stopOpacity="0.16"
                    offset="0%"
                  ></stop>
                  <stop stopColor="#FF0057" offset="86.1354%"></stop>
                </linearGradient>
              </defs>
              <g>
                <path
                  d="M0,60.8538006 C0,27.245261 27.245304,0 60.8542121,0 L117.027019,0 L255.996549,0 L255.996549,86.5999776 C255.996549,103.404155 242.374096,117.027222 225.569919,117.027222 L145.80812,117.027222 C130.003299,117.277829 117.242615,130.060011 117.027019,145.872817 L117.027019,335.28252 C117.027019,352.087312 103.404567,365.709764 86.5997749,365.709764 L0,365.709764 L0,117.027222 L0,60.8538006 Z"
                  fill="#001B38"
                ></path>
                <circle
                  fill="url(#linearGradient-1)"
                  transform="translate(147.013244, 147.014675) rotate(90.000000) translate(-147.013244, -147.014675) "
                  cx="147.013244"
                  cy="147.014675"
                  r="78.9933938"
                ></circle>
                <circle
                  fill="url(#linearGradient-1)"
                  opacity="0.5"
                  transform="translate(147.013244, 147.014675) rotate(90.000000) translate(-147.013244, -147.014675) "
                  cx="147.013244"
                  cy="147.014675"
                  r="78.9933938"
                ></circle>
              </g>
            </svg>
          </div>
          <nav className="mt-6">
            <Link
              className="w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500"
              to="/Dashboard"
            >
              <span className="text-left">
                <svg
                  width={20}
                  height={20}
                  fill="currentColor"
                  viewBox="0 0 2048 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1070 1178l306-564h-654l-306 564h654zm722-282q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z"></path>
                </svg>
              </span>
              <span className="mx-4 text-sm font-normal">Dashboard</span>
            </Link>
            <div>
              <button className="peer w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 mt-2 transition-colors duration-200 justify-start hover:text-blue-500 py-2">
                <span className="text-left">
                  <svg
                    width={20}
                    height={20}
                    fill="currentColor"
                    className="m-auto"
                    viewBox="0 0 2048 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1024 1131q0-64-9-117.5t-29.5-103-60.5-78-97-28.5q-6 4-30 18t-37.5 21.5-35.5 17.5-43 14.5-42 4.5-42-4.5-43-14.5-35.5-17.5-37.5-21.5-30-18q-57 0-97 28.5t-60.5 78-29.5 103-9 117.5 37 106.5 91 42.5h512q54 0 91-42.5t37-106.5zm-157-520q0-94-66.5-160.5t-160.5-66.5-160.5 66.5-66.5 160.5 66.5 160.5 160.5 66.5 160.5-66.5 66.5-160.5zm925 509v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm0-260v-56q0-15-10.5-25.5t-25.5-10.5h-568q-15 0-25.5 10.5t-10.5 25.5v56q0 15 10.5 25.5t25.5 10.5h568q15 0 25.5-10.5t10.5-25.5zm0-252v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm256-320v1216q0 66-47 113t-113 47h-352v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-768v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-352q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1728q66 0 113 47t47 113z"></path>
                  </svg>
                </span>
                <span className="mx-4 text-sm font-normal">List Vacancy</span>
              </button>
              <div className="hidden peer-hover:flex hover:flex w-full flex-col bg-white drop-shadow-lg overflow">
                <Link
                  className="px-5 py-3 hover:text-blue-500"
                  to="List-Vacancy"
                >
                  List Data
                </Link>
                <Link
                  className="px-5 py-3 hover:text-blue-500"
                  onClick={defaultID}
                  to="create"
                >
                  Create Data
                </Link>
                <Link className="px-5 py-3 hover:text-blue-500" to="Manage">
                  Manage Data
                </Link>
              </div>
              <Link
                className="w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500"
                to="Password"
              >
                <span className="text-left">
                  <svg
                    width={20}
                    height={20}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.228,11.464H1.996c-0.723,0-1.308,0.587-1.308,1.309v5.232c0,0.722,0.585,1.308,1.308,1.308h5.232
		c0.723,0,1.308-0.586,1.308-1.308v-5.232C8.536,12.051,7.95,11.464,7.228,11.464z M7.228,17.351c0,0.361-0.293,0.654-0.654,0.654
		H2.649c-0.361,0-0.654-0.293-0.654-0.654v-3.924c0-0.361,0.292-0.654,0.654-0.654h3.924c0.361,0,0.654,0.293,0.654,0.654V17.351z
		 M17.692,11.464H12.46c-0.723,0-1.308,0.587-1.308,1.309v5.232c0,0.722,0.585,1.308,1.308,1.308h5.232
		c0.722,0,1.308-0.586,1.308-1.308v-5.232C19,12.051,18.414,11.464,17.692,11.464z M17.692,17.351c0,0.361-0.293,0.654-0.654,0.654
		h-3.924c-0.361,0-0.654-0.293-0.654-0.654v-3.924c0-0.361,0.293-0.654,0.654-0.654h3.924c0.361,0,0.654,0.293,0.654,0.654V17.351z
		 M7.228,1H1.996C1.273,1,0.688,1.585,0.688,2.308V7.54c0,0.723,0.585,1.308,1.308,1.308h5.232c0.723,0,1.308-0.585,1.308-1.308
		V2.308C8.536,1.585,7.95,1,7.228,1z M7.228,6.886c0,0.361-0.293,0.654-0.654,0.654H2.649c-0.361,0-0.654-0.292-0.654-0.654V2.962
		c0-0.361,0.292-0.654,0.654-0.654h3.924c0.361,0,0.654,0.292,0.654,0.654V6.886z M17.692,1H12.46c-0.723,0-1.308,0.585-1.308,1.308
		V7.54c0,0.723,0.585,1.308,1.308,1.308h5.232C18.414,8.848,19,8.263,19,7.54V2.308C19,1.585,18.414,1,17.692,1z M17.692,6.886
		c0,0.361-0.293,0.654-0.654,0.654h-3.924c-0.361,0-0.654-0.292-0.654-0.654V2.962c0-0.361,0.293-0.654,0.654-0.654h3.924
		c0.361,0,0.654,0.292,0.654,0.654V6.886z"
                    ></path>
                  </svg>
                </span>
                <span className="mx-4 text-sm font-normal">Password</span>
              </Link>
              <button
                onClick={RemoveToken}
                className="w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500"
                to="/Dashboard"
              >
                <span className="text-left">
                  <svg
                    width={20}
                    height={20}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3.24,7.51c-0.146,0.142-0.146,0.381,0,0.523l5.199,5.193c0.234,0.238,0.633,0.064,0.633-0.262v-2.634c0.105-0.007,0.212-0.011,0.321-0.011c2.373,0,4.302,1.91,4.302,4.258c0,0.957-0.33,1.809-1.008,2.602c-0.259,0.307,0.084,0.762,0.451,0.572c2.336-1.195,3.73-3.408,3.73-5.924c0-3.741-3.103-6.783-6.916-6.783c-0.307,0-0.615,0.028-0.881,0.063V2.575c0-0.327-0.398-0.5-0.633-0.261L3.24,7.51 M4.027,7.771l4.301-4.3v2.073c0,0.232,0.21,0.409,0.441,0.366c0.298-0.056,0.746-0.123,1.184-0.123c3.402,0,6.172,2.709,6.172,6.041c0,1.695-0.718,3.24-1.979,4.352c0.193-0.51,0.293-1.045,0.293-1.602c0-2.76-2.266-5-5.046-5c-0.256,0-0.528,0.018-0.747,0.05C8.465,9.653,8.328,9.81,8.328,9.995v2.074L4.027,7.771z"></path>{" "}
                  </svg>
                </span>
                <span className="mx-4 text-sm font-normal">Logout</span>
              </button>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default DashboardSideBar;
