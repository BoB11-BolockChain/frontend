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
      navigate("/Home");
    } else if (!res.ok) throw new Error(res);
  };
  return (
    <>
      <div className="card-body">
        <h2 className="card-title">SIGN UP</h2>
        <form onSubmit={onSubmit}>
          <div className="input-container">
            <input type="text" onChange={onChange} id="id" name="id" aria-labelledby="placeholder-id" required />
            <label className="placeholder-text" for="id" id="placeholder-id">
              <div className="text">ID</div>
            </label>
          </div>
          <div className="input-container">
            <input type="text" onChange={onChange} id="email" name="email" aria-labelledby="placeholder-email" required />
            <label className="placeholder-text" for="email" id="placeholder-email">
              <div className="text">Email</div>
            </label>
          </div>
          <div className="input-container">
            <input type="password" onChange={onChange} id="pw" name="pw" aria-labelledby="placeholder-pw" required />
            <label className="placeholder-text" for="pw" id="placeholder-pw">
              <div className="text">Password</div>
            </label>
          </div>
          <div className="input-container">
            <input type="password" onChange={onChange} id="conpw" name="conpw" aria-labelledby="placeholder-conpw" required />
            <label className="placeholder-text" for="conpw" id="placeholder-conpw">
              <div className="text">Password Confirm</div>
            </label>
          </div>
              <div>
              <input type="checkbox" name="news" value="" />Subscribe to our newsletter
              </div>
          <button className="submit-btn" size="md">
            sign up
          </button>
        </form>
        <div className="signin-platform">
          <p>or sign up with:</p>
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
      </div>
    </>
  );
}

export default SignUp;
