import React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import logo from "../../img/ilogo.png";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="signup">
       <div className="log_logo">
        <Link to="/">
          <img src={logo} alt="Infinity Media"/>
        </Link>
      </div>
      <div className="container">
        <form
          id="signup_form"
          action="http://localhost:3000/api/imedia-login"
          method="POST"
          className="form"
        >
          <div className="input_container">
            <label htmlFor="log">Username</label>
            <input className="input" type="text" name="log" />
          </div>
          <div className="input_container">
            <label htmlFor="email">Email Address</label>
            <input className="input" type="email" name="email" />
          </div>
          <div className="password input_container">
            <label htmlFor="password">Password</label>
            <input
              className="input"
              type="password"
              name="password"
              autoComplete="on"
            />
            <VisibilityIcon className="password_visibility" fontSize="small" />
          </div>

          <button className="btn">Sign Up</button>
        </form>
        <p className="existing">Already have an existing account? <span><Link to="/imedia-login">Sign In</Link></span></p>
      </div>
    </div>
  );
};

export default SignUp;
