import "src/routes/sign.scss";
import React, { useState, useState1 } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Layout from "src/components/Layout/Layout";
import "react-pro-sidebar/dist/css/styles.css";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from "mdb-react-ui-kit";
import { BsFacebook, BsGithub, BsGoogle, BsTwitter } from "react-icons/bs";

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
    <Layout>
      <MDBContainer fluid className="my-5"
        style={{
          display: "flex",
          justifyContent: "center",
        }}>
        <MDBCard className="my-5 card-body">
          <MDBCardBody className="p-5 shadow-5 text-center">
            <h2 className="fw-bold mb-5 text-uppercase">SIGN IN</h2>
            <form onSubmit={onSubmit}>
              <MDBInput
                onChange={onChange}
                wrapperClass="mb-3"
                placeholder="ID"
                name="id"
                id="formControlLg"
                type="text"
              />
              <MDBInput
                onChange={onChange}
                wrapperClass="mb-3"
                placeholder="Password"
                name="pw"
                id="formControlLg"
                type="password"
              />

              <p className="small mb-3 pb-lg-2">
                <a class="text-black-50" href="#!">
                  Forgot password?
                </a>
              </p>
              <MDBBtn className="w-100 mb-4 fw-bold text-uppercase" size="md">
                sign in
              </MDBBtn>

              <div className="text-center mb-4">
                <p>or sign in with:</p>

                <MDBBtn tag="a" color="none" className="mx-3"
                  style={{ color: "#4267b2" }}>
                  {<BsFacebook />}
                </MDBBtn>
                <MDBBtn tag="a" color="none" className="mx-3"
                  style={{ color: "#1da1f2" }}>
                  {<BsTwitter />}
                </MDBBtn>
                <MDBBtn tag="a" color="none" className="mx-3"
                  style={{ color: "#ea4335" }}>
                  {<BsGoogle />}
                </MDBBtn>
                <MDBBtn tag="a" color="none" className="mx-3"
                  style={{ color: "#211f1f" }}>
                  {<BsGithub />}
                </MDBBtn>
              </div>

              <div>
                <p>Don't have an account?{" "}
                  <a href="#!" class="text-black-50 fw-bold text-uppercase">
                    Sign Up
                  </a>
                </p>
              </div>
            </form>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </Layout>
  );
};

export default SignIn;
