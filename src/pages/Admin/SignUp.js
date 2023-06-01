import React, { useRef, useState } from "react";
import logo from "../../img/ilogo.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { Visibility, VisibilityOffOutlined } from "@mui/icons-material";
// import Spinner from "../../components/Spinner"

const SignUp = () => {
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirm_passwordRef = useRef();

  const [open, setOpen] = useState(false);
  const [openCon, setOpenCon] = useState(false);

  const handleSignUp = async (e) => {
    e.preventDefault();
    const username = usernameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirm_password = confirm_passwordRef.current.value;

    try {
      const res = await axios.post(
        "http://localhost:5000/api/imedia-auth/register",
        {
          username,
          email,
          password,
          confirm_password,
        }
      );

      console.log(username);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePassword = (dir) => {
    if (dir === "con") {
      return setOpenCon(!openCon);
    }
    if (dir === "pass") {
      return setOpen(!open);
    }
  };

  return (
    <div className="signup">
      <div className="log_logo">
        <Link to="/">
          <img src={logo} alt="Infinity Media" />
        </Link>
      </div>
      <div className="container">
        <form
          id="signup_form"
          // action="http://localhost:5000/api/imedia-auth/register"
          // method="POST"
          className="form"
          onSubmit={handleSignUp}
        >
          <div className="input_container">
            <label htmlFor="username">Username</label>
            <input
              className="input"
              type="text"
              name="username"
              id="username"
              ref={usernameRef}
            />
          </div>
          <div className="input_container">
            <label htmlFor="email">Email Address</label>
            <input
              className="input"
              type="email"
              name="email"
              id="email"
              ref={emailRef}
            />
          </div>
          <div className="password input_container">
            <label htmlFor="password">Password</label>
            <input
              className="input"
              type={open ? "text" : "password"}
              name="password"
              id="password"
              ref={passwordRef}
              autoComplete="on"
            />
            <div onClick={() => handlePassword("pass")}>
              {open ? (
                <VisibilityOffOutlined
                  className="password_visibility"
                  fontSize="small"
                />
              ) : (
                <Visibility className="password_visibility" fontSize="small" />
              )}
            </div>
          </div>
          <div className="password input_container">
            <label htmlFor="confirm_password">Confirm Password</label>
            <input
              className="input"
              type={openCon ? "text" : "password"}
              name="confirm_password"
              id="confirm_password"
              autoComplete="on"
              ref={confirm_passwordRef}
            />
            <div onClick={() => handlePassword("con")}>
              {openCon ? (
                <VisibilityOffOutlined
                  className="password_visibility"
                  fontSize="small"
                />
              ) : (
                <Visibility className="password_visibility" fontSize="small" />
              )}
            </div>
          </div>

          <button className="btn" type="submit">
            Sign Up
          </button>
        </form>
        <p className="existing">
          Already have an existing account?{" "}
          <span>
            <Link to="/imedia-admin/login">Sign In</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
