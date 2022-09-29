import React, { useState } from "react";

const SignIn = () => {
  const [state, setState] = useState({ email: "", pw: "" });

  const onChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("https://www.pdxf.tk/signin", {
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
      <input onChange={onChange} name="email" type="text" />
      <input onChange={onChange} name="pw" type="password" />
      <input type="submit" />
    </form>
  );
};

export default SignIn;
