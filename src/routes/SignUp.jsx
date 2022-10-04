import React, { useState } from "react";
import Layout from "../components/Layout/Layout";

const SignUp = () => {
  const [state, setState] = useState({
    email: "",
    id: "",
    pw: "",
    conpw: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://www.pdxf.tk:8000/signup", {
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
    <Layout>
      <form onSubmit={onSubmit}>
        <p>Sign Up</p>
        <input
          onChange={onChange}
          name="email"
          placeholder="example@company.com"
          type="text"
        />
        <input onChange={onChange} name="id" placeholder="ID" type="text" />
        <input
          onChange={onChange}
          name="pw"
          placeholder="Password"
          type="password"
        />
        <input
          onChange={onChange}
          name="conpw"
          placeholder="Password"
          type="password"
        />
        <input type="submit" />
      </form>
    </Layout>
  );
};

export default SignUp;
