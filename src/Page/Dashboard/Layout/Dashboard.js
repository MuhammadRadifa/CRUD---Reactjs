import React from "react";
import DashboardHeader from "./DashboardHeader";
import DashboardSideBar from "./DashboardSideBar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <main className="bg-gray-100 dark:bg-gray-800 rounded-2xl h-screen overflow-hidden relative">
        <div className="flex items-start justify-between ">
          <DashboardSideBar />
          <div className="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
            <div className="lg:hidden">
              <DashboardHeader />
            </div>
            {/* Navbar */}
            <div className="overflow-auto h-screen pb-24 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0 rounded-2xl shadow-lg ">
              {/* <content> */}

              <Outlet />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
