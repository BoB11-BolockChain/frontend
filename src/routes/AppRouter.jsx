import React, { createContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "src/routes/Home";
import AdminRouteLayout from "src/routes/private/AdminRouteLayout";
import SignIn from "src/routes/SignIn";
import SignUp from "src/routes/SignUp";
import NotFound from "src/routes/NotFound";
import Admin from "src/routes/private/Admin";
import EditChallenges from "src/routes/private/EditChallenges";
import CreateChallenges from "src/routes/private/CreateChallenges";
import DeleteChallenges from "src/routes/private/DeleteChallenges";
import ScoreBoard from "src/routes/Scoreboard";
import Profile from "src/routes/Profile";
import TeamProfile from "src/routes/TeamProfile";
import Notifications from "src/routes/Notifications";
import Challenges from "src/routes/Challenges";
import UserTeamSetting from "src/routes/UserTeamSetting";
import HomepageSetting from "src/routes/HomepageSetting";
import SelectOperation from "src/routes/private/SelectOperation";
import Dashboard from "./private/Dashboard";
import DashboardById from "./private/DashboardById";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="challenges" element={<Challenges />} />
        <Route path="main" element={<Home />} />
        <Route path="notifications" element={<Notifications />} />
        <Route path="profile" element={<Profile />} />
        <Route path="teamprofile" element={<TeamProfile />} />
        <Route path="scoreboard" element={<ScoreBoard />} />

        <Route path="admin" element={<AdminRouteLayout redirectTo="/signin" />}>
          <Route index element={<Admin />} />
          <Route path="admin" element={<Admin />} />
          <Route path="editchallenges" element={<EditChallenges />}>
            <Route path=":id" element={<EditChallenges />} />
          </Route>
          <Route path="homepagesetting" element={<HomepageSetting />} />
          <Route path="userteamsetting" element={<UserTeamSetting />} />
          <Route path="selectoperation" element={<SelectOperation />} />
          <Route path="createchallenges" element={<CreateChallenges />} />
          <Route path="deletechallenges" element={<DeleteChallenges />} />
          <Route path="dashboard" element={<Dashboard />}>
            <Route path=":id" element={<DashboardById />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
