import React, { useState } from "react";
import Layout from "src/components/Layout/Layout";
import ReactiveButton from "reactive-button";

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
        <header>
          <h1>Sign Up</h1>
        </header>
        <div>
          <label>Email :</label>
          <input
            onChange={onChange}
            name="email"
            placeholder="example@company.com"
            type="text"
          />
        </div>
        <div>
          <label> ID :</label>
          <input onChange={onChange} name="id" placeholder="ID" type="text" />
          <br />
          <label>PW :</label>
          <input
            onChange={onChange}
            name="pw"
            placeholder="Password"
            type="password"
          />
        </div>
        <div>
          <label>PW confirm :</label>
          <input
            onChange={onChange}
            name="conpw"
            placeholder="Password"
            type="password"
          />
        </div>
        <ReactiveButton type={"submit"} idleText="Submit" />
        {/* <input type="submit" /> */}
      </form>
    </Layout>
  );
};

export default SignUp;
