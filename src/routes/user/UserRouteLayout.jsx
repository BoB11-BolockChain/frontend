import { Navigate, Outlet } from "react-router-dom";

const UserRouteLayout = ({ redirectTo }) => {
  const sessionId = window.sessionStorage.getItem("sessionId");

  return !sessionId ? <Navigate to={redirectTo} replace /> : <Outlet />;
};

export default UserRouteLayout;
