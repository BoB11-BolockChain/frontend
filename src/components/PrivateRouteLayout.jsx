import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouteLayout = ({ redirectTo }) => {
  const sessionId = window.sessionStorage.getItem("sessionId");

  return !sessionId ? (
    <Navigate to={redirectTo} />
  ) : (
    <>
      <h1>header</h1>
      <Outlet />
      <h1>footer</h1>
    </>
  );
};

export default PrivateRouteLayout;
