import "src/routes/sign.scss";
import Layout from "src/components/Layout/Layout";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBRow,
  MDBCol,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import { BsFacebook, BsGithub, BsGoogle, BsTwitter } from "react-icons/bs";

function SignUp() {
  const [state, setState] = useState({
    email: "",
    id: "",
    pw: "",
    conpw: "",
  });
  const navigate = useNavigate();

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
    if (res.ok) {
      alert("signup success");
      navigate("/main");
    }
  };
  return (
    <Layout>
      <MDBContainer fluid className="my-5">
        <MDBRow className="g-0 align-items-center">
          <MDBCol col="6">
            <MDBCard
              className="my-5 cascading-right"
              style={{
                background: "hsla(0, 0%, 100%, 0.55)",
                backdropFilter: "blur(30px)",
              }}
            >
              <MDBCardBody className="p-5 shadow-5 text-center">
                <h2 className="fw-bold mb-5">Sign up now</h2>
                <form onSubmit={onSubmit}>
                  <MDBInput
                    onChange={onChange}
                    wrapperClass="mb-4"
                    label="ID"
                    placeholder="dohyun0822"
                    id="form4"
                    type="text"
                  />
                  <MDBInput
                    onChange={onChange}
                    wrapperClass="mb-4"
                    placeholder="example@company.com"
                    label="E-Mail"
                    id="form3"
                    type="email"
                  />

                  <MDBRow>
                    <MDBCol col="6">
                      <MDBInput
                        onChange={onChange}
                        wrapperClass="mb-4"
                        label="Password"
                        placeholder="Password"
                        id="form1"
                        type="Password"
                      />
                    </MDBCol>

                    <MDBCol col="6">
                      <MDBInput
                        onChange={onChange}
                        wrapperClass="mb-4"
                        label="Password Confirm"
                        placeholder="Password"
                        id="form2"
                        type="Password"
                      />
                    </MDBCol>
                  </MDBRow>
                  <div className="d-flex justify-content-center mb-4">
                    <MDBCheckbox
                      name="flexCheck"
                      value=""
                      id="flexCheckDefault"
                      label="Subscribe to our newsletter"
                    />
                  </div>

                  <MDBBtn className="w-100 mb-4" size="md">
                    sign up
                  </MDBBtn>
                </form>
                <div className="text-center">
                  <p>or sign up with:</p>

                  <MDBBtn
                    tag="a"
                    color="none"
                    className="mx-3"
                    style={{ color: "#1266f1" }}
                  >
                    {<BsFacebook />}
                  </MDBBtn>

                  <MDBBtn
                    tag="a"
                    color="none"
                    className="mx-3"
                    style={{ color: "#1266f1" }}
                  >
                    {<BsTwitter />}
                  </MDBBtn>

                  <MDBBtn
                    tag="a"
                    color="none"
                    className="mx-3"
                    style={{ color: "#1266f1" }}
                  >
                    {<BsGoogle />}
                  </MDBBtn>

                  <MDBBtn
                    tag="a"
                    color="none"
                    className="mx-3"
                    style={{ color: "#1266f1" }}
                  >
                    {<BsGithub />}
                  </MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol col="6">
            <img
              src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg"
              class="w-100 rounded-4 shadow-4"
              alt=""
              fluid
            />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </Layout>
  );
}

export default SignUp;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Layout from "src/components/Layout/Layout";
// import ReactiveButton from "reactive-button";

// const SignUp = () => {

//   return (
//     <Layout>
//       <form onSubmit={onSubmit}>
//         <header>
//           <h1>Sign Up</h1>
//         </header>
//         <div>
//           <label>Email :</label>
//           <input
//             onChange={onChange}
//             name="email"
//             placeholder="example@company.com"
//             type="text"
//           />
//         </div>
//         <div>
//           <label> ID :</label>
//           <input onChange={onChange} name="id" placeholder="ID" type="text" />
//           <br />
//           <label>PW :</label>
//           <input
//             onChange={onChange}
//             name="pw"
//             placeholder="Password"
//             type="password"
//           />
//         </div>
//         <div>
//           <label>PW confirm :</label>
//           <input
//             onChange={onChange}
//             name="conpw"
//             placeholder="Password"
//             type="password"
//           />
//         </div>
//         <ReactiveButton type={"submit"} idleText="Submit" />
//         {/* <input type="submit" /> */}
//       </form>
//     </Layout>
//   );
// };

// export default SignUp;
