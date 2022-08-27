import React from "react";
import { Link } from "react-router-dom";

const DetailList = (props) => {
  return (
    <>
      <div className="mx-10">
        <div className="flex justify-between items-center">
          <h1 className="text-5xl font-bold my-3">{props.title}</h1>
          <Link to={-1}>
            <button
              type="button"
              class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-1 "
            >
              &#8592; Back
            </button>
          </Link>
        </div>
        <div className="bg-white p-3 shadow-sm rounded-lg grid grid-cols-2">
          <div>
            <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
              <span clas="text-green-500">
                <svg
                  class="h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </span>
              <span className="tracking-wide">Company</span>
            </div>
            <div className="text-gray-700">
              <div className=" md:grid-cols-2 text-sm">
                <div className="grid grid-cols-2">
                  <div className="px-6 py-2 font-semibold">Name</div>
                  <div className="py-2">{props.company_name}</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-6 py-2 font-semibold">City</div>
                  <div className="py-2">{props.company_city}</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-6 py-2 font-semibold">Salary</div>
                  <div className="py-2">
                    {props.salary_min} - {props.salary_max}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[400px] max-w-[400px] float-right ml-10 justify-center items-center flex relative">
            <img
              className="float-right p-2 ml-6 rounded-3xl object-cover w-[180px]"
              src={props.image_url}
              alt="foto"
              height={200}
            />
          </div>
        </div>
        <div className="bg-white p-3 shadow-sm rounded-lg my-5">
          <div>
            <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
              <span clas="text-green-500">
                <svg
                  className="h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </span>
              <span className="tracking-wide">Job</span>
            </div>
            <div className="text-gray-700">
              <div className=" md:grid-cols-2 text-sm">
                <div className="flex">
                  <div className="px-6 py-2 font-semibold w-[25%]">
                    Description
                  </div>
                  <div className="py-2 w-[50%] text-justify">
                    {props.job_description}
                  </div>
                </div>
                <div className="flex">
                  <div className="px-6 py-2 font-semibold w-[25%]">
                    Qualification
                  </div>
                  <div className="py-2 w-[50%]">{props.job_qualification}</div>
                </div>
                <div className="flex">
                  <div className="px-6 py-2 font-semibold w-[25%]">Type</div>
                  <div className="py-2 w-[50%]">{props.job_type}</div>
                </div>
                <div className="flex">
                  <div className="px-6 py-2 font-semibold w-[25%]">Tenure</div>
                  <div className="py-2 w-[50%]">{props.job_tenure}</div>
                </div>
                <div className="flex">
                  <div className="px-6 py-2 font-semibold w-[25%]">Status</div>
                  <div className=" py-2 w-[50%]">
                    {props.job_status === 1 && (
                      <span class="bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900">
                        Dibuka
                      </span>
                    )}
                    {props.job_status !== 1 && (
                      <span class="bg-red-100 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">
                        Ditutup
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailList;
