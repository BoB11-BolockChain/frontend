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
import CreateChallenge from "./admin/CreateChallenge";
import Home from "./Home";
import NotFound from "./NotFound";
import Notifications from "./Notifications";
import Scoreboard from "./Scoreboard";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Challenges from "./user/Challenges";
import Profile from "./user/Profile";
import UserRouteLayout from "./user/UserRouteLayout";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route index element={<Home />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="scoreboard" element={<Scoreboard />} />

          <Route path="user" element={<UserRouteLayout redirectTo="/signin" />}>
            <Route path="challenges" element={<Challenges />} />
            <Route path="profile" element={<Profile />} />
          </Route>

          <Route
            path="admin"
            element={<AdminRouteLayout redirectTo="/signin" />}
          >
            <Route index element={<Admin />} />
            <Route path="editchallenges" element={<EditChallenges />}>
              <Route path=":id" element={<EditChallenges />} />
            </Route>
            <Route path="homepagesetting" element={<HomepageSetting />} />
            <Route path="selectoperation" element={<SelectOperation />} />
            <Route path="createscenario" element={<CreateScenario />} />
            <Route path="createchallenge" element={<CreateChallenge />} />
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
