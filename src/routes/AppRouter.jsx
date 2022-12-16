import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "src/components/Layout/Layout";
import AdminRouteLayout from "src/routes/admin/AdminRouteLayout";
import CreateVM from "src/routes/admin/Create_VM";
import Dashboard from "src/routes/admin/Dashboard";
import DashboardByUser from "src/routes/admin/DashboardByUser";
import EditChallenge from "src/routes/admin/EditChallenge";
import EditTraining from "src/routes/admin/EditTraining";
import HomepageSetting from "src/routes/admin/HomepageSetting";
import ManageTraining from "src/routes/admin/ManageTraining";
import Home from "src/routes/Home";
import NotFound from "src/routes/NotFound";
import Notifications from "src/routes/Notifications";
import Scoreboard from "src/routes/Scoreboard";
import SignIn from "src/routes/SignIn";
import SignUp from "src/routes/SignUp";
import Profile from "src/routes/user/Profile";
import Training from "src/routes/user/Training";
import UserRouteLayout from "src/routes/user/UserRouteLayout";

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
            <Route path="training" element={<Training />} />
            <Route path="profile" element={<Profile />} />
          </Route>

          <Route
            path="admin"
            element={<AdminRouteLayout redirectTo="/signin" />}
          >
            <Route index element={<Dashboard />} />
            <Route path="homepagesetting" element={<HomepageSetting />} />

            <Route path="createvm" element={<CreateVM />} />

            <Route path="managetraining" element={<ManageTraining />} />
            <Route path="edittraining">
              <Route index element={<EditTraining />} />
              <Route path=":trainingId" element={<EditTraining />} />
            </Route>
            <Route path="editchallenge">
              <Route index element={<EditChallenge />} />
              <Route path=":trainingId" element={<EditChallenge />} />
            </Route>

            <Route path="dashboard">
              <Route index element={<Dashboard />} />
              <Route path=":userId" element={<DashboardByUser />} />
            </Route>
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default AppRouter;
