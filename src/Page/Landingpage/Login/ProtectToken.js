import Cookies from "js-cookie";
import React from "react";
import { Navigate } from "react-router-dom";

const ProtectToken = (props) => {
  if (Cookies.get("token") !== undefined) {
    return <Navigate to={"/"} />;
  } else {
    return props.children;
  }
};

export default ProtectToken;
