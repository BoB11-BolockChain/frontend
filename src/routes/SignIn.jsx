import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Layout from "../components/Layout/Layout";

const SignIn = () => {
  const [state, setState] = useState({ email: "", pw: "" });

  const onChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://www.pdxf.tk/signin", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(state),
    });
    console.log(res);
  };

  //temp function
  const navigate = useNavigate();
  const fastLoggin = () => {
    window.sessionStorage.setItem("sessionId", "fastlogginsession");
    navigate("/admin");
  };

  return (
    <Layout>
      <div>
        <h1>signin</h1>
        <form onSubmit={onSubmit}>
          <input onChange={onChange} name="email" type="text" />
          <input onChange={onChange} name="pw" type="password" />
          <input type="submit" />
        </form>
        <NavLink to="/signup">create account</NavLink>
      </div>
      <button onClick={fastLoggin}>fastloggin</button>
    </Layout>
  );
};

export default SignIn;
