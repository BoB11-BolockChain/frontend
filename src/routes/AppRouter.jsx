import React, { createContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "src/routes/Home";
import AdminRouteLayout from "src/routes/private/AdminRouteLayout";
import SignIn from "src/routes/SignIn";
import SignUp from "src/routes/SignUp";
import NotFound from "src/routes/NotFound";
import Admin from "src/routes/private/Admin";
import EditChallenges from "src/routes/private/EditChallenge";
import PDxF_Management from "src/routes/private/PDxF_Management";
import ScoreBoard from "src/routes/Scoreboard";
import User from "src/routes/User";
import Profile from "src/routes/Profile";
import Notifications from "src/routes/Notifications";
import Challenges from "src/routes/Challenges";
import EditChallenge from "src/routes/private/EditChallenge";

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
          <Route path="user" element={<User />} />
          <Route path="scoreboard" element={<ScoreBoard />} />
          <Route
            path="admin"
            element={<AdminRouteLayout redirectTo="/signin" />}
          >
            <Route index element={<Admin />} />
            <Route path="pdxfmanagement" element={<PDxF_Management />}>
              <Route path=":id" element={<PDxF_Management />}></Route>
            </Route>
            <Route path="admin" element={<Admin />} />
            <Route path="editchallenges" element={<EditChallenges />}>
              <Route path=":id" element={<EditChallenge />} />
            </Route>
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
};

export default AppRouter;
