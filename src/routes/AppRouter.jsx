import React, { createContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "src/routes/Home";
import AdminRouteLayout from "src/routes/private/AdminRouteLayout";
import SignIn from "src/routes/SignIn";
import SignUp from "src/routes/SignUp";
import NotFound from "src/routes/NotFound";
import Admin from "src/routes/private/Admin";
import EditChallenges from "src/routes/private/EditChallenges";
import CreateChallengesBasic from "src/routes/private/CreateChallengesBasic";
import CreateChallengesCustom from "src/routes/private/CreateChallengesCustom";
import DeleteChallenges from "src/routes/private/DeleteChallenges";
import ScoreBoard from "src/routes/Scoreboard";
import Profile from "src/routes/Profile";
import TeamProfile from "src/routes/TeamProfile";
import Notifications from "src/routes/Notifications";
import Challenges from "src/routes/Challenges";
import UserTeamSetting from "src/routes/UserTeamSetting";
import HomepageSetting from "src/routes/HomepageSetting";

const UserContext = createContext("");

const AppRouter = () => {
  return (
    <UserContext.Provider>
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

          <Route
            path="admin"
            element={<AdminRouteLayout redirectTo="/signin" />}
          >
            <Route index element={<Admin />} />
            <Route path="admin" element={<Admin />} />
            <Route path="editchallenges" element={<EditChallenges />}>
              <Route path=":id" element={<EditChallenges />} />
            </Route>
            <Route path="homepagesetting" element={<HomepageSetting />} />
            <Route path="userteamsetting" element={<UserTeamSetting />} />
            <Route
              path="createchallengesbasic"
              element={<CreateChallengesBasic />}
            />
            <Route
              path="createchallengescustom"
              element={<CreateChallengesCustom />}
            />
            <Route path="deletechallenges" element={<DeleteChallenges />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
};

export default AppRouter;
