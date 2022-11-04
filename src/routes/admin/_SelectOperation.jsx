import { NavLink } from "react-router-dom";
import ReactiveButton from "reactive-button";
import "src/components/Layout/module.scss";

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
    <main>
      <header>
        <h1>
          <img className="PDxF_Logo" alt="PDxF Logo" src="/img/PDxF_icon.png" />
        </h1>
        <p>PDxF Project BoB 11th</p>
      </header>
      <h2>Select Operation</h2>
      <h3>Template : </h3>
      <NavLink to="/admin/createscenario">
        <ReactiveButton idleText="APT Scenario Type 1" />
      </NavLink>
      <br />
      <NavLink to="/admin/createscenario">
        <ReactiveButton color="secondary" idleText="APT Scenario Type 2" />
      </NavLink>
      <br />
      <NavLink to="/admin/createscenario">
        <ReactiveButton
          color="violet"
          idleText="APT Network diffusion Scenario"
        />
      </NavLink>
      <h3>Empty Template : </h3>
      <NavLink to="/admin/createchallenge">
        <ReactiveButton color="violet" idleText="Empty File" />
      </NavLink>
      {/* <ReactiveButton
          buttonState={state}
          idleText="Submit"
          loadingText="Loading"
          successText="Done"
          onClick={onClickHandler}
        /> */}
    </main>
  );
};

export default SelectOperation;
