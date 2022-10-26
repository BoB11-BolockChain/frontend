import { BrowserRouter, Route, Routes } from "react-router-dom";
import Challenges from "src/routes/Challenges";
import Home from "src/routes/Home";
import NotFound from "src/routes/NotFound";
import Notifications from "src/routes/Notifications";
import Admin from "src/routes/private/Admin";
import AdminRouteLayout from "src/routes/private/AdminRouteLayout";
import CreateChallenge from "src/routes/private/CreateChallenge";
import Dashboard from "src/routes/private/Dashboard";
import DashboardById from "src/routes/private/DashboardById";
import DeleteChallenges from "src/routes/private/DeleteChallenges";
import EditChallenges from "src/routes/private/EditChallenges";
import HomepageSetting from "src/routes/private/HomepageSetting";
import SelectOperation from "src/routes/private/SelectOperation";
import Profile from "src/routes/Profile";
import ScoreBoard from "src/routes/Scoreboard";
import SignIn from "src/routes/SignIn";
import SignUp from "src/routes/SignUp";
import TeamProfile from "src/routes/TeamProfile";
import UserTeamSetting from "src/routes/UserTeamSetting";

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
          <Route path="createchallenge" element={<CreateChallenge />} />
          <Route path="deletechallenges" element={<DeleteChallenges />} />
          <Route path="dashboard">
            <Route index element={<Dashboard />} />
            <Route path=":id" element={<DashboardById />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
