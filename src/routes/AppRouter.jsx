import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "src/components/Layout/Layout";
import Admin from "src/routes/admin/Admin";
import AdminRouteLayout from "src/routes/admin/AdminRouteLayout";
import CreateChallenge from "src/routes/admin/CreateChallenge";
import Dashboard from "src/routes/admin/Dashboard";
import DashboardById from "src/routes/admin/DashboardById";
import DeleteChallenges from "src/routes/admin/DeleteChallenges";
import EditChallenges from "src/routes/admin/EditChallenges";
import HomepageSetting from "src/routes/admin/HomepageSetting";
import SelectOperation from "src/routes/admin/SelectOperation";
import Home from "src/routes/Home";
import NotFound from "src/routes/NotFound";
import Notifications from "src/routes/Notifications";
import Profile from "src/routes/Profile";
import ScoreBoard from "src/routes/Scoreboard";
import SignIn from "src/routes/SignIn";
import SignUp from "src/routes/SignUp";
import Challenges from "src/routes/user/Challenges";
import TeamProfile from "src/routes/user/TeamProfile";
import UserTeamSetting from "src/routes/user/UserTeamSetting";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Layout>
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
      </Layout>
    </BrowserRouter>
  );
};

export default AppRouter;
