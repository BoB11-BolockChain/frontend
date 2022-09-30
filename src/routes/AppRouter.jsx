import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Admin from "./Admin";
import Challenges from "./Challenges";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const AppRouter = () => {
  return (
    <div className="AppRouter">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={SignIn()}></Route>
          <Route path="/admin" element={Admin()}></Route>
          <Route path="/signup" element={SignUp()}></Route>
          <Route path="/challenges" element={Challenges()}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
