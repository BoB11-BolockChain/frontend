import React, { useState } from "react";
import { NavLink } from "react-router-dom";

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

  return (
    <div>
      <h1>signin</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} name="email" type="text" />
        <input onChange={onChange} name="pw" type="password" />
        <input type="submit" />
      </form>
      <NavLink to="/signup" activeClassName="selected">
        create account
      </NavLink>
    </div>
  );
};

export default SignIn;
