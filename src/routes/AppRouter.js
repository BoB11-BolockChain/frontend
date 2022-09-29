import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import Admin from "./Admin";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

function AppRouter() {
  return (
    <div className="AppRouter">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={SignIn()}></Route>
          <Route path="/admin" element={Admin()}></Route>
          <Route path="/signup" element={SignUp()}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default AppRouter;
