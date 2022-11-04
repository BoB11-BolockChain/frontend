import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "src/components/Layout/Layout";
import TrainingManagement from "src/routes/admin/TrainingManagement";
import CreateTraining from "src/routes/admin/CreateTraining";
import AdminRouteLayout from "src/routes/admin/AdminRouteLayout";
import Dashboard from "src/routes/admin/Dashboard";
import DashboardById from "src/routes/admin/DashboardById";
import EditTraining from "src/routes/admin/EditTraining";
import HomepageSetting from "src/routes/admin/HomepageSetting";
import Home from "src/routes/Home";
import NotFound from "src/routes/NotFound";
import Notifications from "src/routes/Notifications";
import Scoreboard from "src/routes/Scoreboard";
import SignIn from "src/routes/SignIn";
import SignUp from "src/routes/SignUp";
import Training from "src/routes/user/Training";
import Profile from "src/routes/user/Profile";
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
            <Route path="training" element={<Training />} />
            <Route path="profile" element={<Profile />} />
          </Route>

          <Route
            path="admin"
            element={<AdminRouteLayout redirectTo="/signin" />}
          >
            <Route index element={<Dashboard />} />
            <Route path="homepagesetting" element={<HomepageSetting />} />
            <Route path="edittraining" element={<EditTraining />} />
            <Route path="createtraining" element={<CreateTraining />} />
            <Route path="trainingmanagement" element={<TrainingManagement />}>
              <Route path=":id" element={<EditTraining />} />
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
