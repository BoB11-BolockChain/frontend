import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "./Admin";
import Challenges from "./Challenges";
import EditChallenge from "./EditChallenge";
import Home from "./Home";
import PrivateRouteLayout from "../components/PrivateRouteLayout";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import NotFound from "./NotFound";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="signin" element={<SignIn />}></Route>
        <Route path="signup" element={<SignUp />}></Route>

        <Route
          path="admin"
          element={<PrivateRouteLayout redirectTo="/signin" />}
        >
          <Route index element={<Admin />}></Route>
          <Route path="challenges" element={<Challenges />}></Route>
          <Route path="editchallenge" element={<EditChallenge />}>
            <Route path=":id" element={<EditChallenge />}></Route>
          </Route>
        </Route>

        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
