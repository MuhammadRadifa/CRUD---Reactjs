import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../../Context/GlobalContext";
import axios from "axios";
import ManageList from "../../../Component/ManageList";

const DashboardManage = () => {
  const { State } = useContext(GlobalContext);
  const { data, setData, fetchStatus, setFetchStatus } = State;

  useEffect(() => {
    console.log(fetchStatus);
    if (fetchStatus === true) {
      axios
        .get("https://dev-example.sanbercloud.com/api/job-vacancy")
        .then((res) => {
          let temp = res.data;
          setData([...temp.data]);
          console.log(data);
        })
        .catch((error) => {
          console.log(error.message);
        });
      setFetchStatus(false);
    }
  }, [data, setData, setFetchStatus, fetchStatus]);

  return (
    <>
      <div className="overflow-x-auto relative">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center">
            <tr>
              <th scope="col" className="py-3 px-6">
                Title
              </th>
              <th scope="col" className="py-3 px-6">
                Type
              </th>
              <th scope="col" className="py-3 px-6">
                Tenure
              </th>
              <th scope="col" className="py-3 px-6">
                Status
              </th>
              <th scope="col" className="py-3 px-6">
                Company
              </th>
              <th scope="col" className="py-3 px-6">
                More Detail
              </th>
              <th scope="col" className="py-3 px-6">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data !== null &&
              data.map((response) => {
                return (
                  <>
                    <ManageList
                      title={response.title}
                      type={response.job_type}
                      tenure={response.job_tenure}
                      company_name={response.company_name}
                      job_status={response.job_status}
                      buttonid={response.id}
                    />
                  </>
                );
              })}
            {data === null && <div></div>}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DashboardManage;
