import React, { useContext } from "react";

import { GlobalContext } from "../Context/GlobalContext";

const TableList = (props) => {
  const { allFunct } = useContext(GlobalContext);
  const { HandlingDetail } = allFunct;

  return (
    <>
      <tr className="text-center bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th
          scope="row"
          className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {props.title}
        </th>
        <td className="py-4 px-6">{props.type}</td>
        <td className="py-4 px-6">{props.tenure}</td>
        <td className="py-4 px-6">
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
        </td>
        <td className="py-4 px-6">{props.company_name}</td>
        <td className="py-4 px-6">{props.company_city}</td>
        <td className="py-4 px-6">
          <button
            value={props.buttonid}
            onClick={HandlingDetail}
            type="button"
            class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-1 "
          >
            Detail
          </button>
        </td>
      </tr>
    </>
  );
};

export default TableList;
