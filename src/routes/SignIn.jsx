import React, { useState, useState1 } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Layout from "src/components/Layout/Layout";
import "react-pro-sidebar/dist/css/styles.css";
import ReactiveButton from "reactive-button";

const SignIn = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({ id: "", pw: "" });

  const onChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://www.pdxf.tk:8000/signin", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(state),
    });
    const js = await res.json();
    console.log(js);
    window.sessionStorage.setItem("sessionId", js.sessionId);
    navigate("/admin");
  };

  //temp function
  const fastLoggin = () => {
    window.sessionStorage.setItem("sessionId", "fastlogginsession");
    navigate("/admin");
  };

  const [load_state, load_setState] = useState("idle");

  const onClickHandler = () => {
    load_setState("loading");

    setTimeout(() => {
      load_setState("success");
      window.sessionStorage.setItem("sessionId", "fastlogginsession");
      navigate("/admin");
    }, 2000);
  };

  return (
    <>
      <Layout>
        <div>
          <header>
            <h1>signin</h1>
          </header>
          <form onSubmit={onSubmit}>
            <input onChange={onChange} name="id" type="text" />
            <input onChange={onChange} name="pw" type="password" />

            <ReactiveButton color="violet" type={"submit"} idleText="Submit" />
          </form>
          <NavLink to="/signup">
            <ReactiveButton color="dark" idleText="Create Account" />
          </NavLink>
        </div>
        {/* <ReactiveButton onClick={fastLoggin} idleText="fastloggin" /> */}

        <ReactiveButton
          buttonState={load_state}
          idleText="fastloggin"
          loadingText="Loading"
          successText="Done"
          onClick={onClickHandler}
        />
      </Layout>
    </>
  );
};

export default SignIn;
