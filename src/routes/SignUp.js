import React, { useState } from "react";

const SignUp = () => {
  const [state, setState] = useState({ email: "", pw: "", pwconfirm: "" });

  const onChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("https://www.pdxf.tk/signup", {
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
    <form onSubmit={onSubmit}>
      <p>your email</p>
      <input
        onChange={onChange}
        name="email"
        placeholder="example@company.com"
        type="text"
      />
      <input
        onChange={onChange}
        name="pw"
        placeholder="Password"
        type="password"
      />
      <input
        onChange={onChange}
        name="pwconfirm"
        placeholder="Password"
        type="password"
      />
      <input type="submit" />
    </form>
  );
};

export default SignUp;
