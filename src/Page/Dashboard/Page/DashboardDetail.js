import axios from "axios";
import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import DetailList from "../../../Component/DetailList";
import { GlobalContext } from "../../../Context/GlobalContext";

const DashboardDetail = () => {
  let { idData } = useParams();

  const { State } = useContext(GlobalContext);
  const { currentData, setCurrentData } = State;

  useEffect(() => {
    if (idData !== -1) {
      axios
        .get(`https://dev-example.sanbercloud.com/api/job-vacancy/${idData}`)
        .then((res) => {
          let temp = res.data;
          setCurrentData([temp]);
          console.log(currentData);
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  }, [currentData, setCurrentData, idData]);
  return (
    <>
      {currentData !== null &&
        currentData.map((res) => {
          return (
            <>
              <DetailList
                title={res.title}
                company_name={res.company_name}
                company_city={res.company_city}
                salary_min={res.salary_min}
                salary_max={res.salary_max}
                job_description={res.job_description}
                job_qualification={res.job_qualification}
                job_type={res.job_type}
                job_tenure={res.job_tenure}
                job_status={res.job_status}
                image_url={res.company_image_url}
              />
            </>
          );
        })}
      {currentData === null && <div></div>}
    </>
  );
};
export default DashboardDetail;
