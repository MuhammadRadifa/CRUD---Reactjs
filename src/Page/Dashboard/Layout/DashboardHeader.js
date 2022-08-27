import { Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { GlobalContext } from "../../../Context/GlobalContext";

const DashboardHeader = () => {
  const { allFunct } = useContext(GlobalContext);
  const { DefaultId, RemoveToken } = allFunct;
  return (
    <>
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand to="https://flowbite.com/">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Flowbite
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link>
            <Link className="px-5 py-3 hover:text-blue-500" to="/dashboard">
              Dashboard
            </Link>
          </Navbar.Link>
          <Navbar.Link>
            <Link className="px-5 py-3 hover:text-blue-500" to="List-Vacancy">
              List Data
            </Link>
          </Navbar.Link>
          <Navbar.Link>
            <Link
              className="px-5 py-3 hover:text-blue-500"
              to="create"
              onClick={DefaultId}
            >
              Create Data
            </Link>
          </Navbar.Link>
          <Navbar.Link>
            <Link className="px-5 py-3 hover:text-blue-500" to="Manage">
              Manage Data
            </Link>
          </Navbar.Link>
          <Navbar.Link>
            <Link className="px-5 py-3 hover:text-blue-500" to="password">
              Password
            </Link>
          </Navbar.Link>
          <Navbar.Link>
            <Link
              className="px-5 py-3 hover:text-blue-500"
              onClick={RemoveToken}
              to="/login"
            >
              logout
            </Link>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default DashboardHeader;
