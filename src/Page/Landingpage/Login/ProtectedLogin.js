import Cookies from "js-cookie";
import React from "react";
import { Navigate } from "react-router-dom";

const ProctectedLogin = (props) => {
  if (Cookies.get("token") === undefined) {
    return <Navigate to={"/Login"} />;
  } else {
    return props.children;
  }
};

export default ProctectedLogin;
