import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "src/components/Layout/Layout";
import Admin from "src/routes/admin/Admin";
import AdminRouteLayout from "src/routes/admin/AdminRouteLayout";
import CreateScenario from "src/routes/admin/CreateScenario";
import Dashboard from "src/routes/admin/Dashboard";
import DashboardById from "src/routes/admin/DashboardById";
import EditChallenges from "src/routes/admin/EditChallenges";
import HomepageSetting from "src/routes/admin/HomepageSetting";
import SelectOperation from "src/routes/admin/SelectOperation";
import CreateChallenge from "src/routes/admin/CreateChallenge";
import Home from "src/routes/Home";
import NotFound from "src/routes/NotFound";
import Notifications from "src/routes/Notifications";
import Scoreboard from "src/routes/Scoreboard";
import SignIn from "src/routes/SignIn";
import SignUp from "src/routes/SignUp";
import Challenges from "src/routes/user/Challenges";
import Profile from "src/routes/user/Profile";
import Training from "src/routes/user/Training";
import UserRouteLayout from "src/routes/user/UserRouteLayout";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="scoreboard" element={<Scoreboard />} />

          <Route path="user" element={<UserRouteLayout redirectTo="/signin" />}>
            <Route path="challenges" element={<Challenges />} />
            <Route path="profile" element={<Profile />} />
            <Route path="Training" element={<Training />} />
          </Route>

          <Route
            path="admin"
            element={<AdminRouteLayout redirectTo="/signin" />}
          >
            <Route index element={<Admin />} />
            <Route path="homepagesetting" element={<HomepageSetting />} />
            <Route path="selectoperation" element={<SelectOperation />} />
            <Route path="createscenario" element={<CreateScenario />} />
            <Route path="editchallenges" element={<EditChallenges />}>
              <Route path=":id" element={<EditChallenges />} />
            </Route>
            <Route path="createchallenge">
              <Route index element={<CreateChallenge />} />
              <Route path=":id" element={<CreateChallenge />} />
            </Route>
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
