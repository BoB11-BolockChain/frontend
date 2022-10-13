import React from "react";
import Layout from "src/components/Layout/Layout";
import "src/components/Layout/module.scss";
import { NavLink } from "react-router-dom";
import ReactiveButton from "reactive-button";

const SelectOperation = () => {
  // const [state, setState] = useState("idle");

  // const onClickHandler = () => {
  //   setState("loading");

  //   // send an HTTP request
  //   setTimeout(() => {
  //     setState("success");
  //   }, 2000);
  // };
  return (
    <Layout>
      <main>
        <header>
          <h1>
            <img
              className="PDxF_Logo"
              alt="PDxF Logo"
              src="/img/PDxF_icon.png"
            />
          </h1>
          <p>PDxF Project BoB 11th</p>
        </header>
        <h2>Select Operation</h2>

        <NavLink to="/admin/createchallengesbasic">
          <ReactiveButton idleText="APT Scenario Type 1" />
        </NavLink>
        <br />
        <NavLink to="/admin/createchallengesbasic">
          <ReactiveButton color="secondary" idleText="APT Scenario Type 2" />
        </NavLink>
        <br />
        <NavLink to="/admin/createchallengesbasic">
          <ReactiveButton
            color="violet"
            idleText="APT Network diffusion Scenario"
          />
        </NavLink>
        {/* <ReactiveButton
          buttonState={state}
          idleText="Submit"
          loadingText="Loading"
          successText="Done"
          onClick={onClickHandler}
        /> */}
      </main>
    </Layout>
  );
};

export default SelectOperation;
