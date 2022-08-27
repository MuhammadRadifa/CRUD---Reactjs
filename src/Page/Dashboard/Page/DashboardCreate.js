import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../../Context/GlobalContext";
import { useParams } from "react-router-dom";
import axios from "axios";

const DashboardCreate = () => {
  const { State, allFunct } = useContext(GlobalContext);
  const { HandlingCreate, CreateDataInput } = allFunct;
  const { input, setInput, currentId } = State;
  let { idData } = useParams();
  console.log(currentId);
  useEffect(() => {
    if (idData !== undefined && idData !== -1) {
      axios
        .get(`https://dev-example.sanbercloud.com/api/job-vacancy/${idData} `)
        .then((res) => {
          let temp = res.data;
          const {
            title,
            job_description,
            job_qualification,
            job_type,
            job_tenure,
            job_status,
            company_name,
            company_image_url,
            company_city,
            salary_min,
            salary_max,
          } = temp;
          setInput({
            title,
            job_description,
            job_qualification,
            job_type,
            job_tenure,
            job_status,
            company_name,
            company_image_url,
            company_city,
            salary_min,
            salary_max,
          });
          console.log(input);
        })
        .catch((error) => console.log(error.message));
    }
  }, [idData, setInput, input]);

  return (
    <>
      <div className="bg-white p-3 shadow-sm rounded-lg mb-8">
        <div>
          <h1 className="text-xl font-bold">Create Data</h1>
        </div>
        <div className="my-4 text-lg font-bold text-center">
          JOB FORM
          <hr />
        </div>
        <div>
          <form onSubmit={HandlingCreate}>
            <div className="flex w-full">
              <div className="mb-6 w-[30%] mx-4">
                <label
                  htmlFor="title"
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                >
                  Title
                </label>
                <input
                  onChange={CreateDataInput}
                  value={input.title}
                  name="title"
                  type="text"
                  id="title"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div className="mb-6 w-[70%] mx-4">
                <label
                  htmlFor="job_qualification"
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                >
                  Qualification
                </label>
                <input
                  onChange={CreateDataInput}
                  value={input.job_qualification}
                  name="job_qualification"
                  type="text"
                  id="job_qualification"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
            </div>
            <div className="flex w-full">
              <div className="mb-6 w-[30%] mx-4">
                <label
                  htmlFor="job_tenure"
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                >
                  Tenure
                </label>
                <input
                  onChange={CreateDataInput}
                  value={input.job_tenure}
                  name="job_tenure"
                  type="text"
                  id="job_tenure"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div className="mb-6 w-[30%] mx-4">
                <label
                  htmlFor="job_type"
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                >
                  type
                </label>
                <input
                  onChange={CreateDataInput}
                  value={input.job_type}
                  name="job_type"
                  type="text"
                  id="job_type"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div className="mb-6 w-[30%] mx-4">
                <label
                  htmlFor="job_status"
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                >
                  status (0 = tidak tersedia,1 = tersedia )
                </label>
                <input
                  onChange={CreateDataInput}
                  value={input.job_status}
                  min={0}
                  max={1}
                  name="job_status"
                  type="number"
                  id="job_status"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
            </div>
            <div className="w-full mx-4">
              <>
                <label
                  htmlFor="job_description"
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                >
                  description
                </label>
                <textarea
                  onChange={CreateDataInput}
                  value={input.job_description}
                  name="job_description"
                  id="job_description"
                  rows={4}
                  className="block p-2.5 w-[97%] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="description..."
                />
              </>
            </div>
            <div className="my-4 text-lg font-bold text-center">
              COMPANY FORM
              <hr />
            </div>
            <div className="flex w-full">
              <div className="mb-6 w-[30%] mx-4">
                <label
                  htmlFor="company_name"
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                >
                  name
                </label>
                <input
                  onChange={CreateDataInput}
                  value={input.company_name}
                  name="company_name"
                  type="text"
                  id="company_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div className="mb-6 w-[70%] mx-4">
                <label
                  htmlFor="company_image_url"
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                >
                  Image URL
                </label>
                <input
                  onChange={CreateDataInput}
                  value={input.company_image_url}
                  name="company_image_url"
                  type="text"
                  id="company_image_url"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
            </div>
            <div className="flex w-full">
              <div className="mb-6 w-[30%] mx-4">
                <label
                  htmlFor="company_city"
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                >
                  city
                </label>
                <input
                  onChange={CreateDataInput}
                  value={input.company_city}
                  name="company_city"
                  type="text"
                  id="company_city"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div className="mb-6 w-[30%] mx-4">
                <label
                  htmlFor="salary_min"
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                >
                  Salary min
                </label>
                <input
                  onChange={CreateDataInput}
                  value={input.salary_min}
                  name="salary_min"
                  type="number"
                  id="salary_min"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div className="mb-6 w-[30%] mx-4">
                <label
                  htmlFor="salary_max "
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                >
                  salary max
                </label>
                <input
                  onChange={CreateDataInput}
                  value={input.salary_max}
                  name="salary_max"
                  type="number"
                  id="salary_max"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
            </div>
            <div className="flex w-[100%] mx-4 justify-end ">
              <button
                type="submit"
                className="mr-7 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-1 "
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default DashboardCreate;
