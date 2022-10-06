import React from "react";
import { Navigate, Outlet, NavLink } from "react-router-dom";

const PrivateRouteLayout = ({ redirectTo }) => {
  const sessionId = window.sessionStorage.getItem("sessionId");

  return !sessionId ? (
    <Navigate to={redirectTo} />
  ) : (
    <Navigate to={<NavLink to="/src/routes/private/Admin" />} />
  );
};

export default PrivateRouteLayout;
