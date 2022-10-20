import React, { useState, useState1 } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Layout from "src/components/Layout/Layout";
import "react-pro-sidebar/dist/css/styles.css";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
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
      <MDBContainer fluid>
        <MDBRow className="d-flex justify-content-center align-items-center h-100">
          <MDBCol col="12">
            <MDBCard
              className="bg-dark text-white my-5 mx-auto"
              style={{ borderRadius: "1rem", maxWidth: "400px" }}
            >
              <form onSubmit={onSubmit}>
                <MDBCardBody className="p-5 d-flex flex-column align-items-center mx-auto w-100">
                  <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                  <p className="text-white-50 mb-5">
                    Please enter your ID and Password!
                  </p>

                  <MDBInput
                    onChange={onChange}
                    wrapperClass="mb-4 mx-5 w-100"
                    labelClass="text-white"
                    label="ID"
                    placeholder="ID"
                    name="id"
                    id="formControlLg"
                    type="text"
                    size="lg"
                  />
                  <MDBInput
                    onChange={onChange}
                    wrapperClass="mb-4 mx-5 w-100"
                    labelClass="text-white"
                    label="Password"
                    placeholder="Password"
                    name="pw"
                    id="formControlLg"
                    type="password"
                    size="lg"
                  />

                  <p className="small mb-3 pb-lg-2">
                    <a class="text-white-50" href="#!">
                      Forgot password?
                    </a>
                  </p>

                  <MDBBtn outline className="mx-2 px-5" color="white" size="lg">
                    <p className="text-white-50 mb-5">Login</p>
                  </MDBBtn>

                  <div className="d-flex flex-row mt-3 mb-5">
                    <MDBBtn
                      tag="a"
                      color="white"
                      className="m-3"
                      style={{ color: "white" }}
                    >
                      {<BsFacebook />}
                    </MDBBtn>

                    <MDBBtn
                      tag="a"
                      color="white"
                      className="m-3"
                      style={{ color: "white" }}
                    >
                      {<BsTwitter />}
                    </MDBBtn>

                    <MDBBtn
                      tag="a"
                      color="white"
                      className="m-3"
                      style={{ color: "white" }}
                    >
                      {<BsGoogle />}
                    </MDBBtn>
                    <MDBBtn
                      tag="a"
                      color="white"
                      className="m-3"
                      style={{ color: "white" }}
                    >
                      {<BsGithub />}
                    </MDBBtn>
                  </div>

                  <div>
                    <p className="mb-0">
                      Don't have an account?{" "}
                      <a href="#!" class="text-white-50 fw-bold">
                        Sign Up
                      </a>
                    </p>
                  </div>
                </MDBCardBody>
              </form>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </Layout>
  );
};

export default SignIn;
