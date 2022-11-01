import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCheckbox,
  MDBContainer,
  MDBInput,
} from "mdb-react-ui-kit";
import { useState } from "react";
import { BsFacebook, BsGithub, BsGoogle, BsTwitter } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import "src/routes/sign.scss";

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
    <MDBContainer
      fluid
      className="my-5"
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <MDBCard className="my-5 card-body">
        <MDBCardBody className="p-5 shadow-5 text-center">
          <h2 className="fw-bold mb-5 text-uppercase">SIGN UP</h2>
          <form onSubmit={onSubmit}>
            <MDBInput
              onChange={onChange}
              wrapperClass="mb-3"
              placeholder="ID"
              id="form4"
              type="text"
            />
            <MDBInput
              onChange={onChange}
              wrapperClass="mb-3"
              placeholder="Email"
              id="form3"
              type="email"
            />
            <MDBInput
              onChange={onChange}
              wrapperClass="mb-3"
              placeholder="Password"
              id="form1"
              type="Password"
            />
            <MDBInput
              onChange={onChange}
              wrapperClass="mb-3"
              placeholder="Password Confirm"
              id="form2"
              type="Password"
            />
            <div className="d-flex justify-content-center mb-4">
              <MDBCheckbox
                name="flexCheck"
                value=""
                id="flexCheckDefault"
                label="Subscribe to our newsletter"
              />
            </div>

            <MDBBtn className="w-100 mb-4 fw-bold text-uppercase" size="md">
              sign up
            </MDBBtn>
          </form>
          <div className="text-center">
            <p>or sign up with:</p>

            <MDBBtn
              tag="a"
              color="none"
              className="mx-3"
              style={{ color: "#4267b2" }}
            >
              {<BsFacebook />}
            </MDBBtn>
            <MDBBtn
              tag="a"
              color="none"
              className="mx-3"
              style={{ color: "#1da1f2" }}
            >
              {<BsTwitter />}
            </MDBBtn>
            <MDBBtn
              tag="a"
              color="none"
              className="mx-3"
              style={{ color: "#ea4335" }}
            >
              {<BsGoogle />}
            </MDBBtn>
            <MDBBtn
              tag="a"
              color="none"
              className="mx-3"
              style={{ color: "#211f1f" }}
            >
              {<BsGithub />}
            </MDBBtn>
          </div>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default SignUp;
