import { useState } from "react";
import { BsFacebook, BsGithub, BsGoogle, BsTwitter } from "react-icons/bs";
import "react-pro-sidebar/dist/css/styles.css";
import { useNavigate } from "react-router-dom";
import "src/routes/sign.scss";

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

  return (
    <div className="card-body">
      <h2 className="card-title">SIGN IN</h2>
      <form onSubmit={onSubmit}>
        <div className="input-container">
          <input
            type="text"
            onChange={onChange}
            id="id"
            name="id"
            aria-labelledby="placeholder-id"
            required
          />
          <label className="placeholder-text" for="id" id="placeholder-id">
            <div className="text">ID</div>
          </label>
        </div>
        <div className="input-container">
          <input
            type="password"
            onChange={onChange}
            id="pw"
            name="pw"
            aria-labelledby="placeholder-pw"
            required
          />
          <label className="placeholder-text" for="pw" id="placeholder-pw">
            <div className="text">Password</div>
          </label>
        </div>

        <p>
          <a className="forgot-pw" href="#!">
            Forgot Password?
          </a>
        </p>
        <button className="submit-btn" size="md">
          sign in
        </button>

        <div className="signin-platform">
          <p>or sign in with:</p>
          <table className="icon-table">
            <tr>
              <td>
                <button
                  tag="a"
                  color="none"
                  className="mx-3"
                  style={{ color: "#4267b2" }}
                >
                  {<BsFacebook />}
                </button>
              </td>
              <td>
                <button
                  tag="a"
                  color="none"
                  className="mx-3"
                  style={{ color: "#1da1f2" }}
                >
                  {<BsTwitter />}
                </button>
              </td>
              <td>
                <button
                  tag="a"
                  color="none"
                  className="mx-3"
                  style={{ color: "#ea4335" }}
                >
                  {<BsGoogle />}
                </button>
              </td>
              <td>
                <button
                  tag="a"
                  color="none"
                  className="mx-3"
                  style={{ color: "#211f1f" }}
                >
                  {<BsGithub />}
                </button>
              </td>
            </tr>
          </table>
        </div>

        <div className="account">
          <p>
            Don't have an account?{" "}
            <a href="#!" className="signup">
              Sign Up
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
